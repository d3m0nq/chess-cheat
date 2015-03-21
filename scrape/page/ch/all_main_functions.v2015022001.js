var BODY_EL = document.getElementsByTagName('body')[0];
function addToOnLoad (fn) {
  var prevonload = window.onload;
  if (typeof prevonload != 'function') {
    window.onload = fn;
  } else {
    window.onload = function() {
      if (prevonload) {
        prevonload.call(window, []);
      }
      fn.call(window, []);
    }
  }
};
var domReady = {
  queue : [],
  fired : false,

  add : function (fn) {
    if (domReady.fired) fn.call(window, []);
    else domReady.queue.push(fn);
  },

  exec : function () {
    var fn = null;
    while (fn = domReady.queue.shift()) {
      fn.call(window, []);
    }
    domReady.fired = true;
  },

  check : function () {
    if (domReady.fired) return;

    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", domReady.exec, false);
    }

    var ua = navigator.userAgent.toLowerCase();
    if (/webkit/.test(ua)) {
      if (document.readyState == "loaded" || document.readyState == "complete") {
        if (domReady.numStyles === undefined) {
          domReady.numStyles = 0;
          var links = document.getElementsByTagName("link");
          for (var i=0; i < links.length; i++) {
            if(links[i].getAttribute('rel') == 'stylesheet') {
              domReady.numStyles++;
            }
          }
          var styles = document.getElementsByTagName("style");
          domReady.numStyles += styles.length;
        }
        if (document.styleSheets.length == domReady.numStyles) {
          domReady.exec();
          return;
        }
      }
    } else if (/msie/.test(ua) && window == top) {
      (function () {
        if (domReady.fired) return;
        try {
          document.documentElement.doScroll("left");
        } catch(error) {
          setTimeout(arguments.callee, 0);
          return;
        }
        domReady.exec();
      })();
    }
  }
}
setTimeout(domReady.check, 10);
addToOnLoad(domReady.exec);

jQuery().ready(function() {
    jQuery(".message-delete").live("click", function() {
        jQuery(this).parent("li").find(".dialog-delete").show();
        return false;
    });
    jQuery("html").click(function(e) {
        if (jQuery(e.target).closest(".dialog-delete").length == 0) {
            jQuery(".dialog-delete:visible").hide();
        }
    });
});

function displaySpinner(controlId) {
    document.getElementById(controlId).innerHTML = "<span class='checkbox-sprite spinner-14'></span>";
}

// test the onload vs domReady timing
// var start = (new Date()).getTime();
// addToOnLoad(function () { log.push(((new Date()).getTime() - start) +' addToOnLoad'); } );
// domReady.add(function () { log.push(((new Date()).getTime() - start) +' domReady'); } );
// var log = [((new Date()).getTime() - start) +' immediate'];
// addToOnLoad(function () { alert(log.join("\n")); } );

var Menus = {
  initialize : function(tabsElement) {
    if (document.all&&document.getElementById) {
      navRoot = tabsElement ? tabsElement : document.getElementById("tabs");
    if (navRoot.childNodes)
      for (i=0; i<navRoot.childNodes.length; i++) {
      node = navRoot.childNodes[i];
      if (node.nodeName=="LI") {
        node.onmouseover=function() {
        this.className+=" over";
        }
        node.onmouseout=function() {
          this.className=this.className.replace(" over", "");
        }
      }
      }
    }
  }
}
if (document.getElementById("tabs")) {
  Menus.initialize();
} else {
  domReady.add(Menus.initialize);
}

function checkForEnter(inField, e) {
  var charCode;

  if(e && e.which) {
    charCode = e.which;
  } else if(window.event){
    e = window.event;
    charCode = e.keyCode;
  }

  if(charCode == 13) {
    return true;
  }
  return false;
}

function doSearch() {
  document.location.href='/search_redirect?q=' + document.getElementById('global_search_q').value;
  return false;
}

