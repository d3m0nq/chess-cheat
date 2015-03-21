///////////////////////////////////////////////////
// The qcodo Object is used for everything in Qcodo
///////////////////////////////////////////////////
	var qcodo = {

		recordControlModification: function (strControlId, strProperty, strNewValue) {
			if (!qcodo.controlModifications[strControlId])
				qcodo.controlModifications[strControlId] = new Object;
			qcodo.controlModifications[strControlId][strProperty] = strNewValue;
		},

		postBack: function(strForm, strControl, strEvent, strParameter) {
			var strForm = $j("#Qform__FormId").attr("value");
			var objForm = $j('#' + strForm);

			$j('#Qform__FormControl').attr("value", strControl);
			$j('#Qform__FormEvent').attr("value", strEvent);
			$j('#Qform__FormParameter').attr("value", strParameter);
			$j('#Qform__FormCallType').attr("value", "Server");
			$j('#Qform__FormUpdates').attr("value", this.formUpdates());
			$j('#Qform__FormCheckableControls').attr("value", this.formCheckableControls(strForm, "Server"));

			// have $j trigger the submit event (so it can catch all submit events)
			objForm.trigger("submit");
		},

		formUpdates: function() {
			var strToReturn = "";
			for (var strControlId in qcodo.controlModifications)
				for (var strProperty in qcodo.controlModifications[strControlId])
					strToReturn += strControlId + " " + strProperty + " " + qcodo.controlModifications[strControlId][strProperty] + "\n";
			qcodo.controlModifications = new Object;
			return strToReturn;
		},

		formCheckableControls: function(strForm, strCallType) {

			// Select the qcodo Form
			var objFormElements = $j('#' + strForm + ' input[type=checkbox], #' + strForm + ' input[type=radio]');
			var strToReturn = "";

			objFormElements.each(function(i) {
				if ( strCallType == "Ajax" || !$j(this).attr("disabled") ) {
					var strControlId = $j(this).attr("id");

					// CheckBoxList: strip out array notation to get list ID
					if (strControlId.indexOf('[') >= 0) {
						strControlId = strControlId.substring(0, strControlId.indexOf('['));
					}
					// RadioButton: strip out underscore input ID to get list ID
					if (strControlId.indexOf('_') >= 0) {
						strControlId = strControlId.substring(0, strControlId.indexOf('_'));
					}

					// RadioButton or CheckBox: only add once
					if ( ! strToReturn.match(new RegExp('\\b'+ strControlId +'\\b')))
						strToReturn += " " + strControlId;
				}
			});

			if (strToReturn.length > 0)
				return strToReturn.substring(1);
			else
				return "";
		},

		postAjax: function(strForm, strControl, strEvent, strParameter, strWaitIconControlId) {
			var objForm = $j('#' + strForm);
			var strFormAction = objForm.attr("action");
			var objFormElements = $j('#' + strForm + ' input,#' + strForm + ' select,#' + strForm + ' textarea');

			$j('#Qform__FormControl').attr("value", strControl);
			$j('#Qform__FormEvent').attr("value", strEvent);
			$j('#Qform__FormParameter').attr("value", strParameter);
			$j('#Qform__FormCallType').attr("value", "Ajax");
			$j('#Qform__FormUpdates').attr("value", this.formUpdates());
			$j('#Qform__FormCheckableControls').attr("value", this.formCheckableControls(strForm, "Ajax"));

			var strPostData = '';

			objFormElements.each(function () {
				var strType = this.type;
				var strControlId = $j(this).attr("id");
				switch (strType) {
					case "checkbox":
					case "radio":
						if (this.checked) {
							var strTestName = $j(this).attr("name") + "_";
							if (strControlId.substring(0, strTestName.length) == strTestName)
								strPostData += "&" + $j(this).attr("name") + "=" + strControlId.substring(strTestName.length);
							else
								strPostData += "&" + strControlId + "=" + $j(this).val();
						};
						break;

					case "select-multiple":
						$j(this).find(':selected').each (function (i) {
							strPostData += "&" + $j(this).parents("select").attr("name") + "=";
							strPostData += $j(this).val();
						});
						break;

					default:
						strPostData += "&" + strControlId + "=";

						// For Internationalization -- we must escape the element's value properly
						var strPostValue = $j(this).val();
						if (strPostValue) {
							strPostValue = strPostValue.replace(/\%/g, "%25");
							strPostValue = strPostValue.replace(/&/g, escape('&'));
							strPostValue = strPostValue.replace(/\+/g, "%2B");
						}
						strPostData += strPostValue;
						break;
				}
			});

			if (strWaitIconControlId) {
				this.objAjaxWaitIcon = this.getControl(strWaitIconControlId);
				if (this.objAjaxWaitIcon)
					this.objAjaxWaitIcon.style.display = "inline";
			};

			$j.ajax({
				url: strFormAction,
				type: "POST",
				data: strPostData,
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					if (XMLHttpRequest.status != 0 || XMLHttpRequest.responseText.length > 0) {

// remote log the error [2009-05-27:bpc]
if (window.bugReport && bugReport.submitReport) {
  page_key = location.href.substring(10).replace(/.*?\/([\w\/\-]+).*/, '$1').replace(/[^\w]/, '-');
  bugReport.submitReport('qcodo-ajax_'+ page_key, 'An error occurred during AJAX Response parsing. Server response is:\r\n'+ XMLHttpRequest.responseText);
}
						alert("An error occurred during AJAX Response parsing.\r\n\r\nThe error response will appear in a new popup.");
						var objErrorWindow = window.open('about:blank', 'qcodo_error','menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes,width=1000,height=700,left=50,top=50');
						objErrorWindow.focus();
						objErrorWindow.document.write(XMLHttpRequest.responseText);
						return;
					}
				},
				success: function (json) {
						if (json.controls){
							$j.each(json.controls, function(index, value) {
								if (value != null){
									var strControlId = '#' + value.id;
									var strControlHtml = value.data;
									if (strControlId == "#Qform__FormState") {
										$j(strControlId).val(strControlHtml);
									} else {
										if ($j(strControlId).length){
											$j(strControlId).replaceWith(strControlHtml);
										} else {
											$j(strControlId + '_ctl').replaceWith(strControlHtml);
										}
									}
								}
							});
						}
					eval(json.commands);
					if (qcodo.objAjaxWaitIcon)
						qcodo.objAjaxWaitIcon.style.display = 'none';
				}
			});

		},

		initialize: function() {

			this.loadJavaScriptFile = function(strScript, objCallback) {
				strScript = qc.jsAssets + "/" + strScript;
				$j.getScript(strScript, objCallback);
			};

			this.loadStyleSheetFile = function(strStyleSheetFile, strMediaType) {
				strStyleSheetFile = qc.cssAssets + "/" + strStyleSheetFile;

				$j('head').append('<link rel="stylesheet" href="' + strStyleSheetFile + '" type="text/css" />');

			};

      this.registerForm = function() {
        // "Lookup" the QForm's FormId
        var strFormId = document.getElementById("Qform__FormId").value;

        // Register the Various Hidden Form Elements needed for QForms
        this.registerFormHiddenElement("Qform__FormControl", strFormId);
        this.registerFormHiddenElement("Qform__FormEvent", strFormId);
        this.registerFormHiddenElement("Qform__FormParameter", strFormId);
        this.registerFormHiddenElement("Qform__FormCallType", strFormId);
        this.registerFormHiddenElement("Qform__FormUpdates", strFormId);
        this.registerFormHiddenElement("Qform__FormCheckableControls", strFormId);
      };

      this.registerFormHiddenElement = function(strId, strFormId) {
        var objHiddenElement = document.createElement("input");
        objHiddenElement.type = "hidden";
        objHiddenElement.id = strId;
        objHiddenElement.name = strId;
        document.getElementById(strFormId).appendChild(objHiddenElement);
      };


      /////////////////////////////
      // QForm-related functionality
      /////////////////////////////

	  this.controls = new Array();

      ////////////////////////////////////
      // Window Unloading
      ////////////////////////////////////

      this.unloadFlag = false;
      this.handleBeforeUnload = function() {
        qcodo.unloadFlag = true;
      };
      window.onbeforeunload = this.handleBeforeUnload;

      ////////////////////////////////////
      // Mouse Drag Handling Functionality
      ////////////////////////////////////
      // removed since jquery integration

		}
	};

