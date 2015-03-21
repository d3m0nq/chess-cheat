//
//
//  Copyright Chess.com, LLC. All rights reserved.
//
//


















































var Config;if(!Config)
{Config={};}else
{if(!Config.z688eb)
Config.z688eb=Config["domain.main"];if(!Config.zb73d4)
Config.zb73d4=Config["domain.static"];if(!Config.z364c2)
Config.z364c2=Config["domain.files"];if(!Config.z3bbf0)
Config.z3bbf0=Config["domain.live"];if(!Config.z7e69e)
Config.z7e69e=Config["domain.livews"];if(!Config.zf9d1f)
Config.zf9d1f=Config["domain.livewss"];if(!Config.zdef0d)
Config.zdef0d=Config["domain.voice"];if(!Config.z18438)
Config.z18438=Config["domain.cssjs"];if(!Config.z1a1d3)
Config.z1a1d3=Config["domain.images"];if(!Config.z284f1)
Config.z284f1=Config["domain.avatars"];if(!Config.z2f6ff)
Config.z2f6ff="//images.chesscomfiles.com/chess-themes";if(!Config.za89a8)
Config.za89a8=Config["application.version"];}{var z4932b=document.getElementsByTagName("script");var expression=/^(https?\:\/\/.+)\/js\/chess\/Config(\.v(.+))?\.js(\?version\=(.+))?$/;for(var i=0;i<z4932b.length;i++)
{var src=z4932b[i].src;if(!src.match(expression))
continue;var parts=expression.exec(src);if(!Config.zb73d4)
Config.zb73d4=parts[1];if(!Config.za89a8&&parts[3])
Config.za89a8=1*parts[3];if(!Config.za89a8&&parts[5])
Config.za89a8=1*parts[5];break;}}if(!Config.za89a8)
Config.za89a8=Math.floor(Math.random()*10000)+10000;
if(!Config.DocumentRoot)
Config.DocumentRoot="";if(typeof(Config["oldThemes"])=='undefined')
Config["oldThemes"]=true;if(!Config.GfxUrl)
Config.GfxUrl=Config.z2f6ff;if(!Config.za082b)
Config.za082b='/pieces';if(!Config.zfb36e)
Config.zfb36e='/boards';if(!Config.zc58f3)
Config.zc58f3='/arrows';if(!Config.z4d43d)
Config.z4d43d="default";if(!Config.z76fef)
Config.z76fef=Config.z2f6ff+"/sounds/";if(!Config.DiagramGetPostUrl)
Config.DiagramGetPostUrl="/api/get_diagram";
if(!Config.DailyPuzzleGetUrl)
Config.DailyPuzzleGetUrl="/api/get_puzzle";
window.addOnLoad=function(callback)
{var z3d599=window.onload;window.onload=function()
{if(z3d599)
z3d599();callback();}};ChessColorScheme={};if(!Config["oldThemes"])
{
ChessColorScheme["blue"]=["#4D6D92","#ECECD7","blue",".png","#b7dffb"];ChessColorScheme["brown"]=["#B58863","#F0D9B5","brown",".png","#ffff33"];ChessColorScheme["bubblegum"]=["#f9cdd3","#fff3f3","bubblegum",".png","#de5d6f"];ChessColorScheme["burled_wood"]=["#895132","#d9b088","burled_wood",".png","#ee9016"];ChessColorScheme["dark_wood"]=["#8d675e","#e7cdb2","dark_wood",".png","#cc9122"];ChessColorScheme["glass"]=["#282f3f","#667188","glass",".png","#5b91b3"];ChessColorScheme["graffiti"]=["#b96f18","#aeaeae","graffiti",".png","#f39011"];ChessColorScheme["green"]=["#779952","#edeed1","green",".png","#ffff33"];ChessColorScheme["light"]=["#aaaaaa","#dcdcdc","light",".png","#a4b8c4"];ChessColorScheme["lolz"]=["#909898","#e0e9e9","lolz",".png","#a3becd"];ChessColorScheme["marble"]=["#706b66","#c7bdaa","marble",".png","#f0db86"];ChessColorScheme["metal"]=["#6e6e6e","#c9c9c9","metal",".png","#a3becd"];ChessColorScheme["nature"]=["#8c976e","#c3d1a4","translucent",".png","#eef396"];ChessColorScheme["neon"]=["#636363","#b9b9b9","neon",".png","#6d90a6"];ChessColorScheme["newspaper"]=["#5a5956","#5a5956","newspaper",".png","#99976e"];ChessColorScheme["orange"]=["#D08B18","#FCE4B2","orange",".png","#ffff33"];ChessColorScheme["parchment"]=["#B58863","#F0D9B5","parchment",".png","#d8cc66"];ChessColorScheme["purple"]=["#8877B7","#EFEFE`F","purple",".png"];ChessColorScheme["red"]=["#BA5546","#F0D8BF","red",".png","#f8f893"];ChessColorScheme["sand"]=["#b8a590","#e5d3c4","sand",".png","#e2bc87"];ChessColorScheme["sky"]=["#c2d7e2","#efefef","sky",".png","#65daf7"];ChessColorScheme["stone"]=["#666463","#c8c3bd","stone",".png","#36525f"];ChessColorScheme["tan"]=["#D08B18","#FCE4B2","tan",".png","#f7d84a"];ChessColorScheme["tournament"]=["#316549","#ebece8","tournament",".png","#a4c25b"];ChessColorScheme["translucent"]=["#667188","#282f3f","translucent",".png","#5b91b3"];}else
{
ChessColorScheme["brown"]=["#B58863","#F0D9B5","brown",".png","#ffff33"];ChessColorScheme["wood"]=["#B58863","#F0D9B5","brown",".png","#ffff33"];ChessColorScheme["green"]=["#769656","#EEEED2","green",".png","#ffff33"];ChessColorScheme["blue"]=["#4D6D92","#ECECD7","blue",".png","#73bbee"];ChessColorScheme["grey"]=["#aaaaaa","#dcdcdc","light",".png","#a4b8c4"];ChessColorScheme["red"]=["#BA5546","#F0D8BF","red",".png","#f8f893"];ChessColorScheme["orange"]=["#D08B18","#FCE4B2","orange",".png","#ffff33"];ChessColorScheme["purple"]=["#8877B7","#EFEFEF","purple",".png"];ChessColorScheme["pink"]=["#f9cdd3","#fff3f3","bubblegum",".png","#de5d6f"];ChessColorScheme["tan"]=["#D08B18","#FCE4B2","tan",".png","#f7d84a"];ChessColorScheme["natural"]=["#D08B18","#FCE4B2","tan",".png","#f0e464"];ChessColorScheme["winboard"]=["#316549","#ebece8","tournament",".png","#a4c25b"];ChessColorScheme["blackwhite"]=["#667188","#282f3f","translucent",".png","#5b91b3"];ChessColorScheme["marbleblue"]=["#c2d7e2","#efefef","marbleblue",".png","#65daf7"];ChessColorScheme["marblebrown"]=["#b96f18","#aeaeae","graffiti",".png","#f39011"];ChessColorScheme["marblegreen"]=["#706b66","#c7bdaa","marblegreen",".png","#f0db86"];ChessColorScheme["metal"]=["#6e6e6e","#c9c9c9","metal",".png","#a3becd"];ChessColorScheme["wooddark"]=["#895132","#d9b088","burled_wood",".png","#ee9016"];ChessColorScheme["woodlight"]=["#B58863","#F0D9B5","parchment",".png","#d8cc66"];ChessColorScheme["woodmid"]=["#8d675e","#e7cdb2","dark_wood",".png","#cc9122"];ChessColorScheme["woodolive"]=["#6e6e6e","#c9c9c9","woodolive",".png","#a3becd"];}
ChessPieceStyle={};ChessPiece3dInfo={};ChessPieceStyle["3d_chesskid"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["3d_plastic"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["3d_staunton"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["3d_wood"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["alpha"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["blindfold"]={"0":"png","default":"png"
};ChessPieceStyle["book"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["bubblegum"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["cases"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["classic"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["club"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["condal"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["dark"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["game_room"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["glass"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["gothic"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["graffiti"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["light"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["lolz"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["marble"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["maya"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"gif"
};ChessPieceStyle["metal"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["modern"]={"0":"png","16":"png","20":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["nature"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["neon"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["newspaper"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["ocean"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["simple"]={"20":"png","default":"png"
};ChessPieceStyle["sky"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["space"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["tigers"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["tournament"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["vintage"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPieceStyle["wood"]={"0":"png","30":"png","35":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","97":"png","105":"png","180":"png","default":"png"
};ChessPiece3dInfo["3d_wood"]=true;ChessPiece3dInfo["3d_staunton"]=true;ChessPiece3dInfo["3d_plastic"]=true;ChessPiece3dInfo["3d_chesskid"]=true;
var z6a299={"lines":"light","modern2":"modern","3dwood":"3d_wood","3dplastic":"3d_plastic","3dchesskid":"3d_chesskid"
};(function(w,d,undefined){'use strict';w.z95894=w.z95894||{};var za66a0=w.navigator.userAgent;var ze17c2=za66a0.indexOf('Chrome/40')>-1;var z0a263=za66a0.indexOf('Windows NT 5.1')>-1;var z0679b=ze17c2&&z0a263;function z11620(){var zb1af8=-1;
var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(za66a0)!=null)
{zb1af8=parseFloat(RegExp.$1);}return zb1af8;}function zafc7f(){var zb1af8=null;var re=new RegExp("(Windows|Macintosh|Linux|FreeBSD)");if(re.exec(za66a0)!=null)
{zb1af8=RegExp.$1;if(zb1af8=="FreeBSD")
zb1af8="Linux";
}return zb1af8;}function contains(str,substr){return!!~(''+str).indexOf(substr);}function z85ffc(property){var name=undefined;var z9dc1f='Webkit Moz O ms'.split(' ');var z8872e=property.charAt(0).toUpperCase()+property.slice(1);var z24137=(property+' '+z9dc1f.join(z8872e+' ')+z8872e).split(' ');var element=d.createElement('asdf');for(var i in z24137){var property=z24137[i];if(element.style[property]!==undefined){name=property;break;}}return property;}function z2acc9(value){return value.replace(/([A-Z])/g,function(str,z69d54){return '-'+z69d54.toLowerCase();}).replace(/^ms-/,'-ms-');}if(!w.z95894.z8c277)
{var z7cd6f=z85ffc('transition');var zafb57=z85ffc('transform');var z76cb9=z11620();var za8462=zafc7f();w.z95894.z8c277={z18df3:z76cb9!=-1&&z76cb9<8,z2071e:z76cb9!=-1,z326bd:z76cb9==8,zbe521:z76cb9==9,z9e098:z76cb9==10,zc6e18:za66a0.indexOf('WebKit')!=-1,zae073:za66a0.indexOf('Gecko')!=-1,z521f5:w.opera||za66a0.indexOf('Opera')!=-1,z86264:za66a0.indexOf('Chrome')!=-1,z8658c:za8462,z4125d:z2acc9(zafb57),zafb57:zafb57,z7cd6f:z7cd6f,z40740:(function(){var z29b47={'WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend','OTransition':'oTransitionEnd','msTransition':'MSTransitionEnd','transition':'transitionend'
};return z29b47[z7cd6f];}()),z379d4:!z0679b&&((typeof z7cd6f!='undefined'&&z76cb9===-1)||z76cb9>9),z6516d:(function(){var canvas=d.createElement('canvas');var x,z5b90a;try{z5b90a=canvas.getContext('webgl');}catch(x){z5b90a=null;}if(z5b90a===null){try{z5b90a=canvas.getContext('experimental-webgl');}catch(x){z5b90a=null;}}return!!z5b90a;}()),
za5f7d:false

};}}(window,document));
if(!window.JSON){window.JSON={parse:function(z5acfb){return eval("("+z5acfb+")");},stringify:function(zc3bf7){if(zc3bf7 instanceof Object){var z4be5e="";if(zc3bf7.constructor===Array){for(var z85a81=0;z85a81<zc3bf7.length;z4be5e+=this.stringify(zc3bf7[z85a81])+",",z85a81++);return "["+z4be5e.substr(0,z4be5e.length-1)+"]";}if(zc3bf7.toString!==Object.prototype.toString){return "\""+zc3bf7.toString().replace(/"/g,"\\$&")+"\"";}for(var zc5235 in zc3bf7){z4be5e+="\""+zc5235.replace(/"/g,"\\$&")+"\":"+this.stringify(zc3bf7[zc5235])+",";}return "{"+z4be5e.substr(0,z4be5e.length-1)+"}";}return typeof zc3bf7==="string"?"\""+zc3bf7.replace(/"/g,"\\$&")+"\"":String(zc3bf7);}};}
if(!window.z27d7a)
{window.z27d7a={z712f3:function(key,value)
{return this.z9f9b0(window.localStorage,key,value)
},z78c20:function(key,value)
{return this.z9f9b0(window.sessionStorage,key,value)
},z9f9b0:function(z2a729,key,value)
{if(value===undefined)
{try
{if(!z2a729)
return null;if(z2a729.getItem)
return z2a729.getItem(key);return(z2a729[key]===undefined?null:z2a729[key]);}catch(e)
{return null;}}else
{try
{if(!z2a729)
return;if(z2a729.setItem)
z2a729.setItem(key,value);z2a729[key]=value;}catch(e){}}}};}
(function(){var z97a38=0;var zdc909=['ms','moz','webkit','o'];for(var x=0;x<zdc909.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[zdc909[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[zdc909[x]+'CancelAnimationFrame']
||window[zdc909[x]+'CancelRequestAnimationFrame'];}if(!window.requestAnimationFrame)
window.requestAnimationFrame=function(callback,element){var z4d7a9=new Date().getTime();var zb115c=Math.max(0,16-(z4d7a9-z97a38));var id=window.setTimeout(function(){callback(z4d7a9+zb115c);},zb115c);z97a38=z4d7a9+zb115c;return id;};if(!window.cancelAnimationFrame)
window.cancelAnimationFrame=function(id){clearTimeout(id);};}());



var zc41ab=function(node,z2da4b){z2da4b.parentNode.insertBefore(node,z2da4b);return true;
};


var _mixin=function(obj,zcdad6){var empty={};for(var i in zcdad6){if(!(i in empty)){obj[i]=zcdad6[i];}}return obj;};var z19c31=function(target){'use strict';var z09f58=Array.prototype.slice.call(arguments,1);var len=z09f58.length;var empty={};for(var i=0,zcdad6;i<len;i+=1){zcdad6=z09f58[i];for(var member in zcdad6){if(!(i in empty)){target[member]=zcdad6[member];}}}return target;};




(function(){var z11b2a=null;insertContentAt=function(z2da4b,z8aef4,z0d7c8){if(!z11b2a)
z11b2a=document.createElement("div");z11b2a.innerHTML=z8aef4;

if(z0d7c8!=="top"||!z2da4b.firstChild){while(z11b2a.firstChild){z2da4b.appendChild(z11b2a.firstChild);}}else{
var z73fec=z2da4b.firstChild;while(z11b2a.firstChild){zc41ab(z11b2a.removeChild(z11b2a.firstChild),z73fec);}}z11b2a.innerHTML="";};})();var $A=function(obj)
{return Array.prototype.slice.call(obj);};
var bind=function(z13557,obj)
{if(arguments.length>2)
{var z999bc=$A(arguments);z999bc.shift();z999bc.shift();return function()
{var z36273=$A(z999bc);for(var i=0;i<arguments.length;i++)
z36273.push(arguments[i]);return z13557.apply(obj,z36273);};}else
{return function()
{return z13557.apply(obj,arguments);};}};
function zcac00(){var z89a94;try{z89a94=new ActiveXObject("Msxml2.XMLHTTP")
}catch(e){try{z89a94=new ActiveXObject("Microsoft.XMLHTTP")
}catch(E){z89a94=false;}}if(!z89a94&&typeof XMLHttpRequest!='undefined'){try{var z89a94=new XMLHttpRequest();}catch(e){var z89a94=false;alert('couldn\'t create xmlhttp object');}}return(z89a94);}


(function(){

if(typeof(myEvent)=='undefined'){
myEvent={z3f027:[],z4580e:[],observe:function(n,evt,zf8f9c){if(n){if(n.addEventListener){n.addEventListener(evt,zf8f9c,false);}else{if(n.attachEvent){n.attachEvent('on'+evt,zf8f9c);}}}},stopObserving:function(n,evt,zf8f9c){


if(n){if(n.removeEventListener){n.removeEventListener(evt,zf8f9c,false);}else{if(n.detachEvent){n.detachEvent('on'+evt,zf8f9c);}}}},
getTarget:function(evt){return evt.target?evt.target:evt.srcElement;},

getPointXY:function(evt){var touches=evt.touches;var z8faf2=evt.z8faf2;var pointer={x:evt.pageX||(evt.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)),y:evt.pageY||(evt.clientY+(document.documentElement.scrollTop||document.body.scrollTop))
};if(touches&&touches[0]){pointer.x=touches[0].pageX;pointer.y=touches[0].pageY;}else if(z8faf2&&z8faf2[0]){pointer.x=z8faf2[0].pageX;pointer.y=z8faf2[0].pageY;}return pointer;},



preventDefault:function(e,zbcf51){

if(typeof(e.preventDefault)=='function')
e.preventDefault();e.returnValue=false;if(zbcf51){if(typeof(e.stopPropagation)=='function')
e.stopPropagation();e.cancelBubble=true;}},



registerComponent:function(z6127d){var found=false;for(var n=0;n<myEvent.z3f027;n++){if(z6127d==myEvent.z3f027[n]){found=true;break;}}if(!found){myEvent.z3f027[myEvent.z3f027.length]=z6127d;}},
findComponent:function(e){var z2204a=e.target?e.target:e.srcElement;var obj=null;while(!(obj=myEvent.ze2460(z2204a.id))){if(z2204a.parentNode)
z2204a=z2204a.parentNode;else
return false;}z2204a=null;
return obj;},ze2460:function(z6127d){var found=null;for(var n=0;n<myEvent.z3f027.length;n++){if(z6127d==myEvent.z3f027[n]){found=document.getElementById(z6127d);break;}}return found;},


registerRelated:function(z07733,z01f43){var found=false;for(var n=0;n<myEvent.z4580e.length;n++){if(myEvent.z4580e[n].z07733==z07733&&myEvent.z4580e[n].z01f43==z01f43){found=true;break;}}if(!found)
myEvent.z4580e[myEvent.z4580e.length]={z07733:z07733,z01f43:z01f43};},

findRelated:function(z07733){var ret=null;for(var n=0;n<myEvent.z4580e.length;n++)
{if(myEvent.z4580e[n].z07733==z07733)
{ret=myEvent.z4580e[n].z01f43;}}
if(!ret)
{var z95837=document.getElementById(z07733);while(z95837)
{for(var n=0;n<myEvent.z4580e.length;n++)
{if(myEvent.z4580e[n].z07733==z95837.id)
{ret=myEvent.z4580e[n].z01f43;return ret;}}z95837=z95837.parentElement;}}return ret;}};}

if(typeof(Element)=='undefined')
Element={};if(typeof(Element.hasClassName)=='undefined'){Element.hasClassName=function(element,className){if(typeof(element)=='string')
element=document.getElementById(element);if(!(element))return;var elementClassName=element.className;var z0dcff=new RegExp("(^|\\s)"+className+"(\\s|$)");return(elementClassName.length>0&&(elementClassName==className||z0dcff.test(elementClassName)));};}if(typeof(Element.addClassName)=='undefined'){Element.addClassName=function(element,className){if(typeof(element)=='string')
element=document.getElementById(element);if(!(element))return;if(!Element.hasClassName(element,className))
element.className+=(element.className?' ':'')+className;return element;};}if(typeof(Element.removeClassName)=='undefined'){Element.removeClassName=function(element,className){if(typeof(element)=='string')
element=document.getElementById(element);if(!(element))return;element.className=element.className.replace(new RegExp("(^|\\s+)"+className+"(\\s+|$)"),' ').replace(/^\s+/,'').replace(/\s+$/,'');return element;};}
if(typeof($)=='undefined'){$=function(id){return(typeof id=="string")?document.getElementById(id):id;};}})();

(function(){if(typeof(document.getElementsByClassName)=='undefined'){document.getElementsByClassName=function(className,parentElement){if(typeof(parentElement)=='string')
parentElement=document.getElementById(parentElement);if(!!document.evaluate){var q=".//*[contains(concat(' ', @class, ' '), ' "+className+" ')]";var results=[];var query=document.evaluate(q,parentElement||document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);for(var i=0,length=query.snapshotLength;i<length;i++)
results.push(query.snapshotItem(i));return results;}else{var children=(parentElement||document.body).getElementsByTagName('*');var elements=[],child;var z0dcff=new RegExp("(^|\\s)"+className+"(\\s|$)");for(var i=0,length=children.length;i<length;i++){child=children[i];if(child.className.length>0&&(child.className==className||z0dcff.test(child.className)))
elements.push(child);}return elements;}};}})();
za96fe=function(string,length,character)
{var result=string;while(result.length<length)
result=character+result;return result;};zf1a99=function(string,length,character)
{var result=string;while(result.length<length)
result=result+character;return result;};z5a2b7=function(a,b)
{if(a>b)
return 1;else if(a<b)
return-1;else
return 0;};z00efc=function(a,b)
{var z262b7=a.toLowerCase();var z5c47c=b.toLowerCase();if(z262b7>z5c47c)
return 1;else if(z262b7<z5c47c)
return-1;else
return 0;};function nvl(z14d32,z4c3b0,z08196,zcf7fa)
{if(z14d32||z14d32=="")return z14d32;if(z4c3b0||z4c3b0=="")return z4c3b0;if(z08196||z08196=="")return z08196;if(zcf7fa||zcf7fa=="")return zcf7fa;return null;}




































function StringBuffer()
{this.parts=[];};StringBuffer.prototype.append=function append(s)
{this.parts.push(s);return this;};StringBuffer.prototype.toString=function toString()
{return this.parts.join("");};function getCookie(name)
{var z9b6b7=name+"=";var z57413=document.cookie.split(';');for(var i=0;i<z57413.length;i++)
{var c=z57413[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(z9b6b7)==0)return c.substring(z9b6b7.length,c.length);}return null;};function currentTimeMillis()
{return new Date().getTime();}function zc14e7(a,b)
{return setTimeout(a,b);}function z890b1(a,b)
{return setInterval(a,b);}function clearElement(element)
{if(typeof(element)=='string')
element=document.getElementById(element);var node=element.firstChild;while(node)
{var nextNode=node.nextSibling;element.removeChild(node);node=nextNode;}}function getNodeText(zb7b6e)
{if(typeof(zb7b6e.textContent)!="undefined")
return zb7b6e.textContent;return zb7b6e.firstChild.nodeValue;}function zae731(str){return str.replace(/&lt;/gi,"<");}function z22a6f(str){str=str.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;");str=str.replace(/'/gm,"&#39;");return str;}function z88ffa(z1208e)
{var result=parseInt(z1208e);return isNaN(result)?null:result;}(function(){var id=0;genStringId=function()
{return "__str"+(++id);}})();(function(){z90679=function(zba64d)
{this.z98a65=nvl(zba64d.delay,10);this.za1aef=[];this.z4b29e=false;this.zd92d7=false;this.zd522f=false;};z90679.prototype={add:function(callback)
{this.za1aef.push(callback);if(!this.z4b29e)
{this.z4b29e=true;setTimeout(bind(this.zc566e,this),1);}},zdd913:function()
{this.zd92d7=true;},ze4662:function()
{this.add(bind(this.zdd913,this));},resume:function()
{if(this.zd522f)
{this.zd522f=false;this.zc566e();}else if(this.zd92d7)
{setTimeout(bind(this.resume,this),this.z98a65);}},zc566e:function()
{if(this.zd92d7)
{this.zd522f=true;this.zd92d7=false;return;}if(this.za1aef.length>0)
{var callback=this.za1aef.shift();var z57e38=null;try
{callback();}catch(e){z57e38=e;}setTimeout(bind(this.zc566e,this),this.z98a65);if(z57e38)
{
throw z57e38;}}else
{this.z4b29e=false;}}};})();function zf1983(zae05d,id)
{for(var i=0;i<zae05d["children"]["length"];i++)
{var node=zae05d["children"][i];if(node["id"]==id)
return node;var z65844=zf1983(node,id);if(z65844)
return z65844;}return null;};if(!Array.prototype.indexOf)
{Array.prototype.indexOf=function(ze0f83)
{if(this==null){throw new TypeError();}var t=Object(this);var len=t.length>>>0;if(len===0){return-1;}var n=0;if(arguments.length>1){n=Number(arguments[1]);if(n!=n){
n=0;}else if(n!=0&&n!=Infinity&&n!=-Infinity){n=(n>0||-1)*Math.floor(Math.abs(n));}}if(n>=len){return-1;}var k=n>=0?n:Math.max(len-Math.abs(n),0);for(;k<len;k++){if(k in t&&t[k]===ze0f83){return k;}}return-1;}}if(!Function.prototype.bind){Function.prototype.bind=function(zea05e){var z94c98=this;var args=Array.prototype.slice.call(arguments,1);return function(){return z94c98.apply(zea05e,args.concat(Array.prototype.slice.call(arguments)));};};}if(!Object.keys){Object.keys=(function(){var hasOwnProperty=Object.prototype.hasOwnProperty,z87675=!({toString:null}).propertyIsEnumerable('toString'),zbfd0b=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor'
],z2a79a=zbfd0b.length;return function(obj){if(typeof obj!=='object'&&typeof obj!=='function'||obj===null){throw new TypeError('Object.keys called on non-object');}var result=[];for(var z70ba4 in obj){if(hasOwnProperty.call(obj,z70ba4))result.push(z70ba4);}if(z87675){for(var i=0;i<z2a79a;i++){if(hasOwnProperty.call(obj,zbfd0b[i])){result.push(zbfd0b[i]);}}}return result;};})();}










(function(){if(!("css" in window))window.css={};var z2071e=z95894.z8c277.z2071e;var z58233={};var ze6ea2={};var zd88e2=[];var z3d1b9=[];css.insertCssRule=function(selector,z2bede,zd45e9){




















var zbf075=css.getDynamicStyleSheet(zd45e9);var z68454=selector+" {"+z2bede+"}";if(z2071e){
zbf075.cssText+=z68454;}else if(zbf075.sheet){zbf075.sheet.insertRule(z68454,zbf075._indicies.length);}else{zbf075.appendChild(document.createTextNode(z68454));}zbf075._indicies.push(selector+" "+z2bede);return selector;};css.removeCssRule=function(selector,z2bede,zd45e9){





var zbf075;var index=-1;for(var z8bc1a in z58233){if(zd45e9&&zd45e9!=z8bc1a){continue;}zbf075=z58233[z8bc1a];for(var i=0;i<zbf075._indicies.length;i++){if(selector+" "+z2bede==zbf075._indicies[i]){index=i;break;}}if(index>-1){break;}}if(!zbf075){
return false;}if(index==-1){
return false;}zbf075._indicies.splice(index,1);if(z2071e){
zbf075.removeRule(index);}else if(zbf075.sheet){zbf075.sheet.deleteRule(index);}else if(document.styleSheets[0]){

}return true;};css.getStyleSheet=function(zd45e9){











if(z58233[zd45e9||"default"]){return z58233[zd45e9||"default"];}if(!zd45e9){

return false;}var z4dd32=css.getStyleSheets();
if(z4dd32[zd45e9]){return css.getStyleSheets()[zd45e9];}

for(var z8bc1a in z4dd32){if(z4dd32[z8bc1a].href&&z4dd32[z8bc1a].href.indexOf(zd45e9)>-1){return z4dd32[z8bc1a];}}return false;};css.getDynamicStyleSheet=function(zd45e9){









if(!zd45e9){zd45e9="default";}if(!z58233[zd45e9]){if(document.createStyleSheet){
z58233[zd45e9]=document.createStyleSheet();
}else{z58233[zd45e9]=document.createElement("style");z58233[zd45e9].setAttribute("type","text/css");document.getElementsByTagName("head")[0].appendChild(z58233[zd45e9]);
}z58233[zd45e9]._indicies=[];}return z58233[zd45e9];};css.enableStyleSheet=function(zd45e9){



var zbf075=css.getStyleSheet(zd45e9);if(zbf075){if(zbf075.sheet){zbf075.sheet.disabled=false;}else{zbf075.disabled=false;}}};css.disableStyleSheet=function(zd45e9){



var zbf075=css.getStyleSheet(zd45e9);if(zbf075){if(zbf075.sheet){zbf075.sheet.disabled=true;}else{zbf075.disabled=true;}}};css.activeStyleSheet=function(title){







var z905b7=css.getToggledStyleSheets();if(arguments.length==1){
z905b7.each(function(s){s.disabled=(s.title==title)?false:true;
});}else{for(var i=0;i<z905b7.length;i++){if(z905b7[i].disabled==false){return z905b7[i];}}}return true;};css.getPreferredStyleSheet=function(){



};css.getToggledStyleSheets=function(){












if(!zd88e2.length){var z79579=css.getStyleSheets();for(var z8bc1a in z79579){if(z79579[z8bc1a].title){
zd88e2.push(z79579[z8bc1a]);}}}return zd88e2;};css.getStyleSheets=function(){









if(ze6ea2.ze5591){return ze6ea2;}var z905b7=document.styleSheets;
z905b7.each(function(n){var s=(n.sheet)?n.sheet:n;var name=s.title||s.href;if(z2071e){
if(s.cssText.indexOf("#default#VML")==-1){if(s.href){
ze6ea2[name]=s;}else if(s.imports.length){
s.imports.each(function(zdf167){ze6ea2[zdf167.title||zdf167.href]=zdf167;});}else{
ze6ea2[name]=s;}}}else{
ze6ea2[name]=s;ze6ea2[name].id=s.ownerNode.id;s.cssRules.each(function(r){if(r.href){
ze6ea2[r.href]=r.styleSheet;ze6ea2[r.href].id=s.ownerNode.id;}});}});
ze6ea2.ze5591=true;return ze6ea2;};})();
if(typeof window["HTMLAudioElement"]==="undefined")
window["HTMLAudioElement"]=function(){};(function(global){var preload=new createjs.PreloadJS(false);var z51e1c=createjs.SoundJS;global.zcc263=function(z724ee)
{createjs["FlashPlugin"]["BASE_PATH"]=z724ee;if(zcc263.Audio)
z51e1c["registerPlugins"]([createjs["HTMLAudioPlugin"],createjs["FlashPlugin"]]);else
z51e1c["registerPlugins"]([createjs["FlashPlugin"]]);preload["installPlugin"](z51e1c);if(!z51e1c["checkPlugin"](true)){
return;}};zcc263.Audio=(function()
{var elem=document.createElement('audio');var zdd34b=false;try{if(zdd34b=!!elem["canPlayType"]){zdd34b=new Boolean(zdd34b);zdd34b.z95711=elem["canPlayType"]('audio/ogg; codecs="vorbis"').replace(/^no$/,'');zdd34b.z0689b=elem["canPlayType"]('audio/mpeg;').replace(/^no$/,'');zdd34b.z01fe2=elem["canPlayType"]('audio/wav; codecs="1"').replace(/^no$/,'');zdd34b.z6c252=(elem["canPlayType"]('audio/x-m4a;')||elem["canPlayType"]('audio/aac;')).replace(/^no$/,'');}}catch(e){}return zdd34b;})();zcc263.prototype={zb1af1:[],ze3816:function(code,url)
{var z6432e;if(code instanceof Array)
{this.zb1af1.concat(code);z6432e=code;}else
{for(var i=0;i<this.zb1af1.length;i++)
if(code===this.zb1af1[i].id)
return;z6432e={id:code,src:url};this.zb1af1.push(z6432e);}try
{preload["loadManifest"](z6432e);}catch(e)
{
}},zb5de5:function(code)
{z51e1c["play"](code);}





};global["getDefaultSoundManager"]=function()
{var z1c0b5={"loadSound":function(code,url)
{this.z2b9af().ze3816(code,url);},"playSound":function(code)
{this.z2b9af().zb5de5(code);},z2b9af:function()
{this.z15f56();return this.z5d070;},z15f56:function()
{if(!this.z5d070)
this.z5d070=new global.zcc263("/js/soundjs/");}};z1c0b5.z15f56();return z1c0b5;};})(this);(function(){z7f42b=function(){this.zad85d={};this.areas={};this.za429c={};this.z9ac48=0;this.zfa082=0;
this.z83b73=[];this.zca669=[];this.z6f1d0=[];this.zee076=[];this.zaeff5=[];this.ze4319=[];};z7f42b.prototype={clone:function()
{var z56e60=new z7f42b();z56e60.zfa082=this.zfa082;
for(var z1efa8 in this.zad85d)
{z56e60.zad85d[z1efa8]={};z56e60.zad85d[z1efa8].color=this.zad85d[z1efa8].color;z56e60.zad85d[z1efa8].type=this.zad85d[z1efa8].type;z56e60.zad85d[z1efa8].zba125=this.zad85d[z1efa8].zba125;}for(var zba125 in this.areas)
{z56e60.areas[zba125]={};z56e60.areas[zba125].zad85d=[];for(var z1efa8 in this.areas[zba125].zad85d)
if(typeof this.areas[zba125].zad85d[z1efa8]!="function")
z56e60.areas[zba125].zad85d.push(this.areas[zba125].zad85d[z1efa8]);}for(var z01e88 in this.za429c)
z56e60.za429c[z01e88]=this.za429c[z01e88];for(var n=0;n<this.zca669.length;n++){z56e60.zca669.push(this.zca669[n]);z56e60.z83b73.push(this.z83b73[n]);z56e60.z6f1d0.push(this.z6f1d0[n]);z56e60.zee076.push(this.zee076[n]);z56e60.ze4319.push(this.ze4319[n]);}z56e60.z9ac48=this.z9ac48;return z56e60;},clear:function()
{this.zad85d={};for(var zba125 in this.areas)
this.areas[zba125].zad85d.length=0;this.za429c={};this.z9ac48=0;this.z83b73=[];this.zca669=[];this.z6f1d0=[];this.zee076=[];this.zaeff5=[];this.ze4319=[];this.zfa082=0;},z35c9f:function(zcc2ef)
{this.areas[zcc2ef]={};this.areas[zcc2ef].zad85d=[];},zab5c0:function(color,type,zcc2ef)
{var z1efa8={};var id=(this.zfa082<10?"0"+this.zfa082:this.zfa082);this.zfa082++;z1efa8.color=color;z1efa8.type=type;z1efa8.zba125=zcc2ef;this.zad85d[id]=z1efa8;this.areas[zcc2ef].zad85d.push(id);return z1efa8;},assign:function(z56e60)
{this.clear();this.zfa082=z56e60.zfa082;
for(var z1efa8 in z56e60.zad85d)
{this.zad85d[z1efa8]={};this.zad85d[z1efa8].color=z56e60.zad85d[z1efa8].color;this.zad85d[z1efa8].type=z56e60.zad85d[z1efa8].type;this.zad85d[z1efa8].zba125=z56e60.zad85d[z1efa8].zba125;}for(var zba125 in z56e60.areas)
{this.areas[zba125]={};this.areas[zba125].zad85d=[];for(var z1efa8 in z56e60.areas[zba125].zad85d)
if(typeof z56e60.areas[zba125].zad85d[z1efa8]!="function")
this.areas[zba125].zad85d.push(z56e60.areas[zba125].zad85d[z1efa8]);}for(var n=0;n<z56e60.zca669.length;n++){this.zca669.push(z56e60.zca669[n]);this.z83b73.push(z56e60.z83b73[n]);this.z6f1d0.push(z56e60.z6f1d0[n]);this.zee076.push(z56e60.zee076[n]);this.ze4319.push(z56e60.ze4319[n]);}for(var z01e88 in z56e60.za429c)
this.za429c[z01e88]=z56e60.za429c[z01e88];this.z9ac48=z56e60.z9ac48;}};})();z22e75={};z22e75.Base=function(){};z22e75.Base.prototype={initialize:function()
{},z16730:function(za14da)
{},z31a2a:function(zea6ec,where,za14da,z1432e)
{},z348a8:function(zea6ec,where,za14da)
{},z35e0a:function(z7834f){},z550e4:function(zba125,za14da)
{var z404ff=za14da.areas[zba125].zad85d;while(z404ff.length>0)
{var p=z404ff.pop();za14da.zad85d[p].zba125=null;}},z34d1b:function(zea6ec,where,za14da,z2ba00,z84c44)
{},zf5466:function(zea6ec,where,za14da,z2ba00,z84c44,text)
{},z4cc87:function(za14da,z739c1,text)
{for(var i=0;i<z739c1.length;i+=4)
{var zea6ec=z739c1.substring(i,i+2);var where=z739c1.substring(i+2,i+4);var z2ba00=null;if((z739c1.length>i+4)&&(z739c1.substring(i+4,i+5)=='('))
{var zac898=z739c1.indexOf(')',i+4);z2ba00=z739c1.substring(i+5,zac898);i+=z2ba00.length+2;
}this.zf5466(zea6ec,where,za14da,z2ba00,false,text);
}}};(function(){function z63dd2(array,x,y)
{if(array[x])
if(array[x][y])
return array[x][y];return null;}function z3a35b(n)
{if(n==0)
return 0;else if(n>0)
return 1;else
return-1;}z22e75.zde520=function(zba64d){if(!zba64d)
zba64d={};this.z4eb29=nvl(zba64d.z0f2c1,"full");


this.za9bee=nvl(zba64d.z1432e,"full");




this.ze829a='-';this.z9cc2a='-';this.z5b572=null;this.z5f76d=true;};
z22e75.zde520.prototype={
z4cc87:z22e75.Base.prototype.z4cc87,z550e4:z22e75.Base.prototype.z550e4,z35e0a:function(z7834f)
{for(var j=8;j>=1;j--)
for(var i=1;i<=8;i++)
{var zb4f8d=(String.fromCharCode(96+i)+j);z7834f.z35c9f(zb4f8d);}},zceef8:function(za14da)
{var zfb82d=new Array(9);
for(var i=1;i<=8;i++)
zfb82d[i]=new Array(null,null,null,null,null,null,null,null,null);
for(var z0a1f1 in za14da.zad85d)
{
{var zb4f8d=za14da.zad85d[z0a1f1].zba125;if(zb4f8d)
{var ze6321=zb4f8d.charCodeAt(0)-96;var zd09e0=zb4f8d.charCodeAt(1)-48;if(ze6321>=1&&ze6321<=8&&zd09e0>=1&&zd09e0<=8)
zfb82d[ze6321][zd09e0]=z0a1f1;}}}return zfb82d;},z16730:function(za14da)
{
if(this.z4eb29=="off"||this.z4eb29=="sideonly")
return{};
{var z614e3=0;var z94ba4=0;for(var z0a1f1 in za14da.zad85d)
{var z1efa8=za14da.zad85d[z0a1f1];if(z1efa8.type=="k"&&z1efa8.zba125)
if(z1efa8.color==1)
z614e3++;else if(z1efa8.color==2)
z94ba4++;}if(z614e3!=1||z94ba4!=1)
return null;}
{for(var z0a1f1 in za14da.zad85d)
{var z1efa8=za14da.zad85d[z0a1f1];if(z1efa8.type=="p"&&z1efa8.zba125)
{var z524fd=z1efa8.zba125.charCodeAt(1)-48;if(z524fd==1||z524fd==8)
return null;}}}if(this.z4eb29=="partial")
return{};if(this.z4eb29=="full")
{
var z25bb2=za14da.za429c["sm"];var zef618=null;for(var z0a1f1 in za14da.zad85d)
{var z1efa8=za14da.zad85d[z0a1f1];
{if(z1efa8.type=="k"&&z1efa8.color==3-z25bb2)
zef618=z1efa8.zba125;}}if(zef618)
if(this.z21214(zef618,z25bb2,za14da))
return null;
var z2b47a=za14da.za429c['cs'];var zee517=/[KkQq\-]{4}/;if(!z2b47a.match(zee517))
return null;}return{};},z31a2a:function(zea6ec,where,za14da,zc7ecf)
{var z1432e=zc7ecf?zc7ecf:this.za9bee;if(this.z5f76d)
return{};var z25bb2=za14da.za429c["sm"];var zc6329=za14da.za429c["cs"];var z8c488=za14da.zad85d[zea6ec].color;var zfb82d=this.zceef8(za14da);var z04fd5=za14da.zad85d[zea6ec].zba125;var z1ab69=z04fd5.charCodeAt(0)-96;var za38c6=z04fd5.charCodeAt(1)-48;var z8a349=where.charCodeAt(0)-96;var z1316b=where.charCodeAt(1)-48;var zb8017=za14da.zad85d[zea6ec].type;var ze661a=!zfb82d[z8a349][z1316b];var z79993=zfb82d[z8a349][z1316b]&&(za14da.zad85d[zfb82d[z8a349][z1316b]].color!=z8c488);var direction=z8c488==1?1:-1;var za73d0=false;var z4e2bd=false;if(z1ab69==z8a349&&za38c6==z1316b)
{return null;}
if(z25bb2!=z8c488&&z1432e!="off")
return null;if(z1432e=="off"||z1432e=="sideonly")
{if(zb8017=="p")
if((z1316b==1&&z8c488==2)||(z1316b==8&&z8c488==1))
return{z4e2bd:true};
return{};}var z2b10f=(z1432e=="minimal");var z221bd=(z1432e!="full");
if(zb8017=="p")
{if((z8a349==z1ab69)&&(z1316b==za38c6+direction)&&(ze661a||z2b10f))
za73d0=true;else if((z8a349==z1ab69)&&(z1316b==za38c6+direction+direction)&&(ze661a||z2b10f)
&&(!zfb82d[z1ab69][za38c6+direction]||z2b10f)
&&((z8c488==1&&za38c6==2)||(z8c488==2&&za38c6==7)))
za73d0=true;else if((z79993||z2b10f)&&(Math.abs(z8a349-z1ab69)==1)&&(z1316b==za38c6+direction))
za73d0=true;else if((ze661a)&&(Math.abs(z8a349-z1ab69)==1)&&(z1316b==za38c6+direction)
&&where==za14da.za429c["ep"])
za73d0=true;
if(za73d0&&((z1316b==1&&z8c488==2)||(z1316b==8&&z8c488==1)))
z4e2bd=true;}if(zb8017=="k")
{var z81a9b;var z2c987;if(z8c488==1)
{z81a9b=(zc6329.indexOf("k")!=-1||(z221bd&&zfb82d[8][1]&&za14da.zad85d[zfb82d[8][1]].type=='r'
&&za14da.zad85d[zfb82d[8][1]].color=='1'));z2c987=(zc6329.indexOf("q")!=-1||(z221bd&&zfb82d[1][1]&&za14da.zad85d[zfb82d[1][1]].type=='r'
&&za14da.zad85d[zfb82d[1][1]].color=='1'));}else
{z81a9b=(zc6329.indexOf("K")!=-1||(z221bd&&zfb82d[8][8]&&za14da.zad85d[zfb82d[8][8]].type=='r'
&&za14da.zad85d[zfb82d[8][8]].color=='2'));z2c987=(zc6329.indexOf("Q")!=-1||(z221bd&&zfb82d[1][8]&&za14da.zad85d[zfb82d[1][8]].type=='r'
&&za14da.zad85d[zfb82d[1][8]].color=='2'));}if((Math.abs(z8a349-z1ab69)<=1)&&(Math.abs(z1316b-za38c6)<=1)&&(ze661a||z79993||z2b10f))
za73d0=true;else if(z81a9b
&&((z8c488==1&&za38c6==1&&z1316b==1)||(z8c488==2&&za38c6==8&&z1316b==8))
&&(z1ab69==5)&&(z8a349==7)&&((ze661a)
&&(zfb82d[8][za38c6]&&za14da.zad85d[zfb82d[8][za38c6]].type=="r"&&za14da.zad85d[zfb82d[8][za38c6]].color==z8c488)
&&!zfb82d[6][za38c6]))
{var z90e2c=(z8c488==1)?"e1":"e8";var z03b3b=(z8c488==1)?"f1":"f8";var z0f446=(z8c488==1)?"g1":"g8";if((!this.z21214(z90e2c,3-z8c488,za14da)
&&!this.z21214(z03b3b,3-z8c488,za14da)
&&!this.z21214(z0f446,3-z8c488,za14da))||z2b10f)
{za73d0=true;}}else if(z2c987
&&((z8c488==1&&za38c6==1&&z1316b==1)||(z8c488==2&&za38c6==8&&z1316b==8))
&&(z1ab69==5)&&(z8a349==3)&&((ze661a)
&&(zfb82d[1][za38c6]&&za14da.zad85d[zfb82d[1][za38c6]].type=="r"&&za14da.zad85d[zfb82d[1][za38c6]].color==z8c488)
&&!zfb82d[4][za38c6]&&!zfb82d[2][za38c6]))
{var z90e2c=(z8c488==1)?"e1":"e8";var z03b3b=(z8c488==1)?"d1":"d8";var z0f446=(z8c488==1)?"c1":"c8";if((!this.z21214(z90e2c,3-z8c488,za14da)
&&!this.z21214(z03b3b,3-z8c488,za14da)
&&!this.z21214(z0f446,3-z8c488,za14da))||z2b10f)
{za73d0=true;}}}if(zb8017=="n")
{if((ze661a||z79993||z2b10f)
&&((Math.abs(z8a349-z1ab69)==1&&Math.abs(z1316b-za38c6)==2)
||(Math.abs(z8a349-z1ab69)==2&&Math.abs(z1316b-za38c6)==1)))
za73d0=true;}if(zb8017=="r"||zb8017=="q")
{if(ze661a||z79993||z2b10f)
{var z7c193=z3a35b(z8a349-z1ab69);var z65c9b=z3a35b(z1316b-za38c6);if(z65c9b==0)
{var i=z1ab69+z7c193;while(i!=z8a349)
{if(zfb82d[i][za38c6]&&!z2b10f)
break;i+=z7c193;}if(i==z8a349)
za73d0=true;}else if(z7c193==0)
{var j=za38c6+z65c9b;while(j!=z1316b)
{if(zfb82d[z1ab69][j]&&!z2b10f)
break;j+=z65c9b;}if(j==z1316b)
za73d0=true;}}}if(zb8017=="b"||zb8017=="q")
{if(ze661a||z79993||z2b10f)
{var z7c193=z3a35b(z8a349-z1ab69);var z65c9b=z3a35b(z1316b-za38c6);if(z7c193!=0&&z65c9b!=0&&Math.abs(z8a349-z1ab69)==Math.abs(z1316b-za38c6))
{var i=z1ab69+z7c193;var j=za38c6+z65c9b;while(i!=z8a349&&j!=z1316b)
{if(zfb82d[i][j]&&!z2b10f)
break;i+=z7c193;j+=z65c9b;}if(i==z8a349&&j==z1316b)
za73d0=true;}}}if(za73d0&&z1432e=="full")
{
this.zf5466(zea6ec,where,za14da,"",true);var zef618=null;for(var z0a1f1 in za14da.zad85d)
{var z1efa8=za14da.zad85d[z0a1f1];
{if(z1efa8.type=="k"&&z1efa8.color==z8c488)
zef618=z1efa8.zba125;}}if(zef618)
if(this.z21214(zef618,3-z8c488,za14da))
za73d0=false;this.z34d1b(zea6ec,where,za14da,"",true);

}var result=(za73d0)?{}:null;if(result&&z4e2bd)
result.z4e2bd=true;return result;},z77be0:function()
{
return "Wke1Wqd1Wra1Wrh1Wbc1Wbf1Wnb1Wng1Wpa2Wpb2Wpc2Wpd2Wpe2Wpf2Wpg2Wph2Bke8Bqd8Bra8Brh8Bbc8Bbf8Bnb8Bng8Bpa7Bpb7Bpc7Bpd7Bpe7Bpf7Bpg7Bph7";},z34d1b:function(zea6ec,where,za14da,z2ba00,z84c44)
{if(!za14da.zca669.length)
return;
var z83b73=za14da.z83b73.pop();var zca669=za14da.zca669.pop();var z6f1d0=za14da.z6f1d0.pop();var zee076=za14da.zee076.pop();var ze4319=za14da.ze4319.pop();var from=zca669;var move=from+where;za14da.areas[from].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125=from;za14da.zad85d[zea6ec].type=z83b73;
za14da.areas[where].zad85d.length=0;if(z6f1d0)
if(za14da.zad85d[zea6ec].type=='p'&&zee076==where)
{
}else
{za14da.areas[where].zad85d.push(z6f1d0);za14da.zad85d[z6f1d0].zba125=where;}if(this.z5f76d)
return;
if(!z84c44)
{za14da.za429c["sm"]=3-za14da.za429c["sm"];za14da.z9ac48--;}za14da.za429c["ep"]=zee076;if(za14da.zad85d[zea6ec].type=="k")
{if(move=="e1g1")
this.z34d1b(za14da.areas["f1"].zad85d[0],"f1",za14da,"",true);else if(move=="e1c1")
this.z34d1b(za14da.areas["d1"].zad85d[0],"d1",za14da,"",true);else if(move=="e8g8")
this.z34d1b(za14da.areas["f8"].zad85d[0],"f8",za14da,"",true);else if(move=="e8c8")
this.z34d1b(za14da.areas["d8"].zad85d[0],"d8",za14da,"",true);}else if(za14da.zad85d[zea6ec].type=="p")
{if(zee076!="-"&&where==zee076&&z6f1d0)
{var ze45e7=1*(zee076.substring(1));if(za14da.zad85d[zea6ec].color==1)
ze45e7--;else
ze45e7++;var z1b28d=zee076.substring(0,1)+ze45e7;za14da.areas[z1b28d].zad85d.push(z6f1d0);za14da.zad85d[z6f1d0].zba125=z1b28d;}}za14da.za429c["cs"]=ze4319;},zf5466:function(zea6ec,where,za14da,z2ba00,z84c44,text)
{var from=za14da.zad85d[zea6ec].zba125;var move=from+where;var z79993=(za14da.areas[where].zad85d.length>0);var z7367f=null;za14da.z83b73.push(za14da.zad85d[zea6ec].type);za14da.zca669.push(from);za14da.z6f1d0.push(za14da.areas[where].zad85d[0]);za14da.zee076.push(za14da.za429c["ep"]);za14da.ze4319.push(za14da.za429c["cs"]);if(from)
this.z550e4(from,za14da);this.z550e4(where,za14da);za14da.areas[where].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125=where;if(this.z5f76d)
return;if(!z84c44)
{za14da.za429c["sm"]=3-za14da.za429c["sm"];za14da.z9ac48++;}
var zbbb3e=za14da.za429c["ep"];za14da.za429c["ep"]="-";if(za14da.zad85d[zea6ec].type=="k")
{var z83b73=za14da.z83b73.pop();var zca669=za14da.zca669.pop();var z6f1d0=za14da.z6f1d0.pop();var zee076=za14da.zee076.pop();var ze4319=za14da.ze4319.pop();if(move=="e1g1")
this.zf5466(za14da.areas["h1"].zad85d[0],"f1",za14da,"",true);else if(move=="e1c1")
this.zf5466(za14da.areas["a1"].zad85d[0],"d1",za14da,"",true);
else if(move=="e8g8")
this.zf5466(za14da.areas["h8"].zad85d[0],"f8",za14da,"",true);else if(move=="e8c8")
this.zf5466(za14da.areas["a8"].zad85d[0],"d8",za14da,"",true);za14da.z83b73.push(z83b73);za14da.zca669.push(zca669);za14da.z6f1d0.push(z6f1d0);za14da.zee076.push(zee076);za14da.ze4319.push(ze4319);}else if(za14da.zad85d[zea6ec].type=="p")
{if(zbbb3e!="-"&&where==zbbb3e)
{var ze45e7=1*(zbbb3e.substring(1));if(za14da.zad85d[zea6ec].color==1)
ze45e7--;else
ze45e7++;var z8f743=zbbb3e.substring(0,1)+ze45e7;za14da.z6f1d0.pop();za14da.z6f1d0.push(za14da.areas[z8f743].zad85d[0]);this.z550e4(z8f743,za14da);z79993=true;}var z36c20=from.substring(1);var z42ee4=where.substring(1);
if((za14da.zad85d[zea6ec].color==1&&z36c20==2&&z42ee4==4)
||(za14da.zad85d[zea6ec].color==2&&z36c20==7&&z42ee4==5))
{var ze45e7=(za14da.zad85d[zea6ec].color==1)?3:6;var z91493=where.substring(0,1)+ze45e7;za14da.za429c["ep"]=z91493;}
if((z42ee4==1&&za14da.zad85d[zea6ec].color==2)||(z42ee4==8&&za14da.zad85d[zea6ec].color==1))
{z7367f="q";if(z2ba00)
z7367f=z2ba00;za14da.zad85d[zea6ec].type=z7367f;}}var z2b47a=za14da.za429c["cs"];if(z2b47a!="----")
{var z678c9=false;var z55d00=false;var zaacf5=false;var z9f094=false;if(za14da.zad85d[zea6ec].type=="k")
{if(za14da.zad85d[zea6ec].color==1)
{z678c9=true;z55d00=true;}else
{zaacf5=true;z9f094=true;}}else if(za14da.zad85d[zea6ec].type=="r")
{if(from=="h1")
z678c9=true;else if(from=="a1")
z55d00=true;else if(from=="h8")
zaacf5=true;else if(from=="a8")
z9f094=true;}
if(z79993){if(where=="h1")
z678c9=true;else if(where=="a1")
z55d00=true;else if(where=="h8")
zaacf5=true;else if(where=="a8")
z9f094=true;}if(z678c9)
z2b47a=z2b47a.replace('k','-');if(z55d00)
z2b47a=z2b47a.replace('q','-');if(zaacf5)
z2b47a=z2b47a.replace('K','-');if(z9f094)
z2b47a=z2b47a.replace('Q','-');za14da.za429c["cs"]=z2b47a;}if(text)
alert("not implemented");},z21214:function(zcc2ef,z999fc,za14da)
{var ze2a53=zcc2ef.charCodeAt(0)-96;var zcbb79=zcc2ef.charCodeAt(1)-48;var direction=z999fc==1?1:-1;var zfb82d=this.zceef8(za14da);var zea6ec;
zea6ec=z63dd2(zfb82d,ze2a53-1,zcbb79-direction);if(zea6ec&&za14da.zad85d[zea6ec].type=="p"&&za14da.zad85d[zea6ec].color==z999fc)
return true;zea6ec=z63dd2(zfb82d,ze2a53+1,zcbb79-direction);if(zea6ec&&za14da.zad85d[zea6ec].type=="p"&&za14da.zad85d[zea6ec].color==z999fc)
return true;
for(var j=-1;j<=1;j++)
for(var i=-1;i<=1;i++)
if(i!=0||j!=0)
{zea6ec=z63dd2(zfb82d,ze2a53+i,zcbb79+j);if(zea6ec&&za14da.zad85d[zea6ec].type=="k"&&za14da.zad85d[zea6ec].color==z999fc)
return true;}
for(var i=0;i<8;i++)
{var x;var y;switch(i)
{case 0:x=1;y=-2;break;case 1:x=2;y=-1;break;case 2:x=2;y=1;break;case 3:x=1;y=2;break;case 4:x=-1;y=2;break;case 5:x=-2;y=1;break;case 6:x=-2;y=-1;break;case 7:x=-1;y=-2;}zea6ec=z63dd2(zfb82d,ze2a53+x,zcbb79+y);if(zea6ec&&za14da.zad85d[zea6ec].type=="n"&&za14da.zad85d[zea6ec].color==z999fc)
return true;}
for(var i=0;i<8;i++)
{var x;var y;switch(i)
{case 0:x=0;y=-1;break;case 1:x=1;y=-1;break;case 2:x=1;y=0;break;case 3:x=1;y=1;break;case 4:x=0;y=1;break;case 5:x=-1;y=1;break;case 6:x=-1;y=0;break;case 7:x=-1;y=-1;}var cx=ze2a53;var cy=zcbb79;while(true)
{cx+=x;cy+=y;if(cx<1||cx>8||cy<1||cy>8)
break;zea6ec=z63dd2(zfb82d,cx,cy);if(zea6ec)
{if(za14da.zad85d[zea6ec].color==z999fc)
{var z02256=za14da.zad85d[zea6ec].type;if(x==0||y==0)
{if(z02256=="r"||z02256=="q")
{return true;}
}else
{if(z02256=="b"||z02256=="q")
{return true;}
}}break;}}}return false;},za8a58:function(z7834f)
{
for(var z1efa8 in z7834f.zad85d)
if(z7834f.zad85d[z1efa8].zba125)
{for(var zba125 in z7834f.areas)
if(this.z31a2a(z1efa8,zba125,z7834f))
return true;}return false;},z57ebf:function(z1efa8,z7834f){var z739c1=[];if(typeof z1efa8!=='undefined'&&z7834f.zad85d[z1efa8].zba125){for(var zba125 in z7834f.areas){if(this.z31a2a(z1efa8,zba125,z7834f)){z739c1[z739c1.length]=zba125;}}}return z739c1;},zea856:function(zdd34b)
{this.z5f76d=zdd34b;}};z4654e=new z22e75.zde520();})();(function(){if(typeof(z63dd2)=='undefined'){function z63dd2(array,x,y)
{if(array[x])
if(array[x][y])
return array[x][y];return null;}}if(typeof(z3a35b)=='undefined'){function z3a35b(n)
{if(n==0)
return 0;else if(n>0)
return 1;else
return-1;}}z22e75.zb6118=function(zba64d){if(!zba64d)
zba64d={};this.z4eb29=nvl(zba64d.z0f2c1,"full");


this.za9bee=nvl(zba64d.z1432e,"full");




this.ze829a='-';this.z9cc2a='-';this.z5b572=null;this.z5f76d=true;};
z22e75.zb6118.prototype={
z4cc87:z22e75.Base.prototype.z4cc87,z550e4:z22e75.Base.prototype.z550e4,z35e0a:function(z7834f)
{for(var j=8;j>=1;j--)
for(var i=1;i<=8;i++)
{var zb4f8d=(String.fromCharCode(96+i)+j);z7834f.z35c9f(zb4f8d);}},zceef8:function(za14da)
{var zfb82d=new Array(9);
for(var i=1;i<=8;i++)
zfb82d[i]=new Array(null,null,null,null,null,null,null,null,null);
for(var z0a1f1 in za14da.zad85d)
{
{var zb4f8d=za14da.zad85d[z0a1f1].zba125;if(zb4f8d)
{var ze6321=zb4f8d.charCodeAt(0)-96;var zd09e0=zb4f8d.charCodeAt(1)-48;if(ze6321>=1&&ze6321<=8&&zd09e0>=1&&zd09e0<=8)
zfb82d[ze6321][zd09e0]=z0a1f1;}}}return zfb82d;},z16730:function(za14da)
{
if(this.z4eb29=="off"||this.z4eb29=="sideonly")
return{};
{var z614e3=0;var z94ba4=0;for(var z0a1f1 in za14da.zad85d)
{var z1efa8=za14da.zad85d[z0a1f1];if(z1efa8.type=="k"&&z1efa8.zba125)
if(z1efa8.color==1)
z614e3++;else if(z1efa8.color==2)
z94ba4++;}if(z614e3!=1||z94ba4!=1)
return null;}
{for(var z0a1f1 in za14da.zad85d)
{var z1efa8=za14da.zad85d[z0a1f1];if(z1efa8.type=="p"&&z1efa8.zba125)
{var z524fd=z1efa8.zba125.charCodeAt(1)-48;if(z524fd==1||z524fd==8)
return null;}}}if(this.z4eb29=="partial")
return{};if(this.z4eb29=="full")
{
var z25bb2=za14da.za429c["sm"];var zef618=null;for(var z0a1f1 in za14da.zad85d)
{var z1efa8=za14da.zad85d[z0a1f1];
{if(z1efa8.type=="k"&&z1efa8.color==3-z25bb2)
zef618=z1efa8.zba125;}}if(zef618)
if(this.z21214(zef618,z25bb2,za14da))
return null;
var z2b47a=za14da.za429c['cs'];var zee517=/[A-Ha-hKkQq\-]{4}/;if(!z2b47a.match(zee517))
return null;}return{};},z31a2a:function(zea6ec,where,za14da,zc7ecf)
{var z1432e=zc7ecf?zc7ecf:this.za9bee;if(this.z5f76d)
return{};var z25bb2=za14da.za429c["sm"];var zc6329=za14da.za429c["cs"];var z8c488=za14da.zad85d[zea6ec].color;var zfb82d=this.zceef8(za14da);var z04fd5=za14da.zad85d[zea6ec].zba125;var z8e187=where;
var z1ab69=z04fd5.charCodeAt(0)-96;var za38c6=z04fd5.charCodeAt(1)-48;var z8a349=where.charCodeAt(0)-96;var z1316b=where.charCodeAt(1)-48;var zb8017=za14da.zad85d[zea6ec].type;var ze661a=!zfb82d[z8a349][z1316b];var z79993=zfb82d[z8a349][z1316b]&&(za14da.zad85d[zfb82d[z8a349][z1316b]].color!=z8c488);var direction=z8c488==1?1:-1;var za73d0=false;var z4e2bd=false;if(z1ab69==z8a349&&za38c6==z1316b)
{return null;}
if(z25bb2!=z8c488&&z1432e!="off")
return null;if(z1432e=="off"||z1432e=="sideonly")
{if(zb8017=="p")
if((z1316b==1&&z8c488==2)||(z1316b==8&&z8c488==1))
return{z4e2bd:true};return{};}var z2b10f=(z1432e=="minimal");if(zb8017=="p")
{if((z8a349==z1ab69)&&(z1316b==za38c6+direction)&&(ze661a||z2b10f))
za73d0=true;else if((z8a349==z1ab69)&&(z1316b==za38c6+direction+direction)&&(ze661a||z2b10f)
&&(!zfb82d[z1ab69][za38c6+direction]||z2b10f)
&&((z8c488==1&&za38c6==2)||(z8c488==2&&za38c6==7)))
za73d0=true;else if((z79993||z2b10f)&&(Math.abs(z8a349-z1ab69)==1)&&(z1316b==za38c6+direction))
za73d0=true;else if((ze661a)&&(Math.abs(z8a349-z1ab69)==1)&&(z1316b==za38c6+direction)
&&where==za14da.za429c["ep"])
za73d0=true;
if(za73d0&&((z1316b==1&&z8c488==2)||(z1316b==8&&z8c488==1)))
z4e2bd=true;}if(zb8017=="k")
{var z81a9b;var z2c987;var z7717f;var z1a4ce;var zeb348;if(z8c488==1)
{
for(var n=1;n<=8;n++){if(zfb82d[n][1]&&za14da.zad85d[zfb82d[n][1]].type=="k"&&za14da.zad85d[zfb82d[n][1]].color==1){z1a4ce=n;break;}}
for(var n=1;n<=8;n++){if(zfb82d[n][1]&&za14da.zad85d[zfb82d[n][1]].type=="r"
&&za14da.zad85d[zfb82d[n][1]].color==1){if(!z7717f&&n<z1a4ce)
z7717f=n;if(!zeb348&&n>z1a4ce)
zeb348=n;}}z81a9b=(zc6329.charAt(0)!='-'||z2b10f);z2c987=(zc6329.charAt(1)!='-'||z2b10f);
for(var n=1;n<zc6329.length;n++){charCode=zc6329.charCodeAt(n);if(charCode>=97&&charCode<=104)
if(charCode-96<z1a4ce)
z7717f=charCode-96;else
zeb348=charCode-96;}}else
{
for(var n=1;n<=8;n++){if(zfb82d[n][8]&&za14da.zad85d[zfb82d[n][8]].type=="k"&&za14da.zad85d[zfb82d[n][8]].color==2){z1a4ce=n;break;}}for(var n=1;n<=8;n++){if(zfb82d[n][8]&&za14da.zad85d[zfb82d[n][8]].type=="r"&&za14da.zad85d[zfb82d[n][8]].color==2){if(!z7717f&&n<z1a4ce)
z7717f=n;if(!zeb348&&n>z1a4ce)
zeb348=n;}}z81a9b=(zc6329.charAt(2)!='-'||z2b10f);z2c987=(zc6329.charAt(3)!='-'||z2b10f);
for(var n=1;n<zc6329.length;n++){charCode=zc6329.charCodeAt(n);if(charCode>=65&&charCode<=72)
if(charCode-64<z1a4ce)
z7717f=charCode-64;else
zeb348=charCode-64;}}


var za591e=z8a349;if((Math.abs(z8a349-z1ab69)>1)&&((z8c488==1&&za38c6==1&&z1316b==1)||(z8c488==2&&za38c6==8&&z1316b==8))){if(z8a349<z1ab69){
z8a349=z7717f?z7717f:z8a349;where=String.fromCharCode(96+z8a349)+(z8c488==1?"1":"8");}else{z8a349=zeb348?zeb348:z8a349;where=String.fromCharCode(96+z8a349)+(z8c488==1?"1":"8");}}if((Math.abs(za591e-z1ab69)<=1)&&(Math.abs(z1316b-za38c6)<=1)&&(ze661a||z79993||z2b10f))
za73d0=true;else if(((z8c488==1&&za38c6==1&&z1316b==1)||(z8c488==2&&za38c6==8&&z1316b==8))
&&((z8a349==zeb348&&z81a9b)||(z8a349==z7717f&&z2c987))&&(za14da.zad85d[zfb82d[z8a349][z1316b]]&&za14da.zad85d[zfb82d[z8a349][z1316b]].type=="r"&&za14da.zad85d[zfb82d[z8a349][z1316b]].color==z8c488))
{
var z997c2,z76564;if(z8a349==z7717f){


z997c2=Math.min(za591e,Math.min(Math.min(z1ab69,z8a349),3));z76564=Math.max(za591e,Math.max(Math.max(z1ab69,z8a349),4));}else if(z8a349==zeb348){z997c2=Math.min(za591e,Math.min(Math.min(z1ab69,z8a349),6));z76564=Math.max(za591e,Math.max(Math.max(z1ab69,z8a349),7));}var zf077c=z8c488==1?1:8;var z29a12=false;for(var n=z997c2;n<=z76564;n++){if(zfb82d[n][zf077c]){var z1efa8=za14da.zad85d[zfb82d[n][zf077c]];
if(zfb82d[n][zf077c]!=zea6ec&&z1efa8.zba125!=where)
z29a12=true;else
if(z1efa8.color!=z8c488)
z74486=true;}}
var z63b48,zfc4f1;if(z8a349==z7717f){z63b48=Math.min(z1a4ce,3);zfc4f1=Math.max(z1a4ce,3);}else if(z8a349==zeb348){z63b48=Math.min(z1a4ce,7);zfc4f1=Math.max(z1a4ce,7);}var z34653=false;for(var n=z63b48;n<=zfc4f1;n++){if(this.z21214(String.fromCharCode(96+n)+String(zf077c),3-z8c488,za14da))
z34653=true;}if(!z29a12&&!z34653)
za73d0=true;}}if(zb8017=="n")
{if((ze661a||z79993||z2b10f)
&&((Math.abs(z8a349-z1ab69)==1&&Math.abs(z1316b-za38c6)==2)
||(Math.abs(z8a349-z1ab69)==2&&Math.abs(z1316b-za38c6)==1)))
za73d0=true;}if(zb8017=="r"||zb8017=="q")
{if(ze661a||z79993||z2b10f)
{var z7c193=z3a35b(z8a349-z1ab69);var z65c9b=z3a35b(z1316b-za38c6);if(z65c9b==0)
{var i=z1ab69+z7c193;while(i!=z8a349)
{if(zfb82d[i][za38c6]&&!z2b10f)
break;i+=z7c193;}if(i==z8a349)
za73d0=true;}else if(z7c193==0)
{var j=za38c6+z65c9b;while(j!=z1316b)
{if(zfb82d[z1ab69][j]&&!z2b10f)
break;j+=z65c9b;}if(j==z1316b)
za73d0=true;}}}if(zb8017=="b"||zb8017=="q")
{if(ze661a||z79993||z2b10f)
{var z7c193=z3a35b(z8a349-z1ab69);var z65c9b=z3a35b(z1316b-za38c6);if(z7c193!=0&&z65c9b!=0&&Math.abs(z8a349-z1ab69)==Math.abs(z1316b-za38c6))
{var i=z1ab69+z7c193;var j=za38c6+z65c9b;while(i!=z8a349&&j!=z1316b)
{if(zfb82d[i][j]&&!z2b10f)
break;i+=z7c193;j+=z65c9b;}if(i==z8a349&&j==z1316b)
za73d0=true;}}}if(za73d0&&z1432e=="full")
{
this.zf5466(zea6ec,z8e187,za14da,"",true);var zef618=null;for(var z0a1f1 in za14da.zad85d)
{var z1efa8=za14da.zad85d[z0a1f1];
{if(z1efa8.type=="k"&&z1efa8.color==z8c488)
zef618=z1efa8.zba125;}}if(zef618)
if(this.z21214(zef618,3-z8c488,za14da))
za73d0=false;this.z34d1b(zea6ec,z8e187,za14da,"",true);

}var result=(za73d0)?{}:null;if(result&&z4e2bd)
result.z4e2bd=true;return result;},z77be0:function()
{
return "Wke1Wqd1Wra1Wrh1Wbc1Wbf1Wnb1Wng1Wpa2Wpb2Wpc2Wpd2Wpe2Wpf2Wpg2Wph2Bke8Bqd8Bra8Brh8Bbc8Bbf8Bnb8Bng8Bpa7Bpb7Bpc7Bpd7Bpe7Bpf7Bpg7Bph7";},z34d1b:function(zea6ec,where,za14da,z2ba00,z84c44)
{if(!za14da.zca669.length)
return;
var z83b73=za14da.z83b73.pop();var zca669=za14da.zca669.pop();var z6f1d0=za14da.z6f1d0.pop();var zee076=za14da.zee076.pop();var zaeff5=za14da.zaeff5.pop();var ze4319=za14da.ze4319.pop();var from=zca669;var move=from+where;if(!zaeff5){za14da.areas[from].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125=from;za14da.zad85d[zea6ec].type=z83b73;
za14da.areas[where].zad85d.length=0;if(z6f1d0)
if(za14da.zad85d[zea6ec].type=='p'&&zee076==where){
}else{za14da.areas[where].zad85d.push(z6f1d0);za14da.zad85d[z6f1d0].zba125=where;}}if(this.z5f76d)
return;
if(!z84c44)
{za14da.za429c["sm"]=3-za14da.za429c["sm"];za14da.z9ac48--;}za14da.za429c["ep"]=zee076;if(zaeff5)
{
if(where.charCodeAt(0)>from.charCodeAt(0)){if(where.charAt(1)=='1'){
var z1d620=za14da.areas['f1'].zad85d[0];za14da.areas[from].zad85d.length=0;za14da.areas[zaeff5].zad85d.length=0;za14da.areas['f1'].zad85d.length=0;za14da.areas['g1'].zad85d.length=0;za14da.zad85d[z1d620].zba125=zaeff5;za14da.areas[zaeff5].zad85d.push(z1d620);za14da.zad85d[zea6ec].zba125=zca669;za14da.areas[from].zad85d.push(zea6ec);}else if(where.charAt(1)=='8'){
var z1d620=za14da.areas['f8'].zad85d[0];za14da.areas[from].zad85d.length=0;za14da.areas[zaeff5].zad85d.length=0;za14da.areas['f8'].zad85d.length=0;za14da.areas['g8'].zad85d.length=0;za14da.zad85d[z1d620].zba125=zaeff5;za14da.areas[zaeff5].zad85d.push(z1d620);za14da.zad85d[zea6ec].zba125=zca669;za14da.areas[from].zad85d.push(zea6ec);}}else{
if(where.charAt(1)=='1'){
var z1d620=za14da.areas['d1'].zad85d[0];za14da.areas[from].zad85d.length=0;za14da.areas[zaeff5].zad85d.length=0;za14da.areas['d1'].zad85d.length=0;za14da.areas['c1'].zad85d.length=0;za14da.zad85d[z1d620].zba125=zaeff5;za14da.areas[zaeff5].zad85d.push(z1d620);za14da.zad85d[zea6ec].zba125=zca669;za14da.areas[from].zad85d.push(zea6ec);}else if(where.charAt(1)=='8'){
var z1d620=za14da.areas['d8'].zad85d[0];za14da.areas[from].zad85d.length=0;za14da.areas[zaeff5].zad85d.length=0;za14da.areas['d8'].zad85d.length=0;za14da.areas['c8'].zad85d.length=0;za14da.zad85d[z1d620].zba125=zaeff5;za14da.areas[zaeff5].zad85d.push(z1d620);za14da.zad85d[zea6ec].zba125=zca669;za14da.areas[from].zad85d.push(zea6ec);}}}else if(za14da.zad85d[zea6ec].type=="p")
{if(zee076!="-"&&where==zee076)
{var ze45e7=1*(zee076.substring(1));if(za14da.zad85d[zea6ec].color==1)
ze45e7--;else
ze45e7++;var z1b28d=zee076.substring(0,1)+ze45e7;za14da.areas[z1b28d].zad85d.push(z6f1d0);za14da.zad85d[z6f1d0].zba125=z1b28d;}}za14da.za429c["cs"]=ze4319;},zf5466:function(zea6ec,where,za14da,z2ba00,z84c44,text)
{var from=za14da.zad85d[zea6ec].zba125;var move=from+where;var z79993=(za14da.areas[where].zad85d.length>0);var z011eb=null;if(z79993)
z011eb=za14da.zad85d[za14da.areas[where].zad85d[0]];var z7367f=null;
var z301cc=(za14da.zad85d[zea6ec].type=="k"&&z79993&&z011eb.type=="r"&&z011eb.color==za14da.zad85d[zea6ec].color)&&from.charAt(1)==where.charAt(1)&&((from.charAt(1)=='1'&&za14da.zad85d[zea6ec].color==1)||(from.charAt(1)=='8'&&za14da.zad85d[zea6ec].color==2));
var z2b47a=za14da.za429c["cs"];var zbe4c6=z2b47a.charAt(0);var zf5d9b=z2b47a.charAt(1);var z0d65a=z2b47a.charAt(2);var z6d655=z2b47a.charAt(3);var zf077c=za14da.zad85d[zea6ec].color==1?'1':'8';var z5aab9=za14da.zad85d[zea6ec].color==1?zbe4c6:z0d65a;var z50ffc=za14da.zad85d[zea6ec].color==1?zf5d9b:z6d655;var ret={};if(z5aab9.toLowerCase()=='k'){
for(var n=8;n>=1;n--){if(za14da.areas[String.fromCharCode(96+n)+zf077c].zad85d.length){var z4c917=za14da.zad85d[za14da.areas[String.fromCharCode(96+n)+zf077c].zad85d[0]];if(z4c917.type=='r'&&z4c917.color==za14da.zad85d[zea6ec].color){z5aab9=String.fromCharCode(96+n);if(z4c917.color==2)
z5aab9=z5aab9.toUpperCase();break;}}}}if(z50ffc.toLowerCase()=='q'){
for(var n=1;n<=8;n++){if(za14da.areas[String.fromCharCode(96+n)+zf077c].zad85d.length){var z4c917=za14da.zad85d[za14da.areas[String.fromCharCode(96+n)+zf077c].zad85d[0]];if(z4c917.type=='r'&&z4c917.color==za14da.zad85d[zea6ec].color){z50ffc=String.fromCharCode(96+n);if(z4c917.color==2)
z50ffc=z50ffc.toUpperCase();break;}}}}

if(!z301cc){z301cc=(za14da.zad85d[zea6ec].type=="k")&&(from.charAt(1)==where.charAt(1))&&((from.charAt(1)=='1'&&za14da.zad85d[zea6ec].color==1)||(from.charAt(1)=='8'&&za14da.zad85d[zea6ec].color==2))&&(Math.abs(from.charCodeAt(0)-where.charCodeAt(0))>1);if(z301cc){
z7bb35='-';if(from.charCodeAt(0)>where.charCodeAt(0)){
if(za14da.zad85d[zea6ec].color==1){
z7bb35=z50ffc;}else{
z7bb35=z50ffc.toLowerCase();}}else{
if(za14da.zad85d[zea6ec].color==1){
z7bb35=z5aab9;}else{
z7bb35=z5aab9.toLowerCase();}}if(z7bb35!='-'){where=z7bb35.toLowerCase()+where.charAt(1);
var move=from+where;var z79993=(za14da.areas[where].zad85d.length>0);var z011eb=null;if(z79993)
z011eb=za14da.zad85d[za14da.areas[where].zad85d[0]];}else{
z301cc=false;}}}za14da.z83b73.push(za14da.zad85d[zea6ec].type);za14da.zca669.push(from);za14da.zaeff5.push(z301cc?where:null);za14da.z6f1d0.push(za14da.areas[where].zad85d[0]);za14da.zee076.push(za14da.za429c["ep"]);za14da.ze4319.push(za14da.za429c["cs"]);if(from)
this.z550e4(from,za14da);if(!z301cc)
this.z550e4(where,za14da);if(!z301cc){za14da.areas[where].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125=where;}if(this.z5f76d)
return;if(!z84c44)
{za14da.za429c["sm"]=3-za14da.za429c["sm"];za14da.z9ac48++;}
var zbbb3e=za14da.za429c["ep"];za14da.za429c["ep"]="-";if(za14da.zad85d[zea6ec].type=="k")
{if(z301cc){
if(Number(where.charCodeAt(0))<Number(from.charCodeAt(0))){
if(za14da.zad85d[zea6ec].color==1){
var z1d620=za14da.areas[where].zad85d[0];this.z550e4(where,za14da);this.z550e4('c1',za14da);za14da.areas['c1'].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125='c1';this.z550e4('d1',za14da);za14da.areas['d1'].zad85d.push(z1d620);za14da.zad85d[z1d620].zba125='d1';ret.zbd834=from;ret.moveTo='c1';}else{var z1d620=za14da.areas[where].zad85d[0];this.z550e4(where,za14da);this.z550e4('c8',za14da);za14da.areas['c8'].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125='c8';this.z550e4('d8',za14da);za14da.areas['d8'].zad85d.push(z1d620);za14da.zad85d[z1d620].zba125='d8';ret.zbd834=from;ret.moveTo='c8';}}else{
if(za14da.zad85d[zea6ec].color==1){
var z1d620=za14da.areas[where].zad85d[0];this.z550e4(where,za14da);this.z550e4('g1',za14da);za14da.areas['g1'].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125='g1';this.z550e4('f1',za14da);za14da.areas['f1'].zad85d.push(z1d620);za14da.zad85d[z1d620].zba125='f1';ret.zbd834=from;ret.moveTo='g1';}else{var z1d620=za14da.areas[where].zad85d[0];this.z550e4(where,za14da);this.z550e4('g8',za14da);za14da.areas['g8'].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125='g8';this.z550e4('f8',za14da);za14da.areas['f8'].zad85d.push(z1d620);za14da.zad85d[z1d620].zba125='f8';ret.zbd834=from;ret.moveTo='g8';}}}}else if(za14da.zad85d[zea6ec].type=="p")
{if(zbbb3e!="-"&&where==zbbb3e)
{var ze45e7=1*(zbbb3e.substring(1));if(za14da.zad85d[zea6ec].color==1)
ze45e7--;else
ze45e7++;var z8f743=zbbb3e.substring(0,1)+ze45e7;za14da.z6f1d0.pop();za14da.z6f1d0.push(za14da.areas[z8f743].zad85d[0]);this.z550e4(z8f743,za14da);z79993=true;}var z36c20=from.substring(1);var z42ee4=where.substring(1);
if((za14da.zad85d[zea6ec].color==1&&z36c20==2&&z42ee4==4)
||(za14da.zad85d[zea6ec].color==2&&z36c20==7&&z42ee4==5))
{var ze45e7=(za14da.zad85d[zea6ec].color==1)?3:6;var z91493=where.substring(0,1)+ze45e7;za14da.za429c["ep"]=z91493;}
if((z42ee4==1&&za14da.zad85d[zea6ec].color==2)||(z42ee4==8&&za14da.zad85d[zea6ec].color==1))
{z7367f="q";if(z2ba00)
z7367f=z2ba00;za14da.zad85d[zea6ec].type=z7367f;}}
if(z2b47a!="----")
{if(za14da.zad85d[zea6ec].type=="k")
{if(za14da.zad85d[zea6ec].color==1)
{zbe4c6='-';zf5d9b='-';}else
{z0d65a='-';z6d655='-';}z2b47a=zbe4c6+zf5d9b+z0d65a+z6d655;za14da.za429c["cs"]=z2b47a;}else if(za14da.zad85d[zea6ec].type=="r")
{if(from==z5aab9+"1"){
zbe4c6='-';zf5d9b=z50ffc;}else if(from==z50ffc+"1"){
zf5d9b='-';zbe4c6=z5aab9;}else if(from==z5aab9.toLowerCase()+"8"){
z0d65a='-';z6d655=z50ffc;}else if(from==z50ffc.toLowerCase()+"8"){
z6d655='-';z0d65a=z5aab9;}z2b47a=zbe4c6+zf5d9b+z0d65a+z6d655;za14da.za429c["cs"]=z2b47a;}}if(text)
alert("not implemented");return ret;},z21214:function(zcc2ef,z999fc,za14da)
{var ze2a53=zcc2ef.charCodeAt(0)-96;var zcbb79=zcc2ef.charCodeAt(1)-48;var direction=z999fc==1?1:-1;var zfb82d=this.zceef8(za14da);var zea6ec;
zea6ec=z63dd2(zfb82d,ze2a53-1,zcbb79-direction);if(zea6ec&&za14da.zad85d[zea6ec].type=="p"&&za14da.zad85d[zea6ec].color==z999fc)
return true;zea6ec=z63dd2(zfb82d,ze2a53+1,zcbb79-direction);if(zea6ec&&za14da.zad85d[zea6ec].type=="p"&&za14da.zad85d[zea6ec].color==z999fc)
return true;
for(var j=-1;j<=1;j++)
for(var i=-1;i<=1;i++)
if(i!=0||j!=0)
{zea6ec=z63dd2(zfb82d,ze2a53+i,zcbb79+j);if(zea6ec&&za14da.zad85d[zea6ec].type=="k"&&za14da.zad85d[zea6ec].color==z999fc)
return true;}
for(var i=0;i<8;i++)
{var x;var y;switch(i)
{case 0:x=1;y=-2;break;case 1:x=2;y=-1;break;case 2:x=2;y=1;break;case 3:x=1;y=2;break;case 4:x=-1;y=2;break;case 5:x=-2;y=1;break;case 6:x=-2;y=-1;break;case 7:x=-1;y=-2;}zea6ec=z63dd2(zfb82d,ze2a53+x,zcbb79+y);if(zea6ec&&za14da.zad85d[zea6ec].type=="n"&&za14da.zad85d[zea6ec].color==z999fc)
return true;}
for(var i=0;i<8;i++)
{var x;var y;switch(i)
{case 0:x=0;y=-1;break;case 1:x=1;y=-1;break;case 2:x=1;y=0;break;case 3:x=1;y=1;break;case 4:x=0;y=1;break;case 5:x=-1;y=1;break;case 6:x=-1;y=0;break;case 7:x=-1;y=-1;}var cx=ze2a53;var cy=zcbb79;while(true)
{cx+=x;cy+=y;if(cx<1||cx>8||cy<1||cy>8)
break;zea6ec=z63dd2(zfb82d,cx,cy);if(zea6ec)
{if(za14da.zad85d[zea6ec].color==z999fc)
{var z02256=za14da.zad85d[zea6ec].type;if(x==0||y==0)
{if(z02256=="r"||z02256=="q")
{return true;}
}else
{if(z02256=="b"||z02256=="q")
{return true;}
}}break;}}}return false;},za8a58:function(z7834f)
{
for(var z1efa8 in z7834f.zad85d)
if(z7834f.zad85d[z1efa8].zba125)
{for(var zba125 in z7834f.areas)
if(this.z31a2a(z1efa8,zba125,z7834f))
return true;}return false;},z57ebf:function(z1efa8,z7834f)
{var z739c1=[];if(typeof z1efa8!=='undefined'&&z7834f.zad85d[z1efa8].zba125){for(var zba125 in z7834f.areas){if(this.z31a2a(z1efa8,zba125,z7834f)){z739c1[z739c1.length]=zba125;}}}return z739c1;},zea856:function(zdd34b)
{this.z5f76d=zdd34b;}};z818ea=new z22e75.zb6118();})();z8026b=function(){this.zdef58=/^\s*\[(.+)\s+\"(.*)\"\]\s*$/;this.z355e8=/^(([0-9]+(\.|\.\.\.|\.\ \.\.\.))?)\s*((([KQRBN]?)([a-h]?[1-8]?)x?([a-h][1-8])(=?([QRBN]))?|O-O-O|O-O|0-0-0|0-0)(\+|#)?)((\!|\?)?(\!|\?)?)?$/;this.z4915e=/^\{(?:.|[\n\r])*?\}$/;this.ze3695=/\;(?:.|[\n\r])*?\n/;this.z6a350=/\(([^\)]+)\)/;this.z78304=/(1-0)|(0-1)|(1\/2-1\/2)|\*/;this.z25e5d=/^\$([0-9]+)$/;this.z98555=/\s/;this.z31297=/\[(.+)\s+\"(.*)\"\]|([0-9]+(\.|\.\.\.|\.\ \.\.\.))?\s*(([KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](=?[QRBN])?|O-O-O|O-O|0-0-0|0-0)(\+|#)?)((\!|\?)?(\!|\?)?)?|\{(?:.|[\n\r])*?\}|\;(?:.|[\n\r])*?\n|((1-0)|(0-1)|(1\/2-1\/2)|\*)|\$[0-9]+|\s|\S/g;
this.z06022=1;this.z6c642=2;this.za4632=null;this.z7a080=null;this.z57356=null;this.zaf719=null;this.z7cb13=null;this.state=null;this.options={};this.zcd559=new z22e75.zde520();this.zcd559.zea856(false);this.z7834f=new z7f42b("pgntemp");

this.zcd559.z35e0a(this.z7834f);};z8026b.prototype={z71fae:function()
{return this.z736cb;},parse:function(zd8198,z9b3d8,z103a1,options)
{this.z736cb=null;this.z9b3d8=z9b3d8;this.z7f994=z9b3d8;this.z7a080=0;this.z47347=true;this.z57356=null;
this.zaf719=null;this.z7cb13=new Array();this.state=this.z06022;this.z4a0e1=null;this.options=nvl(options,{});var a=zd8198.match(this.z31297);z9689c(this.z7834f,this.z7f994.z2e5e5[this.z7a080].zd1deb);if(!a)
return null;for(var i=0;i<a.length;i++)
{var za2f04=a[i];var result=false;if(za2f04.match(this.z355e8)){if(this.z47347){this.z47347=false;
this.z9b3d8.z8ec4b=Number(za2f04.substr(0,za2f04.indexOf('.')));if(za2f04.indexOf('...')!=-1)

this.z7f994.z193c4=true;}result=this.z5c381(za2f04);}else if(za2f04.match(this.zdef58))result=this.z4d8c1(za2f04,z103a1);else if(za2f04.match(this.z4915e)||za2f04.match(this.ze3695))result=this.z8dd76(za2f04);else if(za2f04.match(this.z78304))result=this.ze6ab2(za2f04,z103a1);else if(za2f04.match(this.z25e5d))result=this.z792a0(za2f04);else if(za2f04.match(this.z98555))result=true;else if(za2f04=="(")result=this.z599a8();else if(za2f04==")")result=this.za38e5();if(!result)
{var s="";for(var j=-2;j<=2;j++)
if(i+j>=0&&i+j<a.length)
s+=a[i+j];this.z736cb="\""+s+"\" - error around \""+a[i]+"\".";return null;}}
if(this.z9b3d8.z2e5e5.length==1){var z13b6b=this.z9b3d8.z2e5e5[0].zd1deb.split(' ');var z25bb2=z13b6b[1];if(z25bb2.toLowerCase()=='b')
this.z9b3d8.z193c4=true;}
if(this.z7cb13.length!=1)
return null;
if(this.state==this.z06022&&!z103a1["FEN"])
return null;return true;},z4d8c1:function(za2f04,z103a1)
{if(this.state!=this.z06022)
return false;var parts=this.zdef58.exec(za2f04);var tagName=parts[1];var za7ff8=parts[2];
if(tagName.toLowerCase()=='eco')
tagName='ECO';else if(tagName.toLowerCase()=='fen')
tagName='FEN';else if(tagName.toLowerCase()=='whiteelo')
tagName='WhiteElo';else if(tagName.toLowerCase()=='blackelo')
tagName='BlackElo';else if(tagName.toLowerCase()=='timecontrol')
tagName='TimeControl';else
tagName=tagName.substring(0,1).toUpperCase()+tagName.substring(1).toLowerCase();if(tagName=="Date"){if(za7ff8.length==4)
za7ff8=za7ff8+".??.??";}z103a1[tagName]=za7ff8;
if(tagName.toUpperCase()=="FEN")
{
this.z7f994.z2e5e5[this.z7a080].zd1deb=za7ff8;if(!z9689c(this.z7834f,za7ff8)){return false;}else{if(!this.zcd559.z16730(this.z7834f))
return false;var z13b6b=za7ff8.split(' ');if(z13b6b[5])
this.z9b3d8.z8ec4b=Number(z13b6b[5]);}}if(tagName=="Variant"){za7ff8=za7ff8.split(' ').join('');if(za7ff8.toLowerCase()=='chess960'){za7ff8='Chess960';
z103a1[tagName]=za7ff8;this.zcd559=null;this.zcd559=new z22e75.zb6118();this.zcd559.zea856(false);}else{
za7ff8='Chess';}}return true;},z8dd76:function(za2f04)
{var z80123=nvl(za2f04.substring(1,za2f04.length-1),"").replace(/^\s+/,'').replace(/\s+$/,'');var z9ca9d;var parts=this.z6a350.exec(z80123);if(parts&&parts[1])
{z9ca9d=parts[1];
}this.z7f994.z2e5e5[this.z7a080].z80123=z80123;this.z7f994.z2e5e5[this.z7a080].z9ca9d=z9ca9d;this.state=this.z6c642;return true;},ze6ab2:function(za2f04,z103a1)
{if(!z103a1["Result"])
z103a1["Result"]=za2f04;this.state=this.z6c642;this.z7f994.z32e0f=z103a1["Result"];return true;},z599a8:function()
{this.z7cb13.push(this.z7a080);z9689c(this.z7834f,this.z7f994.z2e5e5[this.z7a080-1].zd1deb);this.z7f994=this.z9b3d8.z2e6da(this.z7f994);this.z7a080=0;this.state=this.z6c642;return true;},za38e5:function()
{this.z7a080=this.z7cb13.pop();if(this.z7f994.z5dff4)
this.z7f994=this.z7f994.z5dff4;z9689c(this.z7834f,this.z7f994.z2e5e5[this.z7a080].zd1deb);this.state=this.z6c642;return true;},z792a0:function(za2f04)
{var parts=this.z25e5d.exec(za2f04);
var zf98c9=1*(parts[1]);if(zf98c9<0||zf98c9>255)
return false;this.z7f994.z2e5e5[this.z7a080].zf98c9=zf98c9;this.state=this.z6c642;return true;},z19bdc:function(za2f04)
{var zd1deb=za2f04.substring(1,za2f04.length-1);this.z7f994.z2e5e5[this.z7a080].zd1deb=zd1deb;var z13b6b=zd1deb.split(' ');if(z13b6b[5])
this.z9b3d8.z8ec4b=Number(z13b6b[5]);},z5c381:function(za2f04)
{
var z68390=this.z4a9d0(this.z7a080,za2f04,this.z7834f);if(!z68390)
return false;this.zc0faf(this.z7834f,z68390);if(z68390.zf98c9){this.z7f994.z2e5e5[this.z7a080].zf98c9=z68390.zf98c9;}this.state=this.z6c642;return true;},z4a9d0:function(za6d94,za2f04,za14da)
{var result=new Object();result.z02256=null;result.z8c488=null;
result.z0ebf2=null;result.z2c8b9=null;result.ze3b1d=null;result.zd1deb=null;result.z03a92=null;result.zf98c9=null;var parts=this.z355e8.exec(za2f04);var z193c4=this.z7f994.z193c4;var z1f9e1=(za6d94%2==0&&!this.z7f994.z193c4)||(za6d94%2==1&&this.z7f994.z193c4)?1:2;if(/O-O-O|0-0-0/.exec(parts[5]))
{result.z02256='k';result.z8c488=z1f9e1;
var z0ff79;for(var z70602 in za14da.zad85d){var z1efa8=za14da.zad85d[z70602];if(z1efa8.color==result.z8c488&&z1efa8.type=='k'){z0ff79=z1efa8.zba125;break;}}result.z0ebf2=z0ff79;if(z0ff79.charAt(0)=='b')
result.z2c8b9='a'+z0ff79.charAt(1);else
result.z2c8b9=String.fromCharCode(z0ff79.charCodeAt(0)-2)+z0ff79.charAt(1);result.ze3b1d=null;}else if(/O-O|0-0/.exec(parts[5]))
{
result.z02256='k';result.z8c488=z1f9e1;
var z0ff79;for(var z70602 in za14da.zad85d){var z1efa8=za14da.zad85d[z70602];if(z1efa8.color==result.z8c488&&z1efa8.type=='k'){z0ff79=z1efa8.zba125;break;}}result.z0ebf2=z0ff79;if(z0ff79.charAt(0)=='g')
result.z2c8b9='h'+z0ff79.charAt(1);else
result.z2c8b9=String.fromCharCode(z0ff79.charCodeAt(0)+2)+z0ff79.charAt(1);result.ze3b1d=null;}else
{var z27c13=parts[6];var zb8e1a=parts[7];var zfd5f8=parts[8];var zaf9e4=parts[10];var z986be=parts[12];switch(z27c13)
{case '':result.z02256='p';break;case 'K':result.z02256='k';break;case 'Q':result.z02256='q';break;case 'R':result.z02256='r';break;case 'B':result.z02256='b';break;case 'N':result.z02256='n';break;default:return null;}result.z8c488=z1f9e1;result.z2c8b9=zfd5f8;result.z0ebf2=(zb8e1a)?zb8e1a:((result.z02256=='p')?result.z2c8b9.substring(0,1):'');if(!zaf9e4)
{result.ze3b1d=null;}else
{switch(zaf9e4)
{case 'Q':result.ze3b1d='q';break;case 'R':result.ze3b1d='r';break;case 'B':result.ze3b1d='b';break;case 'N':result.ze3b1d='n';break;default:return null;}}if(z986be)
{
if(z986be=="!")
result.zf98c9=1;else if(z986be=="?")
result.zf98c9=2;else if(z986be=="!!")
result.zf98c9=3;else if(z986be=="??")
result.zf98c9=4;else if(z986be=="!?")
result.zf98c9=5;else if(z986be=="?!")
result.zf98c9=6;else
return null;}}result.z03a92=parts[4];return result;},zc0faf:function(z7834f,z68390)
{var z5a41f=false;var zfa7f4=[];var found=null;for(p in z7834f.zad85d)

{var z1efa8=z7834f.zad85d[p];if(!z1efa8.zba125)continue;if(z1efa8.type==z68390.z02256)
if(z1efa8.color==z68390.z8c488)
if(z1efa8.zba125.indexOf(z68390.z0ebf2)!=-1)

{zfa7f4.push(p);}}if(zfa7f4.length==0)
{return false;}else if(zfa7f4.length==1&&!this.options.zd022b)
{found=zfa7f4[0];}else
{for(var i=0;i<zfa7f4.length;i++)
{var p=zfa7f4[i];if(this.zcd559.z31a2a(p,z68390.z2c8b9,z7834f))
{found=p;break;}}}if(z7834f.zad85d[found]){
z68390.z03a92=z68390.z03a92.replace("0-0-0","O-O-O");z68390.z03a92=z68390.z03a92.replace("0-0","O-O");this.z7f994.z67c68(z7834f.zad85d[found].zba125,z68390.z2c8b9,z7834f,z68390.ze3b1d,this.zcd559,true,"",z68390.z03a92);this.z7a080++;return true;}else{return false;}}};var z265d2=new z8026b();(function(){if(typeof(z51432)=='undefined'){z08e47={};z51432=function(z85d5d,z7834f,zba64d)
{if(typeof(z85d5d)=='string'){
this.z85d5d=z85d5d;this.za31e4=document.getElementById(this.z85d5d);}else{
this.z85d5d=z85d5d.id;this.za31e4=z85d5d;}this.z44f8e=this.za31e4;
myEvent.registerComponent(this.z85d5d);this.zba64d=zba64d?zba64d:{};var z2b2ad;var zd7ad1=this.za31e4.childNodes[0];if(zd7ad1&&zd7ad1.data)
{z2b2ad=zd7ad1.data.replace(/^\s+/,'').replace(/\s+$/,'');if(z2b2ad!="")
this.zba64d=eval("("+z2b2ad+")");}this.z7834f=nvl(z7834f,new z7f42b());
this.z074d9=nvl(this.zba64d["enabled"],true);this.z5cf37=[];this.z41465={size:0};this.z52f27={size:0};this.zfc921={};
this.z27781=[];
this.z1386a=false;this.size=nvl(this.zba64d["size"],45);
if(this.zba64d['boardSize']!=null)
this.size=this.zba64d['boardSize'];if(this.size=='auto')
this.size=0;this.ze323a=nvl(this.zba64d["dragAndDrop"],false);
this.z24380=nvl(this.zba64d["viewOnly"],!this.ze323a);if(this.zba64d['viewOnly']!=null)
this.ze323a=!this.zba64d['viewOnly'];this.zba7a5=nvl(this.zba64d["colorScheme"],"blue");if(z6a299[this.zba64d["pieceStyle"]])
this.zba64d["pieceStyle"]=z6a299[this.zba64d["pieceStyle"]];this.z70c6b=nvl(this.zba64d["pieceStyle"],"classic");this.z0ce53=nvl(this.zba64d["soundTheme"],"default");this.z02e31=nvl(this.zba64d["boardFlip"],false);this.z6a56d=nvl(this.zba64d["boardCoords"],false);this.z782f0=nvl(this.zba64d["boardCoordsPosition"],"in");if(!this.z6a56d)
this.z782f0='in';this.zc9441=typeof(ChessPiece3dInfo[this.z70c6b])!='undefined';this.zba64d["real3D"]=nvl(this.zba64d["real3D"],false);this.zba64d["noFlash"]=nvl(this.zba64d["noFlash"],false);this.ze9f06=null;
this.ze3e39=null;this.zcc381=false;this.z39b23=nvl(this.zba64d["showHoverSquare"],false);this.z094b2='#FFF';this.z95296='40';
this.za3477=nvl(this.zba64d["rightClickMarkSquare"],false);this.z6e1fb=nvl(this.zba64d["rightClickDragPoints"],false);this.za9c5a="#f42a32";this.z2bb99=nvl(this.zba64d["highlightLegalMoves"],false);this.zdab90="#FFF";
this.z5dfbd=false;this.z9a8ba=false;this.z4b834=false;this.zbd74f=null;
this.z36890=false;this.zfed09={};
this.ze16a5=0;this.ze70ad=0;this.z4a892=nvl(this.zba64d["moveAnimationSpeed"],"normal");this.z297a3={"standard":0.2,"normal":0.2,"bullet":0,"blitz":0.1};this.z086e8=0;this.z80320=false;
this.z64df9=false;

this.za31e4.chessBoard=this;
this.zce04d={};this.z911aa=[];
this.z15eec=true;
this.zd8c9e("onRenderReady");this.zd8c9e("onStartDragging");this.zd8c9e("onDragProgress");this.zd8c9e("onDropPiece");this.zd8c9e("onThrowPiece");this.zd8c9e("onClickPiece");this.zd8c9e("onClickArea");this.zd8c9e("onRightClickPiece");this.zd8c9e("onRightClickArea");this.zd8c9e("onBuild");this.zd8c9e("onRefresh");this.zd8c9e("onMarkSquare");this.zd8c9e("onClearSquare");this.zd8c9e("onBlinkSquare");this.zd8c9e("onSetSquareColor");this.zd8c9e("onMarkArrow");this.zd8c9e("onClearArrow");this.zd8c9e("onClearMarkings");this.zd8c9e("onSetPieceStyle");this.zd8c9e("onSetColorScheme");this.zd8c9e("onSetBoardSize");this.zd8c9e("onSetBoardCoords");this.zd8c9e("onSetBoardCoordsPosition");this.zd8c9e("onSetBoardFlip");this.zd8c9e("onShowPromotionWindow");this.zd8c9e("onHidePromotionWindow");this.zd8c9e("onPromotionPieceSelected");this.zd8c9e("onMoveAnimation");this.zd8c9e("onAfterMoveAnimated");this.zd8c9e("onSetViewOnly");this.zd8c9e("onHidePieces");this.zd8c9e("onShowPieces");this.zd8c9e("onDynamicResize");
this.attachEvent("onRenderReady",function(){this.z4303b();},this);this.z770c7();this.build();};z51432.prototype={z770c7:function()
{var name='DOM';
var z430e5=window['swfobject']?window['swfobject']['getFlashPlayerVersion']():{'major':0,'minor':0};var z8739c=false;if(typeof z08e47['Flash3D']!=='undefined')
{z8739c=z08e47['Flash3D'].isSupported(z430e5);}if(this.zba64d["real3D"])
{if(typeof z08e47['WebGL3D']!=='undefined'&&z95894.z8c277.z6516d)
{name='WebGL3D';}else if(typeof z08e47['Flash3D']!=='undefined'&&!this.zba64d["noFlash"]&&z8739c)
{name='Flash3D';}else
{
this.z70c6b="classic";this.size=0;
this.zba64d["real3D"]=false;}}
if(this.zba64d["forceBoardRender"]&&typeof z08e47[this.zba64d["forceBoardRender"]]!=='undefined')
{name=this.zba64d["forceBoardRender"];}this.z9bf17=name;this.z659fc=new z08e47[name](this);},
zd8c9e:function(zc19fd,context)
{context=context||this;if(this.zce04d)
this.zce04d[zc19fd]={context:context,stack:[]};},attachEvent:function(evt,zc5b37,context)
{if(this.zce04d)
{if(this.zce04d[evt]){

this.detachEvent(evt,zc5b37);this.zce04d[evt].stack.push({callback:zc5b37,context:context
});}}return[evt,zc5b37];},detachEvent:function()
{var evt,zc5b37;if(typeof(arguments[0])=='object'&&arguments[0].length)
{evt=arguments[0][0];zc5b37=arguments[0][1];}else
{evt=arguments[0];zc5b37=arguments[1];}if(this.zce04d)
{if(this.zce04d[evt]){for(var n=0;n<this.zce04d[evt].stack.length;n++){if(this.zce04d[evt].stack[n].callback==zc5b37){this.zce04d[evt].stack.splice(n,1);break;}}}}},fireEvent:function(evt,z3bd19)
{
var z73e1f={"onSetBoardSize":true,"onDynamicResize":true};
z3bd19=typeof(z3bd19)=='object'?z3bd19:{};z3bd19["customEventName"]=evt;if(z3bd19.returnValue===undefined)
z3bd19.returnValue=true;
if(!this.zce04d||!this.zce04d[evt]||!this.zce04d[evt].stack.length)
return z3bd19;
var args=[z3bd19];for(var n=0;n<this.zce04d[evt].stack.length;n++)
{var context=this.zce04d[evt].stack[n].context||this.zce04d[evt].context;if(this.z15eec||z73e1f[evt]===true)
{this.zce04d[evt].stack[n].callback.apply(context,args);}else
{this.z911aa.push({context:context,callback:this.zce04d[evt].stack[n].callback,args:args});}}return z3bd19;},z4303b:function()
{while(this.z911aa.length)
{var z2aed6=this.z911aa.shift();z2aed6.callback.apply(z2aed6.context,z2aed6.args);}
for(var zcc2ef in this.z41465)
{if(zcc2ef!='size'&&this.z41465[zcc2ef].z2f7d7)
{delete this.z41465[zcc2ef];this.z41465.size--;}}for(var zcc2ef in this.z52f27)
{if(zcc2ef!='size'&&this.z52f27[zcc2ef].z2f7d7)
{delete this.z52f27[zcc2ef];this.z52f27.size--;}}for(var n=0;n<this.z27781.length;n++)
{if(this.z27781[n].z2f7d7)
{this.z27781[n].splice(n,1);n--;}}},z533ad:function()
{this.z15eec=false;},zd4da7:function()
{if(!this.z15eec)
{this.z15eec=true;this.fireEvent("onRenderReady");}},
build:function()
{if(!this.zcc381)
{this.fireEvent("onBuild");this.zcc381=true;if(!this.z659fc.options.z2677a)
{
var zc7b94=this.z44f8e;if(z95894.z8c277.za5f7d)
{myEvent.observe(zc7b94,"touchstart",z36b44.z7e559);}else
{myEvent.observe(zc7b94,"mousedown",z36b44.z7e559);}myEvent.observe(zc7b94,"click",z36b44.ze12d8);myEvent.observe(zc7b94,"contextmenu",z36b44.zfa052);}}},refresh:function(node)
{var e={"moveNode":node};if(node)
{e["fromAreaId"]=node.z6205b;e["toAreaId"]=node.zb0082;e["additionalInfo"]=node.z2ba00;e["moveText"]=node.z03a92;e["fen"]=node.zd1deb;}this.fireEvent("onRefresh",e);},z1b466:function(z70c6b)
{if(z6a299[z70c6b])
z70c6b=z6a299[z70c6b];if(z70c6b!=this.z70c6b&&ChessPieceStyle[z70c6b]!=null)
{this.z70c6b=z70c6b;this.zc9441=typeof(ChessPiece3dInfo[this.z70c6b])!='undefined';this.fireEvent("onSetPieceStyle");}},z6609a:function(zba7a5)
{if(zba7a5!=this.zba7a5&&ChessColorScheme[zba7a5]!=null)
{var e={"oldColorScheme":this.zba7a5};this.zba7a5=zba7a5;this.fireEvent("onSetColorScheme",e);}},zbf689:function(z6a56d)
{if(z6a56d!=this.z6a56d)
{this.z6a56d=z6a56d;if(this.z782f0=='out'&&!z6a56d)
this.zff1a5(false);this.fireEvent("onSetBoardCoords");}},zff1a5:function(zfe225)
{if((zfe225&&this.z782f0=='in')||(!zfe225&&this.z782f0=='out'))
{if(zfe225&&!this.z6a56d)
this.zbf689(true);this.z782f0=zfe225&&this.z6a56d?'out':'in';this.fireEvent("onSetBoardCoordsPosition");}},z1bdeb:function(z38fe2)
{if(z38fe2!=this.size)
{if(z38fe2=="auto")
z38fe2=0;this.size=Number(z38fe2);this.fireEvent("onSetBoardSize");}},zbc5f9:function()
{this.fireEvent("onDynamicResize");},z24848:function(z02e31)
{if(z02e31!=this.z02e31)
{this.z02e31=z02e31;this.fireEvent("onSetBoardFlip");}},zae48c:function(z38e5f,z098d0)
{this.z36890=true;this.zfed09.z7c0b1=z38e5f;this.zfed09.z80882=z098d0;this.fireEvent("onShowPromotionWindow");},z1bd89:function()
{this.z36890=false;this.zfed09={};this.fireEvent("onHidePromotionWindow");},selectPromotionPiece:function(z02256)
{this.fireEvent("onPromotionPieceSelected",{"pieceType":z02256});this.z36890=false;},z02ba7:function(zcc2ef,color,z802da,ze5919,z52507)
{if(typeof(z802da)=='undefined')
z802da=false;var z4b0d0=z802da?this.z52f27:this.z41465;if(color!=null)
{if(!z4b0d0[zcc2ef])
z4b0d0[zcc2ef]={};z4b0d0[zcc2ef].z2f7d7=false;z4b0d0[zcc2ef].color=color;z4b0d0.size++;this.fireEvent("onMarkSquare",{"squareStack":z4b0d0,"areaId":zcc2ef,"color":color,"userGenerated":ze5919,"rightClicked":z802da,"legalMoveHint":z52507
});}else{this.z7690c(zcc2ef,z802da,ze5919);}},z7690c:function(zcc2ef,z802da,ze5919)
{if(typeof(z802da)=='undefined')
z802da=false;var z4b0d0=z802da?this.z52f27:this.z41465;if(z4b0d0[zcc2ef])
{this.fireEvent("onClearSquare",{"squareStack":z4b0d0,"areaId":zcc2ef,"userGenerated":ze5919,"rightClicked":z802da
});if(this.z15eec)
{delete z4b0d0[zcc2ef];z4b0d0.size--;}else
{z4b0d0[zcc2ef].z2f7d7=true;}}},ze8146:function(zcc2ef,color,count,z87fe4)
{this.z02ba7(zcc2ef,color);this.zfc921={interval:null,zcc2ef:zcc2ef,color:color,count:count*2,z87fe4:Math.floor(z87fe4/2)
};this.fireEvent("onBlinkSquare");},z4413a:function(z6205b,zb0082,ze5919)
{for(var n=0;n<this.z27781.length;n++)
{if(this.z27781[n].z6205b==z6205b&&this.z27781[n].zb0082==zb0082)
{return;
}}this.z27781.push({z6205b:z6205b,zb0082:zb0082});this.fireEvent("onMarkArrow",{"arrow":this.z27781[this.z27781.length-1],"userGenerated":ze5919});},z3019c:function(color,zcc2ef)
{this.fireEvent("onSetSquareColor",{"color":color,"areaId":zcc2ef});},z20ef8:function(z6205b,zb0082,ze5919)
{for(var n=0;n<this.z27781.length;n++)
{if(this.z27781[n].z6205b==z6205b&&this.z27781[n].zb0082==zb0082)
{this.fireEvent("onClearArrow",{"arrow":this.z27781[n],"userGenerated":ze5919});if(this.z15eec)
this.z27781.splice(n,1);else
this.z27781[n].z2f7d7=true;break;}}},z6b510:function()
{this.fireEvent("onClearMarkings");},setEnabled:function(zc2d78)
{this.z074d9=zc2d78;},ze0cab:function(z6205b,zb0082,zba64d)
{
zba64d=zba64d||{};var zbfdfc={};zbfdfc["fromAreaId"]=z6205b;zbfdfc["toAreaId"]=zb0082;zbfdfc["fileFrom"]=this.z02e31?(8-(z6205b.charCodeAt(0)-96)):(z6205b.charCodeAt(0)-97);zbfdfc["rankFrom"]=this.z02e31?(z6205b.charCodeAt(1)-49):(8-(z6205b.charCodeAt(1)-48));zbfdfc["fileTo"]=this.z02e31?(8-(zb0082.charCodeAt(0)-96)):(zb0082.charCodeAt(0)-97);zbfdfc["rankTo"]=this.z02e31?(zb0082.charCodeAt(1)-49):(8-(zb0082.charCodeAt(1)-48));
zbfdfc["animationInstance"]=z36b44.ze0dc1(this);var zb2214=typeof(this.z297a3[this.z4a892])!="undefined"?this.z297a3[this.z4a892]:this.z297a3["normal"];var ze626b=nvl(zba64d["animationSpeed"],z36b44.z72000.z69de0*zb2214);zbfdfc["animationInstance"].ze8f55=ze626b;zbfdfc["animationInstance"].z6205b=z6205b;zbfdfc["animationInstance"].zb0082=zb0082;zbfdfc["animationInstance"].options=zba64d;this.z5cf37.push(this.z074d9);if(!zba64d.zff6e6)
this.setEnabled(false);var z6a34c=new Date().getTime();var zc5c61=z95894.z8c277.z326bd||z95894.z8c277.z18df3;if((this.z086e8+(ze626b*1000*1.5))<z6a34c&&!this.z80320&&!this.z64df9&&!zc5c61&&ze626b)
{
this.fireEvent("onMoveAnimation",zbfdfc);this.z80320=true;}else
{
this.z68050();this.z65158(zbfdfc["animationInstance"]);this.z80320=false;}this.z086e8=z6a34c;},z65158:function(anim)
{var cache=this.z5cf37.pop();if(typeof cache==='undefined'){cache=true;}this.setEnabled(cache);setTimeout(function(){anim.zc8405.fireEvent("onAfterMoveAnimated",{"animationInstance":anim});anim.zc8405.z80320=false;},20);},z68050:function()
{var ret=false;for(var n=0;n<z36b44.z7f400.length;n++)
{var zea6c9=z36b44.z7f400[n];if(zea6c9.cancelable&&zea6c9.z03df1===false)
{ret=true;if(zea6c9.z56a67)
zea6c9.z56a67(zea6c9);z36b44.z7f400.splice(n,1);n--;}}if(!z36b44.z7f400.length)
z36b44.z72000.z3b879=false;return ret;},zb3a64:function()
{if(this.z9a8ba)
{this.z9a8ba=false;this.z4b834=false;this.z5dfbd=false;this.z659fc.z7a842();if(!this.z659fc.options.z2677a)
{if(z95894.z8c277.za5f7d)
{myEvent.stopObserving(document,'touchmove',z36b44.z5f302);myEvent.stopObserving(document,'touchend',z36b44.zaa601);}else
{myEvent.stopObserving(document,'mousemove',z36b44.z5f302);myEvent.stopObserving(document,'mouseup',z36b44.zaa601);}}z36b44.z92068.z3dafa=null;}else if(this.z4b834)
{this.z9a8ba=false;this.z4b834=false;this.z5dfbd=false;if(!this.z659fc.options.z2677a)
{if(z95894.z8c277.za5f7d)
{myEvent.stopObserving(document,'touchmove',z36b44.z5f302);myEvent.stopObserving(document,'touchend',z36b44.zaa601);}else
{myEvent.stopObserving(document,'mousemove',z36b44.z5f302);myEvent.stopObserving(document,'mouseup',z36b44.zaa601);}}z36b44.z92068.z3dafa=null;}},z35c19:function(z1208e)
{if(z1208e!=this.z24380)
{this.z24380=z1208e;this.ze323a=(this.z24380==false);this.fireEvent("onSetViewOnly");}},zb6405:function()
{if(!this.z64df9)
{this.z64df9=true;this.fireEvent("onHidePieces");}},z0051d:function()
{if(this.z64df9)
{this.z64df9=false;this.fireEvent("onShowPieces");}},z8abf0:function()
{
var z2c91b=this.z44f8e;this.ze16a5=0;this.ze70ad=0;var z87288=z95894.z8c277.z18df3;var zae073=z95894.z8c277.zae073;var zc0225=z95894.z8c277.z326bd;var z521f5=z95894.z8c277.z521f5;
if(zc0225||z521f5)
{this.ze16a5=1;this.ze70ad=1;}if(z87288)
this.ze16a5=1;while(z2c91b)
{this.ze16a5+=z2c91b.offsetLeft;
if((zae073)&&z2c91b.style.borderLeftWidth&&!isNaN(parseInt(z2c91b.style.borderLeftWidth)))
this.ze16a5+=parseInt(z2c91b.style.borderLeftWidth);this.ze70ad+=z2c91b.offsetTop;if((zae073||z87288)&&z2c91b.style.borderTopWidth&&!isNaN(parseInt(z2c91b.style.borderTopWidth)))
this.ze70ad+=parseInt(z2c91b.style.borderTopWidth);if(z2c91b.scrollTop)
this.ze70ad-=z2c91b.scrollTop;if(z2c91b.scrollLeft)
this.ze16a5-=z2c91b.scrollLeft;z2c91b=z2c91b.offsetParent;if(z2c91b&&(z2c91b.tagName.toUpperCase()=='BODY'||z2c91b.tagName.toUpperCase()=='HTML'))
z2c91b=null;}}};}})();(function(){
if(typeof(z36b44)=='undefined'){z36b44={z72000:{z493f4:{zc9877:false
},z8352a:z95894.z8c277.z2071e?30:10,zbe1b6:null,z54aa9:function(pos){return(-Math.cos(pos*Math.PI)/2)+0.5;},z69de0:1,zd732d:null,z3b879:false,initialized:false,options:{},init:function(options)
{if(this.initialized)
{return;}options=options||{};
options.zeccc8=options.zeccc8&&z95894.z8c277.z379d4;this.options=z19c31({},z36b44.z72000.z493f4,options);this.initialized=true;},start:function()
{if(!z36b44.z72000.z3b879)
{if(z36b44.z72000.options.zeccc8)
{z36b44.zdbbb1();}else
{z36b44.z72000.zbe1b6=requestAnimationFrame(z36b44.z68107);}z36b44.z72000.z3b879=true;}},stop:function()
{if(z36b44.z72000.z3b879)
{cancelAnimationFrame(z36b44.z72000.zbe1b6);z36b44.z72000.zbe1b6=null;z36b44.z72000.z3b879=false;}},z57f27:function()
{requestAnimationFrame(z36b44.z68107);}},z7f400:[],ze0dc1:function(z93a29)
{z36b44.z7f400[z36b44.z7f400.length]={ze8f55:z36b44.z72000.z69de0,
zeb68e:null,
z30c9d:null,
zc8405:z93a29,
z03df1:false,
z3c564:null,
z56a67:null,
cancelable:true
};return z36b44.z7f400[z36b44.z7f400.length-1];},zdbbb1:function()
{var stack=z36b44.z7f400;for(var i=0,zec34a;i<stack.length;++i)
{zec34a=stack[i];if(zec34a.z03df1)
{
stack.splice(i,1);i--;}else
{
zec34a.transition();}}},z68107:function(z40a96)
{if(typeof(z40a96)=='undefined')
z40a96=new Date().getTime();for(var n=0;n<z36b44.z7f400.length;n++)
{var zea6c9=z36b44.z7f400[n];
if(!zea6c9.zeb68e)
{zea6c9.zeb68e=z40a96;zea6c9.z30c9d=zea6c9.zeb68e+(zea6c9.ze8f55*1000);}if(!zea6c9.z03df1)
{zea6c9.z3c564(zea6c9,z40a96);}else
{zea6c9.z56a67(zea6c9);z36b44.z7f400.splice(n,1);n--;}}if(!z36b44.z7f400.length)
z36b44.z72000.stop();else
z36b44.z72000.z57f27();},z92068:{z326bd:(navigator.userAgent.indexOf('MSIE 8')!=-1),z3dafa:null,
za52be:null,
x:0,
y:0,
z84efe:0,
zc17fe:0,
z4b8ec:0,
z3407c:0,
z8760a:0,
z04ce2:0,
delay:20,
z32e03:true,
zece39:0,
zef3c2:0
},z7e559:function(e)
{if(!e)
e=window.event;
var z6490c=myEvent.findComponent(e);var obj=z6490c?z6490c.chessBoard:null;var target=myEvent.getTarget(e);
if(obj)
obj.z8abf0();
var pointer=myEvent.getPointXY(e);var z071ef=obj.z659fc.z7e90b(pointer);e["colRow"]=z071ef;
e["pointer"]=pointer;e["fromAreaId"]=z36b44.z92068.z6205b=obj.z659fc.z32f28(z071ef);
obj.z6d5f7=e["fromAreaId"]==="";
if(!obj||obj.z24380)
{myEvent.preventDefault(e,true);return false;}else if(!obj.z659fc.ze49f5(e)&&e.button!=2)
{
if(obj&&(obj.z27781.length||obj.z52f27.size)&&e["fromAreaId"])
{e["userGenerated"]=true;obj.fireEvent("onClearMarkings",e);}myEvent.preventDefault(e,true);return false;}
if(obj.z36890)
return false;


var size=obj.size||obj.z659fc.zf741a();z36b44.z92068.z84efe=obj.ze16a5;z36b44.z92068.zc17fe=obj.ze16a5+(size*8);z36b44.z92068.z4b8ec=obj.ze70ad;z36b44.z92068.z3407c=obj.ze70ad+(size*8);z36b44.z92068.zece39=(document.documentElement.scrollLeft||document.body.scrollLeft);z36b44.z92068.zef3c2=(document.documentElement.scrollTop||document.body.scrollTop);if(!obj.z9a8ba&&e.button!=2)
{if((obj.z27781.length||obj.z52f27.size||!obj.z074d9)&&(z071ef.z70fb8>0&&z071ef.z70fb8<=8)&&(z071ef.ze45e7>0&&z071ef.ze45e7<=8))
{e["userGenerated"]=true;obj.fireEvent("onClearMarkings",e);myEvent.preventDefault(e,true);return false;}obj.z5dfbd=false;obj.z9a8ba=false;obj.z4b834=false;z36b44.z92068.z3dafa=obj;z36b44.z92068.x=pointer.x;z36b44.z92068.y=pointer.y;obj.fireEvent("onStartDragging",e);if(!obj.z659fc.options.z2677a)
{if(z95894.z8c277.za5f7d)
{myEvent.observe(document,'touchmove',z36b44.z5f302);myEvent.observe(document,'touchend',z36b44.zaa601);}else
{myEvent.observe(document,'mousemove',z36b44.z5f302);myEvent.observe(document,'mouseup',z36b44.zaa601);}}}else
{if((z95894.z8c277.z8658c=="Macintosh"||z95894.z8c277.z8658c=="Linux")&&obj.z6e1fb)
{this.z1386a=true;}obj.z659fc.z7a842();obj.z9a8ba=false;obj.z5dfbd=false;obj.z4b834=false;if(obj.z6e1fb)
{if((z071ef.z70fb8>0&&z071ef.z70fb8<=8)&&(z071ef.ze45e7>0&&z071ef.ze45e7<=8))
{obj.zbd74f={z982f5:z071ef.z70fb8,z0db2a:z071ef.ze45e7,z6234d:z071ef.z70fb8,z5e2dd:z071ef.ze45e7};obj.z4b834=true;z36b44.z92068.z3dafa=obj;obj.fireEvent("onStartDragging",e);if(!obj.z659fc.options.z2677a)
{if(z95894.z8c277.za5f7d)
{myEvent.observe(document,'touchmove',z36b44.z5f302);myEvent.observe(document,'touchend',z36b44.zaa601);}else
{myEvent.observe(document,'mousemove',z36b44.z5f302);myEvent.observe(document,'mouseup',z36b44.zaa601);}}}}}myEvent.preventDefault(e,true);return false;},z5f302:function(e)
{if(!e)
e=window.event;
var obj=z36b44.z92068.z3dafa;
if((z36b44.z92068.z326bd&&z36b44.z92068.z32e03)||!z36b44.z92068.z326bd)
{var pointer={x:e.pageX||(e.clientX+z36b44.z92068.zece39),y:e.pageY||(e.clientY+z36b44.z92068.zef3c2)
};

if(e.touches){var zae85d=e.touches[0];pointer.x=zae85d.pageX;pointer.y=zae85d.pageY;}var z8cbe4=z36b44.z92068.x;var z7fab6=z36b44.z92068.y;
var size=obj.size||obj.z659fc.zf741a();if(pointer.x>=z36b44.z92068.z84efe&&pointer.x<=z36b44.z92068.zc17fe)
z8cbe4=(pointer.x-obj.ze16a5)-(size/2);else
z8cbe4=pointer.x<=z36b44.z92068.z84efe?(z36b44.z92068.z84efe-obj.ze16a5)-(size/2):(z36b44.z92068.zc17fe-obj.ze16a5)-(size/2);if(pointer.y>=z36b44.z92068.z4b8ec&&pointer.y<=z36b44.z92068.z3407c)
z7fab6=(pointer.y-obj.ze70ad)-(size/2);else
z7fab6=pointer.y<=z36b44.z92068.z4b8ec?(z36b44.z92068.z4b8ec-obj.ze70ad)-(size/2):(z36b44.z92068.z3407c-obj.ze70ad)-(size/2);
pointer.z8cbe4=z8cbe4;pointer.z7fab6=z7fab6;var z071ef=obj.z659fc.z7e90b(pointer);e["pointer"]=pointer;
e["colRow"]=z071ef;
if(!obj.z4b834)
{
var fireEvent=false;if(Math.abs(z36b44.z92068.x-e["pointer"].z8cbe4)>1)
{z36b44.z92068.x=e.pointer.z8cbe4;fireEvent=true;}if(Math.abs(z36b44.z92068.y-e["pointer"].z7fab6)>1)
{z36b44.z92068.y=e["pointer"].z7fab6;fireEvent=true;}if(fireEvent)
obj.fireEvent("onDragProgress",e);}else
{if((z071ef.z70fb8>0&&z071ef.z70fb8<=8)&&(z071ef.ze45e7>0&&z071ef.ze45e7<=8))
{obj.zbd74f.z6234d=z071ef.z70fb8;obj.zbd74f.z5e2dd=z071ef.ze45e7;obj.fireEvent("onDragProgress",e);}}
z36b44.z92068.z32e03=false;}else
{
setTimeout(function(){z36b44.z92068.z32e03=true;},z36b44.z92068.delay);}obj.z9a8ba=true;if(typeof(e.preventDefault)=='function')
e.preventDefault();e.returnValue=false;if(typeof(e.stopPropagation)=='function')
e.stopPropagation();e.cancelBubble=true;return false;},zaa601:function(e)
{if(!e)
e=window.event;
var obj=z36b44.z92068.z3dafa;var target=myEvent.getTarget(e);
if(!obj.z659fc.options.z2677a)
{if(z95894.z8c277.za5f7d)
{myEvent.stopObserving(document,'touchmove',z36b44.z5f302);myEvent.stopObserving(document,'touchend',z36b44.zaa601);}else
{myEvent.stopObserving(document,'mousemove',z36b44.z5f302);myEvent.stopObserving(document,'mouseup',z36b44.zaa601);}}var z071ef=obj.z659fc.z7e90b(myEvent.getPointXY(e));var zf559c=obj.z659fc.z32f28(z071ef);if(!obj)
{myEvent.preventDefault(e,true);return false;}if(obj.z9a8ba)
{
e["colRow"]=z071ef;e["targetAreaId"]=zf559c;e["fromAreaId"]=z36b44.z92068.z6205b;if(!obj.z4b834)
{if(obj.z36890)
{obj.z659fc.z7a842();this.z9a8ba=false;myEvent.preventDefault(e,true);return false;}if((z071ef.z70fb8<1||z071ef.z70fb8>8)||(z071ef.ze45e7<1||z071ef.ze45e7>8))
{
obj.fireEvent("onThrowPiece",e);obj.z9a8ba=false;myEvent.preventDefault(e,true);return false;}obj.z5dfbd=true;obj.fireEvent("onDropPiece",e);obj.z9a8ba=false;myEvent.preventDefault(e);return false;}else
{if(obj.z659fc.z73fe1(obj.zbd74f))
{
var z6205b=obj.z659fc.z32f28({z70fb8:obj.zbd74f.z982f5,ze45e7:obj.zbd74f.z0db2a
});var zb0082=obj.z659fc.z32f28({z70fb8:obj.zbd74f.z6234d,ze45e7:obj.zbd74f.z5e2dd
});
var z6bcb6=false;for(var n=0;n<obj.z27781.length;n++)
{if(obj.z27781[n].z6205b==z6205b&&obj.z27781[n].zb0082==zb0082)
{z6bcb6=true;obj.z20ef8(z6205b,zb0082,true);break;}}
if(!z6bcb6)
{obj.z4413a(z6205b,zb0082,true);}}if(z95894.z8c277.z8658c=="Windows"&&(z95894.z8c277.zc6e18||z95894.z8c277.z9e098||z95894.z8c277.zbe521||(z95894.z8c277.zae073&&obj.z9bf17=="WebGL3D"))
)
{obj.z1386a=true;}obj.z659fc.z2b279();obj.zbd74f=null;obj.z4b834=false;obj.z9a8ba=false;myEvent.preventDefault(e);return false;}}else
{if(obj.z4b834)
{obj.z659fc.z2b279();obj.zbd74f=null;obj.z4b834=false;obj.z9a8ba=false;}
if((z95894.z8c277.z8658c=="Macintosh"||z95894.z8c277.z8658c=="Linux")&&e.button==2)
{z36b44.zfa052(e);}myEvent.preventDefault(e);return false;}return false;},zf3760:function(e)
{if(!e)
e=window.event;
var z6490c=myEvent.findComponent(e);var obj=z6490c?z6490c.chessBoard:null;e["dropTargetId"]=obj.z659fc.z32f28(obj.z659fc.z7e90b(myEvent.getPointXY(e)));
if(!e["avoidCalculateOffset"])
obj.z8abf0();if(obj.z36890)
return false;if(e["dropTargetId"])
{if(e.button==2)
{e["avoidCalculateOffset"]=true;z36b44.z6ad5c(e);myEvent.preventDefault(e,true);return false;}obj.fireEvent("onClickArea",e);}return false;},ze12d8:function(e)
{if(!e)
e=window.event;
var z6490c=myEvent.findComponent(e);var obj=z6490c?z6490c.chessBoard:null;var target=myEvent.getTarget(e);e["dropTargetId"]=obj.z659fc.z32f28(obj.z659fc.z7e90b(myEvent.getPointXY(e)));if(obj.z6d5f7){
myEvent.preventDefault(e,true);return false;}if(obj.z24380){
myEvent.preventDefault(e,true);return false;}
obj.z8abf0();
if(e["dropTargetId"])
{if(!obj.z659fc.ze49f5(e)||e.button==2)
{e["avoidCalculateOffset"]=true;z36b44.zf3760(e);myEvent.preventDefault(e,true);return false;}}if(obj.z5dfbd)
{obj.z659fc.z7a842();obj.z5dfbd=false;myEvent.preventDefault(e,true);return false;}if(obj.z36890)
{myEvent.preventDefault(e,true);return false;}if(e["dropTargetId"])
obj.fireEvent("onClickPiece",e);myEvent.preventDefault(e,true);return false;},z6ad5c:function(e)
{if(!e)
e=window.event;
var z6490c=myEvent.findComponent(e);var obj=z6490c?z6490c.chessBoard:null;var z54764=obj.z659fc.z32f28(obj.z659fc.z7e90b(myEvent.getPointXY(e)));if(obj.z6d5f7){
myEvent.preventDefault(e,true);return false;}if(obj.z24380)
{myEvent.preventDefault(e,true);return false;}if(obj.z1386a)
{obj.z1386a=false;myEvent.preventDefault(e,true);return false;}
if(!e["avoidCalculateOffset"])
obj.z8abf0();if(obj.z36890)
{myEvent.preventDefault(e,true);return false;}e["dropTargetId"]=z54764;if(z54764&&!obj.z6d5f7)
{if(obj.za3477)
{if(obj.z52f27[z54764])
{obj.z7690c(z54764,true,true);}else
{obj.z02ba7(z54764,obj.za9c5a,true,true);}}else
{obj.fireEvent("onRightClickArea",e);}}myEvent.preventDefault(e,true);return false;},zfa052:function(e)
{if(!e)
e=window.event;if((z95894.z8c277.z8658c=="Macintosh"||z95894.z8c277.z8658c=="Linux")&&e.type=="contextmenu"&&this.z1386a)
{this.z1386a=false;myEvent.preventDefault(e,true);return true;}
var z6490c=myEvent.findComponent(e);var obj=z6490c?z6490c.chessBoard:null;var target=myEvent.getTarget(e);var z54764=obj.z659fc.z32f28(obj.z659fc.z7e90b(myEvent.getPointXY(e)));e["dropTargetId"]=z54764;if(obj.z24380){
myEvent.preventDefault(e,true);return false;}
obj.z8abf0();if(!obj.z659fc.ze49f5(e)){
e["avoidCalculateOffset"]=true;z36b44.z6ad5c(e);myEvent.preventDefault(e,true);return false;}if(z54764&&!obj.z6d5f7)
{if(obj.za3477)
{if(obj.z52f27[z54764])
{obj.z7690c(z54764,true,true);}else
{obj.z02ba7(z54764,obj.za9c5a,true,true);}}obj.fireEvent("onRightClickPiece",e);
}myEvent.preventDefault(e,true);return false;}};}})();
(function(){var z493f4={z2677a:false
};var zebccf=0.4;var z21aa7="-webkit-border-radius: 1px; -moz-border-radius: 1px; -ms-border-radius: 1px; border-radius: 1px;"+"-webkit-box-shadow: 1px 1px 1px #000; -moz-box-shadow: 1px 1px 1px #000; -ms-box-shadow: 1px 1px 1px #000; box-shadow: 1px 1px 1px #000;";var z98822=(window['devicePixelRatio']>1);if(typeof(ze8b3a)=='undefined'){ze8b3a=function(zfb82d){this.zf7afd=zfb82d;
this.z85d5d=zfb82d.z85d5d;this.z24280={};

this.options=z493f4;
this.zc82ad=this.z85d5d+"_styles";
this.z6e731={};
this.zae745="png";this.zb3264=null;this.z2242c=null;this.z1434a=null;
this.z2839b=nvl(this.zf7afd.zba64d["gfxUrl"],Config["GfxUrl"]);this.za55b9=nvl(Config.za082b,'/pieces');this.za45ae=nvl(Config.zfb36e,'/boards');this.z5b483=nvl(Config.zc58f3,'/arrows');this.z57bcd=nvl(this.zf7afd.zba64d["chessBoardBorder"],true);this.zbb9e9=null;
this.za6bf1=null;
this.zb5174=null;
this.z75f7f=null;

this.z769b4=[];
this.zc38fc=[];
this.z38555=0;
this.z7da4f=null;

this.z44f8e=null;
this.z05e2f=null;this.zf8394=this.z57bcd?2:0;
this.zf7afd.attachEvent("onRefresh",this.refresh);this.zf7afd.attachEvent("onBuild",this.build);this.zf7afd.attachEvent("onSetPieceStyle",this.zf4ec1);this.zf7afd.attachEvent("onSetColorScheme",this.z25bef);this.zf7afd.attachEvent("onSetBoardCoords",this.z4b778);this.zf7afd.attachEvent("onSetBoardCoordsPosition",this.z92965);this.zf7afd.attachEvent("onSetBoardSize",this.z01336);this.zf7afd.attachEvent("onSetBoardFlip",this.zcf3a1);this.zf7afd.attachEvent("onShowPromotionWindow",this.zee3e4);this.zf7afd.attachEvent("onHidePromotionWindow",this.z2b8eb);this.zf7afd.attachEvent("onPromotionPieceSelected",this.z8145f);this.zf7afd.attachEvent("onMarkSquare",this.z5b50b);this.zf7afd.attachEvent("onClearSquare",this.zdbbaa);this.zf7afd.attachEvent("onBlinkSquare",this.zfd011);this.zf7afd.attachEvent("onSetSquareColor",this.z742d6);this.zf7afd.attachEvent("onMarkArrow",this.z94199);this.zf7afd.attachEvent("onClearArrow",this.zf6e11);this.zf7afd.attachEvent("onClearMarkings",this.z201b5);this.zf7afd.attachEvent("onMoveAnimation",this.zfb0aa);this.zf7afd.attachEvent("onAfterMoveAnimated",this.zcf187);this.zf7afd.attachEvent("onStartDragging",this.z05d61);this.zf7afd.attachEvent("onDragProgress",this.z0e2fe);this.zf7afd.attachEvent("onThrowPiece",this.z59010);this.zf7afd.attachEvent("onDropPiece",this.z348a8);this.zf7afd.attachEvent("onClickPiece",this.z7a842,this);this.zf7afd.attachEvent("onClickArea",this.z4ff97,this);this.zf7afd.attachEvent("onRightClickPiece",this.z7a842,this);this.zf7afd.attachEvent("onRightClickArea",this.z4ff97,this);this.zf7afd.attachEvent("onSetViewOnly",this.za65d8);this.zf7afd.attachEvent("onHidePieces",this.za19e1);this.zf7afd.attachEvent("onShowPieces",this.zd5b01);this.zf7afd.attachEvent("onDynamicResize",this.zbb3c6,this);z36b44.z72000.init({zeccc8:true});};
z08e47['DOM']=ze8b3a;ze8b3a.prototype={
build:function(e)
{
this.z533ad();var ze7973=this.z85d5d+"_boardarea";
var z85d5d=this.z85d5d;var za31e4=this.za31e4;var size=this.size||this.z659fc.zf741a();var z02e31=this.z02e31;var zba7a5=this.zba7a5;var z6a56d=this.z6a56d;var z782f0=this.z782f0;var zd2b32=this.z659fc.z2839b+this.z659fc.za45ae+'/translucent/'+(z98822?(size*2):size)+'.png';

this.z659fc.za706a();Element[(this.z02e31?"addClassName":"removeClassName")](za31e4,"chess_boardFlipped");this.z659fc.z6700b();za31e4.style.background='url('+zd2b32+')';za31e4.style.backgroundSize='100% 100%';insertContentAt(za31e4,'<div id="'+ze7973+'"'+' style="position: relative; margin: 0 auto; padding: 0px;'+(!this.z659fc.z57bcd?'':'border: 1px solid #333;')+' background: none transparent; width: '+(size*8)+'px; height: '+(size*8)+'px;">'+'</div></div>',"top");var z1ce37=z85d5d+"_promotionarea";var z827a5=z85d5d+"_promotionq";var zc01b2=z85d5d+"_promotionn";var z1d620=z85d5d+"_promotionr";var z3b9e6=z85d5d+"_promotionb";
var z44f8e=this.z44f8e=this.z659fc.z44f8e=document.getElementById(ze7973);insertContentAt(z44f8e,'<div id="'+z1ce37+'"'+' style="position: absolute; display: none; z-Index: 66; margin: 0px; padding: 0px; background: #ffffff;'+' border: none; border-radius: 4px; -moz-border-radius: 4px; -webkit-border-radius: 4px;'+' -webkit-box-shadow: 3px 3px 10px rgba(0,0,0,0.4); -moz-box-shadow: 3px 3px 10px rgba(0,0,0,0.4); box-shadow: 3px 3px 10px rgba(0,0,0,0.4);'+' left: '+(size*3.5)+'px; top: '+(size*1.5)+'px;'+' width: '+(size)+'px; height: '+(size*4)+'px;">'+' <img piece="q" id="'+z827a5+'"'+'  style="position: absolute; cursor: pointer; margin: 0px; left: 0px; top: 0px;'+'  width: '+(size)+'px; height: '+(size)+'px; border: 0px;"/>'+' <img piece="n" id="'+zc01b2+'"'+'  style="position: absolute; cursor: pointer; margin: 0px; left: 0px; top: '+(size)+'px;'+'  width: '+(size)+'px; height: '+(size)+'px; border: 0px;"/>'+' <img piece="r" id="'+z1d620+'"'+'  style="position: absolute; cursor: pointer; margin: 0px; left: 0px; top: '+(size*2)+'px;'+'  width: '+(size)+'px; height: '+(size)+'px; border: 0px;"/></a>'+' <img piece="b" id="'+z3b9e6+'"'+'  style="position: absolute; cursor: pointer; margin: 0px; left: 0px; top: '+(size*3)+'px;'+'  width: '+(size)+'px; height: '+(size)+'px; border: 0px;"/>'+'</div>',"top");

myEvent.observe(document.getElementById(z1ce37),"click",z80cb5.zd47ba);var z88185=z782f0=='in'?Math.round(size/4.5):Math.round(size/3);var z29be8=[];
for(var z7de5f=0;z7de5f<8;z7de5f++)
{var z3b01d=!z02e31?8-z7de5f:z7de5f+1;var z5a069=((z7de5f%2)?"dark":"light");var zc0e4c=z85d5d+"_"+z5a069+"coord1";var z53f61='digit_'+z85d5d+'_'+z7de5f;var zf7808='<div id="'+z53f61+'" class="'+zc0e4c+'" style="display: none; position: absolute; text-align: left; font-family: \'trebuchet ms\', arial, sans-serif; '+'margin-left: 1px; margin-top: 1px; font-size: '+z88185+'px;">'+z3b01d+'</div>';z29be8.push(zf7808);}for(var zfd008=0;zfd008<8;zfd008++)
{var z3b01d=!z02e31?String.fromCharCode(97+zfd008):String.fromCharCode(97+(7-zfd008));var z5a069=((zfd008%2)?"light":"dark");var zc0e4c=z85d5d+"_"+z5a069+"coord1";var z53f61='letter_'+z85d5d+'_'+zfd008;var zf7808='<div id="'+z53f61+'" class="'+zc0e4c+'" style="display: none; position: absolute; text-align: right; font-family: \'trebuchet ms\', arial, sans-serif; '+'margin-right: 1px; margin-top: '+(size-z88185-3)+'px; '+'font-size: '+z88185+'px;">'+z3b01d+'</div>';z29be8.push(zf7808);}
insertContentAt(z44f8e,z29be8.join(""),"top");
var zcfd9b=this.z659fc.z2839b+'/misc/chex'+(z98822?'96':'48')+'.gif';insertContentAt(z44f8e,'<span id="'+z85d5d+'_spinner" style="display: none; position: relative; width: 48px; height: 48px; background: transparent url('+zcfd9b+'); background-size: 100% 100%;"></span>');this.z659fc.za9b48();this.z659fc.z94f9e();this.z659fc.zcaed5();this.z659fc.ze4410();this.z659fc.za081d();
this.z659fc.zb8387(bind(this.z659fc.zd06c0,this.z659fc));},zbb3c6:function()
{var z3e98b=this.zf7afd.size||this.zf741a();var size=this.zf741a(true);if(size!=z3e98b)
{this.zf7afd.z68050();this.zf7afd.zb3a64();this.za706a();
this.z94f9e();
this.zd6c99();
this.zcaed5();
this.zd50d7();
if(this.zb5174)
clearTimeout(this.zb5174);this.zb5174=setTimeout(bind(function(){this.zb8387(bind(function(){this.zd6c99();
this.zd50d7();
},this));},this),200);}},zd06c0:function()
{this.zd6c99();this.zf7afd.zd4da7();},za9b48:function()
{var styleRules={"legalMoveHint":{selector:".legal-move-hint",z2bede:z21aa7
}};this.z8754f(styleRules);},zf741a:function(zec123)
{if(!this.zbb9e9||zec123)
{
if(this.z75f7f!==null&&!isNaN(Number(this.z75f7f)))
{this.zbb9e9=this.z75f7f;return this.zbb9e9;}var z033df=z98822?[20,100]:[20,200];var sizes=[this.zf7afd.za31e4.parentNode.offsetWidth,this.zf7afd.za31e4.parentNode.offsetHeight];
if(isNaN(Number(sizes[0])))
sizes[0]=0;if(isNaN(Number(sizes[1])))
sizes[1]=0;if(sizes[0]||sizes[1])
{if(this.zf7afd.z782f0=="out")
{sizes[0]-=((sizes[0]/8)/3)*2;sizes[1]-=sizes[1]/16;}if(this.zf7afd.zc9441)
{
if(!isNaN(Number(parseInt(this.zf7afd.za31e4.style.marginTop)))&&!isNaN(Number(this.zf7afd.za31e4.offsetHeight)))
{var z7fc37=parseInt(this.zf7afd.za31e4.style.marginTop)/this.zf7afd.za31e4.offsetHeight;sizes[1]-=sizes[1]*z7fc37;}}}var z88251=Math.min(sizes[0],sizes[1]);
var z38c98=z88251?Math.min(Math.max(z033df[0],Math.floor(z88251/8)),z033df[1]):null;
this.zbb9e9=z38c98?z38c98:53;}return this.zbb9e9;},za706a:function()
{var za31e4=this.zf7afd.za31e4;var size=this.zf7afd.size||this.zf741a();if(this.zf7afd.z782f0=='in')
{za31e4.style.width=(size*8+this.zf8394)+'px';za31e4.style.height=(size*8+this.zf8394)+'px';za31e4.style.marginLeft='auto';za31e4.style.marginRight='auto';za31e4.style.marginBottom='0';}else
{za31e4.style.width=(size*8+this.zf8394)+'px';za31e4.style.height=(size*8+this.zf8394)+'px';za31e4.style.marginLeft='auto';za31e4.style.marginRight='auto';za31e4.style.marginBottom=(size/2)+'px';za31e4.style.border='none';}if(this.z57bcd)
za31e4.style.border='1px solid #777';
this.z63614();},zb8387:function(callback)
{var size=this.zf7afd.size||this.zf741a();if(z98822)
size=2*size;var zba7a5=this.zf7afd.zba7a5;this.zc38fc=[];this.z38555=0;this.z7da4f=new Date().getTime();var zba7a5=ChessColorScheme[zba7a5]||ChessColorScheme["brown"];
this.zc38fc.push({url:this.z2839b+this.za45ae+'/'+zba7a5[2]+'/'+size+zba7a5[3],z43ef7:null,loaded:false
});
var zffb94=['bp','br','bn','bb','bk','bq','wp','wr','wn','wb','wk','wq'];this.z6700b();for(var n=0;n<zffb94.length;n++)
{this.zc38fc.push({url:this.z2242c+'/'+zffb94[n]+"."+this.zae745,z43ef7:null,loaded:false
});}
if(this.z1434a!=this.z2242c)
{var z72e14=['bn','bb','br','bq','wn','wb','wr','wq'];for(var n=0;n<z72e14.length;n++)
{this.zc38fc.push({url:this.z1434a+'/'+z72e14[n]+"."+this.zb3264,z43ef7:null,loaded:false
});}}if(this.zf7afd.ze323a)
{
setTimeout(bind(this.z72aff,this),1);}for(var n=0;n<this.zc38fc.length;n++)
{var zed26a=this.zc38fc[n];zed26a.z43ef7=new Image();zed26a.z43ef7.onload=bind(function(zed26a,size,z6bfe8){if(z6bfe8==this.z7da4f)
{this.z38555++;zed26a.loaded=true;if(this.z38555==this.zc38fc.length)
{this.za6bf1=size;this.z769b4=this.zc38fc;callback();}}},this,zed26a,size,this.z7da4f);zed26a.z43ef7.src=zed26a.url;}
setTimeout(bind(function(size,z6bfe8){if(this.z38555<this.zc38fc.length&&z6bfe8==this.z7da4f)
{this.za6bf1=size;this.z769b4=this.zc38fc;callback();}},this,size,this.z7da4f),10000);},z94f9e:function()
{var size=this.zf7afd.size||this.zf741a(),z85d5d=this.zf7afd.z85d5d,za31e4=this.zf7afd.za31e4;var z7c5f1=this.zf7afd.z44f8e.style;z7c5f1.width=(size*8)+"px";z7c5f1.height=(size*8)+"px";var z08ec3=document.getElementById(z85d5d+"_promotionarea").style;z08ec3.width=(size)+"px";z08ec3.height=(size*4)+"px";this.z74643();if(this.zf7afd.z36890)
this.zb4e33();},
refresh:function(e)
{if(e["moveNode"])
this.z659fc.z26766(e["moveNode"]);else
this.z659fc.zd50d7();},z26766:function(node)
{if(!this.zf7afd.z64df9)
{if(node.z6205b&&node.zb0082)
{this.z6700b();this.z567f7(node.z6205b);this.z567f7(node.zb0082);
if(node.z03a92.match(/^[a-h]x[a-h][63][\+\#]?$/))
{if(node.z03a92.substr(3,1)=='6')
this.z567f7(node.zb0082.substr(0,1)+(Number(node.zb0082.substr(1,1))-1));else
this.z567f7(node.zb0082.substr(0,1)+(Number(node.zb0082.substr(1,1))+1));}
if(node.z03a92.match(/^\O\-\O(\-\O)?[\+\#]?$/))
{for(var n=1;n<=8;n++)
{var zba125=String.fromCharCode(96+n)+node.z6205b.substr(1,1);if(!this.zf7afd.z7834f.areas[zba125].zad85d.length)
{this.z567f7(zba125);}else
{if(this.zf7afd.z7834f.zad85d[this.zf7afd.z7834f.areas[zba125].zad85d[0]].type=='r')
this.z567f7(zba125);}}}}}},zd50d7:function()
{if(!this.zf7afd.z64df9)
{this.z2914c();if(this.zf7afd.z27781.length)
this.zf0ad3();this.z76b02();}},z2914c:function()
{for(var zba125 in this.zf7afd.z7834f.areas)
this.z567f7(zba125);},z567f7:function(zdcd29)
{var zba125=this.zf7afd.z7834f.areas[zdcd29];var zcc2ef=this.zf7afd.z85d5d+"_"+zdcd29;var zd3fbb=this.z24280["img_"+zcc2ef];var size=this.zf7afd.size||this.zf741a();var z1efa8=null;var p=zba125.zad85d[0];if(p)
z1efa8=this.zf7afd.z7834f.zad85d[p];if(z1efa8)
{var file=zdcd29.charCodeAt(0)-96;var z524fd=zdcd29.charCodeAt(1)-48;var zIndex=!this.zf7afd.z02e31?5+(8-z524fd):12-(8-z524fd);if(!zd3fbb)
{if(!this.zf7afd.z02e31)
{var top=size*(8-z524fd);var left=size*(file-1);}else
{var top=size*(z524fd-1);var left=size*(8-file);}var z03bd4=new StringBuffer().append('<img id="img_').append(zcc2ef).append('" class="').append(this.zf7afd.z85d5d)
.append('_piece chess_com_piece" style="position: absolute; top: ').append(top).append('px; left: ').append(left)
.append('px; margin: 0px; padding: 0px; display: none; width: ').append(size).append('px; height: ')
.append(size).append('px; z-index: ').append(zIndex).append('; -webkit-transform: translateZ(0);" />').toString();insertContentAt(this.zf7afd.z44f8e,z03bd4,"top");var z48f94=document.getElementById("img_"+zcc2ef);this.z24280["img_"+zcc2ef]=z48f94;if(this.zf7afd.ze323a)
Element.addClassName(z48f94,"chess_com_draggable");zd3fbb=this.z24280["img_"+zcc2ef];}var z0ec84=this.z2242c+"/"+(z1efa8.color==1?"w":"b")+(z1efa8.type)+"."+this.zae745;zd3fbb.src=z0ec84;
if(this.zf7afd.zc9441)
{var z70579=null;for(var a=0;a<this.z769b4.length;a++)
{if(this.z769b4[a].url==z0ec84&&this.z769b4[a].loaded)
{z70579=this.z769b4[a].z43ef7;break;}}if(!z70579)
{var z70579=new Image();z70579.onload=bind(function(zd3fbb,z70579,size){var z839fd=size/this.za6bf1;zd3fbb.style.height=(z70579.height*z839fd)+'px';zd3fbb.style.marginTop='-'+((z70579.height*z839fd)-(z70579.width*z839fd))+'px';},this,zd3fbb,z70579,size);z70579.src=z0ec84;}else
{var z839fd=size/this.za6bf1;zd3fbb.style.height=(z70579.height*z839fd)+'px';zd3fbb.style.marginTop='-'+((z70579.height*z839fd)-(z70579.width*z839fd))+'px';}}else
{zd3fbb.style.height=size+'px';zd3fbb.style.marginTop='0';}zd3fbb.style.zIndex=zIndex;zd3fbb.style.display="block";}else
{if(zd3fbb)
{zd3fbb.style.display="none";}}},zcaed5:function()
{var i;var j;
var size=this.zf7afd.size||this.zf741a(),z0c3d1=this.z24280,z02e31=this.zf7afd.z02e31,z85d5d=this.zf7afd.z85d5d;for(var z1a290=0;z1a290<8;z1a290++)
{i=(!z02e31)?z1a290:7-z1a290;for(var z5950b=0;z5950b<8;z5950b++)
{j=(!z02e31)?z5950b:7-z5950b;var zcc2ef=z85d5d+"_"+String.fromCharCode(97+z5950b)+(8-z1a290);if(z0c3d1["img_"+zcc2ef])
{var zba3a2=z0c3d1["img_"+zcc2ef].style;zba3a2.left=(j*size)+"px";zba3a2.top=(i*size)+"px";zba3a2.width=(size)+"px";zba3a2.height=(size)+"px";
if(z36b44.z92068.za52be&&(z36b44.z92068.za52be.id==z0c3d1["img_"+zcc2ef].id))
{z36b44.z92068.z8760a=z36b44.z92068.za52be.style.top;z36b44.z92068.z04ce2=z36b44.z92068.za52be.style.left;}}}}
for(var n=0;n<z36b44.z7f400.length;n++)
{var z80fde=z36b44.z7f400[n];if(!z80fde.z03df1)
{var z6205b=z80fde.z6205b;var zb0082=z80fde.zb0082;var z631e1=this.zf7afd.z02e31?(8-(z6205b.charCodeAt(0)-96)):(z6205b.charCodeAt(0)-97);var ze2b27=this.zf7afd.z02e31?(z6205b.charCodeAt(1)-49):(8-(z6205b.charCodeAt(1)-48));var z9a822=this.zf7afd.z02e31?(8-(zb0082.charCodeAt(0)-96)):(zb0082.charCodeAt(0)-97);var z81ce3=this.zf7afd.z02e31?(zb0082.charCodeAt(1)-49):(8-(zb0082.charCodeAt(1)-48));z80fde.z4bed5=size*z631e1;z80fde.z6275a=size*ze2b27;z80fde.zba570=size*z9a822;z80fde.z5f4b5=size*z81ce3;z80fde.deltaX=z80fde.zba570-z80fde.z4bed5;z80fde.deltaY=z80fde.z5f4b5-z80fde.z6275a;}}this.z44336();},z44336:function()
{var size=this.zf7afd.size||this.zf741a(),z02e31=this.zf7afd.z02e31,zc5a9f=this.zf7afd.z782f0,z85d5d=this.zf7afd.z85d5d;var z88185=(zc5a9f=='in')?Math.round(size/4.5):Math.round(size/3);for(var z7de5f=0;z7de5f<8;z7de5f++)
{var z53f61='digit_'+z85d5d+'_'+z7de5f;var z4b41f=document.getElementById(z53f61);var zac855=z4b41f.style;zac855.fontSize=z88185+"px";zac855.top=(z7de5f*size)+'px';zac855.left=((zc5a9f=='in')?0:(0-(size/3))-2)+'px';zac855.width=((zc5a9f=='in')?(size*0.93):(size/3))+"px";if(zc5a9f!='in')
{zac855.marginLeft='0';zac855.marginTop=(size/3)+'px';zac855.textAlign='center';}else
{zac855.margin='0 0 0 '+(size*0.07)+'px';zac855.textAlign='left';}z4b41f.innerHTML=!z02e31?8-z7de5f:z7de5f+1;}for(var zfd008=0;zfd008<8;zfd008++)
{var z53f61='letter_'+z85d5d+'_'+zfd008;var z7be17=document.getElementById(z53f61);var za8e5c=z7be17.style;za8e5c.fontSize=z88185+"px";za8e5c.top=((zc5a9f=='in')?(7*size):((7*size)+(size/3)+1))+'px';za8e5c.left=(zfd008*size)+'px';za8e5c.width=((zc5a9f!='in')?size:(size*0.93))+"px";if(zc5a9f!='in')
za8e5c.textAlign='center';else
za8e5c.textAlign='right';za8e5c.marginTop=((zc5a9f=='in')?((size*0.90)-z88185):(size-(size/3)))+"px";z7be17.innerHTML=!z02e31?String.fromCharCode(97+zfd008):String.fromCharCode(97+(7-zfd008));}},zb7119:function()
{var z85d5d=this.zf7afd.z85d5d;
if(this.zf7afd.z782f0=='in')
this.z8754f({"coordLightClass2":{selector:"."+z85d5d+"_lightcoord1",z2bede:"color: "+this.ze3e39
},"coordDarkClass2":{selector:"."+z85d5d+"_darkcoord1",z2bede:"color: "+this.ze9f06
}});else
this.z8754f({"coordLightClass2":{selector:"."+z85d5d+"_lightcoord1",z2bede:"color: #333"
},"coordDarkClass2":{selector:"."+z85d5d+"_darkcoord1",z2bede:"color: #333"
}});},z6700b:function()
{var size=this.zf7afd.size||this.zf741a();if(z98822)
size=2*size;this.zae745="png";this.z2242c=this.z2839b+this.za55b9+"/alpha/"+size;this.z1434a=this.z2839b+this.za55b9+"/alpha/"+size;this.zb3264="png";var zb74db=ChessPieceStyle[this.zf7afd.z70c6b];if(!zb74db)
return;var z7c66b=null;var z275c8=zb74db[""+this.zf7afd.size];if(!z275c8)
{z275c8=zb74db["default"];z7c66b=this.z2839b+this.za55b9+"/"+this.zf7afd.z70c6b+"/"+size;}else
{z7c66b=this.z2839b+this.za55b9+"/"+this.zf7afd.z70c6b+"/"+size;}if(!z275c8||!z7c66b)
return;this.zae745=z275c8;this.z2242c=z7c66b;if(this.zf7afd.z70c6b!="blindfold")
this.z1434a=z7c66b;},z63614:function()
{if(this.zf7afd.zc9441)
{
var z52c69=0;var z1366b=new Image();z1366b.onload=bind(function(){var margin=z1366b.height-z1366b.width;if(z98822)
margin=margin/2;if(margin>z52c69)
{z52c69=margin;this.zf7afd.za31e4.style.marginTop=z52c69+'px';if(this.zf7afd.size==0)
this.zbb3c6();}},this);z1366b.src=this.z2242c+'/bk.'+this.zae745;var zbfe13=new Image();zbfe13.onload=bind(function(){var margin=zbfe13.height-zbfe13.width;if(z98822)
margin=margin/2;if(margin>z52c69)
{z52c69=margin;this.zf7afd.za31e4.style.marginTop=z52c69+'px';if(this.zf7afd.size==0)
this.zbb3c6();}},this);zbfe13.src=this.z2242c+'/bq.'+this.zae745;}else
{this.zf7afd.za31e4.style.marginTop='0';if(this.zf7afd.size==0)
this.zbb3c6();}},zd6c99:function(e)
{var scheme=this.zf7afd.zba7a5;
var z24725=this.za6bf1||this.zf7afd.size||this.zf741a();;if(ChessColorScheme[scheme])
{var ze3e39=ChessColorScheme[scheme][0];var ze9f06=ChessColorScheme[scheme][1];var zd2b32=this.z2839b+this.za45ae+'/'+ChessColorScheme[scheme][2]+'/'+z24725+ChessColorScheme[scheme][3];
this.zf7afd.z44f8e.style.background='URL('+zd2b32+')';this.zf7afd.z44f8e.style.backgroundSize='100% 100%';}else
{var ze3e39="#B58863";var ze9f06="#F0D9B5";var zd2b32=this.z2839b+this.za45ae+'/brown/'+z24725+'.png';
this.zf7afd.z44f8e.style.background='URL('+zd2b32+')';this.zf7afd.z44f8e.style.backgroundSize='100% 100%';}this.ze9f06=ze9f06;this.ze3e39=ze3e39;
if(this.zf7afd.z86a83)
{var z6c597=(e&&e["oldColorScheme"])&&(ChessColorScheme[e["oldColorScheme"]]&&ChessColorScheme[e["oldColorScheme"]][4])?ChessColorScheme[e["oldColorScheme"]][4]:this.zf7afd.z86a83;var zeca3a=(ChessColorScheme[this.zf7afd.zba7a5]&&ChessColorScheme[this.zf7afd.zba7a5][4])?ChessColorScheme[this.zf7afd.zba7a5][4]:this.zf7afd.z86a83;for(var zcc2ef in this.zf7afd.z41465)
{if(this.zf7afd.z41465[zcc2ef].zf25e3)
{var zae1f8=this.zf7afd.z41465[zcc2ef].zf25e3;if(this.zf7afd.z41465[zcc2ef].color==z6c597)
{this.zf7afd.z41465[zcc2ef].color=zeca3a;zae1f8.style.backgroundColor=zeca3a;}}}}this.zb7119();this.z31c2c();this.zf7afd.zd4da7();},ze4410:function()
{var size=this.zf7afd.size||this.zf741a(),zf4b12=this.zf7afd.za31e4;if(this.zf7afd.z782f0=='in')
{zf4b12.style.width=(size*8+this.zf8394)+'px';zf4b12.style.height=(size*8+this.zf8394)+'px';zf4b12.style.marginLeft='auto';zf4b12.style.marginRight='auto';zf4b12.style.marginBottom='0';}else
{zf4b12.style.width=(size*8+this.zf8394)+'px';zf4b12.style.height=(size*8+this.zf8394)+'px';zf4b12.style.marginLeft='auto';zf4b12.style.marginRight='auto';zf4b12.style.marginBottom=(size/2)+'px';}if(this.z57bcd)
zf4b12.style.border='1px solid #777';var ze7973=this.zf7afd.z85d5d+"_boardarea";var z85d5d=this.zf7afd.z85d5d,z6a56d=this.zf7afd.z6a56d;var styleRules={"digitsDark1":{selector:"."+z85d5d+"_darkcoord1",
z2bede:"display: "+(!z6a56d?"none":"block")+"!important; z-index: 2;"
}};styleRules["digitsLight1"]={selector:"."+z85d5d+"_lightcoord1",z2bede:styleRules["digitsDark1"].z2bede
};this.z8754f(styleRules);this.z44336();
this.zb7119();},z8754f:function(zcdad6)
{var z4fdca=this.zc82ad;var sheet=css.getDynamicStyleSheet(z4fdca);var za08ce=this.z6e731;for(var key in zcdad6)
{var z6cd72=za08ce[key];if(z6cd72)
{
css.removeCssRule(z6cd72[0],z6cd72[1],z4fdca);}var z77816=css.insertCssRule(zcdad6[key].selector,zcdad6[key].z2bede,z4fdca);
za08ce[key]=[zcdad6[key].selector,zcdad6[key].z2bede];}},z76b02:function()
{var size=this.zf7afd.size||this.zf741a();for(var zcc2ef in this.zf7afd.z41465)
{if(this.zf7afd.z41465[zcc2ef].zf25e3)
{var zae1f8=this.zf7afd.z41465[zcc2ef].zf25e3;var file=zcc2ef.charCodeAt(0)-96;
var z524fd=zcc2ef.charCodeAt(1)-48;
if(this.zf7afd.z02e31)
{file=8-file;z524fd--;}else
{z524fd=8-z524fd;file--;}var top=size*z524fd;var left=size*file;zae1f8.style.top=top+'px';zae1f8.style.left=left+'px';zae1f8.style.width=size+'px';zae1f8.style.height=size+'px';if(zae1f8.z52507){var z9b4c8=parseInt(size*zebccf,10);var offset=(size-z9b4c8)*0.5;var style=zae1f8.style;style.top=(top+offset)+'px';style.left=(left+offset)+'px';style.width=z9b4c8+'px';style.height=z9b4c8+'px';}}}for(var zcc2ef in this.zf7afd.z52f27)
{if(this.zf7afd.z52f27[zcc2ef].zf25e3)
{var zae1f8=this.zf7afd.z52f27[zcc2ef].zf25e3;var file=zcc2ef.charCodeAt(0)-96;
var z524fd=zcc2ef.charCodeAt(1)-48;
if(this.zf7afd.z02e31)
{file=8-file;z524fd--;}else
{z524fd=8-z524fd;file--;}var top=size*z524fd;var left=size*file;zae1f8.style.top=top+'px';zae1f8.style.left=left+'px';zae1f8.style.width=size+'px';zae1f8.style.height=size+'px';}}},z4ff97:function()
{if(this.zf7afd.z39b23&&this.z05e2f!=null)
this.z05e2f.style.display='none';},zf0ad3:function()
{var size=this.zf7afd.size||this.zf741a();for(var n=0;n<this.zf7afd.z27781.length;n++)
{var z1c0fb=this.zf7afd.z27781[n];z1c0fb.zdc11a.z982f5=z1c0fb.z6205b.charCodeAt(0)-96;z1c0fb.zdc11a.z0db2a=1*z1c0fb.z6205b.charAt(1);z1c0fb.zdc11a.z6234d=z1c0fb.zb0082.charCodeAt(0)-96;z1c0fb.zdc11a.z5e2dd=1*z1c0fb.zb0082.charAt(1);if(this.zf7afd.z02e31)
{z1c0fb.zdc11a.z982f5=9-z1c0fb.zdc11a.z982f5;z1c0fb.zdc11a.z6234d=9-z1c0fb.zdc11a.z6234d;}else
{z1c0fb.zdc11a.z0db2a=9-z1c0fb.zdc11a.z0db2a;z1c0fb.zdc11a.z5e2dd=9-z1c0fb.zdc11a.z5e2dd;}z1c0fb.zdc11a.elem.style.top=((Math.min(z1c0fb.zdc11a.z0db2a,z1c0fb.zdc11a.z5e2dd)-1)*size)+'px';z1c0fb.zdc11a.elem.style.left=((Math.min(z1c0fb.zdc11a.z982f5,z1c0fb.zdc11a.z6234d)-1)*size)+'px';z1c0fb.zdc11a.z550f3=this.z8b200(z1c0fb.zdc11a,size);z1c0fb.zdc11a.elem.setAttribute('src',this.z2839b+this.z5b483+'/'+z1c0fb.zdc11a.z550f3);}},z74643:function()
{var z85d5d=this.zf7afd.z85d5d;var size=this.zf7afd.size||this.zf741a();var s=this.z1434a+"/"+(this.zf7afd.z7834f.za429c["sm"]==1?"w":"b");if(this.zf7afd.zfed09&&this.zf7afd.zfed09.z49a99)
{var s=this.z1434a+"/"+(this.zf7afd.z7834f.za429c["sm"]==1?"b":"w");}document.getElementById(z85d5d+"_promotionq").src=s+"q."+this.zb3264;document.getElementById(z85d5d+"_promotionn").src=s+"n."+this.zb3264;document.getElementById(z85d5d+"_promotionr").src=s+"r."+this.zb3264;document.getElementById(z85d5d+"_promotionb").src=s+"b."+this.zb3264;var zbf562=document.getElementById(z85d5d+"_promotionq").style;zbf562.left="0px";zbf562.width=(size)+"px";zbf562.height=(size)+"px";zbf562.marginTop='0';var z83a90=document.getElementById(z85d5d+"_promotionn").style;z83a90.left="0px";z83a90.width=(size)+"px";z83a90.height=(size)+"px";z83a90.marginTop='0';var z64c40=document.getElementById(z85d5d+"_promotionr").style;z64c40.left="0px";z64c40.width=(size)+"px";z64c40.height=(size)+"px";z64c40.marginTop='0';var zb9462=document.getElementById(z85d5d+"_promotionb").style;zb9462.left="0px";zb9462.width=(size)+"px";zb9462.height=(size)+"px";zb9462.marginTop='0';if(this.zf7afd.z36890)
{var z92958=this.zf7afd.zfed09.z80882.charCodeAt(1)-48;var z1f278=(this.zf7afd.z02e31?9-z92958:z92958);if(z1f278==1)
{zbf562.top=(size*3)+"px";z83a90.top=(size*2)+"px";z64c40.top=(size)+"px";zb9462.top="0px";}else
{zbf562.top="0px";z83a90.top=(size)+"px";z64c40.top=(size*2)+"px";zb9462.top=(size*3)+"px";}}else
{zbf562.top="0px";z83a90.top=(size)+"px";z64c40.top=(size*2)+"px";zb9462.top=(size*3)+"px";}
if(this.zf7afd.zc9441)
{var z70c6b=this.zf7afd.z70c6b;var z41d20=new Image();z41d20.onload=function(){zbf562.marginTop='-'+(z41d20.height-z41d20.width)+'px';zbf562.height=z41d20.height+'px';};z41d20.src=s+"q."+this.zb3264;var zd0142=new Image();zd0142.onload=function(){z83a90.marginTop='-'+(zd0142.height-zd0142.width)+'px';z83a90.height=zd0142.height+'px';};zd0142.src=s+"n."+this.zb3264;var z9114a=new Image();z9114a.onload=function(){z64c40.marginTop='-'+(z9114a.height-z9114a.width)+'px';z64c40.height=z9114a.height+'px';};z9114a.src=s+"r."+this.zb3264;var z00900=new Image();z00900.onload=function(){zb9462.marginTop='-'+(z00900.height-z00900.width)+'px';zb9462.height=z00900.height+'px';};z00900.src=s+"b."+this.zb3264;}},zb4e33:function()
{var size=this.zf7afd.size||this.zf741a();var zfed09=this.zf7afd.zfed09;var file=zfed09.z80882.charCodeAt(0)-96;var z524fd=zfed09.z80882.charCodeAt(1)-48;var ze45e7=(this.zf7afd.z02e31?9-z524fd:z524fd);var zc4527=(this.zf7afd.z02e31?9-file:file);var z2021b=document.getElementById(this.zf7afd.z85d5d+"_promotionarea");if(ze45e7==1)
z2021b.style.top=(size*4)+'px';else
z2021b.style.top='0px';z2021b.style.left=(size*(zc4527-1))+'px';},z8b200:function(z0a00a,size)
{var z982f5=z0a00a.z982f5;var z6234d=z0a00a.z6234d;var z0db2a=z0a00a.z0db2a;var z5e2dd=z0a00a.z5e2dd;var z4761f='.png';if(z982f5==z6234d&&z0db2a==z5e2dd)
return null;
if(z982f5==(z6234d-1)&&z0db2a==(z5e2dd-2))
return size+'/k-4'+z4761f;if(z982f5==(z6234d-2)&&z0db2a==(z5e2dd-1))
return size+'/k-3'+z4761f;if(z982f5==(z6234d-2)&&z0db2a==(z5e2dd+1))
return size+'/k-2'+z4761f;if(z982f5==(z6234d-1)&&z0db2a==(z5e2dd+2))
return size+'/k-1'+z4761f;if(z982f5==(z6234d+1)&&z0db2a==(z5e2dd+2))
return size+'/k-8'+z4761f;if(z982f5==(z6234d+2)&&z0db2a==(z5e2dd+1))
return size+'/k-7'+z4761f;if(z982f5==(z6234d+2)&&z0db2a==(z5e2dd-1))
return size+'/k-6'+z4761f;if(z982f5==(z6234d+1)&&z0db2a==(z5e2dd-2))
return size+'/k-5'+z4761f;
if(z0db2a==z5e2dd)
{if(z982f5<z6234d)
{return size+'/r-'+((z6234d-z982f5)+1)+z4761f;}else
{return size+'/l-'+((z982f5-z6234d)+1)+z4761f;}}
if(z982f5==z6234d)
{if(z0db2a<z5e2dd)
{return size+'/d-'+((z5e2dd-z0db2a)+1)+z4761f;}else
{return size+'/u-'+((z0db2a-z5e2dd)+1)+z4761f;}}
if(Math.abs(z982f5-z6234d)==Math.abs(z0db2a-z5e2dd))
{var length=Math.abs(z982f5-z6234d)+1;if(z0db2a<z5e2dd&&z982f5<z6234d)
{return size+'/dr-'+length+z4761f;}else if(z0db2a<z5e2dd&&z982f5>z6234d)
{return size+'/dl-'+length+z4761f;}else if(z0db2a>z5e2dd&&z982f5<z6234d)
{return size+'/ur-'+length+z4761f;}else if(z0db2a>z5e2dd&&z982f5>z6234d)
{return size+'/ul-'+length+z4761f;}}return null;},z72aff:function()
{var size=this.zf7afd.size||this.zf741a();var z81016=this.z2839b+this.z5b483+'/'+size+'/';var ze8c8c=[];for(var n=1;n<=8;n++)
{ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'k-'+n+'.png';if(n>1)
{ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'u-'+n+'.png';ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'d-'+n+'.png';ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'l-'+n+'.png';ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'r-'+n+'.png';ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'ul-'+n+'.png';ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'ur-'+n+'.png';ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'dl-'+n+'.png';ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'dr-'+n+'.png';}}},za081d:function()
{var zaf049=document.getElementById(this.zf7afd.z85d5d+'_spinner');var size=this.zf7afd.size||this.zf741a();if(zaf049)
{var za3974=zaf049.style;za3974.top=(((size*8)/2)-24)+'px';za3974.left=(((size*8)/2)-24)+'px';za3974.display='block';}},z31c2c:function()
{var zaf049=document.getElementById(this.zf7afd.z85d5d+'_spinner');if(zaf049)
{zaf049.style.display='none';}},
zf4ec1:function(e)
{var size=this.size||this.z659fc.zf741a();
this.z659fc.z2242c=null;this.z659fc.zae745=null;this.z659fc.z6700b();this.z533ad();this.z659fc.za081d();this.z659fc.zb8387(bind(function(){
this.z659fc.z63614();this.z659fc.z74643();this.z659fc.z2914c();this.z659fc.z31c2c();this.zd4da7();},this));},
z25bef:function(e)
{this.z533ad();this.z659fc.za081d();this.z659fc.zb8387(bind(this.z659fc.zd6c99,this.z659fc,e));},
z4b778:function(e)
{Element[(this.z6a56d?"addClassName":"removeClassName")](this.za31e4,"chess_boardCoords");this.z659fc.ze4410();},
z92965:function(e)
{this.z659fc.zcaed5();this.z659fc.z2914c();this.z659fc.zd6c99();this.z659fc.ze4410();},
z01336:function(e)
{if(this.size=='auto')
{this.size=0;this.z659fc.zf741a(true);
}this.z68050();this.zb3a64();this.z659fc.za706a();
this.z659fc.z94f9e();
this.z659fc.zd6c99();
this.z659fc.zcaed5();
this.z659fc.zd50d7();
this.z659fc.zb8387(bind(function(){this.z659fc.zd6c99();
this.z659fc.zd50d7();
},this));},
zcf3a1:function(e)
{

Element[(this.z02e31?"addClassName":"removeClassName")](this.za31e4,"chess_boardFlipped");this.z659fc.zcaed5();this.z659fc.z2914c();this.z659fc.ze4410();this.z659fc.z76b02();this.z659fc.zf0ad3();},
zee3e4:function(e)
{var z85d5d=this.z85d5d;this.z659fc.z74643();this.z659fc.zb4e33();document.getElementById(z85d5d+"_promotionarea").style.display='block';},
z2b8eb:function(e)
{var z1ce37=this.z85d5d+"_promotionarea";document.getElementById(z1ce37).style.display='none';},
z8145f:function(e)
{var z1ce37=this.z85d5d+"_promotionarea";document.getElementById(z1ce37).style.display='none';},
z5b50b:function(e)
{var z4b0d0=e["squareStack"];var zcc2ef=e["areaId"];var color=e["color"];var z802da=e["rightClicked"];var size=this.size||this.z659fc.zf741a();
if(!z4b0d0[zcc2ef])
return;
var zae1f8=z4b0d0[zcc2ef].zf25e3;var file=zcc2ef.charCodeAt(0)-96;var z524fd=zcc2ef.charCodeAt(1)-48;var style=zae1f8?zae1f8.style:null;
if(this.z02e31)
{file=8-file;z524fd--;}else
{z524fd=8-z524fd;file--;}var top=size*z524fd;var left=size*file;
if(!zae1f8)
{zae1f8=document.createElement('div');zae1f8.style.position='absolute';zae1f8.style.zIndex='1';style=zae1f8.style;style.top=top+'px';style.left=left+'px';style.width=size+'px';style.height=size+'px';z4b0d0[zcc2ef].zf25e3=zae1f8;this.z44f8e.appendChild(zae1f8);}var opacity=z802da?'90':'50';if(typeof(zae1f8.style.opacity)!='undefined')
zae1f8.style.opacity='0.'+opacity;else if(typeof(zae1f8.style.filter)!='undefined')
zae1f8.style.filter='alpha(opacity='+opacity+');';else if(typeof(zae1f8.style.MozOpacity)!='undefined')
zae1f8.style.MozOpacity='0.'+opacity;if(typeof(color)=='object'&&typeof(color.length)!='undefined')
{var zf0839=color[0];

if((file=='b'||file=='d'||file=='f'||file=='h')&&(z524fd=='2'||z524fd=='4'||z524fd=='6'||z524fd=='8'))
zf0839=color[1];if((file=='a'||file=='c'||file=='e'||file=='g')&&(z524fd=='1'||z524fd=='3'||z524fd=='5'||z524fd=='7'))
zf0839=color[1];color=zf0839;}style.backgroundColor=color;if(e["legalMoveHint"])
{var z9b4c8=parseInt(size*zebccf,10);var offset=(size-z9b4c8)*0.5;style.top=(top+offset)+'px';style.left=(left+offset)+'px';style.width=z9b4c8+'px';style.height=z9b4c8+'px';style.zIndex='64';
style.border='none';zae1f8.z52507=e["legalMoveHint"];zae1f8.className='legal-move-hint';}},
zdbbaa:function(e)
{var z4b0d0=e["squareStack"];var zcc2ef=e["areaId"];var z44f8e=this.z44f8e;if(z4b0d0[zcc2ef]&&z4b0d0[zcc2ef].zf25e3)
{if(z4b0d0[zcc2ef].zf25e3.parentNode)
z4b0d0[zcc2ef].zf25e3.parentNode.removeChild(z4b0d0[zcc2ef].zf25e3);z4b0d0[zcc2ef].zf25e3=null;}},
zfd011:function(e)
{this.zfc921.element=this.z41465[this.zfc921.zcc2ef].zf25e3;this.zfc921.interval=setInterval(bind(this.z659fc.zd537d,this.z659fc),this.zfc921.z87fe4);},zd537d:function()
{if(this.zf7afd.zfc921.count>0)
{this.zf7afd.zfc921.count--;if(this.zf7afd.zfc921.count%2==1)
this.zf7afd.zfc921.element.style.display='none';else
this.zf7afd.zfc921.element.style.display='block';}else
{if(this.zf7afd.zfc921.interval)
clearInterval(this.zf7afd.zfc921.interval);this.zf7afd.zfc921.interval=null;this.zf7afd.z7690c(this.zf7afd.zfc921.zcc2ef);}},
z742d6:function(e)
{var color=e["color"];if(e["areaId"])
{if(this.z41465[e["areaId"]])
{var zcc2ef=e["areaId"];var element=this.z41465[zcc2ef].zf25e3;if(typeof(color)=='object'&&typeof(color.length)!='undefined')
{var file=zcc2ef.substr(0,1);var z524fd=zcc2ef.substr(1,1);var zf0839=color[0];

if((file=='b'||file=='d'||file=='f'||file=='h')&&(z524fd=='2'||z524fd=='4'||z524fd=='6'||z524fd=='8'))
zf0839=color[1];if((file=='a'||file=='c'||file=='e'||file=='g')&&(z524fd=='1'||z524fd=='3'||z524fd=='5'||z524fd=='7'))
zf0839=color[1];element.style.backgroundColor=zf0839;}else
{element.style.backgroundColor=color;}}}else
{for(var zcc2ef in this.z41465)
{if(zcc2ef!='size')
{var element=this.z41465[zcc2ef].zf25e3;if(typeof(color)=='object'&&typeof(color.length)!='undefined')
{var file=zcc2ef.substr(0,1);var z524fd=zcc2ef.substr(1,1);var zf0839=color[0];

if((file=='b'||file=='d'||file=='f'||file=='h')&&(z524fd=='2'||z524fd=='4'||z524fd=='6'||z524fd=='8'))
zf0839=color[1];if((file=='a'||file=='c'||file=='e'||file=='g')&&(z524fd=='1'||z524fd=='3'||z524fd=='5'||z524fd=='7'))
zf0839=color[1];element.style.backgroundColor=zf0839;}else{element.style.backgroundColor=color;}}}}},
z94199:function(e)
{var size=this.size||this.z659fc.zf741a();var zf38e5=e["arrow"];var z6205b=e["arrow"].z6205b,zb0082=e["arrow"].zb0082;var zbd74f={};zbd74f.z982f5=!this.z02e31?z6205b.toLowerCase().charCodeAt(0)-96:9-(z6205b.toLowerCase().charCodeAt(0)-96);zbd74f.z0db2a=!this.z02e31?9-z6205b.charAt(1):1*(z6205b.charAt(1));zbd74f.z6234d=!this.z02e31?zb0082.toLowerCase().charCodeAt(0)-96:9-(zb0082.toLowerCase().charCodeAt(0)-96);zbd74f.z5e2dd=!this.z02e31?9-zb0082.charAt(1):1*(zb0082.charAt(1));zbd74f.z6205b=z6205b;zbd74f.zb0082=zb0082;zbd74f.elem=document.createElement('img');zbd74f.elem.className='chessBoardArrow';zbd74f.elem.style.position='absolute';zbd74f.elem.style.zIndex='15';zbd74f.elem.style.top=((Math.min(zbd74f.z0db2a,zbd74f.z5e2dd)-1)*size)+'px';zbd74f.elem.style.left=((Math.min(zbd74f.z982f5,zbd74f.z6234d)-1)*size)+'px';zbd74f.z550f3=this.z659fc.z8b200(zbd74f,size);if(zbd74f.z550f3)
{zbd74f.elem.setAttribute('src',this.z659fc.z2839b+this.z659fc.z5b483+'/'+zbd74f.z550f3);zbd74f.elem.style.display='block';this.z44f8e.appendChild(zbd74f.elem);zf38e5.zdc11a={z982f5:zbd74f.z982f5,z6234d:zbd74f.z6234d,z0db2a:zbd74f.z0db2a,z5e2dd:zbd74f.z5e2dd,elem:zbd74f.elem,z550f3:zbd74f.z550f3
};}else
{zbd74f.elem=null;}},
zf6e11:function(e)
{var zf38e5=e["arrow"];this.z44f8e.removeChild(zf38e5.zdc11a.elem);zf38e5.zdc11a.elem=null;},
z201b5:function(e)
{

for(var n=0;n<this.z27781.length;n++)
{this.z44f8e.removeChild(this.z27781[n].zdc11a.elem);this.z27781[n].zdc11a.elem=null;}this.z27781=[];for(var zcc2ef in this.z52f27)
{if(this.z52f27[zcc2ef].zf25e3)
{this.z44f8e.removeChild(this.z52f27[zcc2ef].zf25e3);this.z52f27[zcc2ef].zf25e3=null;}}this.z52f27={size:0};
},zfb0aa:function(e)
{var size=this.size||this.z659fc.zf741a();var zd4aba=document.getElementById("img_"+this.z85d5d+"_"+e["fromAreaId"]);var z0db0d=zd4aba.style.zIndex;if(!z95894.z8c277.z18df3&&zd4aba)
{

this.z8abf0();
var ze4afe=e["animationInstance"];
ze4afe.target=zd4aba;ze4afe.z4bed5=size*e["fileFrom"];ze4afe.z6275a=size*e["rankFrom"];ze4afe.zeb1c6=ze4afe.z4bed5;ze4afe.z5d25f=ze4afe.z6275a;ze4afe.zba570=size*e["fileTo"];ze4afe.z5f4b5=size*e["rankTo"];ze4afe.deltaX=ze4afe.zba570-ze4afe.z4bed5;ze4afe.deltaY=ze4afe.z5f4b5-ze4afe.z6275a;ze4afe.z3c564=z80cb5.z82791;ze4afe.z56a67=z80cb5.z56a67;zd4aba.style.zIndex=65;ze4afe.z84cca=function()
{this.z03df1=true;this.z56a67(this);zd4aba.style.zIndex=z0db0d;setTimeout(function(z80fde){for(var n=0;n<z36b44.z7f400.length;n++)
{if(z36b44.z7f400[n].z03df1)
{z36b44.z7f400.splice(n,1);n--;}}

z36b44.z72000.stop();},1);};ze4afe.transition=function()
{var target=this.target;var style=target.style;this.zb936a=true;style[z95894.z8c277.z7cd6f]='top '+this.ze8f55+'s '+((this.zc8405.z4a892!='bullet')?'ease-in':'linear')+', left '+this.ze8f55+'s '+((this.zc8405.z4a892!='bullet')?'ease-in':'linear');this.zce387=this.z84cca.bind(this);myEvent.observe(target,z95894.z8c277.z40740,this.zce387);style.top=this.z5f4b5+'px';style.left=this.zba570+'px';};z36b44.z72000.start();}else
{this.z68050();this.z65158(e["animationInstance"]);this.z80320=false;}},
zcf187:function(e)
{var target=e["animationInstance"].target;if(target)
{target.style.top=e["animationInstance"].z6275a+'px';target.style.left=e["animationInstance"].z4bed5+'px';}},
z05d61:function(e)
{var target=myEvent.getTarget(e);var size=this.size||this.z659fc.zf741a();
if(this.z39b23&&this.z659fc.z05e2f==null){this.z659fc.z05e2f=document.createElement('div');this.z659fc.z05e2f.style.width=size+'px';this.z659fc.z05e2f.style.height=size+'px';this.z659fc.z05e2f.style.zIndex='4';this.z659fc.z05e2f.style.position='absolute';this.z659fc.z05e2f.style.top=((e.z071ef.ze45e7-1)*size)+'px';this.z659fc.z05e2f.style.left=((e.z071ef.z70fb8-1)*size)+'px';this.z659fc.z05e2f.style.background=this.z094b2;if(this.z659fc.z05e2f.style.filter!==undefined)
this.z659fc.z05e2f.style.filter='alpha(opacity='+this.z95296+');';else{if(this.z659fc.z05e2f.style.MozOpacity!==undefined){this.z659fc.z05e2f.style.MozOpacity='0.'+this.z95296;}else{if(this.z659fc.z05e2f.style.opacity!==undefined)
this.z659fc.z05e2f.style.opacity='0.'+this.z95296;}}this.z44f8e.appendChild(this.z659fc.z05e2f);}if(!this.z4b834)
{
if(z36b44.z92068.za52be){this.z659fc.z7a842();}
z36b44.z92068.za52be=target;z36b44.z92068.za52be.style.zIndex='65';z36b44.z92068.z8760a=z36b44.z92068.za52be.style.top;z36b44.z92068.z04ce2=z36b44.z92068.za52be.style.left;}else
{
this.zbd74f.z550f3=null;this.zbd74f.elem=null;}},
z0e2fe:function(e)
{var size=this.size||this.z659fc.zf741a();
if(this.z39b23)
{if((e["colRow"].z70fb8<1||e["colRow"].z70fb8>8)||(e["colRow"].ze45e7<1||e["colRow"].ze45e7>8))
{if(this.z659fc.z05e2f.style.display=='block')
this.z659fc.z05e2f.style.display='none';}else
{this.z659fc.z05e2f.style.top=((e["colRow"].ze45e7-1)*size)+'px';this.z659fc.z05e2f.style.left=((e["colRow"].z70fb8-1)*size)+'px';if(this.z659fc.z05e2f.style.display=='none')
this.z659fc.z05e2f.style.display='block';}}if(!this.z4b834)
{var z92068=z36b44.z92068;if(z92068.za52be)
{var style=z92068.za52be.style;
style.left=z36b44.z92068.x+'px';style.top=z36b44.z92068.y+'px';}}else
{
this.zbd74f.z550f3=this.z659fc.z8b200(this.zbd74f,size);}},
z59010:function(e)
{this.z659fc.z7a842();},
z348a8:function(e)
{this.z659fc.z7a842();},
za65d8:function(e)
{
if(this.z24380)
{for(var z1efa8 in this.z659fc.z24280)
Element.removeClassName(this.z659fc.z24280[z1efa8],"chess_com_draggable");}else
{for(var z1efa8 in this.z659fc.z24280)
Element.addClassName(this.z659fc.z24280[z1efa8],"chess_com_draggable");}},
za19e1:function(e)
{for(var z1efa8 in this.z659fc.z24280)
{if(this.z659fc.z24280[z1efa8].style)
this.z659fc.z24280[z1efa8].style.display='none';}},
zd5b01:function(e)
{this.refresh();},ze49f5:function(e)
{var target=myEvent.getTarget(e);return(target.nodeName.toUpperCase()=='IMG'&&target.className!='chessBoardArrow');},z73fe1:function(ze61a3)
{
return(ze61a3.z550f3?true:false);},z7a842:function(e)
{var size=this.zf7afd.size||this.zf741a();var z92068=z36b44.z92068;this.z4ff97();if(z92068.za52be)
{var style=z92068.za52be.style;style.zIndex=5+Math.floor(parseInt(z92068.z8760a,10)/size);style.top=z92068.z8760a;style.left=z92068.z04ce2;z36b44.z92068.za52be=null;}},z2b279:function(e)
{this.z4ff97();if(this.zf7afd.zbd74f.elem)
this.z44f8e.removeChild(this.zf7afd.zbd74f.elem);this.zf7afd.zbd74f.elem=null;},z7e90b:function(pointer)
{var size=this.zf7afd.size||this.zf741a();var zc706d=0;var za7028=0;if(pointer.x<this.zf7afd.ze16a5)
return{z70fb8:zc706d,ze45e7:za7028};if(pointer.x>(this.zf7afd.ze16a5+(size*8)))
return{z70fb8:zc706d,ze45e7:za7028};if(pointer.y<this.zf7afd.ze70ad)
return{z70fb8:zc706d,ze45e7:za7028};if(pointer.y>(this.zf7afd.ze70ad+(size*8)))
return{z70fb8:zc706d,ze45e7:za7028};var z8cbe4=(pointer.x-this.zf7afd.ze16a5)-(size/2);var z7fab6=(pointer.y-this.zf7afd.ze70ad)-(size/2);zc706d=Math.floor((z8cbe4+size/2)/size)+1;za7028=Math.floor((z7fab6+size/2)/size)+1;return{z70fb8:zc706d,ze45e7:za7028};},z32f28:function(z071ef)
{var rows=[8,7,6,5,4,3,2,1];var cols=["a","b","c","d","e","f","g","h"];if(this.zf7afd.z02e31)
{rows.reverse();cols.reverse();}return(z071ef.z70fb8==0)?"":(cols[z071ef.z70fb8-1]+String(rows[z071ef.ze45e7-1]));}};}
if(typeof(z80cb5)=='undefined')
{z80cb5={zd47ba:function(e)
{if(!e)
e=window.event;
var z6490c=myEvent.findComponent(e);var obj=z6490c?z6490c.chessBoard:null;var target=myEvent.getTarget(e);var z1efa8=target.getAttribute("piece");if(z1efa8)
obj.selectPromotionPiece(z1efa8);myEvent.preventDefault(e,true);return false;},z82791:function(zea6c9,z6a34c)
{
var z471ce=(z6a34c-zea6c9.zeb68e)/(zea6c9.z30c9d-zea6c9.zeb68e);if(z471ce>1)
z471ce=1;zea6c9.zeb1c6=zea6c9.z4bed5+(zea6c9.deltaX*z471ce);zea6c9.z5d25f=zea6c9.z6275a+(zea6c9.deltaY*z471ce);if(z6a34c>zea6c9.z30c9d)
{zea6c9.z03df1=true;}else
{var style=zea6c9.target.style;style.top=zea6c9.z5d25f+'px';style.left=zea6c9.zeb1c6+'px';}},z56a67:function(zea6c9)
{var target=zea6c9.target;if(zea6c9.zb936a){myEvent.stopObserving(target,z95894.z8c277.z40740,zea6c9.zce387);}target.style[z95894.z8c277.z7cd6f]='none';target.style.top=zea6c9.z5f4b5+'px';target.style.left=zea6c9.zba570+'px';zea6c9.zc8405.z65158(zea6c9);}};}
})();(function(z2240e){'use strict';if(z2240e.zde763){return;}var z806ea=z2240e['THREE'];var z5d509=window['devicePixelRatio']||1;var z991fd=1;var z38b9a=2;var z5b67c=155;var zd5f92=0;var zb92a7=90;z2240e.zde763=function(ze87cf){this.ze87cf=ze87cf;this.z70270=null;this.zd72a5=false;this.options={zad942:false,z2677a:false,z6c201:1.33,z189a5:600
};ze87cf.zd8c9e('onCameraChange');ze87cf.attachEvent('onBuild',this.z144db,this);ze87cf.attachEvent('onRefresh',this.z6d538,this);
ze87cf.attachEvent('onSetColorScheme',this.z25bef,this);ze87cf.attachEvent('onSetBoardCoords',this.z4b778,this);

ze87cf.attachEvent('onSetBoardFlip',this.zcf3a1,this);
ze87cf.attachEvent('onShowPromotionWindow',this.zee3e4,this);ze87cf.attachEvent('onPromotionPieceSelected',this.z8145f,this);
ze87cf.attachEvent('onMarkSquare',this.z5b50b,this);ze87cf.attachEvent('onClearSquare',this.zdbbaa,this);ze87cf.attachEvent('onBlinkSquare',this.zfd011,this);ze87cf.attachEvent('onSetSquareColor',this.z742d6,this);ze87cf.attachEvent('onMarkArrow',this.z94199,this);ze87cf.attachEvent('onClearArrow',this.zf6e11,this);ze87cf.attachEvent('onClearMarkings',this.z201b5,this);
ze87cf.attachEvent('onMoveAnimation',this.zfb0aa,this);ze87cf.attachEvent('onAfterMoveAnimated',this.zcf187,this);
ze87cf.attachEvent('onStartDragging',this.z05d61,this);ze87cf.attachEvent('onDragProgress',this.z0e2fe,this);ze87cf.attachEvent('onThrowPiece',this.z59010,this);ze87cf.attachEvent('onDropPiece',this.z348a8,this);





ze87cf.attachEvent('onHidePieces',this.za19e1,this);ze87cf.attachEvent('onShowPieces',this.zd5b01,this);ze87cf.attachEvent('onCameraChange',this.zf7372,this);};z2240e.zde763.prototype={z144db:function(){var zffa4c=Config['domain.cssjs']+'/assets/chessboard3d_data/';
this.ze87cf.z533ad();
this.ze87cf.za31e4.parentNode.style.background='none';this.ze87cf.za31e4.style.border='none';
this.ze87cf.za31e4.style.position='relative';
this.z70270=new z6100c({z2d616:this.ze87cf.za31e4,z2211a:this.ze87cf.za31e4.id+'_webglBoard3D',zffa4c:zffa4c,z1b515:this.ze87cf.z02e31,zb65d1:this.ze87cf.z24380,zc2d78:this.ze87cf.z074d9,z1f5cb:this.ze87cf.zba7a5,zca819:this.ze87cf.z6a56d,z5cc1b:this,ze2ec0:this,za4e12:this.options.z6c201,zedd57:z27d7a.z712f3('cameraDistance')!==null?parseFloat(z27d7a.z712f3('cameraDistance')):z5b67c,z5cfdc:z27d7a.z712f3('cameraPanAngle')!==null?parseFloat(z27d7a.z712f3('cameraPanAngle')):zd5f92,z5aead:z27d7a.z712f3('cameraTiltAngle')!==null?parseFloat(z27d7a.z712f3('cameraTiltAngle')):zb92a7,zd0c6a:z27d7a.z712f3('cameraX')!=null?parseFloat(z27d7a.z712f3('cameraX')):null,z731e1:z27d7a.z712f3('cameraY')!=null?parseFloat(z27d7a.z712f3('cameraY')):null,z576bd:z27d7a.z712f3('cameraZ')!=null?parseFloat(z27d7a.z712f3('cameraZ')):null,z08922:z27d7a.z712f3('cameraTargetX')!=null?parseFloat(z27d7a.z712f3('cameraTargetX')):null,z87556:z27d7a.z712f3('cameraTargetY')!=null?parseFloat(z27d7a.z712f3('cameraTargetY')):null,z61952:z27d7a.z712f3('cameraTargetZ')!=null?parseFloat(z27d7a.z712f3('cameraTargetZ')):null
});
this.z01772(this.ze87cf.zba64d['real3Dwidth']);
this.z70270.zf8f0f(function(){this.zd72a5=true;
this.ze87cf.zd4da7();});},z6d538:function(e){if(!this.zd72a5){return;}if(e&&e['moveNode']){this.z26766(e['moveNode']);return;}var i;var zad85d=this.ze87cf.z7834f.zad85d;var z7a647=[];
for(i in zad85d){if(zad85d.hasOwnProperty(i)){if(zad85d[i].zba125){z7a647.push(zad85d[i]);}}}
this.z70270.z5473b(z7a647);this.z70270.z359ad(this.ze87cf.z24380);},z25bef:function(){this.z70270.z70823(this.ze87cf.zba7a5);},z4b778:function(){this.z70270.z3ee73(this.ze87cf.z6a56d);},z01336:function(){},zcf3a1:function(){this.z70270.z1b515(this.ze87cf.z02e31);},zee3e4:function(){var z8c488=this.z25bb2();
if(this.ze87cf.zfed09&&this.ze87cf.zfed09.z49a99){z8c488=z8c488===z991fd?z38b9a:z991fd;}this.z70270.zae48c(z8c488,function(z02256){this.ze87cf.selectPromotionPiece(z02256);});},z8145f:function(){this.z70270.z1bd89();},z5b50b:function(e){if(e['rightClicked']){this.z70270.zc3ccd(e['areaId'],e['color'],'secondary',{opacity:0.9});}else if(e['legalMoveHint']){this.z70270.zc3ccd(e['areaId'],e['color'],'primary',{opacity:0.5});}else{this.z70270.zc3ccd(e['areaId'],e['color'],'primary',{opacity:0.5});}},zdbbaa:function(e){if(e['rightClicked']){this.z70270.z4c88a(e['areaId'],'secondary');}else{this.z70270.z4c88a(e['areaId'],'primary');}},zfd011:function(){this.z70270.ze8146(this.ze87cf.zfc921,function(zcc2ef){this.ze87cf.z7690c(zcc2ef);});},z742d6:function(e){this.z70270.z3019c(e['color'],e['areaId']);},z94199:function(e){var z6205b=e['arrow'].z6205b;var zb0082=e['arrow'].zb0082;var z0a00a={from:z6205b,to:zb0082,z982f5:z6205b.toLowerCase().charCodeAt(0)-96,z0db2a:9-z6205b.charAt(1),z6234d:zb0082.toLowerCase().charCodeAt(0)-96,z5e2dd:9-zb0082.charAt(1)
};var zf38e5=this.z4f7d3(z0a00a);if(zf38e5){this.z70270.z35546(zf38e5);}},zf6e11:function(e){this.z70270.z57a80({from:e['arrow'].z6205b,to:e['arrow'].zb0082
});},z201b5:function(){this.z70270.zb59c8();
for(var zae1f8 in this.ze87cf.z52f27){this.z70270.z4c88a(zae1f8,'secondary');}this.ze87cf.z27781=[];this.ze87cf.z52f27={size:0};},zfb0aa:function(zffaf3){var zec34a=new ze641f(zffaf3['animationInstance']);this.z70270.z7c2ee(zffaf3['fromAreaId'],zffaf3['toAreaId'],zec34a,function(){this.ze87cf.z65158(zffaf3['animationInstance']);});},zcf187:function(){},z05d61:function(e){var zae5e9=myEvent.getPointXY(e);
var z8418a=(zae5e9.x-this.ze87cf.ze16a5)*z5d509;var z1e63b=(zae5e9.y-this.ze87cf.ze70ad)*z5d509;
var z221c6=this.z70270.z82bab(z8418a,z1e63b);if(!this.ze87cf.z4b834){
this.z70270.zbdf8f(z221c6);}else{

}z36b44.z92068.z84efe=this.ze87cf.ze16a5;z36b44.z92068.zc17fe=this.ze87cf.ze16a5+this.ze87cf.za31e4.offsetWidth;z36b44.z92068.z4b8ec=this.ze87cf.ze70ad;z36b44.z92068.z3407c=this.ze87cf.ze70ad+this.ze87cf.za31e4.offsetHeight;},z0e2fe:function(e){var zae5e9=myEvent.getPointXY(e);
var z8418a=(zae5e9.x-this.ze87cf.ze16a5)*z5d509;var z1e63b=(zae5e9.y-this.ze87cf.ze70ad)*z5d509;
var z221c6=this.z70270.z82bab(z8418a,z1e63b);if(!this.ze87cf.z4b834){
this.z70270.z2c8a4(z221c6);}else{
var zf38e5=this.z4f7d3(this.ze87cf.zbd74f);if(zf38e5){zf38e5.z2ea20=true;this.z70270.z35546(zf38e5);}else{this.z70270.z57a80({z2ea20:true});}}},z59010:function(){this.z7a842();},z348a8:function(){this.z7a842();},za19e1:function(){this.z70270.z0051d(false);},zd5b01:function(){this.z70270.z0051d(true);},zf7372:function(z030fb){z27d7a.z712f3('cameraDistance',z030fb['distance']);z27d7a.z712f3('cameraPanAngle',z030fb['panAngle']);z27d7a.z712f3('cameraTiltAngle',z030fb['tiltAngle']);z27d7a.z712f3('cameraX',z030fb['cameraX']);z27d7a.z712f3('cameraY',z030fb['cameraY']);z27d7a.z712f3('cameraZ',z030fb['cameraZ']);z27d7a.z712f3('cameraTargetX',z030fb['cameraTargetX']);z27d7a.z712f3('cameraTargetY',z030fb['cameraTargetY']);z27d7a.z712f3('cameraTargetZ',z030fb['cameraTargetZ']);},z7a842:function(){this.z70270.zb6f77();},z26766:function(za6d94){var z524fd;if(!za6d94.z6205b||!za6d94.zb0082){return;}this.z567f7(za6d94.z6205b);this.z567f7(za6d94.zb0082);
if(za6d94.z03a92.match(/^[a-h]x[a-h][63][\+\#]?$/)){if(za6d94.z03a92.substr(3,1)==='6'){this.z567f7(za6d94.zb0082.substr(0,1)+(Number(za6d94.zb0082.substr(1,1))-1));}else{this.z567f7(za6d94.zb0082.substr(0,1)+(Number(za6d94.zb0082.substr(1,1))+1));}}
if(za6d94.z03a92==='O-O-O'||za6d94.z03a92==='O-O-O+'||za6d94.z03a92==='O-O-O#'){z524fd=za6d94.z6205b.substr(1,1);this.z567f7('a'+z524fd);this.z567f7('d'+z524fd);}else if(za6d94.z03a92==='O-O'||za6d94.z03a92==='O-O+'||za6d94.z03a92==='O-O#'){z524fd=za6d94.z6205b.substr(1,1);this.z567f7('f'+z524fd);this.z567f7('h'+z524fd);}},z567f7:function(zba125){var z70602=null;var z1efa8=null;if(this.ze87cf.z7834f.areas[zba125].zad85d.length){z70602=this.ze87cf.z7834f.areas[zba125].zad85d[0];}this.z70270.zb6655(zba125);if(z70602!==null){z1efa8=this.ze87cf.z7834f.zad85d[z70602];this.z70270.zcbbb2(z1efa8.type,zba125,z1efa8.color);}},ze49f5:function(e){if(this.ze87cf.z1386a){return false;}var zae5e9=myEvent.getPointXY(e);
var z089e3={x:(zae5e9.x-this.ze87cf.ze16a5)*z5d509,y:(zae5e9.y-this.ze87cf.ze70ad)*z5d509
};return this.z70270.zd1a42(z089e3);},z7e90b:function(zae5e9){var z8418a=(zae5e9.x-this.ze87cf.ze16a5)*z5d509;var z1e63b=(zae5e9.y-this.ze87cf.ze70ad)*z5d509;var z221c6=this.z70270.z82bab(z8418a,z1e63b);var z3086a=this.z70270.zfaa72(z221c6['x'],z221c6['z']);if(z3086a){return{z70fb8:1+z3086a[1],ze45e7:8-z3086a[0]
};}else{return{z70fb8:0,ze45e7:0};}},z32f28:function(z071ef){if(!z071ef.z70fb8){return '';}var z3086a=[8-z071ef.ze45e7,z071ef.z70fb8-1
];return this.z70270.zcf995(z3086a);},z2b279:function(){},z73fe1:function(z0a00a){if(this.z4f7d3(z0a00a)===false){return false;}else{return true;}},z4f7d3:function(z0a00a){var z982f5=z0a00a.z982f5;var z0db2a=z0a00a.z0db2a;var z6234d=z0a00a.z6234d;var z5e2dd=z0a00a.z5e2dd;
var zf38e5={type:'straight',from:this.z32f28({z70fb8:z982f5,ze45e7:z0db2a}),to:this.z32f28({z70fb8:z6234d,ze45e7:z5e2dd}),direction:1,
length:1
};if(z982f5===z6234d&&z0db2a===z5e2dd){return false;}
zf38e5.type='L';
if(z982f5===(z6234d-1)&&z0db2a===(z5e2dd+2)){
zf38e5.direction=1;return zf38e5;}else if(z982f5===(z6234d-2)&&z0db2a===(z5e2dd+1)){
zf38e5.direction=2;return zf38e5;}else if(z982f5===(z6234d-2)&&z0db2a===(z5e2dd-1)){
zf38e5.direction=3;return zf38e5;}else if(z982f5===(z6234d-1)&&z0db2a===(z5e2dd-2)){
zf38e5.direction=4;return zf38e5;}else if(z982f5===(z6234d+1)&&z0db2a===(z5e2dd-2)){
zf38e5.direction=5;return zf38e5;}else if(z982f5===(z6234d+2)&&z0db2a===(z5e2dd-1)){
zf38e5.direction=6;return zf38e5;}else if(z982f5===(z6234d+2)&&z0db2a===(z5e2dd+1)){
zf38e5.direction=7;return zf38e5;}else if(z982f5===(z6234d+1)&&z0db2a===(z5e2dd+2)){
zf38e5.direction=8;return zf38e5;}
zf38e5.type='straight';
if(z0db2a===z5e2dd){if(z982f5<z6234d){
zf38e5.direction=3;zf38e5.length=z6234d-z982f5;}else{
zf38e5.direction=7;zf38e5.length=z982f5-z6234d;}return zf38e5;}
if(z982f5===z6234d){if(z0db2a<z5e2dd){
zf38e5.direction=5;zf38e5.length=z5e2dd-z0db2a;}else{
zf38e5.direction=1;zf38e5.length=z0db2a-z5e2dd;}return zf38e5;}
if(Math.abs(z982f5-z6234d)===Math.abs(z0db2a-z5e2dd)){var length=Math.abs(z982f5-z6234d);zf38e5.length=length;if(z0db2a<z5e2dd&&z982f5<z6234d){
zf38e5.direction=4;return zf38e5;}else if(z0db2a<z5e2dd&&z982f5>z6234d){
zf38e5.direction=6;return zf38e5;}else if(z0db2a>z5e2dd&&z982f5<z6234d){
zf38e5.direction=2;return zf38e5;}else if(z0db2a>z5e2dd&&z982f5>z6234d){
zf38e5.direction=8;return zf38e5;}}return false;},z25bb2:function(){return this.ze87cf.z7834f.za429c['sm'];},z01772:function(width,height,z9d625){var za31e4=this.ze87cf.za31e4;if(!width){width=this.options.z189a5;}if(!height){height=width/this.options.z6c201;}var zcda1c=za31e4.style.width.replace('px','');var z2658f=za31e4.style.height.replace('px','');if(width==zcda1c&&height==z2658f){return;}za31e4.style.width=width+'px';za31e4.style.height=height+'px';this.z70270.zba7ef();if(z9d625!==false){this.z70270.z9d625();}},zf6424:function(z030fb){this.z70270.zf6424(z030fb);}};function z6100c(options){options=options||{};var instance=this;var z2d616=options.z2d616||null;var z2211a=options.z2211a||'';var ze2ec0=options.ze2ec0||null;var z5cc1b=options.z5cc1b;var za87fa={zedd57:options.zedd57,z03906:500,z4befe:50,z5cfdc:options.z5cfdc,z5aead:options.z5aead,z92c2a:0,z1689a:-12,za4e12:options.za4e12||1,zffa4c:options.zffa4c||'',zcd290:'staunton_executive',z1f5cb:options.z1f5cb,zca819:options.zca819||false,z1b515:options.z1b515||false,z4e0a6:options.z4e0a6||'none',zb65d1:options.zb65d1||false,zc2d78:options.zc2d78===undefined?true:options.zc2d78
};var z4c2f3=10;var z6f6b6=0.5;var z06f3b=0.8;var zb968f=4;var z38fe2=z4c2f3*8+zb968f*2;var zaca20;var z70270=new z806ea['WebGLRenderer']({'antialias':true});var z19bda;var z030fb;
var zd8e35=new z806ea['Vector3'](z4c2f3*4,0,z4c2f3*4);
var zedd57=za87fa.zedd57;
var z42373=z5b67c;
var z5cfdc=za87fa.z5cfdc;
var z5aead=za87fa.z5aead;
var z92c2a=za87fa.z92c2a;
var z1689a=za87fa.z1689a;var zdda60=false;var zd56ef=false;var z8497a;var z1f45f={};var z1a6d4={};var z69729={};var zee776={L:null,z38096:null
};var zade3b=null;var z929a4;var z311fb;var ze8415;var z7f76d;var za6c82=za87fa.z1b515;
var z0c297=false;
var z43784=false;
var z911e5=null;var zb65d1=za87fa.zb65d1;var zc2d78=za87fa.zc2d78;var za2c0e=false;

var z15b75=false;
var ze4f94=false;
var z8e9a1=false;
var zc09e9=false;
var zca21e=0;
var zcc4de=0;var zfb82d=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
];var z2dd72={};var za7f37=null;var za63d7=null;var z6dbd2={'primary':{},'secondary':{}};var zde6c1={};this.zf8f0f=function(callback){z2d616.style.background=za87fa.z4e0a6;
z2d616.innerHTML='<div id="'+z2211a+'_loadingIndicator" style="'+'position: absolute;'+'z-index: 1;'+'top: 0; left: 0; bottom: 0; right: 0;'+'background: rgba(255,255,255,0.75) url(\''+za87fa.zffa4c+'boardloading.gif\') no-repeat center'+'"></div>';z6c1e6();z28b33();zf890f(function(){z01422(z8966c);});function z8966c(){zbea84();z64cd6();
z2d616.appendChild(z70270["domElement"]);z39230();if(callback){callback.call(z5cc1b);}z67101();}};this.zba7ef=function(){var z08cb2=z2d616.offsetWidth;var zb56ef=z2d616.offsetHeight;if(z030fb){z030fb['aspect']=z08cb2/zb56ef;z030fb['updateProjectionMatrix']();}z70270['setSize'](z08cb2,zb56ef);};this.z9d625=function(){if(!z030fb){return;}var z19253=z2d616.offsetWidth/z2d616.offsetHeight;if(z19253<za87fa.za4e12){zedd57=z5b67c*(za87fa.za4e12/z19253);}else{zedd57=z5b67c;}z42373=zedd57;this.zf6424();};this.z5473b=function(zad85d){var i,j,z1efa8,zb9d03,z3086a;var z1b46a=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
];for(i=0;i<zad85d.length;i++){z1efa8=zad85d[i];z3086a=this.z463a7(z1efa8.zba125);z1b46a[z3086a[0]][z3086a[1]]=z1efa8;}for(i=0;i<zfb82d.length;i++){for(j=0;j<zfb82d[i].length;j++){z1efa8=zfb82d[i][j];zb9d03=z1b46a[i][j];if(z1efa8===0&&zb9d03===0){continue;}else if(z1efa8===0){this.zcbbb2(zb9d03.type,zb9d03.zba125,zb9d03.color);}else if(zb9d03===0){this.zb6655([i,j]);}else if(z1efa8.type!==zb9d03.type||z1efa8.color!==zb9d03.color){this.zb6655([i,j]);this.zcbbb2(zb9d03.type,zb9d03.zba125,zb9d03.color);}}}};this.zcbbb2=function(z02256,z3b575,color){var z1efa8;var zda13f=new z806ea['Object3D']();
var zd2356=new z806ea['Mesh'](new z806ea['PlaneGeometry'](z4c2f3,z4c2f3,1,1));z4ba4d(zd2356,new z806ea['Vector3'](1,0,0),-90);if(z02256==='p'){
z1efa8=new z806ea['Mesh'](z69729.z8e045);zd2356['material']=z1a6d4.z3d80d.z8e045;}else if(z02256==='k'){
z1efa8=new z806ea['Mesh'](z69729.z77672);zd2356['material']=z1a6d4.z3d80d.z77672;}else if(z02256==='q'){
z1efa8=new z806ea['Mesh'](z69729.z75e1a);zd2356['material']=z1a6d4.z3d80d.z75e1a;}else if(z02256==='r'){
z1efa8=new z806ea['Mesh'](z69729.z252b8);zd2356['material']=z1a6d4.z3d80d.z252b8;}else if(z02256==='b'){
z1efa8=new z806ea['Mesh'](z69729.z22eb1);zd2356['material']=z1a6d4.z3d80d.z22eb1;}else if(z02256==='n'){
z1efa8=new z806ea['Mesh'](z69729.z24a01);zd2356['material']=z1a6d4.z3d80d.z24a01;if(color===z38b9a){z4ba4d(z1efa8,new z806ea['Vector3'](0,1,0),90);}else{z4ba4d(z1efa8,new z806ea['Vector3'](0,1,0),-90);}}else{return;}if(color===z991fd){z1efa8['material']=z1a6d4.zbd9a0;}else{z1efa8['material']=z1a6d4.z2bbcd;}zda13f['add'](z1efa8);zda13f['add'](zd2356);zda13f.type=z02256;zda13f.color=color;var z6aef1=this.z7059d(z3b575);var z3086a=this.z463a7(z3b575);zda13f['position']['x']=z6aef1[0];zda13f['position']['z']=z6aef1[1];zda13f['position']['y']=0.01;zfb82d[z3086a[0]][z3086a[1]]=zda13f;z19bda['add'](zda13f);};this.zb6655=function(z9d12d){var z3086a=(typeof z9d12d==='string'?this.z463a7(z9d12d):z9d12d);if(!z3086a){return;}var z1efa8=zfb82d[z3086a[0]][z3086a[1]];
if(z1efa8!==0){z19bda['remove'](z1efa8);delete zfb82d[z3086a[0]][z3086a[1]];zfb82d[z3086a[0]][z3086a[1]]=0;}};this.zaedd5=function(){var i,j;for(i=0;i<zfb82d.length;i++){for(j=0;j<zfb82d[i].length;j++){if(zfb82d[i][j]!==0){z19bda['remove'](zfb82d[i][j]);delete zfb82d[i][j];}}}zfb82d=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
];};this.z0051d=function(visibility){var i,j,k,z1efa8;visibility=visibility===true?true:false;if(za2c0e!==visibility){return;}za2c0e=!visibility;for(i=0;i<zfb82d.length;i++){for(j=0;j<zfb82d[i].length;j++){z1efa8=zfb82d[i][j];if(z1efa8!==0){for(k=0;k<z1efa8['children'].length;k++){z1efa8['children'][k]['visible']=visibility;}}}}};this.z1b515=function(z6ab6a){za6c82=z6ab6a;var z9041a=0;
if(za6c82){z9041a=360;}else{z9041a=-360;}if(!z0c297){z43784=z5cfdc+z9041a;}else{z911e5.stop();z43784=z43784+z9041a;}z0c297=true;z911e5=z60e6c(z43784,z5aead,true,function(){z0c297=false;});};this.z359ad=function(view){if(view===undefined){zb65d1=true;}else{zb65d1=view;}};this.zc3ccd=function(z3b575,color,z228f6,z010f3){color=z0a84b(color);z010f3=z010f3||{};z010f3.type=z010f3.type||'highlighted';z010f3.opacity=z010f3.opacity!==undefined?z010f3.opacity:1.0;var z6aef1;var z4ca33;var zbf547;var ze9580=z6dbd2[z228f6];if(ze9580[z3b575]){
ze9580[z3b575]['material']['color']=new z806ea['Color'](color);}else{
z6aef1=this.z7059d(z3b575);var zbd5b4=new z806ea['MeshBasicMaterial']({color:color
});zbd5b4['depthWrite']=false;if(z010f3.type==='highlighted'){z4ca33=new z806ea['PlaneGeometry'](z4c2f3,z4c2f3,1,1);zbd5b4['opacity']=z010f3.opacity;zbd5b4['transparent']=true;}else{z4ca33=zade3b;}zbf547=new z806ea['Mesh'](z4ca33,zbd5b4);z4ba4d(zbf547,new z806ea['Vector3'](1,0,0),-90);zbf547['position']['set'](z6aef1[0],0,z6aef1[1]);zbf547['renderDepth']=2;
if(z228f6==='secondary'){zbf547['position']['y']=0.01;}z19bda['add'](zbf547);ze9580[z3b575]=zbf547;}};this.z4c88a=function(z3b575,z228f6){var ze9580=z6dbd2[z228f6];if(ze9580[z3b575]){z19bda['remove'](ze9580[z3b575]);delete ze9580[z3b575];}};this.ze8146=function(options,callback){var z3b575=options.zcc2ef;var zae1f8=z6dbd2['primary'][z3b575];var z810d2=null;var count=options.count;var frequency=options.z87fe4;if(!zae1f8){return;}function blink(){if(count-->0){if(count%2==1){zae1f8['visible']=false;}else{zae1f8['visible']=true;}}else{if(z810d2){clearInterval(z810d2);}if(callback){callback.call(z5cc1b,z3b575);}}}z810d2=setInterval(blink,frequency);};this.z3019c=function(color,z3b575){if(!z3b575){for(var z3b575 in z6dbd2['primary']){this.z3019c(color,z3b575);}return;}var zae1f8=z6dbd2['primary'][z3b575];if(!zae1f8){return;}if(typeof color==='string'){color=z0a84b(color);zae1f8['material']['color']=new z806ea['Color'](color);}else{var zc4527=z3b575.substr(0,1).charCodeAt()-96;var ze45e7=z3b575.substr(1,1);var z62c9b=color[0];

if((ze45e7%2===0&&zc4527%2!==0)||(ze45e7%2!==0&&zc4527%2===0)){z62c9b=color[1];}z62c9b=z0a84b(z62c9b);zae1f8['material']['color']=new z806ea['Color'](z62c9b);}};this.z35546=function(zf38e5){var za2bae;
if(zf38e5.z2ea20){za2bae='temporary';}else{za2bae=zf38e5.from+zf38e5.to;}
if(zde6c1[za2bae]){z19bda['remove'](zde6c1[za2bae]);delete zde6c1[za2bae];}
if(zde6c1['temporary']){z19bda['remove'](zde6c1['temporary']);delete zde6c1['temporary'];}var zdade8=new z806ea['Mesh'](zee776[zf38e5.type]['clone']());zdade8['material']=z1a6d4.zf1479;zdade8['renderDepth']=1;
var zbaa18=this.z7059d(zf38e5.from);zdade8['position']['x']=zbaa18[0];zdade8['position']['z']=zbaa18[1];zdade8['position']['y']=0.01;var z99a4d=new z806ea['Vector3'](0,1,0);var z9b41d=new z806ea['Vector3'](0,0,1);if(zf38e5.type==='L'){if(zf38e5.direction===1||zf38e5.direction===3||zf38e5.direction===5||zf38e5.direction===7){z4ba4d(zdade8,z9b41d,180);}if(zf38e5.direction===1||zf38e5.direction===8){z4ba4d(zdade8,z99a4d,180);}else if(zf38e5.direction===2||zf38e5.direction===3){z4ba4d(zdade8,z99a4d,90);}else if(zf38e5.direction===6||zf38e5.direction===7){z4ba4d(zdade8,z99a4d,-90);}}else{

var z4b5da=z4c2f3*zf38e5.length-z4c2f3;
if(zf38e5.direction%2===0){
z4b5da+=(Math.sqrt(z4c2f3*z4c2f3*2)-z4c2f3)*zf38e5.length;}
zdade8['geometry']['vertices'][0]['x']+=z4b5da;zdade8['geometry']['vertices'][1]['x']+=z4b5da;zdade8['geometry']['vertices'][3]['x']+=z4b5da;zdade8['geometry']['vertices'][5]['x']+=z4b5da;zdade8['geometry']['vertices'][6]['x']+=z4b5da;
if(zf38e5.direction===1){z4ba4d(zdade8,z99a4d,90);}else if(zf38e5.direction===2){z4ba4d(zdade8,z99a4d,45);}else if(zf38e5.direction===4){z4ba4d(zdade8,z99a4d,-45);}else if(zf38e5.direction===5){z4ba4d(zdade8,z99a4d,-90);}else if(zf38e5.direction===6){z4ba4d(zdade8,z99a4d,-135);}else if(zf38e5.direction===7){z4ba4d(zdade8,z99a4d,-180);}else if(zf38e5.direction===8){z4ba4d(zdade8,z99a4d,135);}}zde6c1[za2bae]=zdade8;z19bda['add'](zdade8);};this.z57a80=function(zf38e5){var za2bae;
if(zf38e5.z2ea20){za2bae='temporary';}else{za2bae=zf38e5.from+zf38e5.to;}if(zde6c1[za2bae]){z19bda['remove'](zde6c1[za2bae]);delete zde6c1[za2bae];}};this.zb59c8=function(){for(var za2bae in zde6c1){if(zde6c1.hasOwnProperty(za2bae)){z19bda['remove'](zde6c1[za2bae]);delete zde6c1[za2bae];}}};this.zbdf8f=function(z221c6){var z3086a=this.zfaa72(z221c6['x'],z221c6['z']);
if(zfb82d[z3086a[0]][z3086a[1]]===0){za7f37=null;return false;}za7f37={};za7f37.z3086a=z3086a;za7f37.obj=zfb82d[z3086a[0]][z3086a[1]];za7f37.z3c494=za7f37.obj['position']['clone']();return true;};this.z10706=function(){if(!za7f37){return;}za7f37.obj['position']=za7f37.z3c494;za7f37.obj['children'][0]['position']['y']=0;za7f37=null;};this.z2c8a4=function(z221c6){if(!za7f37){return;}za7f37.obj['position']['x']=z221c6['x'];za7f37.obj['position']['z']=z221c6['z'];
za7f37.obj['children'][0]['position']['y']=1;
if(za63d7){if(za63d7.color===z991fd){za63d7['children'][0]['material']=z1a6d4.zbd9a0;}else{za63d7['children'][0]['material']=z1a6d4.z2bbcd;}za63d7['children'][1]['visible']=true;za63d7=null;}
if(this.zeb01b(z221c6)){var z6aef1=this.z8de80(z221c6['x'],z221c6['z']);
z7f76d['position']['x']=z6aef1[0];z7f76d['position']['z']=z6aef1[1];z7f76d['position']['y']=0.005;
var z3086a=this.zfaa72(z221c6['x'],z221c6['z']);za63d7=zfb82d[z3086a[0]][z3086a[1]];
if(za63d7&&za63d7!==za7f37.obj){if(za63d7.color===z991fd){za63d7['children'][0]['material']=z1a6d4.z34b7b;}else{za63d7['children'][0]['material']=z1a6d4.z8e807;}za63d7['children'][1]['visible']=false;}}else{z7f76d['position']['set'](z4c2f3,-0.2,z4c2f3);}};this.zb6f77=function(){this.z10706();
z7f76d['position']['y']=-0.2;
if(za63d7){if(za63d7.color===z991fd){za63d7['children'][0]['material']=z1a6d4.zbd9a0;}else{za63d7['children'][0]['material']=z1a6d4.z2bbcd;}za63d7['children'][1]['visible']=true;za63d7=null;}};this.z7c2ee=function(from,to,zd5014,callback){var z1efa8;var z011eb;var z47a14;if(typeof from==='string'){
from=this.z463a7(from);to=this.z463a7(to);}z47a14=this.z32378(to);
z1efa8=zfb82d[from[0]][from[1]];z011eb=zfb82d[to[0]][to[1]];if(z1efa8===0){return;}
zfb82d[from[0]][from[1]]=0;delete zfb82d[to[0]][to[1]];zfb82d[to[0]][to[1]]=z1efa8;
if(z011eb!==0){if(z011eb.color===z991fd){z011eb['children'][0]['material']=z1a6d4.z96807;}else{z011eb['children'][0]['material']=z1a6d4.za7e35;}if(zd5014){var z5d5f1=new ze641f();z5d5f1.cancelable=zd5014.cancelable;
z5d5f1.target(z011eb['children'][0]['material']);z5d5f1.to({'opacity':0});z5d5f1.duration(zd5014.duration());
z5d5f1.onComplete(function(){z19bda['remove'](z011eb);z011eb['children'][0]['material']['opacity']=1;});z5d5f1.start();}else{z19bda['remove'](z011eb);}}
if(zd5014){zd5014.target(z1efa8['position']);zd5014.zf22ef(ze641f.z2cc4b.zc44a2.z12cd8);
zd5014.to({'x':z47a14[0],'z':z47a14[1]
});
zd5014.onUpdate(function(z19815){var z43ee4=2;if(z19815<0.5){z1efa8['children'][0]['position']['y']=z19815*z43ee4;}else{z1efa8['children'][0]['position']['y']=z43ee4-z19815*z43ee4;}});
zd5014.onComplete(function(){z1efa8['children'][0]['position']['y']=0;if(callback){callback.call(z5cc1b);}});
zd5014.start();}else{z1efa8['position']['x']=z47a14[0];z1efa8['position']['z']=z47a14[1];if(callback){callback.call(z5cc1b);}}};this.zae48c=function(color,callback){z2dd72.z0c2c4=callback;if(color===z991fd){document.getElementById(z2211a+'_pawnPromotionWindow3D_white').style.display='block';document.getElementById(z2211a+'_pawnPromotionWindow3D_black').style.display='none';}else{document.getElementById(z2211a+'_pawnPromotionWindow3D_white').style.display='none';document.getElementById(z2211a+'_pawnPromotionWindow3D_black').style.display='block';}zaca20.style.display='block';zc2d78=false;};this.z1bd89=function(){zaca20.style.display='none';zc2d78=true;};this.z3ee73=function(z660f6){z311fb['visible']=z660f6;};this.z70823=function(z61dc0){z69033();var zf67f0=za87fa.zffa4c+'board/textures/board_'+z61dc0+'.jpg';var z04683=za87fa.zffa4c+'board/textures/board_'+z61dc0+'_notation.png';
z806ea['ImageUtils']['loadTexture'](zf67f0,null,function(zec422){z1a6d4.z46cee['map']=zec422;z1a6d4.z46cee['map']['flipY']=true;
z806ea['ImageUtils']['loadTexture'](z04683,null,function(zec422){z1a6d4.zaf9f7['map']=zec422;z67101();});});};this.zd1a42=function(pos){if(pos['z']===undefined){pos=this.z82bab(pos['x'],pos['y']);}var z3086a=this.zfaa72(pos['x'],pos['z']);if(z3086a&&zfb82d[z3086a[0]][z3086a[1]]!==0){return true;}return false;};this.zeb01b=function(pos){if(pos['z']===undefined){pos=this.z82bab(pos['x'],pos['y']);}if(pos['x']>=0&&pos['x']<=z4c2f3*8&&pos['z']>=0&&pos['z']<=z4c2f3*8){return true;}else{return false;}};this.z7059d=function(zf4df3){var z2dda4=zf4df3.charCodeAt(0)-96;var z2861f=parseInt(zf4df3.charAt(1),10);var x=z2dda4*z4c2f3-z4c2f3/2;var z=(9-z2861f)*z4c2f3-z4c2f3/2;return[x,z];};this.z463a7=function(zf4df3){var i=parseInt(zf4df3.charAt(1),10)-1;var j=zf4df3.charCodeAt(0)-97;return[i,j];};this.zfaa72=function(x,z){var i=Math.ceil((z4c2f3*8-z)/z4c2f3)-1;var j=Math.ceil(x/z4c2f3)-1;if(i>7||i<0||j>7||j<0||isNaN(i)||isNaN(j)){return false;}return[i,j];};this.z32378=function(pos){var x=(1+pos[1])*z4c2f3-z4c2f3/2;var z=z4c2f3*9-(1+pos[0])*z4c2f3-z4c2f3/2;return[x,z];};this.zcf995=function(pos){var z524fd=pos[0]+1;var file=String.fromCharCode(pos[1]+97);return file+z524fd;};this.z82bab=function(x,y){var pos=new z806ea['Vector3'](0,0,0);var z652f4=new z806ea['Vector3']((x/z70270['domElement']['width'])*2-1,-(y/z70270['domElement']['height'])*2+1,1
);
z8497a['unprojectVector'](z652f4,z030fb);var z8997a=z030fb['position'];var m=z652f4['y']/(z652f4['y']-z8997a['y']);pos['x']=z652f4['x']+(z8997a['x']-z652f4['x'])*m;pos['z']=z652f4['z']+(z8997a['z']-z652f4['z'])*m;return pos;};this.z8de80=function(x,z){var z8cbe4=(Math.ceil(x/z4c2f3)-1)*z4c2f3+z4c2f3/2;var za8363=(Math.ceil(z/z4c2f3)-1)*z4c2f3+z4c2f3/2;return[z8cbe4,za8363];};this.zf6424=function(z01342){var z52671={x:0,y:0,z:0};var z90511={x:0,y:0,z:0};if(z01342){if(z01342['distance']!==undefined&&!isNaN(z01342['distance'])){zedd57=z01342['distance'];}if(z01342['panAngle']!==undefined&&!isNaN(z01342['panAngle'])){z5cfdc=(za6c82?z01342['panAngle']+360:z01342['panAngle']);}if(z01342['tiltAngle']!==undefined&&!isNaN(z01342['tiltAngle'])){z5aead=z01342['tiltAngle'];}if(z01342['cameraX']!==undefined&&!isNaN(z01342['cameraX'])){z52671.x=z01342['cameraX'];}if(z01342['cameraY']!==undefined&&!isNaN(z01342['cameraY'])){z52671.y=z01342['cameraY'];}if(z01342['cameraZ']!==undefined&&!isNaN(z01342['cameraZ'])){z52671.z=z01342['cameraZ'];}if(z01342['cameraTargetX']!==undefined&&!isNaN(z01342['cameraTargetX'])){z90511.x=z01342['cameraTargetX'];}if(z01342['cameraTargetY']!==undefined&&!isNaN(z01342['cameraTargetY'])){z90511.y=z01342['cameraTargetY'];}if(z01342['cameraTargetZ']!==undefined&&!isNaN(z01342['cameraTargetZ'])){z90511.z=z01342['cameraTargetZ'];}}if(z52671.x||z52671.y||z52671.z)
{z030fb['position']['x']=z52671.x;z030fb['position']['y']=z52671.y;z030fb['position']['z']=z52671.z;zd8e35['x']=z90511.x;zd8e35['y']=z90511.y;zd8e35['z']=z90511.z;z030fb['lookAt'](zd8e35);}else
{z60e6c(z5cfdc,z5aead);}};function z6c1e6(){var z08cb2=z2d616.offsetWidth;var zb56ef=z2d616.offsetHeight;z70270['domElement']['style']['position']='relative';
z70270['physicallyBasedShading']=true;z70270['setSize'](z08cb2,zb56ef);z8497a=new z806ea['Projector']();z19bda=new z806ea['Scene']();z030fb=new z806ea['PerspectiveCamera'](35,z08cb2/zb56ef,1,2000);
if(za87fa.z1b515){z5cfdc+=360;}if(options.zd0c6a||options.z731e1||options.z576bd)
{z030fb['position']['x']=options.zd0c6a;z030fb['position']['y']=options.z731e1;z030fb['position']['z']=options.z576bd;zd8e35['x']=options.z08922;zd8e35['y']=options.z87556;zd8e35['z']=options.z61952;z030fb['lookAt'](zd8e35);z60e6c(z5cfdc,z5aead);
}else
{z60e6c(z5cfdc,z5aead);z4d34c(z92c2a,z1689a);}z19bda['add'](z030fb);}function z28b33(){
z1f45f.zc9c40=new z806ea['PointLight']();z1f45f.zc9c40['intensity']=0.65;z1f45f.zc9c40['position']['set'](z4c2f3*4,150,z4c2f3*4);
z1f45f.zdd9a9=new z806ea['DirectionalLight']();z1f45f.zdd9a9['intensity']=0.45;z1f45f.zdd9a9['position']['set'](z4c2f3*4,100,z4c2f3*4+200);z1f45f.zdd9a9['target']['position']['set'](z4c2f3*4,0,z4c2f3*4);
z1f45f.ze2611=new z806ea['DirectionalLight']();z1f45f.ze2611['intensity']=0.45;z1f45f.ze2611['position']['set'](z4c2f3*4,100,z4c2f3*4-200);z1f45f.ze2611['target']['position']['set'](z4c2f3*4,0,z4c2f3*4);
z1f45f.z0af8b=new z806ea['PointLight'](0xf9edc9);z1f45f.z0af8b['position']['set'](0,10,0);z1f45f.z0af8b['intensity']=0.25;z1f45f.z0af8b['distance']=500;
z19bda['add'](z1f45f.zc9c40);z19bda['add'](z1f45f.zdd9a9);z19bda['add'](z1f45f.ze2611);z19bda['add'](z1f45f.z0af8b);}function zf890f(callback){var z958d9=za87fa.zffa4c+'pieces/'+za87fa.zcd290+'/';var zf67f0=za87fa.zffa4c+'board/textures/board_'+za87fa.z1f5cb+'.jpg';var z04683=za87fa.zffa4c+'board/textures/board_'+za87fa.z1f5cb+'_notation.png';var z7f0a4=11;var z15425=0;

function zda7c2(){z15425++;if(z15425===z7f0a4&&callback){callback();}}
z1a6d4.z46cee=new z806ea['MeshLambertMaterial']();z1a6d4.z46cee['map']=z806ea['ImageUtils']['loadTexture'](zf67f0,null,function(){zda7c2()});z1a6d4.z46cee['map']['flipY']=true;

z1a6d4.zaf9f7=new z806ea['MeshLambertMaterial']();z1a6d4.zaf9f7['map']=z806ea['ImageUtils']['loadTexture'](z04683,null,function(){zda7c2()});z1a6d4.zaf9f7['transparent']=true;
z1a6d4.zccc6d=new z806ea['MeshBasicMaterial']();z1a6d4.zccc6d['map']=z806ea['ImageUtils']['loadTexture'](za87fa.zffa4c+'board/textures/board_shadow.png',null,function(){zda7c2()});z1a6d4.zccc6d['transparent']=true;
z1a6d4.zbd9a0=new z806ea['MeshPhongMaterial']();z1a6d4.zbd9a0['map']=z806ea['ImageUtils']['loadTexture'](z958d9+'textures/piece_white.jpg',null,function(){zda7c2()});z1a6d4.zbd9a0['shininess']=50;
z1a6d4.z96807=new z806ea['MeshPhongMaterial']();z1a6d4.z96807['transparent']=true;z1a6d4.z96807['map']=z1a6d4.zbd9a0['map'];
z1a6d4.z34b7b=new z806ea['MeshPhongMaterial']();z1a6d4.z34b7b['transparent']=true;z1a6d4.z34b7b['map']=z1a6d4.zbd9a0['map'];z1a6d4.z34b7b['opacity']=0.5;
z1a6d4.z2bbcd=new z806ea['MeshPhongMaterial']();z1a6d4.z2bbcd['map']=z806ea['ImageUtils']['loadTexture'](z958d9+'textures/piece_black.jpg',null,function(){zda7c2()});z1a6d4.z2bbcd['shininess']=50;
z1a6d4.za7e35=new z806ea['MeshPhongMaterial']();z1a6d4.za7e35['transparent']=true;z1a6d4.za7e35['map']=z1a6d4.z2bbcd['map'];
z1a6d4.z8e807=new z806ea['MeshPhongMaterial']();z1a6d4.z8e807['transparent']=true;z1a6d4.z8e807['map']=z1a6d4.z2bbcd['map'];z1a6d4.z8e807['opacity']=0.5;
z1a6d4.zf15ff=new z806ea['MeshLambertMaterial']();z1a6d4.zf15ff['color']=new z806ea['Color'](0xffea00);z1a6d4.zf15ff['opacity']=0.75;z1a6d4.zf15ff['transparent']=true;
z1a6d4.z67783=new z806ea['MeshLambertMaterial']();z1a6d4.z67783['color']=new z806ea['Color'](0x176a85);z1a6d4.z67783['opacity']=0.6;z1a6d4.z67783['transparent']=true;
z1a6d4.zf1479=new z806ea['MeshLambertMaterial']();z1a6d4.zf1479['color']=new z806ea['Color'](0x0aa00);z1a6d4.zf1479['opacity']=0.70;z1a6d4.zf1479['transparent']=true;z1a6d4.zf1479['side']=z806ea['DoubleSide'];z1a6d4.zf1479['depthWrite']=false;
z1a6d4.z3d80d={};
z1a6d4.z3d80d.z77672=new z806ea['MeshBasicMaterial']();z1a6d4.z3d80d.z77672['transparent']=true;z1a6d4.z3d80d.z77672['depthWrite']=false;z1a6d4.z3d80d.z77672['map']=z806ea['ImageUtils']['loadTexture'](z958d9+'textures/king_shadow.png',null,function(){zda7c2()});
z1a6d4.z3d80d.z75e1a=new z806ea['MeshBasicMaterial']();z1a6d4.z3d80d.z75e1a['transparent']=true;z1a6d4.z3d80d.z75e1a['depthWrite']=false;z1a6d4.z3d80d.z75e1a['map']=z806ea['ImageUtils']['loadTexture'](z958d9+'textures/queen_shadow.png',null,function(){zda7c2()});
z1a6d4.z3d80d.z252b8=new z806ea['MeshBasicMaterial']();z1a6d4.z3d80d.z252b8['transparent']=true;z1a6d4.z3d80d.z252b8['depthWrite']=false;z1a6d4.z3d80d.z252b8['map']=z806ea['ImageUtils']['loadTexture'](z958d9+'textures/rook_shadow.png',null,function(){zda7c2()});
z1a6d4.z3d80d.z22eb1=new z806ea['MeshBasicMaterial']();z1a6d4.z3d80d.z22eb1['transparent']=true;z1a6d4.z3d80d.z22eb1['depthWrite']=false;z1a6d4.z3d80d.z22eb1['map']=z806ea['ImageUtils']['loadTexture'](z958d9+'textures/bishop_shadow.png',null,function(){zda7c2()});
z1a6d4.z3d80d.z24a01=new z806ea['MeshBasicMaterial']();z1a6d4.z3d80d.z24a01['transparent']=true;z1a6d4.z3d80d.z24a01['depthWrite']=false;z1a6d4.z3d80d.z24a01['map']=z806ea['ImageUtils']['loadTexture'](z958d9+'textures/knight_shadow.png',null,function(){zda7c2()});
z1a6d4.z3d80d.z8e045=new z806ea['MeshBasicMaterial']();z1a6d4.z3d80d.z8e045['transparent']=true;z1a6d4.z3d80d.z8e045['depthWrite']=false;z1a6d4.z3d80d.z8e045['map']=z806ea['ImageUtils']['loadTexture'](z958d9+'textures/pawn_shadow.png',null,function(){zda7c2()});}function z01422(callback){var zbb9ea=9;
var z04c76=0;
var z958d9=za87fa.zffa4c+'pieces/'+za87fa.zcd290+'/';var zd934f=za87fa.zffa4c+'board/board.json';
function zda7c2(){z04c76++;if(z04c76===zbb9ea&&callback){callback();}}
z8890b(zd934f,function(z08854){z929a4=new z806ea['Mesh'](z08854,z1a6d4.z46cee);z929a4['position']['x']=z4c2f3*4;z929a4['position']['z']=z4c2f3*4;z1f45f.zc9c40['target']=z929a4;z1f45f.zdd9a9['target']=z929a4;z1f45f.ze2611['target']=z929a4;z19bda['add'](z929a4);zda7c2();});
z8890b(z958d9+'king.json',function(z08854){z69729.z77672=z08854;zda7c2();});
z8890b(z958d9+'queen.json',function(z08854){z69729.z75e1a=z08854;zda7c2();});
z8890b(z958d9+'rook.json',function(z08854){z69729.z252b8=z08854;zda7c2();});
z8890b(z958d9+'bishop.json',function(z08854){z69729.z22eb1=z08854;zda7c2();});
z8890b(z958d9+'knight.json',function(z08854){z69729.z24a01=z08854;zda7c2();});
z8890b(z958d9+'pawn.json',function(z08854){z69729.z8e045=z08854;zda7c2();});
z8890b(za87fa.zffa4c+'marking_arrow_straight.json',function(z08854){zee776['straight']=z08854;zda7c2();});z8890b(za87fa.zffa4c+'marking_arrow_L.json',function(z08854){zee776['L']=z08854;zda7c2();});
var z55768=new z806ea['PlaneGeometry'](z38fe2,z38fe2,1,1);z311fb=new z806ea['Mesh'](z55768,z1a6d4.zaf9f7);z311fb['position']['set'](z4c2f3*4,0,z4c2f3*4);z311fb['visible']=za87fa.zca819;z4ba4d(z311fb,new z806ea['Vector3'](1,0,0),-90);
z19bda['add'](z311fb);
ze8415=new z806ea['Mesh'](new z806ea['PlaneGeometry'](110,110,1,1),z1a6d4.zccc6d);ze8415['position']['set'](z4c2f3*4,-2,z4c2f3*4);z4ba4d(ze8415,new z806ea['Vector3'](1,0,0),-90);
z19bda['add'](ze8415);

var z4ec41=new z806ea['Shape']();z4ec41['moveTo'](-z4c2f3/2,-z4c2f3/2);z4ec41['lineTo'](z4c2f3/2,-z4c2f3/2);z4ec41['lineTo'](z4c2f3/2,z4c2f3/2);z4ec41['lineTo'](-z4c2f3/2,z4c2f3/2);z4ec41['lineTo'](-z4c2f3/2,-z4c2f3/2);
var zef043=new z806ea['Path']();zef043['moveTo'](-(z4c2f3/2-z6f6b6),-(z4c2f3/2-z6f6b6));zef043['lineTo']((z4c2f3/2-z6f6b6),-(z4c2f3/2-z6f6b6));zef043['lineTo']((z4c2f3/2-z6f6b6),(z4c2f3/2-z6f6b6));zef043['lineTo'](-(z4c2f3/2-z6f6b6),(z4c2f3/2-z6f6b6));zef043['lineTo'](-(z4c2f3/2-z6f6b6),-(z4c2f3/2-z6f6b6));z4ec41['holes']['push'](zef043);
zade3b=z4ec41['makeGeometry']();
var zaa718=new z806ea['Shape']();zaa718['moveTo'](-z4c2f3/2,-z4c2f3/2);zaa718['lineTo'](z4c2f3/2,-z4c2f3/2);zaa718['lineTo'](z4c2f3/2,z4c2f3/2);zaa718['lineTo'](-z4c2f3/2,z4c2f3/2);zaa718['lineTo'](-z4c2f3/2,-z4c2f3/2);
var z1930f=new z806ea['Path']();z1930f['moveTo'](-(z4c2f3/2-z06f3b),-(z4c2f3/2-z06f3b));z1930f['lineTo']((z4c2f3/2-z06f3b),-(z4c2f3/2-z06f3b));z1930f['lineTo']((z4c2f3/2-z06f3b),(z4c2f3/2-z06f3b));z1930f['lineTo'](-(z4c2f3/2-z06f3b),(z4c2f3/2-z06f3b));z1930f['lineTo'](-(z4c2f3/2-z06f3b),-(z4c2f3/2-z06f3b));zaa718['holes']['push'](z1930f);
var z9a110=zaa718['makeGeometry']();z7f76d=new z806ea['Mesh'](z9a110,z1a6d4.zf15ff);z7f76d['position']['set'](z4c2f3,-0.2,z4c2f3);z4ba4d(z7f76d,new z806ea['Vector3'](1,0,0),-90);z7f76d['renderDepth']=1;
z19bda['add'](z7f76d);}function zbea84(){myEvent.observe(z2d616,'mousedown',z87226);myEvent.observe(document,'mouseup',zbd292);myEvent.observe(z2d616,'dblclick',zfa7a0);myEvent.observe(z2d616,'mousewheel',z4da0c);myEvent.observe(z2d616,'DOMMouseScroll',z4da0c);}function z39230(){var z958d9=za87fa.zffa4c+'pieces/'+za87fa.zcd290+'/';zaca20=document.createElement('div');zaca20.style.display='none';zaca20.style.background='#fff';zaca20.style.position='absolute';zaca20.style.left='50%';zaca20.style.top='50%';zaca20.style.marginLeft='-90px';zaca20.style.marginTop='-117px';zaca20.style.width='180px';zaca20.style.height='234px';zaca20.style.border='1px solid #666';zaca20.style.zf19e1='3px';zaca20.style.zf5d77='1px 1px 10px #333';zaca20.style.textAlign='center';zaca20.style.opacity='0.9';zaca20.innerHTML+='<div style="font-size: 12px; color: #333; margin: 0.5em 0 0 0;">pawn promotion</div>'+'<div id="'+z2211a+'_pawnPromotionWindow3D_white" style="display: none;">'+'<img data-pieceType="q" src="'+z958d9+'queen_promotion_white.jpg" />'+'<img data-pieceType="n" src="'+z958d9+'knight_promotion_white.jpg" />'+'<img data-pieceType="r" src="'+z958d9+'rook_promotion_white.jpg" />'+'<img data-pieceType="b" src="'+z958d9+'bishop_promotion_white.jpg" />'+'</div>'+'<div id="'+z2211a+'_pawnPromotionWindow3D_black" style="display: none;">'+'<img data-pieceType="q" src="'+z958d9+'queen_promotion_black.jpg" />'+'<img data-pieceType="n" src="'+z958d9+'knight_promotion_black.jpg" />'+'<img data-pieceType="r" src="'+z958d9+'rook_promotion_black.jpg" />'+'<img data-pieceType="b" src="'+z958d9+'bishop_promotion_black.jpg" />'+'</div>';myEvent.observe(zaca20,'click',zbf021);z2d616.appendChild(zaca20);}function z69033(){document.getElementById(z2211a+'_loadingIndicator').style.display='block';}function z67101(){document.getElementById(z2211a+'_loadingIndicator').style.display='none';}function z64cd6(){requestAnimationFrame(z64cd6);render();}function render(){z1f45f.z0af8b['position']['x']=z030fb['position']['x'];z1f45f.z0af8b['position']['z']=z030fb['position']['z'];z70270['render'](z19bda,z030fb);}function z60e6c(z746d7,zf098f,z39c11,callback,z03d21){z03d21=z03d21||false;if(z39c11&&!z03d21){var z5a56a={z3e9cd:z5cfdc,z70716:z5aead
};var zd5014=new ze641f();zd5014.target(z5a56a);zd5014.to({z3e9cd:z746d7,z70716:zf098f});zd5014.duration(0.9);zd5014.zf22ef(ze641f.z2cc4b.zc44a2.z12cd8);
zd5014.onUpdate(function(){z60e6c(z5a56a.z3e9cd,z5a56a.z70716);});
zd5014.onComplete(function(){z60e6c(z5a56a.z3e9cd,z5a56a.z70716);if(callback){callback();}});
zd5014.start();return zd5014;}else{zf098f=Math.min(180,Math.max(0,zf098f));var x=zedd57*Math.sin(z746d7*Math.PI/360)*Math.cos(zf098f*Math.PI/360);var y=zedd57*Math.sin(zf098f*Math.PI/360);var z=zedd57*Math.cos(z746d7*Math.PI/360)*Math.cos(zf098f*Math.PI/360);
x+=zd8e35['x'];z+=zd8e35['z'];if(!z03d21)
{z5cfdc=z746d7;z5aead=zf098f;z030fb['position']['x']=x;z030fb['position']['y']=y;z030fb['position']['z']=z;z030fb['lookAt'](zd8e35);}if(callback){callback();}if(z03d21){return{'x':x,'y':y,'z':z};}else{return null;}}}function z4d34c(z12521,zed07e){
var ze3105=z030fb['position']['x'];var zd9702=z030fb['position']['z'];var z5a0b2=zd8e35['x'];var zbc8a6=zd8e35['z'];
var x=z12521/Math.sqrt(Math.pow(z5a0b2-ze3105,2)+Math.pow(zbc8a6-zd9702,2))*(zd9702-zbc8a6);var z=-1*z12521/Math.sqrt(Math.pow(z5a0b2-ze3105,2)+Math.pow(zbc8a6-zd9702,2))*(ze3105-z5a0b2);
var z5174f=new z806ea['Vector3'](x,0,z);
z030fb['position']['add'](z5174f);zd8e35['add'](z5174f);
zd8e35['y']+=zed07e;z030fb['lookAt'](zd8e35);z92c2a=z12521;z1689a=zed07e;}function zdae3e(){z92c2a=za87fa.z92c2a;z1689a=za87fa.z1689a;zd8e35['x']=z4c2f3*4;zd8e35['z']=z4c2f3*4;zd8e35['y']=z1689a;if(za6c82){z60e6c(zd5f92+360,zb92a7,true);}else{z60e6c(zd5f92,zb92a7,true);}
var zec34a=new ze641f();var zce2d1={zedd57:zedd57};
zec34a.target(zce2d1);zec34a.to({zedd57:z42373});zec34a.duration(0.7);zec34a.zf22ef(ze641f.z2cc4b.zc44a2.z12cd8);
zec34a.onUpdate(function(){zedd57=zce2d1.zedd57;});
zec34a.start();ze2ec0.ze87cf.fireEvent('onCameraChange',{'distance':z42373,'panAngle':zd5f92,'tiltAngle':zb92a7,'cameraX':0,'cameraY':0,'cameraZ':0,'cameraTargetX':0,'cameraTargetY':0,'cameraTargetZ':0
});}function z87226(event){if(!zc2d78){return;}z15b75=true;if(event.which>1){ze4f94=true;if(event.which===3){z8e9a1=true;}}var zae5e9=myEvent.getPointXY(event);
var z089e3={x:(zae5e9.x-ze2ec0.ze87cf.ze16a5)*z5d509,y:(zae5e9.y-ze2ec0.ze87cf.ze70ad)*z5d509
};if(instance.zeb01b(z089e3)){zc09e9=true;}else{zc09e9=false;myEvent.observe(document,'mousemove',ze2f63);}zca21e=z089e3.x;zcc4de=z089e3.y;}function zbd292(event){myEvent.stopObserving(document,'mousemove',ze2f63);if(!zc2d78){return;}z15b75=false;ze4f94=false;z8e9a1=false;zc09e9=false;var zae5e9=myEvent.getPointXY(event);
var z089e3={x:(zae5e9.x-ze2ec0.ze87cf.ze16a5)*z5d509,y:(zae5e9.y-ze2ec0.ze87cf.ze70ad)*z5d509
};zca21e=z089e3.x;zcc4de=z089e3.y;if(zdda60||zd56ef){zdda60=false;zd56ef=false;var z52671=z030fb['position'];
if(za6c82){z52671=z60e6c(z5cfdc-360,z5aead,false,null,true);}ze2ec0.ze87cf.fireEvent('onCameraChange',{'distance':zedd57,'panAngle':(za6c82?z5cfdc-360:z5cfdc),'tiltAngle':z5aead,'cameraX':z52671['x'],'cameraY':z52671['y'],'cameraZ':z52671['z'],'cameraTargetX':zd8e35['x'],'cameraTargetY':zd8e35['y'],'cameraTargetZ':zd8e35['z']
});}}function ze2f63(event){if(!zc2d78){return;}var zae5e9=myEvent.getPointXY(event);
var z8418a=(zae5e9.x-ze2ec0.ze87cf.ze16a5)*z5d509;var z1e63b=(zae5e9.y-ze2ec0.ze87cf.ze70ad)*z5d509;
if(z15b75&&!zc09e9){if(z8e9a1){
z5cfdc-=(z8418a-zca21e)*0.6;z5aead+=(z1e63b-zcc4de)*0.6;z60e6c(z5cfdc,z5aead);zdda60=true;}else if(ze4f94){
z92c2a=(z8418a-zca21e)*0.1*-1;z1689a=(z1e63b-zcc4de)*0.1;z4d34c(z92c2a,z1689a);zd56ef=true;}}zca21e=z8418a;zcc4de=z1e63b;}function zfa7a0(event){if(!zc2d78){return;}var zae5e9=myEvent.getPointXY(event);
var z089e3={x:(zae5e9.x-ze2ec0.ze87cf.ze16a5)*z5d509,y:(zae5e9.y-ze2ec0.ze87cf.ze70ad)*z5d509
};if(!instance.zeb01b(z089e3)){zdae3e();}}function z4da0c(event){myEvent.preventDefault(event);if(!zc2d78){return;}
var wheelDelta=event.wheelDelta!==undefined?event.wheelDelta:-event.detail;
if(wheelDelta>0){if(zedd57>za87fa.z03906){return;}zedd57+=5;}else{if(zedd57<za87fa.z4befe){return;}zedd57-=5;}
z60e6c(z5cfdc,z5aead);if(this.z2232d){clearTimeout(this.z2232d);}
this.z2232d=setTimeout(function(){var z52671=z030fb['position'];
if(za6c82){z52671=z60e6c(z5cfdc-360,z5aead,false,null,true);}ze2ec0.ze87cf.fireEvent('onCameraChange',{'distance':zedd57,'panAngle':(za6c82?z5cfdc-360:z5cfdc),'tiltAngle':z5aead,'cameraX':z52671['x'],'cameraY':z52671['y'],'cameraZ':z52671['z'],'cameraTargetX':zd8e35['x'],'cameraTargetY':zd8e35['y'],'cameraTargetZ':zd8e35['z']
});},1000);}function zbf021(event){myEvent.preventDefault(event,true);var z02256=myEvent.getTarget(event).getAttribute('data-pieceType');if(z02256!==null&&z2dd72.z0c2c4){z2dd72.z0c2c4.call(z5cc1b,z02256);}}function z4ba4d(object,axis,zbd1be){var zf9acb=new z806ea['Matrix4']();var z1d4ee=zbd1be*Math.PI/180;zf9acb['makeRotationAxis'](axis['normalize'](),z1d4ee);zf9acb['multiply'](object['matrix']);
object['matrix']=zf9acb;object['rotation']['setEulerFromRotationMatrix'](object['matrix']);}function z0a84b(color){color=color.replace('#','');if(color.length===3){color=color[0]+color[0]+color[1]+color[1]+color[2]+color[2];}return parseInt(color,16);}function z8890b(url,callback){var z6bc7b=new z806ea['JSONLoader']();z6bc7b['load'](url,callback);}}function ze641f(z7dde5){var target;var zff2b4={};var zcd805={};var duration=z7dde5?z7dde5.ze8f55:0.5;var z16556=ze641f.z2cc4b.z7bd24;var z18331;var zdf5b5;this.cancelable=z7dde5?z7dde5.cancelable:false;this.target=function(z45613){target=z45613;};this.to=function(z24137){zcd805=z24137;
for(var property in zcd805){if(zcd805.hasOwnProperty(property)){zff2b4[property]=target[property];}}};this.duration=function(z7e961){if(z7e961!==undefined){duration=z7e961;}return duration;};this.zf22ef=function(zf22ef){z16556=zf22ef;};this.onUpdate=function(callback){z18331=callback;};this.onComplete=function(callback){zdf5b5=callback;};this.start=function(){if(!target){if(z7dde5){z7dde5.z03df1=true;}return;}if(!z7dde5){z7dde5=z36b44.ze0dc1();z7dde5.cancelable=this.cancelable;}z7dde5.z3c564=z3c564;z7dde5.z56a67=z56a67;z7dde5.ze8f55=duration;z36b44.z72000.start();};this.stop=function(){z7dde5.z03df1=true;z7dde5.z3c564=function(){};z7dde5.z56a67=function(){}};function z3c564(z7dde5,z1c2e5){var z19815=(z1c2e5-z7dde5.zeb68e)/(z7dde5.z30c9d-z7dde5.zeb68e);z19815=z19815>1?1:z19815;z19815=z16556(z19815);
for(var property in zcd805){if(zcd805.hasOwnProperty(property)){target[property]=zff2b4[property]+(zcd805[property]-zff2b4[property])*z19815;}}if(z18331){z18331(z19815);}if(z19815===1){z7dde5.z03df1=true;}}function z56a67(){if(zdf5b5){zdf5b5();}}}ze641f.z2cc4b={z7bd24:function(t){return t;},z723f3:{z460ef:function(t){return t*t;},z271d4:function(t){return t*(2-t);},z12cd8:function(t){if((t*=2)<1){return 0.5*t*t;}else{return-0.5*(--t*(t-2)-1);}}},zc44a2:{z460ef:function(t){return t*t*t;},z271d4:function(t){return--t*t*t+1;},z12cd8:function(t){if((t*=2)<1){return 0.5*t*t*t;}else{return 0.5*((t-=2)*t*t+2);}}},zcf6c2:{z460ef:function(t){return t*t*t*t;},z271d4:function(t){return 1-(--t*t*t*t);},z12cd8:function(t){if((t*=2)<1){return 0.5*t*t*t*t;}else{return-0.5*((t-=2)*t*t*t-2);}}},za24ca:{z460ef:function(t){return t*t*t*t*t;},z271d4:function(t){return--t*t*t*t*t+1;},z12cd8:function(t){if((t*=2)<1){return 0.5*t*t*t*t*t;}else{return 0.5*((t-=2)*t*t*t*t+2);}}}};
z08e47['WebGL3D']=z2240e.zde763;})(this);(function(z2240e){'use strict';if(z2240e['ChessBoardFlash3D']){return;}var z991fd=1;var z38b9a=2;var z5b67c=155;var zd5f92=0;var zb92a7=90;z2240e['ChessBoardFlash3D']=function(ze87cf){this.ze87cf=ze87cf;this.z70270=null;this.zd72a5=false;this.options={zad942:false,z2677a:true,z6c201:1.33,z189a5:600
};ze87cf.zd8c9e('onCameraChange');ze87cf.attachEvent('onBuild',this.z144db,this);ze87cf.attachEvent('onRefresh',this.z6d538,this);ze87cf.attachEvent('onSetColorScheme',this.z25bef,this);ze87cf.attachEvent('onSetBoardCoords',this.z4b778,this);
ze87cf.attachEvent('onSetBoardFlip',this.zcf3a1,this);
ze87cf.attachEvent('onShowPromotionWindow',this.zee3e4,this);ze87cf.attachEvent('onPromotionPieceSelected',this.z8145f,this);
ze87cf.attachEvent('onMarkSquare',this.z5b50b,this);ze87cf.attachEvent('onClearSquare',this.zdbbaa,this);ze87cf.attachEvent('onBlinkSquare',this.zfd011,this);ze87cf.attachEvent('onSetSquareColor',this.z742d6,this);ze87cf.attachEvent('onMarkArrow',this.z94199,this);ze87cf.attachEvent('onClearArrow',this.zf6e11,this);ze87cf.attachEvent('onClearMarkings',this.z201b5,this);
ze87cf.attachEvent('onMoveAnimation',this.zfb0aa,this);ze87cf.attachEvent('onAfterMoveAnimated',this.zcf187,this);
ze87cf.attachEvent('onStartDragging',this.z05d61,this);ze87cf.attachEvent('onDragProgress',this.z0e2fe,this);ze87cf.attachEvent('onThrowPiece',this.z59010,this);ze87cf.attachEvent('onDropPiece',this.z348a8,this);
ze87cf.attachEvent('onHidePieces',this.za19e1,this);ze87cf.attachEvent('onShowPieces',this.zd5b01,this);ze87cf.attachEvent('onCameraChange',this.zf7372,this);};z2240e['ChessBoardFlash3D'].isSupported=function(z430e5){if(z430e5['major']<11){return false;}return true;};z2240e['ChessBoardFlash3D']['onFlashCall']=function(z01444,method,params){var z217a6=document.getElementById(z01444).chessBoard.z659fc;if(z217a6[method]){z217a6[method].apply(z217a6,params);}};z2240e['ChessBoardFlash3D'].prototype={z144db:function(){var zffa4c=Config['domain.cssjs']+'/assets/chessboard3d_data/';var za31e4=this.ze87cf.za31e4;
this.ze87cf.z533ad();
za31e4.parentNode.style.background='none';za31e4.style.border='none';
this.ze87cf.za31e4.style.position='relative';this.ze87cf.za31e4.style.overflow='hidden';var z2211a=za31e4.id+'_flashBoard3D';var za87fa={'containerId':za31e4.id,'cameraDistance':z27d7a.z712f3('cameraDistance')!==null?parseFloat(z27d7a.z712f3('cameraDistance')):z5b67c,'cameraDistanceMax':500,'cameraDistanceMin':50,'cameraPanAngle':z27d7a.z712f3('cameraPanAngle')!==null?parseFloat(z27d7a.z712f3('cameraPanAngle'))*-1:zd5f92,'cameraTiltAngle':z27d7a.z712f3('cameraTiltAngle')!==null?parseFloat(z27d7a.z712f3('cameraTiltAngle')):zb92a7,'cameraX':z27d7a.z712f3('cameraX')!=null?parseFloat(z27d7a.z712f3('cameraX'))*-1:null,'cameraY':z27d7a.z712f3('cameraY')!=null?parseFloat(z27d7a.z712f3('cameraY')):null,'cameraZ':z27d7a.z712f3('cameraZ')!=null?parseFloat(z27d7a.z712f3('cameraZ')):null,'cameraTargetX':z27d7a.z712f3('cameraTargetX')!=null?parseFloat(z27d7a.z712f3('cameraTargetX'))*-1:null,'cameraTargetY':z27d7a.z712f3('cameraTargetY')!=null?parseFloat(z27d7a.z712f3('cameraTargetY')):null,'cameraTargetZ':z27d7a.z712f3('cameraTargetZ')!=null?parseFloat(z27d7a.z712f3('cameraTargetZ')):null,'defaultCameraDistance':z5b67c,'defaultCameraPanAngle':zd5f92,'defaultCameraTiltAngle':zb92a7,'cameraHorizontalPanning':0,'cameraVerticalPanning':-12,'viewportAspectRatio':this.options.z6c201||1,'dataUrl':zffa4c,'chessSet':'staunton_executive','boardTexture':this.ze87cf.zba7a5,'hasBoardNotation':this.ze87cf.z6a56d,'flipBoard':this.ze87cf.z02e31,'viewportBackgroundColor':'#ffffff','viewOnly':this.ze87cf.z24380,'enabled':this.ze87cf.z074d9
};
var z0d2a5=encodeURIComponent(JSON.stringify(za87fa));
var ze03fe='';
if(z95894.z8c277.z2071e){ze03fe+='<object id="'+z2211a+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="100%" height="100%" style="position: absolute; top: 0; left: 0">';}else{ze03fe+='<object id="'+z2211a+'" type="application/x-shockwave-flash" data="'+zffa4c+'ChessBoardFlash3D.v'+Config.za89a8+'.swf" width="100%" height="100%" style="position: absolute; top: 0; left: 0">';}
ze03fe+='<param name="movie" value="'+zffa4c+'ChessBoardFlash3D.v'+Config.za89a8+'.swf"/>';ze03fe+='<param name="wmode" value="direct" />';ze03fe+='<param name="allowScriptAccess" value="always" />';ze03fe+='<param name="FlashVars" value="config='+z0d2a5+'" />';ze03fe+='<a href="http://www.adobe.com/go/getflash">';ze03fe+='<img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player"/>';ze03fe+='</a>';ze03fe+='</object>';
za31e4.innerHTML=ze03fe;
this.z01772(this.ze87cf.zba64d['real3Dwidth']);this.z70270=document.getElementById(z2211a);},z6d538:function(e){if(!this.zd72a5){return;}if(e&&e['moveNode']){this.z26766(e['moveNode']);return;}var i;var zad85d=this.ze87cf.z7834f.zad85d;var z7a647=[];
for(i in zad85d){if(zad85d.hasOwnProperty(i)){if(zad85d[i].zba125){z7a647.push({'color':zad85d[i].color,'type':zad85d[i].type,'area':zad85d[i].zba125
});}}}
this.z70270['updateBoard'](z7a647);this.z70270['setViewOnly'](this.ze87cf.z24380);},z25bef:function(){this.z70270['setBoardTexture'](this.ze87cf.zba7a5);},z4b778:function(){this.z70270['showBoardNotation'](this.ze87cf.z6a56d);},z01336:function(){},zcf3a1:function(){this.z70270['flipBoard'](this.ze87cf.z02e31);},zee3e4:function(){var z8c488=this.z25bb2();
if(this.ze87cf.zfed09&&this.ze87cf.zfed09.z49a99){z8c488=z8c488===z991fd?z38b9a:z991fd;}this.z70270['showPromotionWindow'](z8c488);},z8145f:function(){this.z70270['hidePromotionWindow']();},z5b50b:function(e){if(e['rightClicked']){this.z70270['markSquare'](e['areaId'],e['color'],'secondary',{opacity:0.5});}else if(e['legalMoveHint']){this.z70270['markSquare'](e['areaId'],e['color'],'primary',{opacity:0.5});}else{this.z70270['markSquare'](e['areaId'],e['color'],'primary',{opacity:0.5});}},zdbbaa:function(e){if(e['rightClicked']){this.z70270['unmarkSquare'](e['areaId'],'secondary');}else{this.z70270['unmarkSquare'](e['areaId'],'primary');}},zfd011:function(){this.z70270['blinkSquare']({'areaId':this.ze87cf.zfc921['areaId'],'count':this.ze87cf.zfc921.count,'freq':this.ze87cf.zfc921.z87fe4
});},z742d6:function(e){this.z70270['setSquareColor'](e['color'],e['areaId']);},z94199:function(e){var z6205b=e['arrow'].z6205b;var zb0082=e['arrow'].zb0082;var z0a00a={from:z6205b,to:zb0082,z982f5:z6205b.toLowerCase().charCodeAt(0)-96,z0db2a:9-z6205b.charAt(1),z6234d:zb0082.toLowerCase().charCodeAt(0)-96,z5e2dd:9-zb0082.charAt(1)
};var zf38e5=this.z4f7d3(z0a00a);if(zf38e5){this.z70270['drawArrow'](zf38e5);}},zf6e11:function(e){this.z70270['removeArrow']({'from':e['arrow'].z6205b,'to':e['arrow'].zb0082
});},z201b5:function(){this.z70270['removeAllArrows']();
for(var zae1f8 in this.ze87cf.z52f27){this.z70270['unmarkSquare'](zae1f8,'secondary');}this.ze87cf.z27781=[];this.ze87cf.z52f27={size:0};},zfb0aa:function(zffaf3){this.z70270['movePiece'](zffaf3['fromAreaId'],zffaf3['toAreaId'],zffaf3['animationInstance'].ze8f55);},zcf187:function(){},z05d61:function(e){var z221c6=this.z70270['getMouse3D'](e.offsetX,e.offsetY);if(!this.ze87cf.z4b834){
this.z70270['selectPiece'](z221c6);}else{

}z36b44.z92068.z84efe=this.ze87cf.ze16a5;z36b44.z92068.zc17fe=this.ze87cf.ze16a5+this.ze87cf.za31e4.offsetWidth;z36b44.z92068.z4b8ec=this.ze87cf.ze70ad;z36b44.z92068.z3407c=this.ze87cf.ze70ad+this.ze87cf.za31e4.offsetHeight;},z0e2fe:function(e){var z221c6=this.z70270['getMouse3D'](e.offsetX,e.offsetY);if(!this.ze87cf.z4b834){
this.z70270['dragSelectedPiece'](z221c6);}else{
var zf38e5=this.z4f7d3(this.ze87cf.zbd74f);if(zf38e5){zf38e5['temporary']=true;this.z70270['drawArrow'](zf38e5);}else{this.z70270['removeArrow']({'temporary':true});}}},z59010:function(){this.z7a842();},z348a8:function(){this.z7a842();},za19e1:function(){this.z70270['showPieces'](false);},zd5b01:function(){this.z70270['showPieces'](true);},zf7372:function(z030fb){z27d7a.z712f3('cameraDistance',z030fb['distance']);z27d7a.z712f3('cameraPanAngle',z030fb['panAngle']);z27d7a.z712f3('cameraTiltAngle',z030fb['tiltAngle']);z27d7a.z712f3('cameraX',z030fb['cameraX']);z27d7a.z712f3('cameraY',z030fb['cameraY']);z27d7a.z712f3('cameraZ',z030fb['cameraZ']);z27d7a.z712f3('cameraTargetX',z030fb['cameraTargetX']);z27d7a.z712f3('cameraTargetY',z030fb['cameraTargetY']);z27d7a.z712f3('cameraTargetZ',z030fb['cameraTargetZ']);},z7a842:function(){this.z70270['endPieceDrag']();},z26766:function(za6d94){var z524fd;if(!za6d94.z6205b||!za6d94.zb0082){return;}this.z567f7(za6d94.z6205b);this.z567f7(za6d94.zb0082);
if(za6d94.z03a92.match(/^[a-h]x[a-h][63][\+\#]?$/)){if(za6d94.z03a92.substr(3,1)==='6'){this.z567f7(za6d94.zb0082.substr(0,1)+(Number(za6d94.zb0082.substr(1,1))-1));}else{this.z567f7(za6d94.zb0082.substr(0,1)+(Number(za6d94.zb0082.substr(1,1))+1));}}
if(za6d94.z03a92==='O-O-O'||za6d94.z03a92==='O-O-O+'||za6d94.z03a92==='O-O-O#'){z524fd=za6d94.z6205b.substr(1,1);this.z567f7('a'+z524fd);this.z567f7('d'+z524fd);}else if(za6d94.z03a92==='O-O'||za6d94.z03a92==='O-O+'||za6d94.z03a92==='O-O#'){z524fd=za6d94.z6205b.substr(1,1);this.z567f7('f'+z524fd);this.z567f7('h'+z524fd);}},z567f7:function(zba125){var z70602=null;var z1efa8=null;if(this.ze87cf.z7834f.areas[zba125].zad85d.length){z70602=this.ze87cf.z7834f.areas[zba125].zad85d[0];}this.z70270['removePiece'](zba125);if(z70602!==null){z1efa8=this.ze87cf.z7834f.zad85d[z70602];this.z70270['addPiece'](z1efa8.type,zba125,z1efa8.color);}},ze49f5:function(e){return e.zfb200;},z7e90b:function(zae5e9){var z8418a=zae5e9.x-this.ze87cf.ze16a5;var z1e63b=zae5e9.y-this.ze87cf.ze70ad;var z221c6=this.z70270['getMouse3D'](z8418a,z1e63b);var z3086a=this.z70270['worldToBoard'](z221c6['x'],z221c6['z']);if(z3086a){return{z70fb8:1+z3086a[1],ze45e7:8-z3086a[0]
};}else{return{z70fb8:0,ze45e7:0};}},z32f28:function(z071ef){if(!z071ef.z70fb8){return '';}var z3086a=[8-z071ef.ze45e7,z071ef.z70fb8-1
];return this.z70270['boardToNotation'](z3086a);},z2b279:function(){},z73fe1:function(z0a00a){if(this.z4f7d3(z0a00a)===false){return false;}else{return true;}},z4f7d3:function(z0a00a){var z982f5=z0a00a.z982f5;var z0db2a=z0a00a.z0db2a;var z6234d=z0a00a.z6234d;var z5e2dd=z0a00a.z5e2dd;
var zf38e5={'type':'straight','from':this.z32f28({z70fb8:z982f5,ze45e7:z0db2a}),'to':this.z32f28({z70fb8:z6234d,ze45e7:z5e2dd}),'direction':1,
'length':1
};if(z982f5===z6234d&&z0db2a===z5e2dd){return false;}
zf38e5['type']='L';
if(z982f5===(z6234d-1)&&z0db2a===(z5e2dd+2)){
zf38e5['direction']=1;return zf38e5;}else if(z982f5===(z6234d-2)&&z0db2a===(z5e2dd+1)){
zf38e5['direction']=2;return zf38e5;}else if(z982f5===(z6234d-2)&&z0db2a===(z5e2dd-1)){
zf38e5['direction']=3;return zf38e5;}else if(z982f5===(z6234d-1)&&z0db2a===(z5e2dd-2)){
zf38e5['direction']=4;return zf38e5;}else if(z982f5===(z6234d+1)&&z0db2a===(z5e2dd-2)){
zf38e5['direction']=5;return zf38e5;}else if(z982f5===(z6234d+2)&&z0db2a===(z5e2dd-1)){
zf38e5['direction']=6;return zf38e5;}else if(z982f5===(z6234d+2)&&z0db2a===(z5e2dd+1)){
zf38e5['direction']=7;return zf38e5;}else if(z982f5===(z6234d+1)&&z0db2a===(z5e2dd+2)){
zf38e5['direction']=8;return zf38e5;}
zf38e5['type']='straight';
if(z0db2a===z5e2dd){if(z982f5<z6234d){
zf38e5['direction']=3;zf38e5['length']=z6234d-z982f5;}else{
zf38e5['direction']=7;zf38e5['length']=z982f5-z6234d;}return zf38e5;}
if(z982f5===z6234d){if(z0db2a<z5e2dd){
zf38e5['direction']=5;zf38e5['length']=z5e2dd-z0db2a;}else{
zf38e5['direction']=1;zf38e5['length']=z0db2a-z5e2dd;}return zf38e5;}
if(Math.abs(z982f5-z6234d)===Math.abs(z0db2a-z5e2dd)){var length=Math.abs(z982f5-z6234d);zf38e5['length']=length;if(z0db2a<z5e2dd&&z982f5<z6234d){
zf38e5['direction']=4;return zf38e5;}else if(z0db2a<z5e2dd&&z982f5>z6234d){
zf38e5['direction']=6;return zf38e5;}else if(z0db2a>z5e2dd&&z982f5<z6234d){
zf38e5['direction']=2;return zf38e5;}else if(z0db2a>z5e2dd&&z982f5>z6234d){
zf38e5['direction']=8;return zf38e5;}}return false;},z25bb2:function(){return this.ze87cf.z7834f.za429c['sm'];},z01772:function(width,height){var za31e4=this.ze87cf.za31e4;if(!width){width=this.options.z189a5;}if(!height){height=width/this.options.z6c201;}var zcda1c=za31e4.style.width.replace('px','');var z2658f=za31e4.style.height.replace('px','');if(width==zcda1c&&height==z2658f){return;}za31e4.style.width=width+'px';za31e4.style.height=height+'px';},zf6424:function(z030fb){if(z030fb['panAngle']!==undefined&&!isNaN(z030fb['panAngle'])){z030fb['panAngle']*=-1;}if(z030fb['cameraX']!==undefined&&!isNaN(z030fb['cameraX'])){z030fb['cameraX']*=-1;}if(z030fb['cameraTargetX']!==undefined&&!isNaN(z030fb['cameraTargetX'])){z030fb['cameraTargetX']*=-1;}this.z70270['updateCamera'](z030fb);}};z2240e['ChessBoardFlash3D'].prototype['onBoardReady']=function(param){this.zd72a5=true;var z70270=this.z70270;
myEvent.observe(this.ze87cf.z44f8e,'mousewheel',function(e){if(z95894.z8c277.z86264){z70270['onMouseWheel']({'delta':e.wheelDelta});}myEvent.preventDefault(e);return false;});
myEvent.observe(this.ze87cf.z44f8e,'DOMMouseScroll',function(e){myEvent.preventDefault(e);return false;});this.ze87cf.z8abf0();
this.ze87cf.zd4da7();};z2240e['ChessBoardFlash3D'].prototype['onMouseDownOnBoard']=function(x,y,zfb200){var ze87cf=this.ze87cf;var z0ccea={target:ze87cf.z44f8e,pageX:ze87cf.ze16a5+x,pageY:ze87cf.ze70ad+y,offsetX:x,offsetY:y,button:0,zfb200:zfb200
};z36b44.z7e559(z0ccea);};z2240e['ChessBoardFlash3D'].prototype['onMouseRightDownOnBoard']=function(x,y,zfb200){var ze87cf=this.ze87cf;var z0ccea={target:ze87cf.z44f8e,pageX:ze87cf.ze16a5+x,pageY:ze87cf.ze70ad+y,offsetX:x,offsetY:y,button:2,zfb200:zfb200
};z36b44.z7e559(z0ccea);};z2240e['ChessBoardFlash3D'].prototype['onMouseMove']=function(x,y){var ze87cf=this.ze87cf;var z0ccea={target:ze87cf.z44f8e,pageX:ze87cf.ze16a5+x,pageY:ze87cf.ze70ad+y,offsetX:x,offsetY:y
};z36b44.z5f302(z0ccea);};z2240e['ChessBoardFlash3D'].prototype['onMouseUp']=function(x,y){var ze87cf=this.ze87cf;var z0ccea={target:ze87cf.z44f8e,pageX:ze87cf.ze16a5+x,pageY:ze87cf.ze70ad+y,offsetX:x,offsetY:y
};try{z36b44.zaa601(z0ccea);}catch(e){}

this.ze87cf.z1386a=false;this.ze87cf.z9a8ba=false;};z2240e['ChessBoardFlash3D'].prototype['onMouseClick']=function(x,y,zfb200){var ze87cf=this.ze87cf;var z0ccea={target:ze87cf.z44f8e,pageX:ze87cf.ze16a5+x,pageY:ze87cf.ze70ad+y,offsetX:x,offsetY:y,button:0,zfb200:zfb200
};z36b44.ze12d8(z0ccea);};z2240e['ChessBoardFlash3D'].prototype['onMouseRightClick']=function(x,y,zfb200){var ze87cf=this.ze87cf;var z0ccea={target:ze87cf.z44f8e,pageX:ze87cf.ze16a5+x,pageY:ze87cf.ze70ad+y,offsetX:x,offsetY:y,button:2,zfb200:zfb200
};z36b44.ze12d8(z0ccea);};z2240e['ChessBoardFlash3D'].prototype['onSquareBlinked']=function(zcc2ef){this.ze87cf.z7690c(zcc2ef);};z2240e['ChessBoardFlash3D'].prototype['onMoveAnimationEnded']=function(){this.ze87cf.z65158({zc8405:this.ze87cf
});};z2240e['ChessBoardFlash3D'].prototype['onPromotionSelection']=function(z02256){this.ze87cf.selectPromotionPiece(z02256);};z2240e['ChessBoardFlash3D'].prototype['onFlashCameraChange']=function(z030fb){
z030fb['panAngle']*=-1;z030fb['cameraX']*=-1;z030fb['cameraTargetX']*=-1;this.ze87cf.fireEvent('onCameraChange',z030fb);};
z08e47['Flash3D']=z2240e['ChessBoardFlash3D'];})(this);(function(){z2beb5=function(z85d5d,zabebd,zba64d){this.z85d5d=z85d5d;if(this.z85d5d)
this.za5bd9=document.getElementById(z85d5d);
if(this.za5bd9)
this.za5bd9.z9b3d8=this;if(this.z85d5d){myEvent.registerComponent(z85d5d);
myEvent.registerRelated(z85d5d,zabebd);
}this.z2737e=false;this.z074d9=true;this.z0ed86=null;this.z1d3b0=null;this.zdbd90=null;this.z0cbd5=null;this.zb1781=null;this.zc119a=null;this.z5d606=null;this.z3b7e0=null;this.z4afcf=null;this.zf241c=false;this.ze8ef8=false;this.z07c01=null;this.zfac4f='';this.zc0972='gotomove';this.zb5f3c='gotomoveid';this.zfd91e=null;this.z4bd7e=null;this.z4fb61=null;this.zf608c=[];this.zcfeeb=[];this.z30d3a=(zba64d["ECOUpToCurrentPosition"]!=null)?zba64d["ECOUpToCurrentPosition"]:false;this.zc9f2b=true;this.zef935=false;this.z68521=true;this.z2e5e5=[{id:"",zd1deb:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",z80123:"",z4549b:[]}];this.zd82a4=[];
this.z52e1f=[];

if(typeof(window.z265d2)!='undefined')
this.zf4cc5=z265d2;
this.zdf569=this;this.z8ec4b=1;this.z193c4=false;this.z5dff4=null;
this.z18d85=1;this.z3ac0a=0;this.zf310d=0;this.zfaf86=null;this.z912f4=function(){};this.z0552b=false;this.z3c9fc=zba64d["diagramStyle"]||false;this.z0d72f=zba64d["withinDiagram"]||false;if(zba64d["forwardButton1"]!=null)this.z0ed86=zba64d["forwardButton1"];if(zba64d["forwardButton10"]!=null)this.z1d3b0=zba64d["forwardButton10"];if(zba64d["forwardButtonEnd"]!=null)this.zdbd90=zba64d["forwardButtonEnd"];if(zba64d["backwardButton1"]!=null)this.z0cbd5=zba64d["backwardButton1"];if(zba64d["backwardButton10"]!=null)this.zb1781=zba64d["backwardButton10"];if(zba64d["backwardButtonBegin"]!=null)this.zc119a=zba64d["backwardButtonBegin"];if(zba64d["currentStateButton"]!=null)this.z5d606=zba64d["currentStateButton"];if(zba64d["resetStateButton"]!=null)this.z3b7e0=zba64d["resetStateButton"];if(zba64d["playPauseButton"]!=null)this.z4afcf=zba64d["playPauseButton"];if(zba64d["moveListItemClass"]!=null)this.zc0972=zba64d["moveListItemClass"];if(zba64d["moveListItemPrefix"]!=null)this.zb5f3c=zba64d["moveListItemPrefix"];if(zba64d["moveListVerticalStyle"]!=null)this.zc9f2b=zba64d["moveListVerticalStyle"];if(zba64d["moveAnimation"]!=null)this.z0552b=zba64d["moveAnimation"];if(zba64d["moveListCommentBox"]!=null)this.zfd91e=document.getElementById(zba64d["moveListCommentBox"]);if(zba64d["moveListScoreBox"]!=null)this.z4bd7e=document.getElementById(zba64d["moveListScoreBox"]);if(zba64d["moveListAlternateLinesBox"]!=null)this.z4fb61=document.getElementById(zba64d["moveListAlternateLinesBox"]);if(zba64d["stripCommentsInMoveList"]!=null)this.zf241c=zba64d["stripCommentsInMoveList"];if(zba64d["forceScrollIntoView"]!=null)this.zef935=zba64d["forceScrollIntoView"];
if(zba64d["openingClassifyDiv"]!=null&&zba64d["ecoJsonUrl"]!=null){this.z73c63=zba64d["openingClassifyDiv"];var z43cda=this;var xhr=new zcac00();xhr.onreadystatechange=function(){if(xhr.readyState===4){if(xhr.status===200){try{z43cda.zf608c=JSON.parse(xhr.responseText);
for(var i=0;i<z43cda.zf608c.length;i++){z43cda.zcfeeb[i]=z43cda.zf608c[i].f;}}catch(z702c8){
}z43cda.ze80a7();}else{
}}};xhr.open('GET',zba64d["ecoJsonUrl"],true);xhr.send();}if(this.z0ed86){myEvent.registerRelated(this.z0ed86,this.z85d5d);myEvent.observe(document.getElementById(this.z0ed86),'click',z36b44.z5346e);myEvent.observe(document.getElementById(this.z0ed86),'mousedown',z36b44.z71cc6);}if(this.z1d3b0){myEvent.registerRelated(this.z1d3b0,this.z85d5d);myEvent.observe(document.getElementById(this.z1d3b0),'click',z36b44.z35f09);}if(this.zdbd90){myEvent.registerRelated(this.zdbd90,this.z85d5d);myEvent.observe(document.getElementById(this.zdbd90),'click',z36b44.z53942);}if(this.z0cbd5){myEvent.registerRelated(this.z0cbd5,this.z85d5d);myEvent.observe(document.getElementById(this.z0cbd5),'click',z36b44.z494f5);myEvent.observe(document.getElementById(this.z0cbd5),'mousedown',z36b44.z1637d);}if(this.zb1781){myEvent.registerRelated(this.zb1781,this.z85d5d);myEvent.observe(document.getElementById(this.zb1781),'click',z36b44.z5964e);}if(this.zc119a){myEvent.registerRelated(this.zc119a,this.z85d5d);myEvent.observe(document.getElementById(this.zc119a),'click',z36b44.z08f7c);}if(this.z5d606){myEvent.registerRelated(this.z5d606,this.z85d5d);myEvent.observe(document.getElementById(this.z5d606),'click',z36b44.z83ba0);}if(this.z3b7e0){myEvent.registerRelated(this.z3b7e0,this.z85d5d);myEvent.observe(document.getElementById(this.z3b7e0),'click',z36b44.z7e5d0);}if(this.z4afcf){myEvent.registerRelated(this.z4afcf,this.z85d5d);myEvent.observe(document.getElementById(this.z4afcf),'click',z36b44.z44277);}this.build();};z2beb5.prototype={build:function(){if(this.za5bd9)
this.za5bd9.innerHTML=this.zc9f2b?'':'<div class="notationHorizontal"></div>';},show:function(){if(!this.z2737e&&this.za5bd9){for(var n=1;n<this.z2e5e5.length;n++){var z7da0b=n;
if(this.zc9f2b&&this.z193c4&&z7da0b==1){this.za25d2(z7da0b,true);this.zfaf86=this.z85d5d+'_'+this.zb5f3c+"_0_"+z7da0b;}if((!this.z193c4&&z7da0b%2==1)||(this.z193c4&&z7da0b%2==0))
{var zc0532=this.z85d5d+'_'+this.zb5f3c+"_0_"+z7da0b;var z6a50e=this.z85d5d+'_'+this.zb5f3c+"_0_"+(z7da0b+1);if(this.zc9f2b){this.za25d2(z7da0b);}else{this.z2a854(z7da0b);
for(var a=0;a<this.z2e5e5[n].z4549b.length;a++){this.z0fbf2(this.z2e5e5[n].z4549b[a]);this.z2e5e5[n].z4549b[a].show();}}if(document.getElementById(zc0532))
myEvent.observe(document.getElementById(zc0532),"click",z36b44.zdac62);this.zfaf86=z6a50e;}else
{if(!this.zc9f2b){this.z2a854(z7da0b);
for(var a=0;a<this.z2e5e5[n].z4549b.length;a++){this.z0fbf2(this.z2e5e5[n].z4549b[a]);this.z2e5e5[n].z4549b[a].show();}}else{if(document.getElementById(this.zfaf86)){var z03a92=this.z2e5e5[z7da0b].z03a92;document.getElementById(this.zfaf86).appendChild(document.createTextNode(z03a92));}}if(document.getElementById(this.zfaf86))
myEvent.observe(document.getElementById(this.zfaf86),"click",z36b44.zdac62);}}this.z2737e=true;this.z6cc6c();this.zb35a2();this.zf8b47();this.ze80a7();}},z51f47:function(z3ff88,options){var z103a1={};if(this.zf4cc5)
this.zf4cc5.parse(z3ff88,this,z103a1,options);return z103a1;},z22aa7:function(z103a1,z6ded3){var result='';for(var keys in z103a1)
if(z103a1[keys]&&typeof z103a1[keys]=="string")
result+='['+keys+' "'+z103a1[keys]+'"]\n';result+='\n';if(!this.z32e0f)
if(z103a1["Result"])
this.z32e0f=z103a1["Result"];else
this.z32e0f="*";if(this.z2e5e5[0].z80123)
result+='{ '+this.z2e5e5[0].z80123+' } ';for(var n=1;n<this.z2e5e5.length;n++){var zb6aeb=this.z193c4?this.z8ec4b+Math.floor((n)/2):this.z8ec4b+Math.floor((n-1)/2);var z03a92=this.z2e5e5[n].z03a92;if(typeof(this.z2e5e5[n].zf98c9)!='undefined'){var z37ac3=['','!','?','!!','??','!?','?!'];if(this.z2e5e5[n].zf98c9>0&&this.z2e5e5[n].zf98c9<7)
z03a92+=z6ded3?(' $'+this.z2e5e5[n].zf98c9):(z37ac3[this.z2e5e5[n].zf98c9]);}var ze7273='';if((n%2==1&&!this.z193c4)||(n%2==0&&this.z193c4)){ze7273=zb6aeb+'.';}else{if(this.z2e5e5[n-1].z80123!=""||this.z2e5e5[n-1].z4549b.length||n==1){ze7273=zb6aeb+'...';}}result+=ze7273+z03a92+' ';if(this.z2e5e5[n].z80123)
result+='{ '+this.z2e5e5[n].z80123+' } ';if(this.z2e5e5[n].z4549b.length){for(var a=0;a<this.z2e5e5[n].z4549b.length;a++){result+='( ';result+=this.z2e5e5[n].z4549b[a].z22aa7(z6ded3);result+=') ';}}}return result+'\n'+this.z32e0f;},zfdbd6:function(z1208e){this.z2737e=z1208e;for(var n=0;n<this.z2e5e5.length;n++){if(this.z2e5e5[n].z4549b.length){for(var a=0;a<this.z2e5e5[n].z4549b.length;a++){this.z2e5e5[n].z4549b[a].zfdbd6(z1208e);}}}},zcf29e:function(z97742)
{if(typeof(z97742)=='undefined')
z97742=true;
this.zfdbd6(false);this.build();this.show();var zfb82d=myEvent.findRelated(this.z85d5d);obj=zfb82d?document.getElementById(zfb82d).chessBoard:null;if(obj)
{z9689c(obj.z7834f,this.z33622());if(z97742)
{obj.refresh();}if(typeof(obj.zf2cab)=='function')
obj.zf2cab();}},zae4ea:function(){this.z2e5e5.length=1;this.z2e5e5[0].z4549b=[];this.z2e5e5[0].z80123="";this.z3ac0a=0;this.zdf569=this;this.z18d85=1;},
za25d2:function(z4dba9,z8f927){var zb6aeb=this.z193c4?this.z8ec4b+Math.floor((z4dba9)/2):this.z8ec4b+Math.floor((z4dba9-1)/2);var z03a92=this.z2e5e5[z4dba9].z03a92;var zc0532=this.z85d5d+'_'+this.zb5f3c+"_0_"+z4dba9;var z6a50e=this.z85d5d+'_'+this.zb5f3c+"_0_"+(z4dba9+1);var zf8540='class="notationVertical"';if(zb6aeb%2==0)
zf8540='class="notationVertical odd"';var ze8ea1='';ze8ea1+='<div '+zf8540+'>';
ze8ea1+='<span class="num">'+zb6aeb+'.</span>';if(!z8f927){
ze8ea1+='<span id="'+'movelist_'+z4dba9+'" class="'+((this.zdf569==this&&z4dba9==this.z3ac0a)?'mhl':'')+'">';ze8ea1+='<a class="'+this.zc0972+'" id="'+zc0532+'">'+z03a92+'</a>';ze8ea1+='</span>';
ze8ea1+='<span id="'+'movelist_'+(z4dba9+1)+'" class="'+((this.zdf569==this&&(z4dba9+1)==this.z3ac0a)?'mhl':'')+'">';ze8ea1+='<a class="'+this.zc0972+'" id="'+z6a50e+'"></a>';ze8ea1+='</span>';}else{
ze8ea1+='<span>';ze8ea1+='<a></a>';ze8ea1+='</span>';
ze8ea1+='<span id="'+'movelist_'+(z4dba9)+'" class="'+((this.zdf569==this&&(z4dba9)==this.z3ac0a)?'mhl':'')+'">';ze8ea1+='<a class="'+this.zc0972+'" id="'+zc0532+'"></a>';ze8ea1+='</span>';}ze8ea1+='</div>';
insertContentAt(this.za5bd9,ze8ea1,'bottom');},

z2a854:function(z4dba9){var zb6aeb=this.z193c4?this.z8ec4b+Math.floor((z4dba9)/2):this.z8ec4b+Math.floor((z4dba9-1)/2);var z03a92=this.z2e5e5[z4dba9].z03a92;if(typeof(this.z2e5e5[z4dba9].zf98c9)!='undefined'){var z37ac3=['','!','?','!!','??','!?','?!'];if(this.z2e5e5[z4dba9].zf98c9>0&&this.z2e5e5[z4dba9].zf98c9<7)
z03a92+=z37ac3[this.z2e5e5[z4dba9].zf98c9];}var ze8ea1='';var ze7273='';if((z4dba9%2==1&&!this.z193c4)||(z4dba9%2==0&&this.z193c4)){ze7273=zb6aeb+'.&nbsp;';}else{if((this.z2e5e5[z4dba9-1].z80123!=""&&!this.zf241c)||this.z2e5e5[z4dba9-1].z4549b.length||z4dba9==1){ze7273=zb6aeb+'...&nbsp;';}}if(!this.zf241c&&this.z2e5e5[0].z80123!=""&&z4dba9==1){ze8ea1+='<span class="moveListComment">'+this.z2e5e5[0].z80123+'</span>&nbsp;';if(this.z3c9fc){ze8ea1+='<br />';}}ze8ea1+='<span id="'+'moveList_'+z4dba9+'" class="'+((this.zdf569==this&&z4dba9==this.z3ac0a)?'mhl':((this.zdf569==this&&this["focusNode"]==z4dba9)?'focusNode':''))+'">';ze8ea1+='<a class="'+this.zc0972+'" id="'+this.z85d5d+'_'+this.zb5f3c+"_0_"+z4dba9+'">'+((this["beginNode"]==z4dba9)?'[[':'')+ze7273+z03a92+((this["endNode"]==z4dba9)?']]':'')+'</a>';ze8ea1+='</span>'+(this.z3c9fc?'<span class="moveListNodeSeparator"> </span>':' ');if(!this.zf241c&&this.z2e5e5[z4dba9].z80123!=""){ze8ea1+='<span class="moveListComment">'+this.z2e5e5[z4dba9].z80123+'</span>&nbsp;';if(this.z3c9fc){ze8ea1+='<br />';}}
insertContentAt(this.za5bd9.firstChild,ze8ea1,'bottom');this.zfaf86=this.z85d5d+'_'+this.zb5f3c+"_0_"+z4dba9;},zce2e4:function(z839fd){var node=this.zdf569.z2e5e5[z839fd];if(node){var z88bb6=document.getElementById(node.id);if(z88bb6){var z102b1=this.zdf569==this;var zb6aeb=this.z193c4?this.z8ec4b+Math.floor((z839fd)/2):this.z8ec4b+Math.floor((z839fd-1)/2);var z03a92=node.z03a92;if(typeof(node.zf98c9)!='undefined'){var z37ac3=['','!','?','!!','??','!?','?!'];if(node.zf98c9>0&&node.zf98c9<7)
z03a92+=z37ac3[node.zf98c9];}var ze7273='';if((z839fd%2==1&&!this.z193c4)||(z839fd%2==0&&this.z193c4)){ze7273=zb6aeb+'. ';}else{if(node.z80123!=""||this.zdf569.z2e5e5[z839fd-1].z4549b.length||z839fd==1){ze7273=zb6aeb+'... ';}}z88bb6.innerHTML=((z102b1&&this["beginNode"]==z839fd)?'[[':'')+ze7273+z03a92+((z102b1&&this["endNode"]==z839fd)?']]':'');z88bb6.parentNode.className=((z839fd==this.z3ac0a)?'mhl':((z102b1&&this["focusNode"]==z839fd)?'focusNode':''));}}},z0fbf2:function(z1a75f){var z85d5d=z1a75f.z85d5d;var ze8ea1="<span class='moveListAlternateLine'> ( <span id='"+z85d5d+"'></span> ) </span>";if(this.z3c9fc){ze8ea1="<span class='moveListAlternateLine'><span class='moveListAlternateLineDelimiter'>(</span><span class='moveListAlternateLineContent' id='"+z85d5d+"'></span><span class='moveListAlternateLineDelimiter'>)</span></span>";}
insertContentAt(this.za5bd9.firstChild,ze8ea1,'bottom');z1a75f.za5bd9=document.getElementById(z85d5d);},z669a9:function(zd1deb){this.z2e5e5[0].zd1deb=zd1deb;
var z13b6b=zd1deb.split(" ");this.z193c4=(z13b6b[1].toLowerCase()=='b')?true:false;if(z13b6b[5]&&!isNaN(Number(z13b6b[5])))
this.z8ec4b=Number(z13b6b[5]);},z67c68:function(z6205b,zb0082,z7834f,z2ba00,zcd559,zf5466,z80123,z969cd,zf20ab)
{
if(typeof(zf5466)=='undefined'||zf5466===null)
zf5466=true;
if(typeof(z80123)=='undefined'||z80123===null)
z80123='';if(typeof(zf20ab)=='undefined'||zf20ab===null)
zf20ab=true;var z4dba9=this.z2e5e5.length;var zb0fdf=z7834f.areas[zb0082].zad85d.length;var z70602=z7834f.areas[z6205b].zad85d[0];var z03a92=(typeof(z969cd)!='undefined'&&z969cd!==null)?z969cd:zd3860(z70602,z6205b,zb0082,z7834f,z2ba00,zcd559,zb0fdf);

var z962aa=zcd559.zf5466(z70602,zb0082,z7834f,z2ba00,false,null);if(z962aa&&z962aa.zbd834){z6205b=z962aa.zbd834;zb0082=z962aa.moveTo;}this.z2e5e5[z4dba9]={id:this.z85d5d+'_'+this.zb5f3c+"_0_"+z4dba9,zd1deb:zbb170(z7834f),z03a92:z03a92,z80123:z80123,z4549b:[],z6205b:z6205b,zb0082:zb0082,z2ba00:z2ba00};
if(!zf5466)
zcd559.z34d1b(z70602,zb0082,z7834f,z2ba00,false);if(this.z2737e&&zf20ab){if(this.zc9f2b&&this.z193c4&&z4dba9==1){this.za25d2(z4dba9,true);this.zfaf86=this.z85d5d+'_'+this.zb5f3c+"_0_"+z4dba9;}if((!this.z193c4&&z4dba9%2==1)||(this.z193c4&&z4dba9%2==0))
{var zc0532=this.z85d5d+'_'+this.zb5f3c+"_0_"+z4dba9;var z6a50e=this.z85d5d+'_'+this.zb5f3c+"_0_"+(z4dba9+1);if(this.zc9f2b)
this.za25d2(z4dba9);else
this.z2a854(z4dba9);if(document.getElementById(zc0532))
myEvent.observe(document.getElementById(zc0532),"click",z36b44.zdac62);this.zfaf86=z6a50e;}else
{if(!this.zc9f2b){this.z2a854(z4dba9);}else{if(document.getElementById(this.zfaf86)){var z03a92=this.z2e5e5[z4dba9].z03a92;document.getElementById(this.zfaf86).appendChild(document.createTextNode(z03a92));}}if(document.getElementById(this.zfaf86))
myEvent.observe(document.getElementById(this.zfaf86),"click",z36b44.zdac62);}}},z0d62a:function(){this.z52e1f.length=0;this.z71d20=this.zf310d;for(var n=0;n<this.z2e5e5.length;n++){this.z52e1f[n]={id:this.z2e5e5[n].id,zd1deb:this.z2e5e5[n].zd1deb,z03a92:this.z2e5e5[n].z03a92,z80123:this.z2e5e5[n].z80123,z4549b:[],z6205b:this.z2e5e5[n].z6205b,zb0082:this.z2e5e5[n].zb0082,z2ba00:this.z2e5e5[n].z2ba00};}},zb909d:function()
{
var zfccf6=false;for(var n=0;n<this.z52e1f.length;n++)
{if(!this.z2e5e5[n])
{zfccf6=true;break;}var z8bea3=this.z2e5e5[n];var z28578=this.z52e1f[n];
if(z8bea3.zd1deb!=z28578.zd1deb||z8bea3.z03a92!=z28578.z03a92||z8bea3.z6205b!=z28578.z6205b||z8bea3.zb0082!=z28578.zb0082||z8bea3.z2ba00!=z28578.z2ba00)
{zfccf6=true;break;}}if(zfccf6)
{this.z2e5e5.length=0;for(var n=0;n<this.z52e1f.length;n++)
{var z28578=this.z52e1f[n];this.z2e5e5[n]={id:z28578.id,zd1deb:z28578.zd1deb,z03a92:z28578.z03a92,z80123:z28578.z80123,z4549b:[],z6205b:z28578.z6205b,zb0082:z28578.zb0082,z2ba00:z28578.z2ba00
};}this.zcf29e();}this.z669a9(this.z2e5e5[0].zd1deb);this.zf310d=this.z71d20;},z387a0:function()
{if(this.ze8ef8)
{this.ze5645();}if(this.z52e1f.length)
{this.zb909d();}this.z77fdf(this.zf310d);},z77fdf:function(z839fd){if(z839fd>=0&&z839fd<this.zdf569.z2e5e5.length){var z95837=document.getElementById(this.zdf569.z2e5e5[this.z3ac0a].id);if(z95837){if(this.zdf569==this&&this["focusNode"]==this.z3ac0a)
z95837.parentNode.className='focusNode';else
z95837.parentNode.className='';}this.z3ac0a=Number(z839fd);z95837=document.getElementById(this.zdf569.z2e5e5[this.z3ac0a].id);if(z95837&&z95837.firstChild){z95837.parentNode.className='mhl';}
if(this.z2737e)

this.zd1584();
this.z6cc6c();this.zb35a2();this.zf8b47();this.ze80a7();this.z912f4(this,this.id,this.z3ac0a);}},z6cc6c:function(){if(this.zfd91e){var z0e48f=this.zdf569.z2e5e5[this.z3ac0a].z80123;var z03a92=this.zdf569.z2e5e5[this.z3ac0a].z03a92;var zf98c9=this.zdf569.z2e5e5[this.z3ac0a].zf98c9;var z80123=z0e48f;if(this.z3ac0a==1&&this.zdf569!=this){
var zb40be=this.zdf569.z2e5e5[0].z80123;if(zb40be){var z80123=zb40be+' [<b>'+z03a92+'</b>] '+z80123;}}if(zf98c9&&zf98c9>6)
{var z83373=zb3fa3(zf98c9);if(z80123)
z80123="("+z83373+") "+z80123;else
z80123=z83373;}this.zfd91e.innerHTML=z80123;}},zb35a2:function(){if(this.z4bd7e){var z1ab9e=this.zdf569.z2e5e5[this.z3ac0a].z9ca9d;if(typeof(z1ab9e)!='string')
z1ab9e='';if(this.zdf569==this&&this.z3ac0a==0)
z1ab9e='';this.z4bd7e.innerHTML=z1ab9e;}},zf8b47:function(){if(this.z4fb61){var zc59ce='';if(this.zdf569!=this)
zc59ce+='<input type="button" value="Main Line ^" id="'+this.z85d5d+'_goToMainLine" /> ';if(this.zdf569.z2e5e5[this.z3ac0a].z4549b.length){
zc59ce+='<input type="button" value="Main Line" id="'+this.z85d5d+'_goToNextMove" /> ';for(var n=0;n<this.zdf569.z2e5e5[this.z3ac0a].z4549b.length;n++){var z3920d=this.zdf569.z2e5e5[this.z3ac0a].z4549b[n];var lineNumber=z3920d.z193c4?(z3920d.z8ec4b)+'... ':(z3920d.z8ec4b)+'. ';zc59ce+='<input type="button" value="'+lineNumber+z3920d.z2e5e5[1].z03a92+'" id="'+this.z85d5d+'_line_'+z3920d.id+'" /> ';}}this.z4fb61.innerHTML=zc59ce;if(this.zdf569!=this){
document.getElementById(this.z85d5d+'_goToMainLine').onclick=z36b44.z38d88;if(!myEvent.findRelated(this.z85d5d+'_goToMainLine'))
myEvent.registerRelated(this.z85d5d+'_goToMainLine',this.z85d5d);}
if(this.zdf569.z2e5e5[this.z3ac0a].z4549b.length){
document.getElementById(this.z85d5d+'_goToNextMove').onclick=z36b44.zb4d75;if(!myEvent.findRelated(this.z85d5d+'_goToNextMove'))
myEvent.registerRelated(this.z85d5d+'_goToNextMove',this.z85d5d);for(var n=0;n<this.zdf569.z2e5e5[this.z3ac0a].z4549b.length;n++){var z3920d=this.zdf569.z2e5e5[this.z3ac0a].z4549b[n];document.getElementById(this.z85d5d+'_line_'+z3920d.id).onclick=z36b44.z5b735;if(!myEvent.findRelated(this.z85d5d+'_line_'+z3920d.id))
myEvent.registerRelated(this.z85d5d+'_line_'+z3920d.id,this.z85d5d);}}}},ze80a7:function(){if(this.z73c63){var z98f49=-1;var z83def={};var z4041f='';var z17028=(this.z30d3a)?(this.z3ac0a+1):this.z2e5e5.length;for(var i=0;i<z17028;i++){z4041f=this.z2e5e5[i].zd1deb.split(' ').slice(0,3).join(' ');
z98f49=this.zcfeeb.indexOf(z4041f);if(z98f49!=-1){z83def=this.zf608c[z98f49];}}if(typeof z83def.n==='string'){if(z83def.n==='Undefined'){document.getElementById(this.z73c63).innerHTML='';
}else{document.getElementById(this.z73c63).innerHTML='<span id="eco-classify-code">'+z83def.c+': </span><span id="eco-classify-name"><a target="_blank" href="'+Config.z688eb+'/opening/eco/'+z83def.u+'" title="'+z83def.n+'">'+z83def.n+'</a></span>';}}}},z2e6da:function(parent,zedde8){var z839fd=(typeof(zedde8)=='number')?zedde8:parent.z2e5e5.length-1;parent.z2e5e5[z839fd].z4549b.push(new zf795a(this,parent,this.zf241c,z839fd));return parent.z2e5e5[z839fd].z4549b[parent.z2e5e5[z839fd].z4549b.length-1];},z8390c:function(za4f1f){var z2204a=document.getElementById(this.zdf569.z2e5e5[this.z3ac0a].id);if(z2204a){if(this==this.zdf569&&this["focusNode"]==this.z3ac0a)
z2204a.parentNode.className='focusNode';else
z2204a.parentNode.className='';}this.z3ac0a=0;this.zdf569=za4f1f;},z9fde8:function(id){var z2699f=Number(id);var found=null;if(z2699f!=0){if(this.z2e5e5.length){for(var n=0;n<this.z2e5e5.length;n++){for(var a=0;a<this.z2e5e5[n].z4549b.length;a++){if(this.z2e5e5[n].z4549b[a].id==z2699f)
return this.z2e5e5[n].z4549b[a];else
if(found=this.z2e5e5[n].z4549b[a].z9fde8(z2699f))
return found;}}}}else{return this;}return found;},z9a0f8:function(z4291a,zb6e23){if(typeof(zb6e23.freeze)=="function")
zb6e23.freeze();while(z4291a.z5dff4)
{var zdafe6=z4291a.id;var zbb6a6=z4291a.z5dff4;var zc98e4=[];
this.z8390c(zbb6a6);this.z77fdf(z4291a.z01196-1);
for(var n=1;n<z4291a.z2e5e5.length;n++){var z2204a=z4291a.z2e5e5[n];zc98e4[n-1]={z03a92:z2204a.z03a92,z80123:z2204a.z80123,z4549b:z2204a.z4549b,z6205b:z2204a.z6205b,zb0082:z2204a.zb0082,zd1deb:z2204a.zd1deb,zf98c9:z2204a.zf98c9,z2ba00:z2204a.z2ba00};}
z4291a.z2e5e5.length=1;
for(var a=0;a<zbb6a6.z2e5e5[z4291a.z01196].z4549b.length;a++){if(zbb6a6.z2e5e5[z4291a.z01196].z4549b[a].id==zdafe6)
zbb6a6.z2e5e5[z4291a.z01196].z4549b.splice(a,1);}
z9689c(zb6e23.z7834f,this.z33622());for(var n=z4291a.z01196;n<zbb6a6.z2e5e5.length;n++){var z2204a=zbb6a6.z2e5e5[n];var zf8036=zb6e23.z7834f.zad85d[zb6e23.z7834f.areas[z2204a.z6205b].zad85d[0]];var za0b9e=null;if(zf8036.type=='p'&&(Number(z2204a.zb0082.substr(1,1))==1||Number(z2204a.zb0082.substr(1,1))==8))
za0b9e="q";
if(z2204a.z2ba00)
za0b9e=z2204a.z2ba00;z4291a.z67c68(z2204a.z6205b,z2204a.zb0082,zb6e23.z7834f,za0b9e,zb6e23.zcd559,true,z2204a.z80123,z2204a.z03a92);if(z2204a.zf98c9)
z4291a.z2e5e5[z4291a.z2e5e5.length-1].zf98c9=z2204a.zf98c9;
z4291a.z2e5e5[z4291a.z2e5e5.length-1].z4549b=z2204a.z4549b;for(var b=0;b<z4291a.z2e5e5[z4291a.z2e5e5.length-1].z4549b.length;b++)
{z4291a.z2e5e5[z4291a.z2e5e5.length-1].z4549b[b].z01196=(n-z4291a.z01196)+1;z4291a.z2e5e5[z4291a.z2e5e5.length-1].z4549b[b].z5dff4=z4291a;}
if(za0b9e){z4291a.z2e5e5[z4291a.z2e5e5.length-1].zd1deb=z2204a.zd1deb;z9689c(zb6e23.z7834f,z2204a.zd1deb);}}
zbb6a6.z2e5e5.length=z4291a.z01196;
z9689c(zb6e23.z7834f,zbb6a6.z2e5e5[zbb6a6.z2e5e5.length-1].zd1deb);for(var n=0;n<zc98e4.length;n++){var z2204a=zc98e4[n];var zf8036=zb6e23.z7834f.zad85d[zb6e23.z7834f.areas[z2204a.z6205b].zad85d[0]];var za0b9e=null;if(zf8036.type=='p'&&(Number(z2204a.zb0082.substr(1,1))==1||Number(z2204a.zb0082.substr(1,1))==8))
za0b9e="q";
if(z2204a.z2ba00)
za0b9e=z2204a.z2ba00;zbb6a6.z67c68(z2204a.z6205b,z2204a.zb0082,zb6e23.z7834f,za0b9e,zb6e23.zcd559,true,z2204a.z80123,z2204a.z03a92);if(z2204a.zf98c9)
zbb6a6.z2e5e5[zbb6a6.z2e5e5.length-1].zf98c9=z2204a.zf98c9;
zbb6a6.z2e5e5[zbb6a6.z2e5e5.length-1].z4549b=z2204a.z4549b;for(var b=0;b<zbb6a6.z2e5e5[zbb6a6.z2e5e5.length-1].z4549b.length;b++)
{zbb6a6.z2e5e5[zbb6a6.z2e5e5.length-1].z4549b[b].z01196=n+z4291a.z01196;zbb6a6.z2e5e5[zbb6a6.z2e5e5.length-1].z4549b[b].z5dff4=zbb6a6;}
if(za0b9e){zbb6a6.z2e5e5[zbb6a6.z2e5e5.length-1].zd1deb=z2204a.zd1deb;z9689c(zb6e23.z7834f,z2204a.zd1deb);}}
zbb6a6.z2e5e5[z4291a.z01196].z4549b.push(z4291a);z4291a=z4291a.z5dff4;}this.zcf29e();z9689c(zb6e23.z7834f,this.z33622());if(zb6e23.zaae58)
z9689c(zb6e23.zaae58,this.z33622());if(typeof(zb6e23.z3ebd4)=='function')
zb6e23.z3ebd4();},zd1584:function(){if(this.zc9f2b){if(this.z3ac0a==0){this.za5bd9.scrollTop=0;}else{var lineHeight=24;var z1d6da=Math.floor(this.za5bd9.offsetHeight/24);if(z1d6da%2)
z1d6da++;var z45b73=this.z3ac0a-z1d6da;if(z45b73<0)
z45b73=0;this.za5bd9.scrollTop=(this.z3ac0a<=z1d6da+2)?0:((z45b73/this.z2e5e5.length)*this.za5bd9.scrollHeight);}}else{var z2204a=document.getElementById(this.zdf569.z2e5e5[this.z3ac0a].id);
if(z2204a&&navigator.userAgent.indexOf('MSIE 7')==-1){var z1d6da=Math.floor(this.za5bd9.offsetHeight/2);var z3ebd6=this.za5bd9.scrollTop;this.za5bd9.scrollTop=(z2204a.offsetTop<=z1d6da)?0:(z2204a.offsetTop-z1d6da);}else{this.za5bd9.scrollTop='0';}}},z33622:function(){return this.zdf569.z2e5e5[this.z3ac0a].zd1deb;},zb5312:function(action,z7a142,z48e87)
{var zfb82d=myEvent.findRelated(this.z85d5d);var obj=zfb82d?document.getElementById(zfb82d).chessBoard:null;var za6935=false;if(obj)
{if(obj.z36890)
return;if(obj.zc82e7&&!obj.z58923)
{

obj.zf4e71();return;}if(obj.z894ef)
{
if(obj.z894ef.length&&obj.za3376)
obj.za3376();}if(obj.za3477||obj.z6e1fb)
{obj.z6b510();}}this.zd82a4.push(null);if(action=="forward1")
{if(this.z3ac0a>=this.zdf569.z2e5e5.length-1)
return;if(this.zdf569==this&&this["endNode"]&&this.z3ac0a==this["endNode"])
return;this.z77fdf(this.z3ac0a+1);this.zd82a4[this.zd82a4.length-1]=this.zdf569.z2e5e5[this.z3ac0a];if(this.z0552b&&obj){var from=this.zdf569.z2e5e5[this.z3ac0a].z6205b;var to=this.zdf569.z2e5e5[this.z3ac0a].zb0082;obj.ze0cab(from,to);za6935=true;}}else if(action=="forward10")
{if(this.zdf569==this&&this["endNode"]&&this.z3ac0a<=this["endNode"]&&(this.z3ac0a+10)>=this["endNode"]){this.z77fdf(this["endNode"]);}else{if(this.z3ac0a<=this.zdf569.z2e5e5.length-11)
this.z77fdf(this.z3ac0a+10);else
this.z77fdf(this.zdf569.z2e5e5.length-1);}}else if(action=="forwardEnd")
{if(this.zdf569==this&&this["endNode"]&&this.z3ac0a<=this["endNode"])
this.z77fdf(this["endNode"]);else
this.z77fdf(this.zdf569.z2e5e5.length-1);}else if(action=="backward1")
{if(this.zdf569==this&&this["beginNode"]&&this.z3ac0a==this["beginNode"])
return;this.zd82a4[this.zd82a4.length-1]=this.zdf569.z2e5e5[this.z3ac0a];if(this.z0552b&&obj){if(this.zdf569.z2e5e5[this.z3ac0a].z6205b){var from=this.zdf569.z2e5e5[this.z3ac0a].z6205b;var to=this.zdf569.z2e5e5[this.z3ac0a].zb0082;obj.ze0cab(to,from);za6935=true;}}if(this.z3ac0a==1){if(this.zdf569.z5dff4){var zedde8=this.zdf569.z01196;this.z8390c(this.zdf569.z5dff4);this.z77fdf(zedde8);}else{if(this.z3ac0a==0)
return;}}this.z77fdf(this.z3ac0a-1);}else if(action=="backward10")
{if(this.zdf569==this&&this["beginNode"]&&this.z3ac0a>=this["beginNode"]&&(this.z3ac0a-10)<=this["beginNode"]){this.z77fdf(this["beginNode"]);}else{if(this.z3ac0a>=10)
this.z77fdf(this.z3ac0a-10);else
if(this.zdf569.z5dff4)
this.z77fdf(1);else
this.z77fdf(0);}}else if(action=="backwardBegin")
{if(this.zdf569==this&&this["beginNode"]&&this.z3ac0a>=this["beginNode"]){this.z77fdf(this["beginNode"]);}else{if(this.zdf569.z5dff4){if(this.z3ac0a==1){this.z8390c(this.zdf569.z5dff4);this.z77fdf(this.zdf569.z5dff4?1:0);}else{this.z77fdf(1);}}else{this.z77fdf(0);}}}else if(action=="currentState")
{this.z8390c(this);this.z387a0();}else if(action=="toPly")
{if(isNaN(Number(z48e87)))
z48e87=0;if(typeof(this.zdf569.id)=='undefined'){
if(z48e87!=0)
this.z8390c(this.z9fde8(z48e87));}else{if(z48e87!=this.zdf569.id)
this.z8390c(this.z9fde8(z48e87));}this.z77fdf(Number(z7a142));}else
{return;}if(obj)
if(!za6935)
{obj.z68050();z9689c(obj.z7834f,this.z33622());if(obj.zaae58)
z9689c(obj.zaae58,this.z33622());var za7157=this.zd82a4.pop();obj.refresh(za7157);if(obj.z34ded)
obj.z34ded();else if(obj.zf2cab)
obj.zf2cab();}else
{z9689c(obj.z7834f,this.z33622());if(obj.zaae58)
z9689c(obj.zaae58,this.z33622());}},enable:function()
{this.z074d9=true;if(this.z0ed86)
document.getElementById(this.z0ed86).style.display="";if(this.z1d3b0)
document.getElementById(this.z1d3b0).style.display="";if(this.zdbd90)
document.getElementById(this.zdbd90).style.display="";if(this.z0cbd5)
document.getElementById(this.z0cbd5).style.display="";if(this.zb1781)
document.getElementById(this.zb1781).style.display="";if(this.zc119a)
document.getElementById(this.zc119a).style.display="";if(this.z5d606)
document.getElementById(this.z5d606).style.display="";if(this.z3b7e0)
document.getElementById(this.z3b7e0).style.display="";},disable:function()
{this.z074d9=false;if(this.z0ed86)
document.getElementById(this.z0ed86).style.display="none";if(this.z1d3b0)
document.getElementById(this.z1d3b0).style.display="none";if(this.zdbd90)
document.getElementById(this.zdbd90).style.display="none";if(this.z0cbd5)
document.getElementById(this.z0cbd5).style.display="none";if(this.zb1781)
document.getElementById(this.zb1781).style.display="none";if(this.zc119a)
document.getElementById(this.zc119a).style.display="none";if(this.z5d606)
document.getElementById(this.z5d606).style.display="none";if(this.z3b7e0)
document.getElementById(this.z3b7e0).style.display="none";},ze5645:function(z7fd67,direction,zf864d){z7fd67=z7fd67||650;direction=direction||'forward';zf864d=zf864d==undefined?true:zf864d;var z36468=document.getElementById(this.z4afcf);if(this.ze8ef8)
{this.ze8ef8=false;if(zf864d&&z36468)
{if(this.z0d72f){z36468.innerHTML=this.zfac4f;}else{z36468.value=this.zfac4f;}}clearInterval(this.z07c01);}else
{this.ze8ef8=true;if(z36468)
{if(this.z0d72f){this.zfac4f=z36468.innerHTML;}else{this.zfac4f=z36468.value;}if(zf864d)
{if(this.z0d72f){z36468.innerHTML='K';}else{z36468.value='||';}}}if(direction=='forward')
{this.z07c01=setInterval(bind(z36b44.z47f54,this),z7fd67);if(this.zdf569.z2e5e5.length-1==this.z3ac0a){this.zb5312("backwardBegin");}else{z36b44.z47f54.call(this);
}}else
{this.z07c01=setInterval(bind(z36b44.z2ba6b,this),z7fd67);if(!this.z3ac0a){this.zb5312("forwardEnd");}else{z36b44.z2ba6b.call(this);
}}}}};})();
(function(){zf795a=function(zdb20e,parent,zaa64d,zedde8){this.zbf03b=zdb20e;this.id=zdb20e.z18d85++;this.z85d5d=zdb20e.z85d5d+'_alternate_'+this.id;this.za5bd9=null;this.z5dff4=parent;this.z01196=(typeof(zedde8)=='number')?zedde8:parent.z2e5e5.length-1;this.z8ec4b=parent.z193c4?parent.z8ec4b+Math.floor((this.z01196)/2):parent.z8ec4b+Math.floor((this.z01196-1)/2);this.zc0972=zdb20e.zc0972;this.zb5f3c=zdb20e.zb5f3c;this.z2e5e5=[{id:'',zd1deb:parent.z2e5e5[zedde8-1].zd1deb,z80123:'',z4549b:[]}];this.z2737e=false;this.z193c4=parent.z193c4?((this.z01196+1)%2==0):((this.z01196+1)%2==1);this.zf241c=zaa64d;};zf795a.prototype={zfdbd6:function(z1208e){this.z2737e=z1208e;for(var n=0;n<this.z2e5e5.length;n++){if(this.z2e5e5[n].z4549b.length){for(var a=0;a<this.z2e5e5[n].z4549b.length;a++){this.z2e5e5[n].z4549b[a].zfdbd6(z1208e);}}}},show:function(){if(!this.z2737e&&this.za5bd9){for(var n=1;n<this.z2e5e5.length;n++){var ze8118=this.z85d5d+'_'+this.zb5f3c+"_"+this.id+'_'+n;this.z2a854(n);if(document.getElementById(ze8118))
myEvent.observe(document.getElementById(ze8118),"click",z36b44.zdac62);
for(var a=0;a<this.z2e5e5[n].z4549b.length;a++){this.z0fbf2(this.z2e5e5[n].z4549b[a]);this.z2e5e5[n].z4549b[a].show();}}this.z2737e=true;}},

z2a854:function(z4dba9){var zb6aeb=this.z193c4?this.z8ec4b+Math.floor((z4dba9)/2):this.z8ec4b+Math.floor((z4dba9-1)/2);var z03a92=this.z2e5e5[z4dba9].z03a92;if(typeof(this.z2e5e5[z4dba9].zf98c9)!='undefined'){var z37ac3=['','!','?','!!','??','!?','?!'];if(this.z2e5e5[z4dba9].zf98c9>0&&this.z2e5e5[z4dba9].zf98c9<7)
z03a92+=z37ac3[this.z2e5e5[z4dba9].zf98c9];}var ze8ea1='';var ze7273='';if((z4dba9%2==1&&!this.z193c4)||(z4dba9%2==0&&this.z193c4)){ze7273=zb6aeb+'.&nbsp;';}else{if((this.z2e5e5[z4dba9-1].z80123!=""&&!this.zf241c)||this.z2e5e5[z4dba9-1].z4549b.length||z4dba9==1){ze7273=zb6aeb+'...&nbsp;';}}if(!this.zf241c&&this.z2e5e5[0].z80123!=""&&z4dba9==1)
ze8ea1+='<span class="moveListComment">'+this.z2e5e5[0].z80123+'</span>&nbsp;';ze8ea1+='<span id="'+'moveList_'+z4dba9+'" class="'+((this.zbf03b.zdf569==this&&z4dba9==this.zbf03b.z3ac0a)?'mhl':'')+'">';ze8ea1+='<a class="'+this.zc0972+'" id="'+this.z85d5d+'_'+this.zb5f3c+"_"+this.id+"_"+z4dba9+'">'+ze7273+z03a92+'</a>';ze8ea1+='</span>'+(this.zbf03b.z3c9fc?'<span class="moveListNodeSeparator"> </span>':' ');if(!this.zf241c&&this.z2e5e5[z4dba9].z80123!="")
ze8ea1+='<span class="moveListComment">'+this.z2e5e5[z4dba9].z80123+'</span>&nbsp;';
insertContentAt(this.za5bd9,ze8ea1,'bottom');},
z67c68:function(z6205b,zb0082,z7834f,z2ba00,zcd559,zf5466,z80123,z969cd,zf20ab)
{
if(typeof(zf5466)=='undefined'||zf5466===null)
zf5466=true;
if(typeof(z80123)=='undefined'||z80123===null)
z80123='';if(typeof(zf20ab)=='undefined'||zf20ab===null)
zf20ab=true;var z4dba9=this.z2e5e5.length;var zb0fdf=z7834f.areas[zb0082].zad85d.length;var z70602=z7834f.areas[z6205b].zad85d[0];var z03a92=(typeof(z969cd)!='undefined'&&z969cd!==null)?z969cd:zd3860(z70602,z6205b,zb0082,z7834f,z2ba00,zcd559,zb0fdf);
var z962aa=zcd559.zf5466(z70602,zb0082,z7834f,z2ba00,false,null);if(z962aa&&z962aa.zbd834){z6205b=z962aa.zbd834;zb0082=z962aa.moveTo;
}this.z2e5e5[z4dba9]={id:this.z85d5d+'_'+this.zb5f3c+"_"+this.id+"_"+z4dba9,zd1deb:zbb170(z7834f),z03a92:z03a92,z80123:z80123,z4549b:[],z6205b:z6205b,zb0082:zb0082,z2ba00:z2ba00};
if(!zf5466)
zcd559.z34d1b(z70602,zb0082,z7834f,z2ba00,false);if(this.z2737e&&zf20ab){var ze8118=this.z85d5d+'_'+this.zb5f3c+"_"+this.id+'_'+z4dba9;this.z2a854(z4dba9);if(document.getElementById(ze8118))
myEvent.observe(document.getElementById(ze8118),"click",z36b44.zdac62);}},z0fbf2:function(z1a75f){var z85d5d=z1a75f.z85d5d;var ze8ea1="<span class='moveListAlternateLine'> ( <span id='"+z85d5d+"'></span> ) </span>";if(this.zbf03b.z3c9fc){ze8ea1="<span class='moveListAlternateLine'><span class='moveListAlternateLineDelimiter'>(</span><span class='moveListAlternateLineContent' id='"+z85d5d+"'></span><span class='moveListAlternateLineDelimiter'>)</span></span>";}
insertContentAt(this.za5bd9,ze8ea1,'bottom');z1a75f.za5bd9=document.getElementById(z85d5d);},z9fde8:function(id){var z2699f=Number(id);var found=null;if(z2699f!=this.id){if(this.z2e5e5.length){for(var n=0;n<this.z2e5e5.length;n++){for(var a=0;a<this.z2e5e5[n].z4549b.length;a++){if(this.z2e5e5[n].z4549b[a].id==z2699f)
return this.z2e5e5[n].z4549b[a];else
if(found=this.z2e5e5[n].z4549b[a].z9fde8(z2699f))
return found;}}}}else{return this;}return found;},z22aa7:function(z6ded3){var result='';if(this.z2e5e5[0].z80123)
result+='{ '+this.z2e5e5[0].z80123+' } ';for(var n=1;n<this.z2e5e5.length;n++){var zb6aeb=this.z193c4?this.z8ec4b+Math.floor((n)/2):this.z8ec4b+Math.floor((n-1)/2);var z03a92=this.z2e5e5[n].z03a92;if(typeof(this.z2e5e5[n].zf98c9)!='undefined'){var z37ac3=['','!','?','!!','??','!?','?!'];if(this.z2e5e5[n].zf98c9>0&&this.z2e5e5[n].zf98c9<7)
z03a92+=z6ded3?(' $'+this.z2e5e5[n].zf98c9):(z37ac3[this.z2e5e5[n].zf98c9]);}var ze7273='';if((n%2==1&&!this.z193c4)||(n%2==0&&this.z193c4)){ze7273=zb6aeb+'.';}else{if(this.z2e5e5[n-1].z80123!=""||this.z2e5e5[n-1].z4549b.length||n==1){ze7273=zb6aeb+'...';}}result+=ze7273+z03a92+' ';if(this.z2e5e5[n].z80123)
result+='{ '+this.z2e5e5[n].z80123+' } ';if(this.z2e5e5[n].z4549b.length){for(var a=0;a<this.z2e5e5[n].z4549b.length;a++){result+='( ';result+=this.z2e5e5[n].z4549b[a].z22aa7(z6ded3);result+=') ';}}}return result;}};})();
z36b44.zb4d75=function(e){if(!e)
e=window.event;
var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;var currentTarget=target;var z4485d=null;var body=document.getElementsByTagName('body')[0];while(z4485d==null)
{var z0acf3=myEvent.findRelated(currentTarget.id);var z1b342=myEvent.findRelated(z0acf3);z4485d=z1b342?document.getElementById(z1b342).chessBoard:null;if(z4485d==null)
{currentTarget=currentTarget.parentNode;if(currentTarget==body)
{myEvent.preventDefault(e,true);return false;}}}
var obj=z4485d?z4485d.z9b3d8:null;if(!obj||!obj.z074d9)
{myEvent.preventDefault(e,true);return false;}if(obj.ze8ef8){z36b44.z44277(e);}obj.zb5312("forward1");e["command"]="forward1";z4485d.fireEvent("onMoveForwardBackward",e);myEvent.preventDefault(e,true);return false;};z36b44.z35f09=function(e){if(!e)
e=window.event;
var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;var currentTarget=target;var z4485d=null;var body=document.getElementsByTagName('body')[0];while(z4485d==null)
{var z0acf3=myEvent.findRelated(currentTarget.id);var z1b342=myEvent.findRelated(z0acf3);z4485d=z1b342?document.getElementById(z1b342).chessBoard:null;if(z4485d==null)
{currentTarget=currentTarget.parentNode;if(currentTarget==body)
{myEvent.preventDefault(e,true);return false;}}}
var obj=z4485d?z4485d.z9b3d8:null;if(!obj||!obj.z074d9)
{myEvent.preventDefault(e,true);return false;}if(obj.ze8ef8){z36b44.z44277(e);}obj.zb5312("forward10");e["command"]="forward10";z4485d.fireEvent("onMoveForwardBackward",e);myEvent.preventDefault(e,true);return false;};z36b44.z53942=function(e){if(!e)
e=window.event;
var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;var currentTarget=target;var z4485d=null;var body=document.getElementsByTagName('body')[0];while(z4485d==null)
{var z0acf3=myEvent.findRelated(currentTarget.id);var z1b342=myEvent.findRelated(z0acf3);z4485d=z1b342?document.getElementById(z1b342).chessBoard:null;if(z4485d==null)
{currentTarget=currentTarget.parentNode;if(currentTarget==body)
{myEvent.preventDefault(e,true);return false;}}}
var obj=z4485d?z4485d.z9b3d8:null;if(!obj||!obj.z074d9)
{myEvent.preventDefault(e,true);return false;}if(obj.ze8ef8){z36b44.z44277(e);}obj.zb5312("forwardEnd");e["command"]="forwardEnd";z4485d.fireEvent("onMoveForwardBackward",e);myEvent.preventDefault(e,true);return false;};z36b44.z35765=function(e){if(!e)
e=window.event;
var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;var currentTarget=target;var z4485d=null;var body=document.getElementsByTagName('body')[0];while(z4485d==null)
{var z0acf3=myEvent.findRelated(currentTarget.id);var z1b342=myEvent.findRelated(z0acf3);z4485d=z1b342?document.getElementById(z1b342).chessBoard:null;if(z4485d==null)
{currentTarget=currentTarget.parentNode;if(currentTarget==body)
{myEvent.preventDefault(e,true);return false;}}}
var obj=z4485d?z4485d.z9b3d8:null;if(!obj||!obj.z074d9)
{myEvent.preventDefault(e,true);return false;}if(obj.ze8ef8){z36b44.z44277(e);}obj.zb5312("backward1");e["command"]="backward1";z4485d.fireEvent("onMoveForwardBackward",e);myEvent.preventDefault(e,true);return false;};z36b44.z5964e=function(e){if(!e)
e=window.event;
var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;var currentTarget=target;var z4485d=null;var body=document.getElementsByTagName('body')[0];while(z4485d==null)
{var z0acf3=myEvent.findRelated(currentTarget.id);var z1b342=myEvent.findRelated(z0acf3);z4485d=z1b342?document.getElementById(z1b342).chessBoard:null;if(z4485d==null)
{currentTarget=currentTarget.parentNode;if(currentTarget==body)
{myEvent.preventDefault(e,true);return false;}}}
var obj=z4485d?z4485d.z9b3d8:null;if(!obj||!obj.z074d9)
{myEvent.preventDefault(e,true);return false;}if(obj.ze8ef8){z36b44.z44277(e);}obj.zb5312("backward10");e["command"]="backward10";z4485d.fireEvent("onMoveForwardBackward",e);myEvent.preventDefault(e,true);return false;};z36b44.z08f7c=function(e){if(!e)
e=window.event;
var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;var currentTarget=target;var z4485d=null;var body=document.getElementsByTagName('body')[0];while(z4485d==null)
{var z0acf3=myEvent.findRelated(currentTarget.id);var z1b342=myEvent.findRelated(z0acf3);z4485d=z1b342?document.getElementById(z1b342).chessBoard:null;if(z4485d==null)
{currentTarget=currentTarget.parentNode;if(currentTarget==body)
{myEvent.preventDefault(e,true);return false;}}}
var obj=z4485d?z4485d.z9b3d8:null;if(!obj.z074d9)
{myEvent.preventDefault(e,true);return false;}if(obj.ze8ef8){z36b44.z44277(e);}obj.zb5312("backwardBegin");e["command"]="backwardBegin";z4485d.fireEvent("onMoveForwardBackward",e);myEvent.preventDefault(e,true);return false;};z36b44.z83ba0=function(e){if(!e)
e=window.event;
var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;var z0acf3=myEvent.findRelated(target.id);var z1b342=myEvent.findRelated(z0acf3);
var z4485d=z1b342?document.getElementById(z1b342).chessBoard:null;var obj=z4485d?z4485d.z9b3d8:null;if(!obj||!obj.z074d9)
{myEvent.preventDefault(e,true);return false;}if(obj.ze8ef8){z36b44.z44277(e);}obj.zb5312("currentState");e["command"]="currentState";z4485d.fireEvent("onMoveForwardBackward",e);myEvent.preventDefault(e,true);return false;};z36b44.z7e5d0=function(e){if(!e)
e=window.event;
var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;var z0acf3=myEvent.findRelated(target.id);var z1b342=myEvent.findRelated(z0acf3);var chessBoard=z1b342?document.getElementById(z1b342).chessBoard:null;if(chessBoard&&chessBoard.z397e4){chessBoard.z9b3d8.zae4ea();chessBoard.z397e4();chessBoard.z9b3d8.zcf29e();}};z36b44.zdac62=function(e){if(!e)
e=window.event;var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;
var z582a4=myEvent.findComponent(e);var z1b342=myEvent.findRelated(z582a4.id);var z4485d=z1b342?document.getElementById(z1b342).chessBoard:null;var obj=z582a4.z9b3d8;var z7a142=target.id.substring(obj.zb5f3c.length+1);var za891f=z7a142.split('_');var zb7a8f=Number(za891f[za891f.length-2]);if(!obj||!obj.z074d9)
{myEvent.preventDefault(e,true);return false;}obj.zb5312("toPly",za891f[za891f.length-1],zb7a8f);if(z4485d)
{e["command"]="toPly";e["ply"]=za891f[za891f.length-1];e["alternateLine"]=zb7a8f;z4485d.fireEvent("onMoveForwardBackward",e);}myEvent.preventDefault(e,true);return false;};z36b44.z38d88=function(e){if(!e)
e=window.event;var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;var z0acf3=myEvent.findRelated(target.id);var z1b342=myEvent.findRelated(z0acf3);
var z4485d=z1b342?document.getElementById(z1b342).chessBoard:null;var obj=z4485d?z4485d.z9b3d8:null;var z734b2=obj.zdf569.z5dff4.id;if(typeof(z734b2)=='undefined')
z734b2=0;if(!obj||!obj.z074d9)
{myEvent.preventDefault(e,true);return false;}obj.zb5312("toPly",obj.zdf569.z01196,z734b2);if(z4485d)
{e["command"]="toPly";e["ply"]=obj.zdf569.z01196;e["alternateLine"]=z734b2;z4485d.fireEvent("onMoveForwardBackward",e);}myEvent.preventDefault(e,true);return false;};z36b44.z5b735=function(e){if(!e)
e=window.event;var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;var z0acf3=myEvent.findRelated(target.id);var z1b342=myEvent.findRelated(z0acf3);
var z4485d=z1b342?document.getElementById(z1b342).chessBoard:null;var obj=z4485d?z4485d.z9b3d8:null;if(!obj.z074d9)
{myEvent.preventDefault(e,true);return false;}var za891f=target.id.split('_');var z2699f=za891f[za891f.length-1];obj.zb5312("toPly",1,z2699f);if(z4485d)
{e["command"]="toPly";e["ply"]=1;e["alternateLine"]=z2699f;z4485d.fireEvent("onMoveForwardBackward");}myEvent.preventDefault(e,true);return false;};z36b44.z44277=function(e){if(!e)
e=window.event;
var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;var z0acf3=myEvent.findRelated(target.id);var z1b342=myEvent.findRelated(z0acf3);
var z9b3d8=z1b342?document.getElementById(z1b342).chessBoard.z9b3d8:null;if(!z9b3d8||!z9b3d8.z074d9)
{myEvent.preventDefault(e,true);return false;}z9b3d8.ze5645();};
z36b44.z47f54=function(){if(this.zdf569.z2e5e5.length-1>this.z3ac0a)
{this.zb5312('forward1');}else
{this.ze5645();}};
z36b44.z2ba6b=function(){if(this.z3ac0a)
{this.zb5312('backward1');}else
{this.ze5645();}};z36b44.z5346e=function(e)
{myEvent.preventDefault(e,true);return false;};z36b44.z494f5=function(e)
{myEvent.preventDefault(e,true);return false;};z36b44.z71cc6=function(e)
{z36b44.zb4d75.call(this,e);z36b44.z61c93.call(this,e,'forward');};z36b44.z1637d=function(e)
{z36b44.z35765.call(this,e);z36b44.z61c93.call(this,e,'backward');};z36b44.z61c93=function(e,direction)
{button=this;if(button.z070ef){clearTimeout(button.z070ef);}
var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;var chessBoard=null;var currentTarget=target;var body=document.getElementsByTagName('body')[0];while(chessBoard==null)
{var z0acf3=myEvent.findRelated(currentTarget.id);var z1b342=myEvent.findRelated(z0acf3);chessBoard=z1b342?document.getElementById(z1b342).chessBoard:null;if(chessBoard==null)
{currentTarget=currentTarget.parentNode;if(currentTarget==body)
{myEvent.preventDefault(e,true);return false;}}}
var z9b3d8=z1b342?chessBoard.z9b3d8:null;if(!z9b3d8||!z9b3d8.z074d9)
{return;}button.z788c2=chessBoard;button.ze1dba=z9b3d8;if(button.ze1dba.ze8ef8)
{button.ze1dba.ze5645();}button.z070ef=setTimeout(function(){button.z24b85=chessBoard.z4a892;chessBoard.z4a892='bullet';button.ze1dba.ze5645(150,direction,false);},500);button.z42825=bind(z36b44.z39ab5,button);myEvent.observe(document,'mouseup',button.z42825);};z36b44.z39ab5=function(e)
{var button=this;if(button.z24b85!=undefined)
{button.z788c2.z4a892=button.z24b85;}if(button.z070ef){clearTimeout(button.z070ef);}if(button.ze1dba.ze8ef8)
{button.ze1dba.ze5645();}myEvent.stopObserving(document,'mouseup',button.z42825);};(function(){var z98822=(window['devicePixelRatio']>1);z380c2=function(z85d5d,z7834f,zba64d)
{this.z3044d=[[[],[]],[[],[]]],
this.zae745=null;this.z2242c=null;this.z0e164=null;this.z82e53=null;if(typeof(z85d5d)=='string'){
this.z85d5d=z85d5d;this.za31e4=document.getElementById(this.z85d5d);}else{
this.z85d5d=z85d5d.id;this.za31e4=z85d5d;}


this.z1a184=this.z85d5d+"_whiteScoreDiv";this.za3e4c=this.z85d5d+"_blackScoreDiv";if(!this.za31e4)
{this.z82e53=[document.getElementById(this.z1a184),document.getElementById(this.za3e4c)
];}this.z95fc4=z7834f;this.z67968=zba64d["gfxUrl"];this.za55b9=nvl(Config.za082b,"/pieces");this.z45fc2=nvl(zba64d['hideZeroes'],false);this.zf173e=nvl(zba64d["pieceStyle"],"modern");this.zf19dd=nvl(zba64d["size"],30);this.z3e471=30;
this.zc9f2b=nvl(zba64d["verticalStyle"],false);if(this.zf19dd==0)
this.zf19dd=!this.zc9f2b?20:30;
this.zf1491();};z380c2.prototype={zf1491:function()
{if(this.za31e4)
{
var zdf1ee=this.zf19dd/this.z3e471;var z77f97=0;for(var i=0;i<2;i++)
{this.z3044d[i][0].push({z43446:this.z85d5d+'_piece'+(++z77f97),type:'q'});this.z3044d[i][0].push({z43446:this.z85d5d+'_piece'+(++z77f97),type:'r'});this.z3044d[i][0].push({z43446:this.z85d5d+'_piece'+(++z77f97),type:'r'});this.z3044d[i][0].push({z43446:this.z85d5d+'_piece'+(++z77f97),type:'b'});this.z3044d[i][0].push({z43446:this.z85d5d+'_piece'+(++z77f97),type:'b'});this.z3044d[i][0].push({z43446:this.z85d5d+'_piece'+(++z77f97),type:'n'});this.z3044d[i][0].push({z43446:this.z85d5d+'_piece'+(++z77f97),type:'n'});this.z3044d[i][1].push({z43446:this.z85d5d+'_piece'+(++z77f97),type:'p'});this.z3044d[i][1].push({z43446:this.z85d5d+'_piece'+(++z77f97),type:'p'});this.z3044d[i][1].push({z43446:this.z85d5d+'_piece'+(++z77f97),type:'p'});this.z3044d[i][1].push({z43446:this.z85d5d+'_piece'+(++z77f97),type:'p'});this.z3044d[i][1].push({z43446:this.z85d5d+'_piece'+(++z77f97),type:'p'});this.z3044d[i][1].push({z43446:this.z85d5d+'_piece'+(++z77f97),type:'p'});this.z3044d[i][1].push({z43446:this.z85d5d+'_piece'+(++z77f97),type:'p'});this.z3044d[i][1].push({z43446:this.z85d5d+'_piece'+(++z77f97),type:'p'});}var html='';if(!this.zc9f2b){html+='<table class="capt">';for(var i=0;i<2;i++)
{html+='<tr><td><div id="'+((i==0)?this.z1a184:this.za3e4c)+'"/></td><td width="100%">';for(var j=0;j<2;j++)
{var zad85d=this.z3044d[i][j];for(var k=0;k<zad85d.length;k++)
html+='<img id="'+zad85d[k].z43446+'" class="chess_com_hidden" />';}html+='</td></tr>';}html+='</table>';}else{var zdaedd=[[[0,20],[26,20],[26,0],[52,20],[52,0],[78,20],[78,0]],[[0,42],[26,42],[52,42],[78,42],[0,60],[26,60],[52,60],[78,60]]];html+='<div style="width: '+(180*zdf1ee)+'px; height: '+(136*zdf1ee)+'px;">';for(var i=0;i<2;i++)
{html+='<div style="float: left; position: relative; width: '+(90*zdf1ee)+'px;">';for(var j=0;j<2;j++)
{var zad85d=this.z3044d[i][j];for(var k=0;k<zad85d.length;k++)
html+='<img id="'+zad85d[k].z43446+'" class="chess_com_hidden" style="position: absolute; top: '+(zdaedd[j][k][0]*zdf1ee)+'px; left: '+(zdaedd[j][k][1]*zdf1ee)+'px; width: '+this.zf19dd+'px; height: '+this.zf19dd+'px;" />';}html+='<div id="'+((i==0)?this.z1a184:this.za3e4c)+'" style="margin-top: '+(115*zdf1ee)+'px; text-align: center; font-weight: bold;" /></div>';html+='</div>';}html+='</div>';}insertContentAt(this.za31e4,html,'bottom');}else
{

}},z6700b:function()
{var size=z98822?this.zf19dd*2:this.zf19dd;if(this.z2242c&&this.zae745&&this.z0e164==this.zf19dd)
return;this.zae745="png";this.z2242c=this.z67968+this.za55b9+"/classic/"+(z98822?"60":"30");var zb74db=ChessPieceStyle[this.zf173e];if(!zb74db)
return;var z7c66b=null;var z275c8=zb74db[""+size];
var z14267=size;if(!z275c8&&this.zf19dd==20)
{z275c8=zb74db[z98822?"60":"30"];z14267=z98822?60:30;}if(!z275c8)
{z275c8=zb74db["default"];z7c66b=this.z67968+this.za55b9+"/"+this.zf173e+"/"+z14267;}else
{z7c66b=this.z67968+this.za55b9+"/"+this.zf173e+"/"+z14267;}if(!z275c8||!z7c66b)
return;this.zae745=z275c8;this.z2242c=z7c66b;},z5b863:function(size)
{this.zf19dd=size;},z1b466:function(z70c6b)
{


},refresh:function(zea5a5)
{if(zea5a5)
this.z95fc4=zea5a5;
if(this.za31e4)
this.z6700b();var z47c9e=[{'k':1,'q':1,'r':2,'b':2,'n':2,'p':8},{'k':1,'q':1,'r':2,'b':2,'n':2,'p':8}];for(var z0a1f1 in this.z95fc4.zad85d)
{var z1efa8=this.z95fc4.zad85d[z0a1f1];if(z1efa8.zba125)
{var z0381a=z1efa8.color-1;if(z47c9e[z0381a][z1efa8.type]>0)
z47c9e[z0381a][z1efa8.type]--;else
z47c9e[z0381a]['p']--;}}if(this.za31e4)
{
var z3abce={'q':9,'r':5,'b':3,'n':3,'p':1};var z9ca9d=[0,0];for(var i=0;i<2;i++)
{var z8c488=i+1;for(var j=0;j<2;j++)
{var zad85d=this.z3044d[i][j];for(var k=0;k<zad85d.length;k++)
{var zd3fbb=document.getElementById(zad85d[k].z43446);var z02256=zad85d[k].type;var z0ec84=this.z2242c+"/"+(z8c488==1?"w":"b")
+(z02256)+"."+this.zae745;zd3fbb.src=z0ec84;

var z0381a=z8c488-1;if(z47c9e[z0381a][z02256]>0)
{z47c9e[z0381a][z02256]--;Element.removeClassName(zd3fbb,"chess_com_hidden");z9ca9d[z0381a]+=z3abce[z02256];}else
{Element.addClassName(zd3fbb,"chess_com_hidden");}}}}var z407c1=!this.z45fc2||(this.z45fc2&&z9ca9d[0]);var z19562=!this.z45fc2||(this.z45fc2&&z9ca9d[1]);document.getElementById(this.z1a184).innerHTML=z407c1?z9ca9d[0]:'';document.getElementById(this.za3e4c).innerHTML=z19562?z9ca9d[1]:'';}else
{

var zeb9f7='';if(z47c9e[0]['p']>0)
{zeb9f7+='<span class="cpiece w-'+(z47c9e[0]['p']>1?z47c9e[0]['p']+'-pawns':'pawn')+'"></span>';}if(z47c9e[0]['b']>0)
{zeb9f7+='<span class="cpiece w-'+(z47c9e[0]['b']>1?'2-bishops':'bishop')+'"></span>';}if(z47c9e[0]['n']>0)
{zeb9f7+='<span class="cpiece w-'+(z47c9e[0]['n']>1?'2-knights':'knight')+'"></span>';}if(z47c9e[0]['r']>0)
{zeb9f7+='<span class="cpiece w-'+(z47c9e[0]['r']>1?'2-rooks':'rook')+'"></span>';}if(z47c9e[0]['q']>0)
{zeb9f7+='<span class="cpiece w-queen"></span>';}this.z82e53[0].innerHTML=zeb9f7;
var z9ed65='';if(z47c9e[1]['p']>0)
{z9ed65+='<span class="cpiece b-'+(z47c9e[1]['p']>1?z47c9e[1]['p']+'-pawns':'pawn')+'"></span>';}if(z47c9e[1]['b']>0)
{z9ed65+='<span class="cpiece b-'+(z47c9e[1]['b']>1?'2-bishops':'bishop')+'"></span>';}if(z47c9e[1]['n']>0)
{z9ed65+='<span class="cpiece b-'+(z47c9e[1]['n']>1?'2-knights':'knight')+'"></span>';}if(z47c9e[1]['r']>0)
{z9ed65+='<span class="cpiece b-'+(z47c9e[1]['r']>1?'2-rooks':'rook')+'"></span>';}if(z47c9e[1]['q']>0)
{z9ed65+='<span class="cpiece b-queen"></span>';}this.z82e53[1].innerHTML=z9ed65;}}};})();(function(){z8ef21=function(params){params=params||{};if(typeof(params.z85d5d)=='string'){
this.z85d5d=params.z85d5d;this.za31e4=document.getElementById(this.z85d5d);}else{
this.z85d5d=params.z85d5d.id;this.za31e4=params.z85d5d;}if(typeof(params.z1b6a3)=='string'){
this.z1b6a3=document.getElementById(params.z1b6a3);}else{
this.z1b6a3=params.z1b6a3;}if(typeof(params.container)=='string'){
this.container=document.getElementById(params.container);}else{
this.container=params.container;}if(typeof(params.z3b1c0)=='string'){
this.z3b1c0=document.getElementById(params.z3b1c0);}else{
this.z3b1c0=params.z3b1c0;}this.z788c2=this.za31e4.chessBoard;this.z91245=params.z745b7||null;this.zd8416=params.zd6612||null;this.z0fc14=(params.z8af08?true:false);this.za4133=(params.zd1a70?params.zd1a70:'');this.ze1dba=params.z9b3d8;this.z76b4a=this.z85d5d+"_ShareMenuDialog";this.z246e0=this.z85d5d+"_ShareMenuDialogCloser";this.z881de=this.z85d5d+"_ShareMenuDialogTitle";this.z7cef4=this.z85d5d+"_ShareMenuGlobalDialog";this.zf10a4=this.z85d5d+"_ShareMenuGlobalDialogTitle";this.z8cdb2=this.z85d5d+"_ShareMenuGlobalDialogContent";this.z4b0e8=this.z85d5d+"_ShareMenuGlobalDialogCloseButton";this.zd6339=this.z85d5d+"_ShareMenuFacebookButton";this.zac7e3=this.z85d5d+"_ShareMenuTwitterButton";this.z9e110=this.z85d5d+"_ShareMenuRedditButton";this.z4796b=this.z85d5d+"_ShareMenuPgnFenButton";this.z0298f=this.z85d5d+"_ShareMenuEmbedButton";this.zbe431=encodeURIComponent(window.location.href);this.z646e0=encodeURIComponent(document.title);this.zf1491();};z8ef21.prototype={zf1491:function(){var html='';if(!this.z0fc14)
{
html+='<div id="'+this.z76b4a+'" class="shareMenuDialog shareMenuMainDialog" style="display: none;">';html+='<div class="titleBar"><div class="closeButton" id="'+this.z881de+'">B</div></div>';html+=' <ul>';html+='     <li id="'+this.zd6339+'"><div class="icon">S</div> Facebook</li>';html+='     <li id="'+this.zac7e3+'"><div class="icon">F</div> Twitter</li>';html+='     <li id="'+this.z9e110+'"><a href="http://www.reddit.com/r/chess/submit?url='+this.zbe431+'&title='+this.z646e0+'" target="_blank"><div class="icon">±</div> Reddit</a></li>';html+='     <li id="'+this.z4796b+'"><div class="icon">"</div> Get PGN/FEN</li>';if(this.zd8416){html+='     <li id="'+this.z0298f+'"><div class="icon">∞</div> Embed Code</li>';}html+=' </ul>';html+='</div>';
}
html+='<div id="'+this.z7cef4+'" class="shareMenuDialog shareMenuGlobalDialog" style="display: none;">';html+='<div class="titleBar"><div id="'+this.zf10a4+'" class="text"></div><div class="closeButton" id="'+this.z4b0e8+'">B</div></div>';html+='<div class="shareMenuGlobalDialogContent" id="'+this.z8cdb2+'"></div>';html+='</div>';
insertContentAt(this.z3b1c0,'<div id="'+this.z246e0+'" class="shareMenuDialogCloser" style="display: none;"></div>','bottom');insertContentAt(this.container,html,'bottom');if(!this.z0fc14)
{this.z1b6a3.onclick=bind(this.z219a8,this);document.getElementById(this.z881de).onclick=bind(this.z219a8,this);document.getElementById(this.zd6339).onclick=bind(this.zf6b35,this);document.getElementById(this.zac7e3).onclick=bind(this.z21bf2,this);document.getElementById(this.z9e110).onclick=bind(this.z26400,this);document.getElementById(this.z4796b).onclick=bind(this.zff1f1,this);if(this.zd8416){document.getElementById(this.z0298f).onclick=bind(this.z33b53,this);}}else
{this.z1b6a3.onclick=bind(this.zff1f1,this);}document.getElementById(this.z4b0e8).onclick=bind(this.z44879,this);document.getElementById(this.z246e0).onclick=bind(this.z58110,this);},z219a8:function()
{var div=document.getElementById(this.z76b4a);if(div.style.display=='none')
{div.style.display='block';document.getElementById(this.z246e0).style.display='block';}else
{div.style.display='none';document.getElementById(this.z246e0).style.display='none';}return false;},z7d8df:function(content,title)
{title=title||'';document.getElementById(this.zf10a4).innerHTML=title;document.getElementById(this.z8cdb2).innerHTML=content;document.getElementById(this.z7cef4).style.display='block';document.getElementById(this.z246e0).style.display='block';},z44879:function()
{document.getElementById(this.z7cef4).style.display='none';document.getElementById(this.z246e0).style.display='none';},z26400:function(){document.getElementById(this.z76b4a).style.display='none';document.getElementById(this.z246e0).style.display='none';},z58110:function()
{if(!this.z0fc14){this.z26400();}this.z44879();},zf6b35:function()
{var z10e3e='http://www.facebook.com/sharer.php?u='+this.zbe431;z97be2=open(z10e3e,'diagram_facebook_share','width=560,height=510,resizable=no,status=no,menubar=no,scrollbars=no');z97be2.ze104b=self;z97be2.focus();this.z26400();},z21bf2:function()
{var zd142b='https://twitter.com/intent/tweet?text='+this.z646e0+'&url='+this.zbe431;z97be2=open(zd142b,'diagram_twitter_share','width=560,height=510,resizable=no,status=no,menubar=no,scrollbars=no');z97be2.ze104b=self;z97be2.focus();this.z26400();},zff1f1:function()
{var z38baa='';if(this.ze1dba.z2e5e5.length>1){if(this.za4133){z38baa=this.za4133;}else if(this.zd8416&&this.z91245){z38baa=this.ze1dba.z22aa7(this.z91245.tags);}else if(this.z788c2.z103a1){z38baa=this.ze1dba.z22aa7(this.z788c2.z103a1);}else{z38baa=this.ze1dba.z22aa7({'FEN':this.ze1dba.z2e5e5[0].zd1deb});}}else{z38baa=this.ze1dba.z2e5e5[0].zd1deb;}var z50748='<textarea type="text" readonly="yes" onFocus="this.select();" class="full">'+z38baa+'</textarea>';if(!this.z0fc14){this.z26400();}this.z7d8df(z50748);},z33b53:function()
{var z1e611=(this.z85d5d.indexOf("chess_com_dailypuzzle")!=-1);var z6a70f=Config.z688eb+'/emboard?id='+this.zd8416+(z1e611?'&type=dailypuzzle':'');var zd0d7c=this.za31e4.offsetWidth;var zec3aa=this.za31e4.offsetHeight+15;var z0b03a='&lt;iframe border="0" frameborder="0" allowtransparency="true" width="'+zd0d7c+'" height="'+zec3aa+'" src="'+z6a70f+'"&gt;&lt;/iframe&gt;';var z50748='<textarea type="text" readonly="yes" onFocus="this.select();" class="full">'+z0b03a+'</textarea>';this.z26400();this.z7d8df(z50748,'Embed code');}};})();


var z0e870=/^(.+)\ ([wb])\ ([A-HK]?[A-HQ]?[a-hk]?[a-hq]?|\-)\ ?(\-|[a-h][36])?\ ?([0-9]+)?\ ?([0-9]+)?$/;
function z9689c(z7834f,zd1deb)
{z7834f.clear();var i=1;var j=1;var index=0;var parts=z0e870.exec(zd1deb);if(!parts||parts.length<4)
return false;var zfdb40=parts[1];var zd52c2=parts[2];var z39b8e=parts[3];var z49595=(typeof(parts[4])!='undefined')?parts[4]:'-';var zace4c=(typeof(parts[5])!='undefined')?(1*parts[5]):0;var z021c4=(typeof(parts[6])!='undefined')?(1*parts[6]):1;while(index<zfdb40.length)
{var c=zfdb40.charAt(index++);if(c>='0'&&c<='9')
{j+=1*c;}else if(c=='/')
{i++;j=1;}else if((c>='A'&&c<='Z')||(c>='a'&&c<='z'))
{var color=(c>='A'&&c<='Z')?1:2;var zcc2ef=(String.fromCharCode(96+j))+(9-i);z7834f.zab5c0(color,c.toLowerCase(),zcc2ef);j++;}else
{return false;}}z7834f.za429c["sm"]=(zd52c2=="w")?1:2;var z60350="";if(z39b8e.indexOf("K")!=-1)z60350+="k";else if(z39b8e.indexOf("E")!=-1)z60350+="e";else if(z39b8e.indexOf("F")!=-1)z60350+="f";else if(z39b8e.indexOf("G")!=-1)z60350+="g";else if(z39b8e.indexOf("H")!=-1)z60350+="h";else z60350+="-";if(z39b8e.indexOf("Q")!=-1)z60350+="q";else if(z39b8e.indexOf("A")!=-1)z60350+="a";else if(z39b8e.indexOf("B")!=-1)z60350+="b";else if(z39b8e.indexOf("C")!=-1)z60350+="c";else if(z39b8e.indexOf("D")!=-1)z60350+="d";else z60350+="-";if(z39b8e.indexOf("k")!=-1)z60350+="K";else if(z39b8e.indexOf("e")!=-1)z60350+="E";else if(z39b8e.indexOf("f")!=-1)z60350+="F";else if(z39b8e.indexOf("g")!=-1)z60350+="G";else if(z39b8e.indexOf("h")!=-1)z60350+="H";else z60350+="-";if(z39b8e.indexOf("q")!=-1)z60350+="Q";else if(z39b8e.indexOf("a")!=-1)z60350+="A";else if(z39b8e.indexOf("b")!=-1)z60350+="B";else if(z39b8e.indexOf("c")!=-1)z60350+="C";else if(z39b8e.indexOf("d")!=-1)z60350+="D";else z60350+="-";z7834f.za429c["cs"]=z60350;z7834f.za429c["ep"]=z49595;z7834f.z9ac48=((z021c4-1)*2);if(zd52c2=="b")
z7834f.z9ac48++;return true;}var ze405a=["a","b","c","d","e","f","g","h"];function zbb170(z7834f)
{var zd1deb=new StringBuffer();var z3ca32=0;for(var i=1;i<=8;i++)
{for(var j=1;j<=8;j++)
{var zcc2ef=ze405a[j-1]+(9-i);var ze6410=z7834f.areas[zcc2ef].zad85d[0];if(ze6410)
{var z1efa8=z7834f.zad85d[ze6410];if(z3ca32>0)
zd1deb.append(z3ca32);zd1deb.append((z1efa8.color==1)?z1efa8.type.toUpperCase():z1efa8.type);z3ca32=0;}else
{z3ca32++;}}if(z3ca32>0)
zd1deb.append(z3ca32);if(i<8)
zd1deb.append("/");z3ca32=0;}var z60350=new StringBuffer();var z2b47a=z7834f.za429c["cs"];for(var n=0;n<z2b47a.length;n++){var z76ddf=z2b47a.charAt(n);if(z76ddf!='-'){switch(z76ddf){case('K'):z60350.append('k');break;case('Q'):z60350.append('q');break;case('A'):z60350.append('a');break;case('B'):z60350.append('b');break;case('C'):z60350.append('c');break;case('D'):z60350.append('d');break;case('E'):z60350.append('e');break;case('F'):z60350.append('f');break;case('G'):z60350.append('g');break;case('H'):z60350.append('h');break;case('k'):z60350.append('K');break;case('q'):z60350.append('Q');break;case('a'):z60350.append('A');break;case('b'):z60350.append('B');break;case('c'):z60350.append('C');break;case('d'):z60350.append('D');break;case('e'):z60350.append('E');break;case('f'):z60350.append('F');break;case('g'):z60350.append('G');break;case('h'):z60350.append('H');break;}}}if(z60350.parts.length==0)
z60350.append("-");zd1deb
.append(" ").append((z7834f.za429c["sm"]==1)?"w":"b")
.append(" ").append(z60350.toString())
.append(" ").append(z7834f.za429c["ep"])
.append(" 0")
.append(" ").append((Math.floor(z7834f.z9ac48/2)+1))
;return zd1deb.toString();}function z21490(z38e72)
{var n=document.getElementById("moveNode"+z38e72);if(n)
n.style.background="#ffffff";}function zb8946(node,z2028f)
{var result=false;if(node[z2028f+"NodeTag"])
{node[z2028f+"NodeTag"]=false;result=true;}for(var i=0;i<node.nodes.length;i++)
if(zb8946(node.nodes[i],z2028f))
result=true;return result;}function fillDailyPuzzleDiv(z60f7d)
{var z05a87=z60f7d.id;if(!z05a87.startsWith("chess_com_dailypuzzle_"))
return;var id=z05a87.substring(z05a87.lastIndexOf("_")+1);var zdbea5=z05a87.substring(0,z05a87.lastIndexOf("_"));var zce9d3=zdbea5.substring(zdbea5.lastIndexOf("_")+1);ze2248(z60f7d,Config.DailyPuzzleGetUrl+"?id="+id+"&header="+zce9d3);}function fillChessDiv(z60f7d)
{var z05a87=z60f7d.id;if(!z05a87.startsWith("chess_com_diagram_"))
return;var id=z05a87.substring(z05a87.lastIndexOf("_")+1);ze2248(z60f7d,Config.DiagramGetPostUrl+"?id="+id);}function zfaf19(z05a87,za7f8e)
{if(za7f8e.strip().length>0)
za7f8e=za7f8e.strip();var viewer=new zba130(z05a87,z4654e,new z09150(za7f8e,{zf4cc5:z265d2}));if(!viewer.setup.zf4b12)
return;viewer.ze519b();viewer.z3b1cc=viewer.setup.za4632.nodes[0];if(viewer.setup[zad2f6]||viewer.setup[z0a914])
{var fn=viewer.setup[zad2f6];var zb74a0=viewer.setup[z0a914];var i=zb74a0;if(fn)
i=fn;var n=viewer.setup.zf4b12;while(i-->0&&n!=null)
n=n.nodes[0];if(n)
viewer.z3b1cc=n;}z9689c(viewer.z7834f,viewer.z3b1cc.zd1deb);
viewer.refresh();Element.removeClassName(z05a87,"chess_com_loading");zf7343();}function ze2248(z60f7d,url)
{var z05a87=z60f7d.id;var z2b2ad;if(z60f7d.childNodes[0])
{z2b2ad=z60f7d.childNodes[0].data.strip();z60f7d.childNodes[0].data="";}if(z2b2ad)
{zfaf19(z05a87,z2b2ad);}else
{new Ajax.Request(url,{method:'get',onSuccess:function(request)
{if(request.responseText)
zfaf19(z05a87,request.responseText);}});}}

function zd3860(z70602,zceddd,z1a310,z7834f,z2ba00,z87394,z79993)
{var z02256=z7834f.zad85d[z70602].type;var z8c488=z7834f.zad85d[z70602].color;
var zce603=z7834f.areas[z1a310].zad85d[0]?z7834f.zad85d[z7834f.areas[z1a310].zad85d[0]]:null;var z03a92="";var zc0222="";
{var zfa7f4=[];for(p in z7834f.zad85d)
{if(p==z70602)
continue;var z1efa8=z7834f.zad85d[p];if(!z1efa8.zba125)continue;if(z1efa8.type==z02256)
if(z1efa8.color==z8c488)
zfa7f4.push(p);}if(zfa7f4.length>0)
{var ze56a5=[];for(var i=0;i<zfa7f4.length;i++)
{var p=zfa7f4[i];if(z87394.z31a2a(p,z1a310,z7834f))
ze56a5.push(z7834f.zad85d[p].zba125);}if(ze56a5.length>0)
{var i;for(i=0;i<ze56a5.length;i++)
if(ze56a5[i].charAt(0)==zceddd.charAt(0))
break;if(i==ze56a5.length)
{zc0222=zceddd.charAt(0);}else
{for(i=0;i<ze56a5.length;i++)
if(ze56a5[i].charAt(1)==zceddd.charAt(1))
break;if(i==ze56a5.length)
{zc0222=zceddd.charAt(1);}else
{zc0222=zceddd;}}}}}var z81a9b=false;var z2c987=false;if(z02256=="k"){if(zceddd=="e1"||zceddd=="e8")
{if(z1a310=="g1"||z1a310=="g8")
z81a9b=true;if(z1a310=="c1"||z1a310=="c8")
z2c987=true;}
if(((zceddd.charAt(1)=='1'&&z1a310.charAt(1)=='1')||(zceddd.charAt(1)=='8'&&z1a310.charAt(1)=='8')))
{if((Math.abs(z1a310.charCodeAt(0)-zceddd.charCodeAt(0))>1))
{if(zceddd.charCodeAt(0)<z1a310.charCodeAt(0))
z81a9b=true;else
z2c987=true;}else if(zce603&&zce603.type=='r'&&zce603.color==z8c488)
{if(zceddd.charCodeAt(0)<z1a310.charCodeAt(0))
z81a9b=true;else
z2c987=true;}}}if(z81a9b)
{z03a92="O-O";}else if(z2c987)
{z03a92="O-O-O";}else
{if(z02256=="p"||z2ba00)
{if(!z2ba00&&(z1a310.charAt(1)=='1'||z1a310.charAt(1)=='8'))
z2ba00='q';if(zceddd.charAt(0)!=z1a310.charAt(0))
z03a92+=zceddd.charAt(0)+"x";}else
{z03a92+=z02256.toUpperCase();z03a92+=zc0222;if(z79993)
z03a92+="x";}z03a92+=z1a310;if(z2ba00)
z03a92+="="+z2ba00.toUpperCase();}

{z87394.zf5466(z70602,z1a310,z7834f,z2ba00,false,null);var z25bb2=z7834f.za429c["sm"];var zef618=null;for(var z0a1f1 in z7834f.zad85d)
{var z1efa8=z7834f.zad85d[z0a1f1];
{if(z1efa8.type=="k"&&z1efa8.color==z25bb2)
zef618=z1efa8.zba125;}}if(zef618)
if(z87394.z21214(zef618,3-z25bb2,z7834f))
{if(z87394.za8a58(z7834f))
z03a92+="+";else
z03a92+="#";}z87394.z34d1b(z70602,z1a310,z7834f,z2ba00,false);}return z03a92;}function z3717b(zf98c9)
{switch(zf98c9)
{case 1:return "!";case 2:return "?";case 3:return "!!";case 4:return "??";case 5:return "!?";case 6:return "?!";default:return "";}}function zb3fa3(zf98c9)
{switch(zf98c9)
{case 7:return "forced move (all others lose quickly)";case 8:return "singular move (no reasonable alternatives)";case 9:return "worst move";case 10:return "drawish position";case 11:return "equal chances, quiet position";case 12:return "equal chances, active position";case 13:return "unclear position";case 14:return "White has a slight advantage";case 15:return "Black has a slight advantage";case 16:return "White has a moderate advantage";case 17:return "Black has a moderate advantage";case 18:return "White has a decisive advantage";case 19:return "Black has a decisive advantage";case 20:return "White has a crushing advantage (Black should resign)";case 21:return "Black has a crushing advantage (White should resign)";case 22:return "White is in zugzwang";case 23:return "Black is in zugzwang";case 24:return "White has a slight space advantage";case 25:return "Black has a slight space advantage";case 26:return "White has a moderate space advantage";case 27:return "Black has a moderate space advantage";case 28:return "White has a decisive space advantage";case 29:return "Black has a decisive space advantage";case 30:return "White has a slight time (development) advantage";case 31:return "Black has a slight time (development) advantage";case 32:return "White has a moderate time (development) advantage";case 33:return "Black has a moderate time (development) advantage";case 34:return "White has a decisive time (development) advantage";case 35:return "Black has a decisive time (development) advantage";case 36:return "White has the initiative";case 37:return "Black has the initiative";case 38:return "White has a lasting initiative";case 39:return "Black has a lasting initiative";case 40:return "White has the attack";case 41:return "Black has the attack";case 42:return "White has insufficient compensation for material deficit";case 43:return "Black has insufficient compensation for material deficit";case 44:return "White has sufficient compensation for material deficit";case 45:return "Black has sufficient compensation for material deficit";case 46:return "White has more than adequate compensation for material deficit";case 47:return "Black has more than adequate compensation for material deficit";case 48:return "White has a slight center control advantage";case 49:return "Black has a slight center control advantage";case 50:return "White has a moderate center control advantage";case 51:return "Black has a moderate center control advantage";case 52:return "White has a decisive center control advantage";case 53:return "Black has a decisive center control advantage";case 54:return "White has a slight kingside control advantage";case 55:return "Black has a slight kingside control advantage";case 56:return "White has a moderate kingside control advantage";case 57:return "Black has a moderate kingside control advantage";case 58:return "White has a decisive kingside control advantage";case 59:return "Black has a decisive kingside control advantage";case 60:return "White has a slight queenside control advantage";case 61:return "Black has a slight queenside control advantage";case 62:return "White has a moderate queenside control advantage";case 63:return "Black has a moderate queenside control advantage";case 64:return "White has a decisive queenside control advantage";case 65:return "Black has a decisive queenside control advantage";case 66:return "White has a vulnerable first rank";case 67:return "Black has a vulnerable first rank";case 68:return "White has a well protected first rank";case 69:return "Black has a well protected first rank";case 70:return "White has a poorly protected king";case 71:return "Black has a poorly protected king";case 72:return "White has a well protected king";case 73:return "Black has a well protected king";case 74:return "White has a poorly placed king";case 75:return "Black has a poorly placed king";case 76:return "White has a well placed king";case 77:return "Black has a well placed king";case 78:return "White has a very weak pawn structure";case 79:return "Black has a very weak pawn structure";case 80:return "White has a moderately weak pawn structure";case 81:return "Black has a moderately weak pawn structure";case 82:return "White has a moderately strong pawn structure";case 83:return "Black has a moderately strong pawn structure";case 84:return "White has a very strong pawn structure";case 85:return "Black has a very strong pawn structure";case 86:return "White has poor knight placement";case 87:return "Black has poor knight placement";case 88:return "White has good knight placement";case 89:return "Black has good knight placement";case 90:return "White has poor bishop placement";case 91:return "Black has poor bishop placement";case 92:return "White has good bishop placement";case 93:return "Black has good bishop placement";case 84:return "White has poor rook placement";case 85:return "Black has poor rook placement";case 86:return "White has good rook placement";case 87:return "Black has good rook placement";case 98:return "White has poor queen placement";case 99:return "Black has poor queen placement";case 100:return "White has good queen placement";case 101:return "Black has good queen placement";case 102:return "White has poor piece coordination";case 103:return "Black has poor piece coordination";case 104:return "White has good piece coordination";case 105:return "Black has good piece coordination";case 106:return "White has played the opening very poorly";case 107:return "Black has played the opening very poorly";case 108:return "White has played the opening poorly";case 109:return "Black has played the opening poorly";case 110:return "White has played the opening well";case 111:return "Black has played the opening well";case 112:return "White has played the opening very well";case 113:return "Black has played the opening very well";case 114:return "White has played the middlegame very poorly";case 115:return "Black has played the middlegame very poorly";case 116:return "White has played the middlegame poorly";case 117:return "Black has played the middlegame poorly";case 118:return "White has played the middlegame well";case 119:return "Black has played the middlegame well";case 120:return "White has played the middlegame very well";case 121:return "Black has played the middlegame very well";case 122:return "White has played the ending very poorly";case 123:return "Black has played the ending very poorly";case 124:return "White has played the ending poorly";case 125:return "Black has played the ending poorly";case 126:return "White has played the ending well";case 127:return "Black has played the ending well";case 128:return "White has played the ending very well";case 129:return "Black has played the ending very well";case 130:return "White has slight counterplay";case 131:return "Black has slight counterplay";case 132:return "White has moderate counterplay";case 133:return "Black has moderate counterplay";case 134:return "White has decisive counterplay";case 135:return "Black has decisive counterplay";case 136:return "White has moderate time control pressure";case 137:return "Black has moderate time control pressure";case 138:return "White has severe time control pressure";case 139:return "Black has severe time control pressure";default:return "";}}(function(){


zf9bd6=function(){this.z6439d={"a1":"a","a2":"i","a3":"q","a4":"y","a5":"G","a6":"O","a7":"W","a8":"4","b1":"b","b2":"j","b3":"r","b4":"z","b5":"H","b6":"P","b7":"X","b8":"5","c1":"c","c2":"k","c3":"s","c4":"A","c5":"I","c6":"Q","c7":"Y","c8":"6","d1":"d","d2":"l","d3":"t","d4":"B","d5":"J","d6":"R","d7":"Z","d8":"7","e1":"e","e2":"m","e3":"u","e4":"C","e5":"K","e6":"S","e7":"0","e8":"8","f1":"f","f2":"n","f3":"v","f4":"D","f5":"L","f6":"T","f7":"1","f8":"9","g1":"g","g2":"o","g3":"w","g4":"E","g5":"M","g6":"U","g7":"2","g8":"!","h1":"h","h2":"p","h3":"x","h4":"F","h5":"N","h6":"V","h7":"3","h8":"?"
};this.ze8500={"_a":"a1","_i":"a2","_q":"a3","_y":"a4","_G":"a5","_O":"a6","_W":"a7","_4":"a8","_b":"b1","_j":"b2","_r":"b3","_z":"b4","_H":"b5","_P":"b6","_X":"b7","_5":"b8","_c":"c1","_k":"c2","_s":"c3","_A":"c4","_I":"c5","_Q":"c6","_Y":"c7","_6":"c8","_d":"d1","_l":"d2","_t":"d3","_B":"d4","_J":"d5","_R":"d6","_Z":"d7","_7":"d8","_e":"e1","_m":"e2","_u":"e3","_C":"e4","_K":"e5","_S":"e6","_0":"e7","_8":"e8","_f":"f1","_n":"f2","_v":"f3","_D":"f4","_L":"f5","_T":"f6","_1":"f7","_9":"f8","_g":"g1","_o":"g2","_w":"g3","_E":"g4","_M":"g5","_U":"g6","_2":"g7","_!":"g8","_h":"h1","_p":"h2","_x":"h3","_F":"h4","_N":"h5","_V":"h6","_3":"h7","_?":"h8"
};



this.z56f6c="{";this.z87e36="~";this.zbba2c="}";this.z7fd23="(";this.za93ff="^";this.z536e1=")";this.z817b2="[";this.z00e3d="_";this.ze4b5e="]";this.z91a79="@";this.zc21d8="#";this.zaa236="$";};zf9bd6.prototype={z0cd66:function(ze2e37,zbd29b,z2ba00)
{var zed3d4=this.z6439d[ze2e37];var z98075=this.z6439d[zbd29b];if(z2ba00)
{var dir=zbd29b.charCodeAt(0)-ze2e37.charCodeAt(0);
if(z2ba00=="q")
z98075=(dir==-1)?this.z56f6c:((dir==+1)?this.zbba2c:this.z87e36);else if(z2ba00=="n")
z98075=(dir==-1)?this.z7fd23:((dir==+1)?this.z536e1:this.za93ff);else if(z2ba00=="r")
z98075=(dir==-1)?this.z817b2:((dir==+1)?this.ze4b5e:this.z00e3d);else if(z2ba00=="b")
z98075=(dir==-1)?this.z91a79:((dir==+1)?this.zaa236:this.zc21d8);}return zed3d4+z98075;},zafc74:function(z32182)
{var zed3d4=z32182.charAt(0);var z98075=z32182.charAt(1);var ze2e37=this.ze8500["_"+zed3d4];var zbd29b;var z2ba00=null;var z2b70d=ze2e37.charCodeAt(0);var z5b3be=null;if(z98075==this.z56f6c)
{z5b3be=z2b70d-1;z2ba00="q";}else if(z98075==this.z87e36)
{z5b3be=z2b70d;z2ba00="q";}else if(z98075==this.zbba2c)
{z5b3be=z2b70d+1;z2ba00="q";}else if(z98075==this.z7fd23)
{z5b3be=z2b70d-1;z2ba00="n";}else if(z98075==this.za93ff)
{z5b3be=z2b70d;z2ba00="n";}else if(z98075==this.z536e1)
{z5b3be=z2b70d+1;z2ba00="n";}else if(z98075==this.z817b2)
{z5b3be=z2b70d-1;z2ba00="r";}else if(z98075==this.z00e3d)
{z5b3be=z2b70d;z2ba00="r";}else if(z98075==this.ze4b5e)
{z5b3be=z2b70d+1;z2ba00="r";}else if(z98075==this.z91a79)
{z5b3be=z2b70d-1;z2ba00="b";}else if(z98075==this.zc21d8)
{z5b3be=z2b70d;z2ba00="b";}else if(z98075==this.zaa236)
{z5b3be=z2b70d+1;z2ba00="b";}if(z5b3be!=null)
{var zd2788=ze2e37.charAt(1);if(zd2788==7)
zbd29b=String.fromCharCode(z5b3be)+"8";else if(zd2788==2)
zbd29b=String.fromCharCode(z5b3be)+"1";else
return null;}else
{zbd29b=this.ze8500["_"+z98075];if(!zbd29b)
return null;}var z3cbd9={};z3cbd9["fromArea"]=ze2e37;z3cbd9["toArea"]=zbd29b;z3cbd9["additionalInfo"]=z2ba00;return z3cbd9;},za902f:function(zcc2ef)
{return this.z6439d[zcc2ef];},z398d0:function(zccfb6)
{return this.ze8500["_"+zccfb6];}};})();if(typeof(z827ac)=='undefined'){z827ac={};}

z827ac.ze50ed=function(zcb7be,zba64d){var z82fdb={z5ef84:false,
z16ad6:true
};_mixin(z82fdb,zba64d);if(!z82fdb.z5ef84)
{zcb7be.z0fbe8=null;zcb7be.z43eac=null;zcb7be.z7e282=null;zcb7be.z73a3c=null;zcb7be.z9498d=false;zcb7be.z12e4a=null;zcb7be.zf08a6=false;
zcb7be.z0ce53=nvl(zcb7be.zba64d["soundTheme"],Config.z4d43d);zcb7be.z58923=false;zcb7be.z7d2eb=true;}else
{zcb7be.z58923=true;
}zcb7be.z2f966=null;zcb7be.zbefff=null;zcb7be.ze175e=null;zcb7be.z40457="";zcb7be.z6d336="";zcb7be.z901ab="Chess";zcb7be.z24380=false;zcb7be.z722c3=false;zcb7be.z86a83="#FF3";
zcb7be.z7fc95=true;zcb7be.z697a1=null;zcb7be.zd0e8d=null;zcb7be.zac5af=null;zcb7be.z71cab=null;zcb7be.zc82e7=false;zcb7be.z976f0=new zf9bd6();zcb7be.ze1dba=zcb7be.z85d5d+'__moveList';zcb7be.zed02d=null;zcb7be.ze7525=(z82fdb.z5ef84);zcb7be.z3a4db=30;zcb7be.z3273b=false;zcb7be.z46eea={zb8955:false,z43076:true};zcb7be.z891a1=true;


zcb7be.zd8c9e("onMove");zcb7be.zd8c9e("onMoveForwardBackward");zcb7be.zd8c9e("onInitBoard");

zcb7be.z13e88=function()
{return{"setOnMove":bind(function(callback){this.attachEvent("onMove",function(e){callback({"encodedMove":e.z32182,"fromId":e.zdbb15,"areaId":e.zcc2ef,"additionalInfo":e.z2ba00
});},this);},this),"setOnMoveForwardBackward":bind(function(callback){this.attachEvent("onMoveForwardBackward",callback,this);},this),"makeInputMove":bind(this.z9cb9f,this),"makeEncodedMove":bind(this.z7a349,this),"makeMove":bind(this.z35900,this),"setEnabled":bind(this.setEnabled,this),"cancelMove":bind(this.zf4e71,this),"takeBackMove":bind(this.ze1fc3,this),"markSquare":bind(this.zfc34e,this),"unmarkSquare":bind(this.z7690c,this),"blinkSquare":bind(this.ze8146,this),"setOpenAnalysis":bind(this.z2eed2,this),"flip":bind(this.z687a0,this),"moveForwardBackward":bind(this.z9b3d8.zb5312,this.z9b3d8),"updateScrolling":bind(this.z9b3d8.zd1584,this.z9b3d8),"getSelectedMoveNode":bind(this.z4aced,this),"goToCurrentState":bind(this.z387a0,this),"setSquareColor":bind(this.z3019c,this),"hidePieces":bind(this.zb6405,this),"showPieces":bind(this.z0051d,this),"toggleSounds":bind(this.z071f5,this),"setCurrentPosition":bind(this.zd27df,this),"setAnalysisBoard":bind(this.z96ff9,this),"parsePgn":bind(this.zaeb97,this),"doDynamicResize":bind(this.zbc5f9,this),"setPieceStyle":bind(this.z1b466,this),"setColorScheme":bind(this.z6609a,this),"getEncodedMoves":bind(this.z58f7d,this),"initBoard":bind(this.zd33fb,this)
};};
zcb7be.z0a9e0=function()
{
var z5d472={"analysisBoard":[
bind(function(){return this.z722c3;},this),
bind(this.z96ff9,this)
],"boardCoords":[
bind(function(){return this.z6a56d;},this),
bind(this.zbf689,this)
],"boardCoordsPosition":[
bind(function(){return this.z782f0;},this),
bind(function(value){this.zff1a5(value=="out");},this)
],"boardFlip":[
bind(function(){return this.z02e31;},this),
bind(this.z24848,this)
],"colorScheme":[
bind(function(){return this.zba7a5;},this),
bind(this.z6609a,this)
],"currentPosition":[
bind(function(){return this.z9b3d8.zf310d;},this),
bind(this.zd27df,this)
],"enabled":[
bind(function(){return this.z074d9;},this),
bind(this.setEnabled,this)
],"encodedMoves":[
bind(this.z58f7d,this),
function(){}],"moveListVerticalStyle":[
bind(function(){return this.z9b3d8.zc9f2b;},this),
bind(function(value){var newValue=value?true:false;if(newValue!=this.z9b3d8.zc9f2b)
{this.z9b3d8.zc9f2b=newValue;this.z9b3d8.z2737e=false;this.z9b3d8.za5bd9.innerHTML='';this.z9b3d8.build();this.z9b3d8.show();this.z9b3d8.zd1584();}},this)
],"openAnalysis":[
bind(function(){return(this.zcd559.za9bee=="off");},this),
bind(this.z2eed2,this)
],"pgn":[
bind(function(){if(!this.z103a1)
this.z103a1={"FEN":this.z9b3d8.z2e5e5[0].zd1deb};return this.z9b3d8.z22aa7(this.z103a1);},this),
bind(this.zaeb97,this)
],"pieceStyle":[
bind(function(){return this.z70c6b;},this),
bind(this.z1b466,this)
],"selectedMoveNode":[
bind(this.z4aced,this),
function(){}],"size":[
bind(function(){return this.size;},this),
bind(this.z1bdeb,this)
],"soundTheme":[
bind(function(){return this.z0ce53;},this),
function(){}],"viewOnly":[
bind(function(){return this.z24380;},this),
function(){}]
};
var z61e69={"blinkSquare":[this.ze8146,this],"cancelMove":[this.zf4e71,this],"doDynamicResize":[this.zbc5f9,this],"flip":[this.z687a0,this],"goToCurrentState":[this.z387a0,this],"hidePieces":[this.zb6405,this],"initBoard":[this.zd33fb,this],"makeEncodedMove":[this.z7a349,this],"makeMove":[this.z35900,this],"markSquare":[this.zfc34e,this],"moveForwardBackward":[this.z9b3d8.zb5312,this.z9b3d8],"parsePgn":[this.zaeb97,this],"setSquareColor":[this.z3019c,this],"showPieces":[this.z0051d,this],"takeBackMove":[this.ze1fc3,this],"toggleSounds":[this.z071f5,this],"unmarkSquare":[this.z7690c,this],"updateMoveListScrolling":[this.z9b3d8.zd1584,this.z9b3d8]
};return{"attachEvent":bind(this.attachEvent,this),"detachEvent":bind(this.detachEvent,this),"doAction":bind(function(z1643f,params){if(z61e69[z1643f])
{var z13557=z61e69[z1643f][0];var context=z61e69[z1643f][1];return z13557.apply(context,params);}},this),"setProperty":bind(function(ze1995,value){return z5d472[ze1995]?z5d472[ze1995][1](value):null;},this),"getProperty":bind(function(ze1995){return z5d472[ze1995]?z5d472[ze1995][0]():null;},this)
};};zcb7be.z4aced=function()
{return this.z9b3d8.z3ac0a;};zcb7be.z35900=function(from,to,z01e88,za55c7)
{this.z7a349(this.z976f0.z0cd66(from,to,z01e88),za55c7);};zcb7be.z7a349=function(z32182,za55c7)
{if(arguments.length>1){this.z46eea.z0f7d0=true;this.z46eea.z43076=za55c7;}else{this.z46eea.z0f7d0=false;}if(this.z9b3d8.z3ac0a<(this.z9b3d8.z2e5e5.length-1))
this.z9b3d8.z2e5e5.length=this.z9b3d8.z3ac0a+1;this.z85893(z32182,true);this.za1b2b(false);this.zf2cab();var z07fa1=this.z9b3d8.z2e5e5[this.z9b3d8.z2e5e5.length-1];this.z9b3d8.zd82a4.push(z07fa1);this.ze0cab(z07fa1.z6205b,z07fa1.zb0082);this.z9b3d8.zf310d=this.z9b3d8.z2e5e5.length-1;
var z03a92=this.z9b3d8.zdf569.z2e5e5[this.z9b3d8.z3ac0a].z03a92;if(z03a92)
this.z00753.z57699(z03a92,false);};zcb7be.z34ded=function(e){
if(e&&e["animationInstance"]&&e["animationInstance"].options&&e["animationInstance"].options.z84be6)
return;var za7157=this.z9b3d8.zd82a4.pop();this.refresh(za7157);if(this.z46eea.z0f7d0){this.setEnabled(this.z46eea.z43076);this.z46eea.z0f7d0=false;}this.zf2cab();};
zcb7be.attachEvent("onAfterMoveAnimated",zcb7be.z34ded,zcb7be);zcb7be.z58f7d=function()
{var z739c1="";for(var i=1;i<this.z9b3d8.z2e5e5.length;i++)
{var node=this.z9b3d8.z2e5e5[i];var move=this.z976f0.z0cd66(node.z6205b,node.zb0082,node.z2ba00);z739c1+=move;}return z739c1;};zcb7be.zfc34e=function(zcc2ef,color)
{if(color!=null)
{this.z02ba7(zcc2ef,color);}else
{var zb1b9d=(ChessColorScheme[this.zba7a5]&&ChessColorScheme[this.zba7a5][4])?ChessColorScheme[this.zba7a5][4]:this.z86a83;var z6205b=this.z9b3d8.z2e5e5[this.z9b3d8.zf310d].z6205b;var zb0082=this.z9b3d8.z2e5e5[this.z9b3d8.zf310d].zb0082;if(zcc2ef==z6205b)
{this.z02ba7(z6205b,zb1b9d);}else if(zcc2ef==zb0082)
{this.z02ba7(zb0082,zb1b9d);}else
{this.z7690c(zcc2ef);}}};zcb7be.z2eed2=function(z66931){if(z66931){this.zcd559.za9bee="off";}else{this.z9b3d8.z77fdf(0);this.z9b3d8.z2e5e5.length=1;this.z7834f.z9ac48=0;this.z9b3d8.z669a9(zbb170(this.z7834f));this.z9b3d8.zcf29e();this.zcd559.za9bee="full";}};zcb7be.zad685=function(z9dd26)
{var zd1deb;if(this.z40457)
zd1deb=this.z40457;else
zd1deb=z9dd26;z9689c(this.z7834f,zd1deb);this.z9b3d8.z2e5e5[0].zd1deb=zd1deb;this.z9b3d8.z2e5e5.length=1;this.z9fdc6(this.z6d336);};
zcb7be.z9cb9f=function(z90b85)
{var z32182=z90b85?z90b85:this.z73a3c.value;this.z85893(z32182);this.zf310d=this.z3ac0a;this.refresh();this.zf2cab();};zcb7be.za1b2b=function(z80298,z6205b,zb0082)
{if(z80298)
{if(this.z7e282)
this.z7e282.removeAttribute('disabled','disabled');if(this.z43eac)
this.z43eac.removeAttribute('disabled','disabled');}else
{if(this.z0fbe8)
this.z0fbe8.value="";if(this.z7e282)
this.z7e282.setAttribute('disabled','disabled');if(this.z43eac)
this.z43eac.setAttribute('disabled','disabled');}this.zc82e7=z80298;};zcb7be.z85893=function(z32182,z12414)
{var z3cbd9=this.z976f0.zafc74(z32182);var z6205b=this.z7834f.areas[z3cbd9["fromArea"]]?z3cbd9["fromArea"]:null;var zb0082=this.z7834f.areas[z3cbd9["toArea"]]?z3cbd9["toArea"]:null;var z2ba00=z3cbd9["additionalInfo"];var z70602=null;if(z6205b)
z70602=this.z7834f.areas[z3cbd9["fromArea"]].zad85d[0];if(z6205b&&zb0082&&z70602)
{
if(this.z901ab!='Chess960'&&this.z7834f.zad85d[z70602].type=='k'&&(z6205b=='e1'||z6205b=='e8'))
{if(z6205b=='e1')
{if(zb0082=='h1')
zb0082='g1';else if(zb0082=='b1')
zb0082='c1';else if(zb0082=='a1')
zb0082='c1';}else
{if(zb0082=='h8')
zb0082='g8';else if(zb0082=='b8')
zb0082='c8';else if(zb0082=='a8')
zb0082='c8';}}
if(this.z901ab=='Chess960'&&this.z7834f.zad85d[z70602].type=='k'
&&!this.zcd559.z31a2a(z70602,zb0082,this.z7834f))
{var zd67d4=z6205b.substr(0,1).charCodeAt();var zde4d3=zb0082.substr(0,1).charCodeAt();var z36c20=z6205b.substr(1,1);var z42ee4=zb0082.substr(1,1);if((z36c20=='1'&&z42ee4=='1')||(z36c20=='8'&&z42ee4=='8'))
{
if(zde4d3<zd67d4)
{var z15dbf=97;var ze8694=zd67d4-1;}else
{var z15dbf=zd67d4+1;var ze8694=104;}for(var i=z15dbf;i<=ze8694;i++)
{var z95dec=String.fromCharCode(i)+z42ee4;var zeb55e=this.z7834f.areas[z95dec].zad85d[0];if(zeb55e&&this.z7834f.zad85d[zeb55e].type=='r')
{zb0082=z95dec;break;}}}}if(this.zcd559.z31a2a(z70602,zb0082,this.z7834f))
{
this.z9b3d8.z67c68(z6205b,zb0082,this.z7834f,z2ba00,this.zcd559,true);if(z12414)
this.z9b3d8.z77fdf(this.z9b3d8.z2e5e5.length-1);return true;}}return false;};zcb7be.z9fdc6=function(z7bd62)
{var length=z7bd62.length;if(length%2==1)
{this.z24380=true;return;}for(var i=0;i<length;i+=2)
{var z32182=z7bd62.charAt(i)+z7bd62.charAt(i+1);if(!this.z85893(z32182,false))
{this.z24380=true;break;}}this.z9b3d8.show();this.z9b3d8.z77fdf(this.z9b3d8.z2e5e5.length-1);this.z9b3d8.zf310d=this.z9b3d8.z3ac0a;};zcb7be.zaeb97=function(zd1a70)
{if(!zd1a70&&this.z12e4a&&this.z12e4a.firstChild)
zd1a70=getNodeText(this.z12e4a);if(!zd1a70)
return;this.z9b3d8.zae4ea();this.z9b3d8.zcf29e();
this.z9b3d8.z669a9("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");z9689c(this.z7834f,"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");this.z103a1=this.z9b3d8.z51f47(zd1a70);this.z9b3d8.show();z9689c(this.z7834f,this.z9b3d8.z33622());this.refresh();
this.z9b3d8.z0d62a();};zcb7be.z397e4=function()
{var zd1deb;if(this.z40457)
zd1deb=this.z40457;else
zd1deb="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";z9689c(this.z7834f,zd1deb);this.z9b3d8.z669a9(zd1deb);if(this.z12e4a&&this.z12e4a.firstChild){this.z103a1=this.z9b3d8.z51f47(getNodeText(this.z12e4a));this.z9b3d8.show();z9689c(this.z7834f,this.z9b3d8.z33622());}else{this.z9fdc6(this.z6d336);}
this.z9b3d8.z0d62a();};zcb7be.zd33fb=function(z384f1,z739c1)
{if(this.z7d2eb)
{this.zcd559=this.z901ab=='Chess960'?new z22e75.zb6118():new z22e75.zde520();this.z7834f=new z7f42b();this.zcd559.zea856(this.z7348e);this.zcd559.z35e0a(this.z7834f);}if(typeof(z384f1)=="string")
this.z40457=z384f1?z384f1:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";if(typeof(z739c1)=="string")
this.z6d336=z739c1;if(!this.z7d2eb)
{this.z9b3d8.zae4ea();this.z9b3d8.z52e1f=[];this.z9b3d8.zcf29e(false);
}this.z68050();this.z397e4();this.ze323a=(this.z24380==false);this.z2839b=Config.GfxUrl;if(this.z7d2eb)
{this.attachEvent("onStartDragging",this.z7f103);this.attachEvent("onDropPiece",this.z3a754);this.attachEvent("onClickPiece",this.zd27a7);this.attachEvent("onClickArea",this.z1d154);}if(this.z36890)
this.z1bd89();this.refresh();this.z6b510();this.zf2cab();
if(!this.za31e4.chessHandler)
this.za31e4.chessHandler=this.z13e88();if(!this.za31e4.chessBoardAPI)
this.za31e4.chessBoardAPI=this.z0a9e0();var e={"firstInvocation":this.z7d2eb};this.fireEvent("onInitBoard",e);this.z7d2eb=false;};zcb7be.zf2cab=function()
{this.z22276();if(this.z7fc95)
{if(this.z9b3d8.z3ac0a>0)
{var zb1b9d=(ChessColorScheme[this.zba7a5]&&ChessColorScheme[this.zba7a5][4])?ChessColorScheme[this.zba7a5][4]:this.z86a83;var zb3aff=this.z9b3d8.zdf569.z2e5e5[this.z9b3d8.z3ac0a];this.z02ba7(zb3aff.z6205b,zb1b9d);this.z02ba7(zb3aff.zb0082,zb1b9d);}}};zcb7be.z22276=function()
{var zb1b9d=(ChessColorScheme[this.zba7a5]&&ChessColorScheme[this.zba7a5][4])?ChessColorScheme[this.zba7a5][4]:this.z86a83;for(var zcc2ef in this.z41465)
{if(zcc2ef!='size'&&this.z41465[zcc2ef].color==zb1b9d)
this.z7690c(zcc2ef);}};zcb7be.z21841=function()
{if(this.z71cab)
{this.z7690c(this.z71cab);this.zf2cab();}};zcb7be.zf4e71=function()
{if(this.z36890)
return;if(!this.z24380&&this.zc82e7)
{this.z9b3d8.z387a0();z9689c(this.z7834f,this.z9b3d8.z33622());this.refresh();this.za1b2b(false);this.zf2cab();if(this.z9b3d8.z2e5e5.length>this.z9b3d8.zf310d+1){this.z9b3d8.z2e5e5.length=this.z9b3d8.zf310d+1;this.z9b3d8.zcf29e();}}};zcb7be.ze1fc3=function(){if(this.z36890)
return;if(this.z9b3d8.z3ac0a>0){this.z9b3d8.z77fdf(this.z9b3d8.z3ac0a-1);this.z9b3d8.zf310d=this.z9b3d8.z3ac0a;this.z9b3d8.z2e5e5.length=this.z9b3d8.z3ac0a+1;this.z9b3d8.zcf29e();z9689c(this.z7834f,this.z9b3d8.z33622());this.refresh();this.za1b2b(false);this.zf2cab();}};zcb7be.z96ff9=function(z1208e){this.z722c3=z1208e;if(z1208e){if(this.z894ef&&this.z894ef.length)
this.za3376();this.za1b2b(false);if(this.z1cb83){this.zcd559.za9bee="off";}else{this.z9b3d8.z77fdf(0);this.z9b3d8.z2e5e5.length=1;this.z7834f.z9ac48=0;this.z9b3d8.z669a9(zbb170(this.z7834f));this.z9b3d8.zcf29e();this.zcd559.za9bee="full";}}else{this.zcd559.za9bee="full";}};zcb7be.z687a0=function()
{if(this.zbefff&&this.ze175e)
{var zb2d8e=this.zbefff.innerHTML;var z25bcc=this.ze175e.innerHTML;this.zbefff.innerHTML="";this.ze175e.innerHTML="";this.zbefff.innerHTML=z25bcc;this.ze175e.innerHTML=zb2d8e;}this.z24848(!this.z02e31);};zcb7be.z7ca48=function(zdbb15,zcc2ef,z2ba00)
{var z70602=this.z7834f.areas[zdbb15].zad85d[0];var z79993=(this.z7834f.areas[zcc2ef].zad85d.length>0);
if(this.z9b3d8!==this.z9b3d8.zdf569)
{
var z00704=this.z9b3d8.z3ac0a;var z3920d=this.z9b3d8.zdf569;while(z3920d!==this.z9b3d8)
{z00704+=z3920d.z01196-1;z3920d=this.z9b3d8.zdf569.z5dff4;}this.z9b3d8.z9a0f8(this.z9b3d8.zdf569,this);this.z9b3d8.z77fdf(z00704);z9689c(this.z7834f,this.z9b3d8.z33622());}if(this.z9b3d8.z2e5e5.length>this.z9b3d8.z3ac0a+1)
{this.z9b3d8.z2e5e5.length=this.z9b3d8.z3ac0a+1;this.z9b3d8.zcf29e();}var z1bdd4=!(this.zcd559.za9bee=="off");this.z9b3d8.z67c68(zdbb15,zcc2ef,this.z7834f,z2ba00,this.zcd559,true,null,null,z1bdd4);this.z697a1=z70602;this.zd0e8d=zcc2ef;this.zac5af=z2ba00;this.refresh();var z32182=this.z976f0.z0cd66(zdbb15,zcc2ef,z2ba00);if(!this.z722c3)
{this.za1b2b(true,zdbb15,zcc2ef);if(this.z0fbe8)
this.z0fbe8.value=z32182;}else{this.z9b3d8.z77fdf(this.z9b3d8.z2e5e5.length-1);}if(this.z9498d){this.za1b2b(true,zdbb15,zcc2ef);if(this.z722c3)
this.zc82e7=false;if(this.z0fbe8)
this.z0fbe8.value=z32182;this.z9b3d8.z77fdf(this.z9b3d8.z2e5e5.length-1);this.z9b3d8.zf310d=this.z9b3d8.z2e5e5.length-1;this.zf2cab();setTimeout("document.getElementById('"+this.z7e282.id+"').click();",10);
}else{this.zf2cab();}
var z03a92=!this.z722c3?this.z9b3d8.zdf569.z2e5e5[this.z9b3d8.zdf569.z2e5e5.length-1].z03a92:this.z9b3d8.zdf569.z2e5e5[this.z9b3d8.z3ac0a].z03a92;if(z03a92)
this.z00753.z57699(z03a92,false);this.fireEvent("onMove",{"encodedMove":z32182,"fromId":zdbb15,"areaId":zcc2ef,"additionalInfo":z2ba00,"moveText":z03a92});};zcb7be.z9c5f8=function()
{var z93353=false;if((this.z9b3d8.z3ac0a!=this.z9b3d8.zf310d&&!this.z722c3))
{z93353=true;}if(!this.z24380&&z93353)
{this.z387a0();return true;}return false;};
zcb7be.z387a0=function()
{this.z9b3d8.z387a0();z9689c(this.z7834f,this.z9b3d8.z33622());this.refresh();this.zf2cab();};zcb7be.zd27df=function(position,zaec40)
{this.z9b3d8.zf310d=position;
if(zaec40)
this.z9b3d8.z71d20=position;};if(!z82fdb.z5ef84)
{zcb7be.z071f5=function(toggle)
{if(toggle)
{setTimeout(bind(zcb7be.z00753.z16fe5,zcb7be.z00753),1);}this.zf08a6=toggle;};
zcb7be.z00753={z9feb3:{},z5d070:null,zd8f12:zcb7be,z16fe5:function()
{if(this.zbdb23)
return;this.zbdb23=true;
this.zac84e("game-start");this.zac84e("game-end");this.zac84e("capture");this.zac84e("castle");this.zac84e("premove");this.zac84e("move-self");this.zac84e("move-check");this.zac84e("move-opponent");this.zac84e("promote");
this.zac84e("notify");this.zac84e("tenseconds");

},zac84e:function(code)
{if(this.z2b9af())
{var zb0167=Config.z76fef+"_MP3_/"+zcb7be.z0ce53+'/'+code+".mp3";var zd9a77=Config.z76fef+"_OGG_/"+zcb7be.z0ce53+"/"+code+".ogg";this.z9feb3[code]=true;this.z2b9af()["loadSound"](code,zb0167+"|"+zd9a77);}},zb5de5:function(code)
{if(this.zd8f12.zf08a6)
setTimeout(bind(function(c)
{if(this.z9feb3[c])
this.z2b9af()["playSound"](c);},this,code),1);},z57699:function(z03a92,z9e3a8)
{if(this.zd8f12.zf08a6&&z03a92)
{if(z03a92.indexOf("#")>=0)
this.zb5de5("move-check");else if(z03a92.indexOf("+")>=0)
this.zb5de5("move-check");else if(z03a92.indexOf("x")>=0)
this.zb5de5("capture");else if(z03a92.indexOf("O-O")>=0)
this.zb5de5("castle");else if(z03a92.indexOf("=")>=0)
this.zb5de5("promote");else
this.zb5de5(z9e3a8?"move-self":"move-opponent");}},z2b9af:function()
{if(!this.z5d070)
this.z5d070=window["getDefaultSoundManager"]();return this.z5d070;}};}zcb7be.z06493=function()
{this.z954f1.refresh(this.z7834f);};zcb7be.zdcc70=function()
{if(this.z2bb99)
{var z1bca9=this.z5fbba||[];for(var i=0,z9485b=z1bca9.length;i<z9485b;++i)
{this.z7690c(z1bca9[i]);}}};zcb7be.z75459=function(e)
{var zdbb15=e["dropTargetId"]||e["fromAreaId"];if(this.z2bb99&&this.zcd559.za9bee!="off"&&e.which!==3&&e.button!==2)
{
var zba125=this.z7834f.areas[zdbb15];if(!zba125)
return;var z70602=zba125.zad85d[0];var z0f328=this.zcd559.z57ebf(z70602,this.z7834f);for(var i=0,z9485b=z0f328.length;i<z9485b;++i)
{this.z02ba7(z0f328[i],this.zdab90,false,false,true);}this.z5fbba=z0f328;}};zcb7be.z2e9cd=function(e){this.z61307=this.z61307||{};if(!z82fdb.z5ef84&&!this.z722c3&&!this.z9498d)
{var zb1b9d=(ChessColorScheme[this.zba7a5]&&ChessColorScheme[this.zba7a5][4])?ChessColorScheme[this.zba7a5][4]:this.z86a83;if(e['fromAreaId'])
{this.z02ba7(e['fromAreaId'],zb1b9d);this.z61307.z6205b=e['fromAreaId'];}if(e['targetAreaId'])
{this.z02ba7(e['targetAreaId'],zb1b9d);this.z61307.zb0082=e['targetAreaId'];}}};zcb7be.zed554=function(){if(!this.z61307)
return;if(this.z61307.z6205b)
{this.z7690c(this.z61307.z6205b);delete this.z61307.z6205b;}if(this.z61307.zb0082)
{this.z7690c(this.z61307.zb0082);delete this.z61307.zb0082;}};zcb7be.z3a754=function(e)
{if(!this.z074d9)
return;if(this.zc82e7)
{this.zf4e71();return;}if(this.z9c5f8())
return;this.zdcc70();this.z21841();this.z71cab=null;var zdbb15=e["fromAreaId"];var zcc2ef=e["targetAreaId"];var z70602=this.z7834f.areas[zdbb15].zad85d[0];var z79993=(this.z7834f.areas[zcc2ef].zad85d.length>0);var zf8bdb=this.zcd559.z31a2a(z70602,zcc2ef,this.z7834f);var z49dd9=(zf8bdb)?true:false;

if(this.z722c3&&this.zcd559.za9bee=="off"){this.z7834f.za429c['sm']=this.z7834f.zad85d[z70602].color;}if(z49dd9)
{if(zf8bdb.z4e2bd){this.zae48c(zdbb15,zcc2ef);this.z5dfbd=false;}else{this.z7ca48(zdbb15,zcc2ef,null);this.z2e9cd(e);}}else{
if(zdbb15==zcc2ef)
{this.z5dfbd=false;this.zed554();}}};zcb7be.z7f103=function(e){this.zdcc70();this.z75459(e);this.zed554();this.z2e9cd(e);};zcb7be.zd27a7=function(e)
{if(this.z24380||!this.z074d9)
return;if(this.zc82e7)
{this.zf4e71();return;}if(this.z9c5f8())
return;this.zdcc70();this.z75459(e);if(this.z71cab)
{this.z3a754({"fromAreaId":this.z71cab,"targetAreaId":e["dropTargetId"]});return;}var zdbb15=e["dropTargetId"];this.z21841();var zb1b9d=(ChessColorScheme[this.zba7a5]&&ChessColorScheme[this.zba7a5][4])?ChessColorScheme[this.zba7a5][4]:this.z86a83;this.z02ba7(zdbb15,zb1b9d);this.z71cab=zdbb15;};zcb7be.z1d154=function(e)
{if(this.z24380||!this.z074d9)
return;if(this.zc82e7)
{this.zf4e71();return;}if(this.z9c5f8())
return;if(!this.z71cab)
return;this.z5dfbd=true;this.z3a754({"fromAreaId":this.z71cab,"targetAreaId":e["dropTargetId"]});};zcb7be.z05877=function(e)
{this.z7ca48(this.zfed09.z7c0b1,this.zfed09.z80882,e["pieceType"]);};zcb7be.attachEvent("onPromotionPieceSelected",zcb7be.z05877);

if(zcb7be.zba64d["moveOutputField"]!=null)zcb7be.z0fbe8=document.getElementById(zcb7be.zba64d["moveOutputField"]);if(zcb7be.zba64d["submitButton"]!=null)zcb7be.z7e282=document.getElementById(zcb7be.zba64d["submitButton"]);if(zcb7be.zba64d["cancelButton"]!=null)zcb7be.z43eac=document.getElementById(zcb7be.zba64d["cancelButton"]);if(zcb7be.zba64d["flipBoardButton"]!=null)zcb7be.z2f966=document.getElementById(zcb7be.zba64d["flipBoardButton"]);if(zcb7be.zba64d["topInfoDiv"]!=null)zcb7be.zbefff=document.getElementById(zcb7be.zba64d["topInfoDiv"]);if(zcb7be.zba64d["bottomInfoDiv"]!=null)zcb7be.ze175e=document.getElementById(zcb7be.zba64d["bottomInfoDiv"]);if(zcb7be.zba64d["autoSubmit"]!=null)zcb7be.z9498d=zcb7be.zba64d["autoSubmit"];if(zcb7be.zba64d["initialSetup"]!=null)zcb7be.z40457=zcb7be.zba64d["initialSetup"];if(zcb7be.zba64d["variant"]!=null)zcb7be.z901ab=zcb7be.zba64d["variant"];if(zcb7be.zba64d["pgnBodyElement"]!=null)zcb7be.z12e4a=document.getElementById(zcb7be.zba64d["pgnBodyElement"]);if(zcb7be.zba64d["moves"]!=null)zcb7be.z6d336=zcb7be.zba64d["moves"];if(zcb7be.zba64d["viewOnly"]!=null)zcb7be.z24380=zcb7be.zba64d["viewOnly"];if(zcb7be.zba64d["analyzeMode"]!=null)zcb7be.z722c3=zcb7be.zba64d["analyzeMode"];if(typeof(zcb7be.zba64d["markLastMove"])!="undefined")zcb7be.z7fc95=zcb7be.zba64d["markLastMove"];if(zcb7be.zba64d["moveListControl"]!=null)zcb7be.ze1dba=zcb7be.zba64d["moveListControl"];if(zcb7be.zba64d["capturedPiecesControl"]!=null)zcb7be.zed02d=zcb7be.zba64d["capturedPiecesControl"];if(zcb7be.zba64d["moveInputField"]!=null)zcb7be.z73a3c=document.getElementById(zcb7be.zba64d["moveInputField"]);if(zcb7be.zba64d["captureKeyStrokes"]!=null)zcb7be.z891a1=zcb7be.zba64d["captureKeyStrokes"];if(zcb7be.zba64d["sounds"]!=null)zcb7be.zf08a6=zcb7be.zba64d["sounds"];if(zcb7be.zba64d["shareMenuButton"]!=null)zcb7be.zdddc7=zcb7be.zba64d["shareMenuButton"];if(zcb7be.zba64d["shareMenuContainer"]!=null)zcb7be.z42fc8=zcb7be.zba64d["shareMenuContainer"];if(zcb7be.zba64d["shareMenuForcePgnDialog"]!=null)zcb7be.ze79a0=zcb7be.zba64d["shareMenuForcePgnDialog"];if(z82fdb.z16ad6)
{zcb7be.z9b3d8=new z2beb5(zcb7be.ze1dba,zcb7be.z85d5d,zcb7be.zba64d);if(zcb7be.zed02d!=null)
{zcb7be.z954f1=new z380c2(zcb7be.zed02d,zcb7be.z7834f,{"gfxUrl":Config["GfxUrl"],
"size":zcb7be.size});zcb7be.attachEvent("onRefresh",zcb7be.z06493,zcb7be);}if(zcb7be.z722c3)
{zcb7be.z24380=false;}zcb7be.za1b2b(false);zcb7be.zd33fb();if(zcb7be.zf08a6)
setTimeout(bind(zcb7be.z00753.z16fe5,zcb7be.z00753),1);
if(zcb7be.z43eac){myEvent.registerRelated(zcb7be.z43eac.id,zcb7be.z85d5d);myEvent.observe(zcb7be.z43eac,'click',z36b44.zf4e71);}if(zcb7be.z2f966)
{zcb7be.z2f966.checked=zcb7be.z02e31;myEvent.registerRelated(zcb7be.z2f966.id,zcb7be.z85d5d);myEvent.observe(zcb7be.z2f966,'click',z36b44.z687a0);}if(zcb7be.z73a3c){myEvent.registerRelated(zcb7be.z73a3c.id,zcb7be.z85d5d);myEvent.observe(zcb7be.z73a3c,'change',z36b44.z9cb9f);}if(zcb7be.z891a1){if(typeof(myEvent.za5d08)=='undefined'){myEvent.za5d08=zcb7be;myEvent.observe(document,'keyup',z36b44.zc623a);}}if(zcb7be.zdddc7&&zcb7be.z42fc8)
{zcb7be.z587de=new z8ef21({z85d5d:zcb7be.z85d5d,z9b3d8:zcb7be.z9b3d8,z1b6a3:zcb7be.zdddc7,container:zcb7be.z42fc8,z3b1c0:zcb7be.z42fc8,z8af08:zcb7be.ze79a0?true:false,zd1a70:zcb7be.z12e4a?zcb7be.z12e4a.innerHTML:null
});}}};
z36b44.zf4e71=function(e){if(!e)
e=window.event;
var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;var currentTarget=target;var obj=null;var body=document.getElementsByTagName('body')[0];while(obj==null)
{var z1b342=myEvent.findRelated(currentTarget.id);obj=z1b342?document.getElementById(z1b342).chessBoard:null;if(obj==null)
{currentTarget=currentTarget.parentNode;if(currentTarget==body)
{myEvent.preventDefault(e,true);return false;}}}obj.zf4e71();myEvent.preventDefault(e,true);return false;};z36b44.z687a0=function(e){if(!e)
e=window.event;
var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;var z1b342=myEvent.findRelated(target.id);var obj=z1b342?document.getElementById(z1b342).chessBoard:null;obj.z687a0();};z36b44.z9cb9f=function(e){if(!e)
e=window.event;
var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;var z1b342=myEvent.findRelated(target.id);var obj=z1b342?document.getElementById(z1b342).chessBoard:null;obj.z9cb9f();myEvent.preventDefault(e,true);return false;};z36b44.zc623a=function(e){if(!e)
e=window.event;
var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;if(target.nodeName.toLowerCase()!='input'&&target.nodeName.toLowerCase()!='textarea'){if(typeof(myEvent.za5d08)!='undefined'){if(e.keyCode==39){
myEvent.za5d08.z9b3d8.zb5312('forward1');}else
if(e.keyCode==37){
myEvent.za5d08.z9b3d8.zb5312('backward1');}}}};SquareDetector=function(callback,za1f4e,z81262,za5195){this.z650f4=callback;this.z2af1c=za1f4e;this.z13123=z81262;this.zcd498=za5195;this.z2af1c.z29cc7=-1;var z22e30=z95894.z8c277.z2071e?"focusin":"focus";var z889f0=z95894.z8c277.z2071e?"focusout":"blur";if(z95894.z8c277.z2071e){myEvent.observe(window.document,z22e30,bind(this.focus,this));myEvent.observe(window.document,z889f0,bind(this.blur,this));}else{myEvent.observe(window,z22e30,bind(this.focus,this));myEvent.observe(window,z889f0,bind(this.blur,this));}};SquareDetector.prototype={blur:function()
{if(this.zcd498)
{if(this.z1820e)
clearTimeout(this.z1820e);this.z1820e=setTimeout(bind(function()
{this.z1820e=null;this.z650f4();},this),500);}else
{z7b5b9=document.getElementById(this.z13123);if(z7b5b9!=null)
this.z2af1c.z29cc7=new Date().getTime();}},focus:function()
{if(this.zcd498)
{if(this.z1820e)
clearTimeout(this.z1820e);}else
{if(this.z2af1c.z29cc7!=-1)
{if((new Date().getTime()-this.z2af1c.z29cc7)>500)
this.z650f4();this.z2af1c.z29cc7=-1;}}}};(function(e){var zac083=document.getElementsByClassName("chess_viewer");for(var n=0;n<zac083.length;n++)
z827ac.ze50ed(new z51432(zac083[n]));})();