function hideshow(szDivID, iState) // 1 visible, 0 hidden
{
   var obj = document.layers ? document.layers[szDivID] :
   document.getElementById ?  document.getElementById(szDivID).style :
   document.all[szDivID].style;
   obj.visibility = document.layers ? (iState ? "show" : "hide") : (iState ? "visible" : "hidden");
   if(iState == 2) {
     obj.display = 'inline';
   } else if(iState == 1) {
     obj.display = 'block';
   } else {
     obj.display = 'none';
   }
}


function deleteValidate(objForm, message, url) {
  if(confirm(message)) {
    document.location.href=url;
  }
}

function confirmDelete(message, url) {
  if(confirm(message)) {
    document.location.href=url;
  }
}

function newWindow(a_str_windowURL, a_str_windowName, a_int_windowWidth, a_int_windowHeight, a_bool_scrollbars, a_bool_resizable, a_bool_menubar, a_bool_toolbar, a_bool_addressbar, a_bool_statusbar, a_bool_fullscreen) {
  var int_windowLeft = (screen.width - a_int_windowWidth) / 2;
  var int_windowTop = (screen.height - a_int_windowHeight) / 2;
  var str_windowProperties = 'height=' + a_int_windowHeight + ',width=' + a_int_windowWidth + ',top=' + int_windowTop + ',left=' + int_windowLeft + ',scrollbars=' + a_bool_scrollbars + ',resizable=' + a_bool_resizable + ',menubar=' + a_bool_menubar + ',toolbar=' + a_bool_toolbar + ',location=' + a_bool_addressbar + ',statusbar=' + a_bool_statusbar + ',fullscreen=' + a_bool_fullscreen + '';
  var obj_window = window.open(a_str_windowURL, a_str_windowName, str_windowProperties)
    if (parseInt(navigator.appVersion) >= 4) {
      obj_window.window.focus();
    }
}

function popEmailWindow() {
  newWindow('/home/read_email','Chesscom_ReadEmail',1000,800,0,1,0,0,0,0,0);
}