///////////////////////////////
// Timers-related functionality
///////////////////////////////

		qcodo._objTimers = new Object();

		qcodo.clearTimeout = function(strTimerId) {
			if (qcodo._objTimers[strTimerId]) {
				clearTimeout(qcodo._objTimers[strTimerId]);
				qcodo._objTimers[strTimerId] = null;
			};
		};

		qcodo.setTimeout = function(strTimerId, strAction, intDelay) {
			qcodo.clearTimeout(strTimerId);
			qcodo._objTimers[strTimerId] = setTimeout(strAction, intDelay);
		};

/////////////////////////////////////
// Event Object-related functionality
/////////////////////////////////////

qcodo.terminateEvent = function(objEvent) {
    if (objEvent) {
      // Stop Propogation
      if (objEvent.preventDefault)
        objEvent.preventDefault();
      if (objEvent.stopPropagation)
        objEvent.stopPropagation();
      objEvent.cancelBubble = true;
      objEvent.returnValue = false;
    };

    return false;
  };

/////////////////////////////////
// Controls-related functionality
/////////////////////////////////

	qcodo.getControl = function(mixControl) {
		if (typeof(mixControl) == 'string')
			return document.getElementById(mixControl);
		else
			return mixControl;
	};

	qcodo.getWrapper = function(mixControl) {
		return this.getControl(mixControl);
	};



/////////////////////////////
// Register Control - General
/////////////////////////////

	qcodo.controlModifications = new Object;
	qcodo.javascriptStyleToQcodo = new Object;
	qcodo.javascriptStyleToQcodo["backgroundColor"] = "BackColor";
	qcodo.javascriptStyleToQcodo["borderColor"] = "BorderColor";
	qcodo.javascriptStyleToQcodo["borderStyle"] = "BorderStyle";
	qcodo.javascriptStyleToQcodo["border"] = "BorderWidth";
	qcodo.javascriptStyleToQcodo["height"] = "Height";
	qcodo.javascriptStyleToQcodo["width"] = "Width";
	qcodo.javascriptStyleToQcodo["text"] = "Text";

	qcodo.javascriptStyleToQcodo["position"] = "Position";
	qcodo.javascriptStyleToQcodo["top"] = "Top";
	qcodo.javascriptStyleToQcodo["left"] = "Left";

	qcodo.recordControlModification = function(strControlId, strProperty, strNewValue) {
		if (!qcodo.controlModifications[strControlId])
			qcodo.controlModifications[strControlId] = new Object;
		qcodo.controlModifications[strControlId][strProperty] = strNewValue;
	};

	qcodo.registerControl = function(mixControl) {
		var objControl;
		objControl = qcodo.getControl(mixControl);

		if(!objControl) return;

		// Add the wrapper to the global qcodo wrappers array
		qcodo.controls[objControl.id] = objControl;
	};

	qcodo.registerControlArray = function(mixControlArray) {
		var intLength = mixControlArray.length;
		for (var intIndex = 0; intIndex < intLength; intIndex++)
			qcodo.registerControl(mixControlArray[intIndex]);
	};


////////////////////////////////
// Qcodo Shortcut and Initialize
////////////////////////////////

	var qc = qcodo;
	qc.initialize();

	qc.pB = qcodo.postBack;
	qc.pA = qcodo.postAjax;

	qc.getC = qcodo.getControl;
	qc.getW = qcodo.getWrapper;
	qc.regC = qcodo.registerControl;
	qc.regCA = qcodo.registerControlArray;

// Attach the formstate and id to the form
$j(document).ready(function() {
  var strFormId = $j('#Qform__FormId').val();
  $j('#' + strFormId).append($j('#qcodo-state-id'));
});