var fixAdFixed = false;
var fixAd = function () {
  if (fixAdFixed) return;
  try {//alert('fixing (was fixed? '+ fixAdFixed +')');
    var elObject = document.getElementById('main').getElementsByTagName('object')[0];
    if (elObject) {
      if (elObject.outerHTML) { // IE doesn't like replacing innerHTML, and gums up FlashVars with outerHTML
        if(elObject.data) {
          elObject.removeAttribute('data');
        }
        var strFlashVars, blnWmodePresent;
        var elsParam = elObject.getElementsByTagName("param");
        for (var xx=0, elParam=null; elParam = elsParam[xx]; xx++) {
          if(elParam.name.toLowerCase() == 'flashvars'){
            strFlashVars = elParam.value;
          }
          if(elParam.name.toLowerCase() == 'wmode'){
            blnWmodePresent = true;
          }
        }
        if (strFlashVars) {
          var strOuterHTML = elObject.outerHTML.replace(/<param[^>]*name="FlashVars"[^>]*>/ig, "<param name='FlashVars' value='" + strFlashVars + "'>");
        } else {
          var strOuterHTML = elObject.outerHTML;
        }
        if (blnWmodePresent) {
          strOuterHTML = strOuterHTML.replace(/<param[^>]*name="WMode"[^>]*>/ig, "<PARAM NAME='WMode' VALUE='Transparent'>");
        } else {
          strOuterHTML = strOuterHTML.replace(/<\/object>/i, '<PARAM NAME="WMode" VALUE="Transparent"><\/OBJECT>');
        }
        strOuterHTML = strOuterHTML.replace(/<embed[^>]+>/,'');
        elObject.outerHTML = strOuterHTML;
      } else {
        var newHTML = elObject.innerHTML;
        if (
            /param\s+name="wmode"\s+value="transparent"/i.test(newHTML)
          ||
            /param\s+value="transparent"\s+name="wmode"/i.test(newHTML)
        ) {
          fixAdFixed = true;
          return;  // our work is done here
        }
        newHTML = newHTML.replace(/(<embed.*?")(\s*\/?>)/i, '<param name="wmode" value="transparent"/>$1 wmode="transparent"$2');
        elObject.innerHTML = newHTML;
      }
    }
    fixAdFixed = true;
  } catch (err) {
    fixAdFixed = true;
  }
}
// no longer used, and interfering with video playback:
// domReady.add( function () {
//     var el = document.getElementById('navborder');
//     if (el) el.onmouseover = fixAd;
//   });



var adReport = {
  init : function () {
    var divs = document.getElementsByTagName('div');
    for (var x=0, div=null; div=divs[x]; x++) {
      if ( /\bwebmeta\b/.test(div.className) ) {
        var trg = div.getElementsByTagName('span');
        if (trg.length == 1) {
          adReport.addReportLink(trg[0], x);
        }
      }
    }
  },

  addReportLink : function (el, uniq) {
    if (el.parentNode.parentNode.id) {
      var host_id = el.parentNode.parentNode.id;
    } else {
      var host_id = 'ad_report_host_no'+ uniq;
      el.parentNode.parentNode.id = host_id;
    }
    var self_id = 'ad_report_self_no'+ uniq;
    el.innerHTML += ' &nbsp; | &nbsp; <a id="'+ self_id +'" href="javascript:/* report the ad */" onclick="adReport.submitReport(this, \''+ host_id +'\');">Report</a>';
  },


  submitReport : function (el, host_id) {
    var ad = document.getElementById(host_id);
    var currentHTML = ad.innerHTML;

    var pageLocation = [];
    var ad_ancestor = ad;
    while ( ad_ancestor = ad_ancestor.parentNode ) {
      pageLocation.push(ad_ancestor);
    }

    for (var node = 0; node<pageLocation.length; node++) {
      if (pageLocation[node].id) {
        pageLocation[node] = pageLocation[node].nodeName.toLowerCase() +'#'+ pageLocation[node].id;
      } else if (pageLocation[node].className) {
        pageLocation[node] = pageLocation[node].nodeName.toLowerCase() +'.'+ pageLocation[node].className.replace(/\s+/, '.');
      } else {
        pageLocation[node] = pageLocation[node].nodeName.toLowerCase();
      }
    }
    var comment = false;
    if (null !== (comment = prompt('Would you like to add a comment?\n\nPlease let us know what product the ad is for, and why you are reporting the ad.', ''))) {
      var msg = document.createElement('em');
      msg.innerHTML = 'reporting...';
      msg.id = el.id;
      el.parentNode.replaceChild(msg, el);

      var post_data = [];
      var post_obj = {
          page:location.href,
          client_time:new Date(),
          comment:comment,
          node_path:pageLocation.reverse().join(' > '),
          html:currentHTML
        };
      for (var key in post_obj) {
        post_data.push(key +'='+ escape(post_obj[key]));
      }
      var params = post_data.join('&');

      var request = null;
      try {
        request = new XMLHttpRequest();
      } catch (ex) {
        try {
          request = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (ex) {
          try {
            request = new ActiveXObject('Microsoft.XMLHTTP');
          } catch (ex) {
            request = null;
          }
        }
      }

      if (request == null) return null;

      request.onreadystatechange = function (el, ad) {
        return function() {
          switch (request.readyState) {
            case 4:
              adReport.reportSuccess(el, ad);
              break;
          }
        };
      }(msg, ad);

      request.open("POST", '/api/report_ad', true);
      request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      request.setRequestHeader("Content-length", params.length);
      request.setRequestHeader("Connection", "close");
      request.send(params);
    } else {
      alert('OK. No report submitted.');
    }
  },

  reportSuccess : function (el, ad) {
    el.innerHTML = '<strong style="color:#c44;">Ad flagged.</strong>';
    window['timer'+ ad.id] = setInterval(
        function (ad) {
          var op = 240;
          return function () {
            op -= 4;
            if (op < 100) {
              ad.style.opacity = op / 100;
              ad.style.MozOpacity = op / 100;
              ad.style.KHTMLOpacity = op / 100;
              if (ad.filters && !ad.filters.alpha) // if this hasn't been declared yet as a style, it's not a filter object
                ad.style.filter += ' alpha(opacity='+ op +')'; // append to prevent overwriting previous filters
              if (ad.filters && ad.filters.length && ad.filters.alpha)
                ad.filters.alpha.opacity = op;
            }
            if (op <= 0) {
              ad.style.visibility = 'hidden';
              clearInterval(window['timer'+ ad.id]);
            }
          }
        }(ad),
        10
      );
  },

  complete : true
}
domReady.add(adReport.init);

var bugReport = {
  submitReport : function ( name, msg ) {
    var submitter = name ? name : 'unknown-submission';
    var error_message = msg ? msg : '';
    var form_data = [];
    var apparent_session_id = '';
    var apparent_formstate = '';
    var form_data = [];
    for (var i=0, form; form = document.forms[i]; i++) {
      var form_hash = {};
      for (var x=0, el; el = form.elements[x]; x++) {
        if (! el.name) continue;
        switch (el.type) {
          case 'text' :
          case 'password' :
          case 'textarea' :
          case 'hidden' :
            form_hash[el.name] = el.value;
            break;

          case 'radio' :
          case 'checkbox' :
            if (el.checked) {
              form_hash[el.name] = el.value;
            }
            break;

          case 'select' :
            form_hash[el.name] = el.options[el.selectedIndex].value;
        }
      }
      form_hash.action = form.action;

      form_hash_array = [];
      for (var prop in form_hash) {
        form_hash_array.push('"'+ prop.replace('"', '\\"') +'":"'+ form_hash[prop].replace('"', '\\"') +'"');
      }
      form_data.push('{'+ form_hash_array.join(',') +'}');
      if (form.elements['Qform__FormState']) apparent_formstate = form.elements['Qform__FormState'].value;
    }

    try {
      var parent_same_domain = (parent.document.location) ? true : false;
    } catch (ex) {
      var parent_same_domain = false;
    }

    bugReport.postReport({
        submitter:submitter,
        error_message:error_message,
        page:location.href,
        client_time:(new Date()).toUTCString(),
        html:document.getElementsByTagName('html')[0].innerHTML,
        cookies:document.cookie,
        forms:'['+ form_data.join(',') +']',
        self_is_top:(self == top),
        parent_same_domain:parent_same_domain,
        apparent_session_id:apparent_session_id,
        apparent_formstate:apparent_formstate
      });
  },

  postReport : function ( post_obj ) {
    // no longer posting remote logs:
    return null;

    var request = null;
    try {
      request = new XMLHttpRequest();
    } catch (ex) {
      try {
        request = new ActiveXObject('Msxml2.XMLHTTP');
      } catch (ex) {
        try {
          request = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (ex) {
          request = null;
        }
      }
    }

    if (request == null) return null;

    var post_data = [];
    for (var key in post_obj) {
      post_data.push(key +'='+ escape(post_obj[key]));
    }
    var params = post_data.join('&');

// use for debugging:
//       request.onreadystatechange = function() {
//           switch (request.readyState) {
//             case 4:
//               alert(request.responseText);
//               break;
//           }
//         };

    request.open("POST", '/api/remote_error_logger', true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.setRequestHeader("Content-length", params.length);
    request.setRequestHeader("Connection", "close");
    request.send(params);
  },

  complete : true
}


/* js
 * class for calling member popup information api
 */
window.xmlHttpGlobal = null;

popUpInfo = {
  popUpDiv : null,
  eCoordinates : null,
  Users : [],
  UsersData : [],
  inObject : false,

  init : function() {
      $j("body").delegate(".popUpMemberInfo", "mouseover", popUpInfo.showInfo);
      $j("body").delegate(".popUpMemberInfo", "mouseout", popUpInfo.hideInfo);
  },

  showInfo : function(e) {
    if (!e)
      e = window.event;
    var pos = {
          x: e.pageX || (e.clientX +
              (document.documentElement.scrollLeft || document.body.scrollLeft)),
          y: e.pageY || (e.clientY +
            (document.documentElement.scrollTop || document.body.scrollTop))
        };

    var target = e.target ? e.target : e.srcElement;
    if (target.nodeType == 3)
      target = target.parentNode;

    while (target.className.indexOf('popUpMemberInfo') == -1)
    {
      target = target.parentNode;

      if (target == BODY_EL)
        return;
    }

    var popUpTop = target.className.indexOf('popupTop') != -1;

    if (!this.getAttribute('data-username'))
        var username = target.firstChild.data;
    else
        var username = this.getAttribute('data-username');

    username = username.replace(/^([a-zA-Z0-9_-]+).*/, '$1');
    popUpInfo.inObject = true;
    popUpInfo.popUpTop = popUpTop;

    // so far 2 options that include rollover an img contained in a li element
    if (target.nodeName.toLowerCase() == "img" || target.nodeName.toLowerCase() == "li")
    {
      var offset = getAbsolutePosition(target);

      if (popUpTop)
      {
        pos.x = offset.x - 20;
        pos.arrowX = 15;
        pos.y = offset.y - 186;
      }
      else
      {
        pos.x = offset.x - 30;
        pos.arrowX = 15;
        pos.y = offset.y - 35;
      }
    }

    if (!popUpInfo.popUpDiv) {
      popUpInfo.popUpDiv = document.createElement('div');
      popUpInfo.popUpDiv.className = 'popUpInfoDiv' + (popUpTop ? ' popUpInfoTop' : '');
      popUpInfo.popUpDiv.style.display = 'none';
      popUpInfo.popUpDiv.style.position = 'absolute';
      popUpInfo.popUpDiv.onmouseout = popUpInfo.hideInfo;
      BODY_EL.appendChild(popUpInfo.popUpDiv);
    }

    if ($j.inArray(username, popUpInfo.Users) == -1){
        popUpInfo.popUpDiv.innerHTML = '<img src="/assets/images/spinner_14.gif" style="display: block; margin: 31px auto;" />';
    }

    var browserSize = calculateBrowserSize();
    var scrollX = (document.documentElement.scrollLeft || document.body.scrollLeft);
    var scrollY = (document.documentElement.scrollTop || document.body.scrollTop);
    var posLeft = (pos.x+428 > browserSize.width+scrollX) ? (browserSize.width+scrollX)-460 : pos.x;
    var posTop = (pos.y+156 > browserSize.height+scrollY) ? (browserSize.height+scrollY)-163 : pos.y;

    if (posLeft < pos.x)
      pos.arrowX += pos.x - posLeft;

    popUpInfo.popUpDiv.style.top = (posTop) + 'px';
    popUpInfo.popUpDiv.style.left = (posLeft) + 'px';
    popUpInfo.popUpDiv.style.display = 'block';

    popUpInfo.eCoordinates = pos;
    document.onmousemove = popUpInfo.updateCoordinates;

    if (window.xmlHttpGlobal && typeof(window.xmlHttpGlobal.abort) == 'function')
        window.xmlHttpGlobal.abort();

    if ((intIndex = $j.inArray(username, popUpInfo.Users)) == -1) {
      try {
        window.xmlHttpGlobal = new ActiveXObject("Msxml2.XMLHTTP")
      }
      catch (e) {
        try {
          window.xmlHttpGlobal = new ActiveXObject("Microsoft.XMLHTTP")
        }
        catch (E) {
          window.xmlHttpGlobal = null;
        }
      }

      if (!window.xmlHttpGlobal && typeof XMLHttpRequest != 'undefined') {
        try {
          window.xmlHttpGlobal = new XMLHttpRequest();
        }
        catch (e) {
          window.xmlHttpGlobal = null;
          alert('couldn\'t create xmlhttp object');
        }
      }

      window.xmlHttpGlobal.open('GET', '/members/info_popup?username=' + username, true);
      window.xmlHttpGlobal.onreadystatechange = function(){
        if (window.xmlHttpGlobal.readyState == 4) {
          if (window.xmlHttpGlobal.status == 200) {
            var content = window.xmlHttpGlobal.responseText,
                username = window.xmlHttpGlobal.getResponseHeader('Data-Username');

            popUpInfo.Users.push(username);
            popUpInfo.UsersData[popUpInfo.Users.length - 1] = content;
            popUpInfo.popUpDiv.innerHTML = content;

            var popUpInfoDivs = popUpInfo.popUpDiv.getElementsByTagName('div');
            if (popUpInfoDivs.length == 2)
            {
              var downArrow = popUpInfoDivs[popUpInfoDivs.length-1];
              downArrow.style.left = (popUpInfo.eCoordinates.arrowX) + "px";
            }
          }
          else {
            if (window.xmlHttpGlobal.status != 0)
              popUpInfo.popUpDiv.innerHTML = '<p style="padding: 2px"><strong>HTTP Error</strong>: (' + window.xmlHttpGlobal.status + ')</p>';
             else
              popUpInfo.popUpDiv.innerHTML = '<img src="/assets/images/spinner_14.gif" style="display: block; margin: 31px auto;" />';
          }
        }
      };
      window.xmlHttpGlobal.send(null);
    } else {
        popUpInfo.popUpDiv.innerHTML = popUpInfo.UsersData[intIndex];
        var popUpInfoDivs = popUpInfo.popUpDiv.getElementsByTagName('div');
       if (popUpInfoDivs.length == 2)
        {
          var downArrow = popUpInfoDivs[popUpInfoDivs.length-1];
          downArrow.style.left = (popUpInfo.eCoordinates.arrowX) + "px";
        }
    }
  },

  updateCoordinates : function(e) {
    if (!e)
      e = window.event;
    popUpInfo.eCoordinates = {
          x: e.pageX || (e.clientX +
              (document.documentElement.scrollLeft || document.body.scrollLeft)),
          y: e.pageY || (e.clientY +
            (document.documentElement.scrollTop || document.body.scrollTop)),
          arrowX: popUpInfo.eCoordinates.arrowX
        };
  },

  hideInfo : function(e) {
    popUpInfo.inObject = false;
    setTimeout(popUpInfo.checkHideInfo, 300);
  },

  checkHideInfo : function() {
    var pos = popUpInfo.eCoordinates;

    if (popUpInfo.popUpDiv && !popUpInfo.inObject) {

      var top = parseInt(popUpInfo.popUpDiv.style.top);
      var left = parseInt(popUpInfo.popUpDiv.style.left);
      var bottom = top + popUpInfo.popUpDiv.offsetHeight;
      var right = left + popUpInfo.popUpDiv.offsetWidth;

      if ((pos.x < left || pos.x > right) || (pos.y < top || pos.y > bottom)) {
        document.onmousemove = null;
        popUpInfo.popUpDiv.style.display = 'none';
      }

    }
  }
};

function getAbsolutePosition(elem)
{
  var offset = {x :0, y : 0};

  var curElem = elem;
  var body = document.getElementsByTagName('body')[0];

  while (curElem && curElem != body)
  {
    offset.x += curElem.offsetLeft;
    offset.y += curElem.offsetTop;
    curElem = curElem.offsetParent;
  }

  return offset;
}

// From Live Tools global functions
function calculateBrowserSize()
{
  var ret = { width: 0, height : 0 };
  if( typeof( window.innerWidth ) == 'number' )
  {
    //Non-IE
    ret.width = window.innerWidth;
    ret.height = window.innerHeight;
  }
  else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) )
  {
    //IE 6+ in 'standards compliant mode'
    ret.width = document.documentElement.clientWidth;
    ret.height = document.documentElement.clientHeight;
  }
  else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) )
  {
    //IE 4 compatible
    ret.width = document.body.clientWidth;
    ret.height = document.body.clientHeight;
  }

  return ret;
}

addToOnLoad(popUpInfo.init);

/**
 * Opens a new window loading the Vs. Computer page.
 */
function popVsComputer(fen, from, black) {
    strUrl = '/play/computer?pop=' + from;
    if (fen) {strUrl += '&fen=' + fen;}
    if (black) {strUrl += '&black=' + black;}
    newWindow = open(strUrl, 'vs_computer', 'width=745,height=730,resizable=yes,status=no,menubar=no,scrollbars=yes');
    if (newWindow != null) {
        newWindow.creator = self;
        newWindow.focus();
    }
}

/**
 * Adds a parameter to the current URL.
 */
function addParamToURL(key, value) {
    key   = escape(key);
    value = escape(value);

    var kvp = document.location.search.substr(1).split('&');
    if (kvp == "") {
        document.location.search = key + "=" + value;
    } else {
        var i = kvp.length;
        var x;
        while (i--) {
            x = kvp[i].split('=');

            if (x[0] == key) {
                x[1] = value;
                kvp[i] = x.join('=');
                break;
            }
        }

        if (i < 0) {
            kvp[kvp.length] = [key, value].join('=');
        }

        //this will reload the page, it's likely better to store this until finished
        document.location.search = kvp.join('&');
    }
}

(function() {

tiny_toggler = function(opts) {
	this.panels = [];

	this.selectedPanel = 0;
    this.cookieName = null;
	if (typeof(opts.selectedPanel) != 'undefined')
		this.selectedPanel = opts.selectedPanel;
    if (opts.cookieName)
      this.cookieName = opts.cookieName;

	if (opts.panels)
	{
		for (var n=0; n < opts.panels.length; n++)
		{
			var curPanel = opts.panels[n];
			this.panels.push({
				panelId : curPanel.panelId,
				togglerId : curPanel.togglerId,
				panelOnClass : curPanel.panelOnClass,
				panelOffClass : curPanel.panelOffClass,
				togglerOnClass : curPanel.togglerOnClass,
				togglerOffClass : curPanel.togglerOffClass
			});
		}
	}
};

tiny_toggler.prototype = {
	init : function() {
		for (var n=0; n < this.panels.length; n++)
		{
			var curPanel = this.panels[n];
            if (this.cookieName)
              this.setSelectedFromCookie();

			if (this.selectedPanel == n)
			{
				document.getElementById(curPanel.panelId).className = curPanel.panelOnClass;
				document.getElementById(curPanel.togglerId).className = curPanel.togglerOnClass;
			}
			else
			{
				document.getElementById(curPanel.panelId).className = curPanel.panelOffClass;
				document.getElementById(curPanel.togglerId).className = curPanel.togglerOffClass;
			}

			document.getElementById(curPanel.togglerId).tiny_toggler = this;
			document.getElementById(curPanel.togglerId).onclick = this.onToggleClick;
		}
	},

    setSelectedFromCookie: function() {
      // from QuirksMode.org
      var nameEQ = this.cookieName + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) {
          this.selectedPanel = Number(c.substring(nameEQ.length,c.length));
        }
      }
    },

	onToggleClick : function(e)
	{
		if (!e) e = window.event;
		var target = e.target || e.srcElement;
		var self = target.tiny_toggler;

		if (!self) return;

		// check if we change toggler
		var clickedToggleNdx = null;
		for (var n=0; n < self.panels.length; n++)
		{
			if (self.panels[n].togglerId == target.id)
			{
				clickedToggleNdx = n;
				break;
			}
		}

		if (clickedToggleNdx != null && clickedToggleNdx != self.selectedPanel)
		{
			// do toggle
			var curPanel = self.panels[self.selectedPanel];

			document.getElementById(curPanel.panelId).className = curPanel.panelOffClass;
			document.getElementById(curPanel.togglerId).className = curPanel.togglerOffClass;

			curPanel = self.panels[clickedToggleNdx];
			document.getElementById(curPanel.panelId).className = curPanel.panelOnClass;
			document.getElementById(curPanel.togglerId).className = curPanel.togglerOnClass;

			self.selectedPanel = clickedToggleNdx;
            if (self.cookieName)
            {
              var date = new Date();
              date.setTime(date.getTime()+(30*24*60*60*1000));
              var expires = "; expires="+date.toGMTString();
              document.cookie = self.cookieName + '=' + self.selectedPanel + expires;
            }
		}
	}
};

})();
