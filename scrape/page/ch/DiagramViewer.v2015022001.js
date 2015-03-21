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
ze6ea2.ze5591=true;return ze6ea2;};})();(function(){z7f42b=function(){this.zad85d={};this.areas={};this.za429c={};this.z9ac48=0;this.zfa082=0;
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
{this.z5f76d=zdd34b;}};z818ea=new z22e75.zb6118();})();(function(){if(typeof(z51432)=='undefined'){z08e47={};z51432=function(z85d5d,z7834f,zba64d)
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
})();(function(){z2beb5=function(z85d5d,zabebd,zba64d){this.z85d5d=z85d5d;if(this.z85d5d)
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
{button.ze1dba.ze5645();}myEvent.stopObserving(document,'mouseup',button.z42825);};(function(){z8ef21=function(params){params=params||{};if(typeof(params.z85d5d)=='string'){
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
{case 7:return "forced move (all others lose quickly)";case 8:return "singular move (no reasonable alternatives)";case 9:return "worst move";case 10:return "drawish position";case 11:return "equal chances, quiet position";case 12:return "equal chances, active position";case 13:return "unclear position";case 14:return "White has a slight advantage";case 15:return "Black has a slight advantage";case 16:return "White has a moderate advantage";case 17:return "Black has a moderate advantage";case 18:return "White has a decisive advantage";case 19:return "Black has a decisive advantage";case 20:return "White has a crushing advantage (Black should resign)";case 21:return "Black has a crushing advantage (White should resign)";case 22:return "White is in zugzwang";case 23:return "Black is in zugzwang";case 24:return "White has a slight space advantage";case 25:return "Black has a slight space advantage";case 26:return "White has a moderate space advantage";case 27:return "Black has a moderate space advantage";case 28:return "White has a decisive space advantage";case 29:return "Black has a decisive space advantage";case 30:return "White has a slight time (development) advantage";case 31:return "Black has a slight time (development) advantage";case 32:return "White has a moderate time (development) advantage";case 33:return "Black has a moderate time (development) advantage";case 34:return "White has a decisive time (development) advantage";case 35:return "Black has a decisive time (development) advantage";case 36:return "White has the initiative";case 37:return "Black has the initiative";case 38:return "White has a lasting initiative";case 39:return "Black has a lasting initiative";case 40:return "White has the attack";case 41:return "Black has the attack";case 42:return "White has insufficient compensation for material deficit";case 43:return "Black has insufficient compensation for material deficit";case 44:return "White has sufficient compensation for material deficit";case 45:return "Black has sufficient compensation for material deficit";case 46:return "White has more than adequate compensation for material deficit";case 47:return "Black has more than adequate compensation for material deficit";case 48:return "White has a slight center control advantage";case 49:return "Black has a slight center control advantage";case 50:return "White has a moderate center control advantage";case 51:return "Black has a moderate center control advantage";case 52:return "White has a decisive center control advantage";case 53:return "Black has a decisive center control advantage";case 54:return "White has a slight kingside control advantage";case 55:return "Black has a slight kingside control advantage";case 56:return "White has a moderate kingside control advantage";case 57:return "Black has a moderate kingside control advantage";case 58:return "White has a decisive kingside control advantage";case 59:return "Black has a decisive kingside control advantage";case 60:return "White has a slight queenside control advantage";case 61:return "Black has a slight queenside control advantage";case 62:return "White has a moderate queenside control advantage";case 63:return "Black has a moderate queenside control advantage";case 64:return "White has a decisive queenside control advantage";case 65:return "Black has a decisive queenside control advantage";case 66:return "White has a vulnerable first rank";case 67:return "Black has a vulnerable first rank";case 68:return "White has a well protected first rank";case 69:return "Black has a well protected first rank";case 70:return "White has a poorly protected king";case 71:return "Black has a poorly protected king";case 72:return "White has a well protected king";case 73:return "Black has a well protected king";case 74:return "White has a poorly placed king";case 75:return "Black has a poorly placed king";case 76:return "White has a well placed king";case 77:return "Black has a well placed king";case 78:return "White has a very weak pawn structure";case 79:return "Black has a very weak pawn structure";case 80:return "White has a moderately weak pawn structure";case 81:return "Black has a moderately weak pawn structure";case 82:return "White has a moderately strong pawn structure";case 83:return "Black has a moderately strong pawn structure";case 84:return "White has a very strong pawn structure";case 85:return "Black has a very strong pawn structure";case 86:return "White has poor knight placement";case 87:return "Black has poor knight placement";case 88:return "White has good knight placement";case 89:return "Black has good knight placement";case 90:return "White has poor bishop placement";case 91:return "Black has poor bishop placement";case 92:return "White has good bishop placement";case 93:return "Black has good bishop placement";case 84:return "White has poor rook placement";case 85:return "Black has poor rook placement";case 86:return "White has good rook placement";case 87:return "Black has good rook placement";case 98:return "White has poor queen placement";case 99:return "Black has poor queen placement";case 100:return "White has good queen placement";case 101:return "Black has good queen placement";case 102:return "White has poor piece coordination";case 103:return "Black has poor piece coordination";case 104:return "White has good piece coordination";case 105:return "Black has good piece coordination";case 106:return "White has played the opening very poorly";case 107:return "Black has played the opening very poorly";case 108:return "White has played the opening poorly";case 109:return "Black has played the opening poorly";case 110:return "White has played the opening well";case 111:return "Black has played the opening well";case 112:return "White has played the opening very well";case 113:return "Black has played the opening very well";case 114:return "White has played the middlegame very poorly";case 115:return "Black has played the middlegame very poorly";case 116:return "White has played the middlegame poorly";case 117:return "Black has played the middlegame poorly";case 118:return "White has played the middlegame well";case 119:return "Black has played the middlegame well";case 120:return "White has played the middlegame very well";case 121:return "Black has played the middlegame very well";case 122:return "White has played the ending very poorly";case 123:return "Black has played the ending very poorly";case 124:return "White has played the ending poorly";case 125:return "Black has played the ending poorly";case 126:return "White has played the ending well";case 127:return "Black has played the ending well";case 128:return "White has played the ending very well";case 129:return "Black has played the ending very well";case 130:return "White has slight counterplay";case 131:return "Black has slight counterplay";case 132:return "White has moderate counterplay";case 133:return "Black has moderate counterplay";case 134:return "White has decisive counterplay";case 135:return "Black has decisive counterplay";case 136:return "White has moderate time control pressure";case 137:return "Black has moderate time control pressure";case 138:return "White has severe time control pressure";case 139:return "Black has severe time control pressure";default:return "";}}var z0a914="beginNode";var zad2f6="focusNode";var za7921="endNode";z8026b=function(){this.zdef58=/^\s*\[(.+)\s+\"(.*)\"\]\s*$/;this.z355e8=/^(([0-9]+(\.|\.\.\.|\.\ \.\.\.))?)\s*((([KQRBN]?)([a-h]?[1-8]?)x?([a-h][1-8])(=?([QRBN]))?|O-O-O|O-O|0-0-0|0-0)(\+|#)?)((\!|\?)?(\!|\?)?)?$/;this.z4915e=/^\{(?:.|[\n\r])*?\}$/;this.ze3695=/\;(?:.|[\n\r])*?\n/;this.z6a350=/\(([^\)]+)\)/;this.z78304=/(1-0)|(0-1)|(1\/2-1\/2)|\*/;this.z25e5d=/^\$([0-9]+)$/;this.z98555=/\s/;this.z31297=/\[(.+)\s+\"(.*)\"\]|([0-9]+(\.|\.\.\.|\.\ \.\.\.))?\s*(([KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](=?[QRBN])?|O-O-O|O-O|0-0-0|0-0)(\+|#)?)((\!|\?)?(\!|\?)?)?|\{(?:.|[\n\r])*?\}|\;(?:.|[\n\r])*?\n|((1-0)|(0-1)|(1\/2-1\/2)|\*)|\$[0-9]+|\s|\S/g;
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
z68390.z03a92=z68390.z03a92.replace("0-0-0","O-O-O");z68390.z03a92=z68390.z03a92.replace("0-0","O-O");this.z7f994.z67c68(z7834f.zad85d[found].zba125,z68390.z2c8b9,z7834f,z68390.ze3b1d,this.zcd559,true,"",z68390.z03a92);this.z7a080++;return true;}else{return false;}}};var z265d2=new z8026b();z09150=function(zfba83,zba64d){if(!zba64d)
zba64d={};if(zba64d["pgnParser"])
this.zf4cc5=zba64d["pgnParser"];this.parse(zfba83?zfba83:this.z7e1f2());};z09150.prototype={reset:function()
{this.tags={};this.zb4ad2=null;this.zba7a5=null;this.z70c6b=null;this.z222be=null;this.z02e31=null;this.z10212=null;this.z6a56d=null;this.z38fe2=null;this.zbef97=null;this.z9b3d8=null;this.zbcdcf=null;this.zf04fb=null;this[zad2f6]=null;this[z0a914]=null;this[za7921]=null;},parse:function(zfba83)
{this.reset();var z3b131=this.zca126(zfba83);this.zd8198=z3b131["pgnbody"];this.zb4ad2=z3b131["diagramtype"];this.zba7a5=z3b131["colorscheme"];this.z70c6b=z3b131["piecestyle"];this.z222be=z3b131["float"];this.z02e31=(z3b131["flip"]=="true");this.z10212=(z3b131["prompt"]=="true");this.z6a56d=(z3b131["coords"]=="true");this.z38fe2=1*z3b131["size"];this.zbef97=z3b131["lastmove"];this.zf04fb=(z3b131["hideglobalbuttons"]=="true");if(z3b131["movelistcontrol"])
this.z9b3d8=z3b131["movelistcontrol"];if(z3b131["commentbox"])
this.zbcdcf=z3b131["commentbox"];this[zad2f6]=z3b131["focusnode"];this[z0a914]=z3b131["beginnode"];this[za7921]=z3b131["endnode"];},zca126:function(zbabf7)
{var result={};var zf2eae=null;var value="";var split=zbabf7.split("\n");for(var i=0;i<split.length;i++)
{split[i]=split[i].replace(/^\s+/,'').replace(/\s+$/,'');if(zf2eae)
{if(split[i].match("&-[a-z]+:")==null)
{if(value!="")
value+="\n";value+=split[i];}}if(split[i].match("&-[a-z]+:"))
{if(value!="")
{if(value.indexOf("\n")!=-1)
value+="\n";result[zf2eae]=value;}zf2eae=split[i].substring(2,split[i].length-1);if(zf2eae.indexOf(":")==zf2eae.length-1)
zf2eae=zf2eae.substring(0,zf2eae.length-1);value="";}}if(value!="")
{if(value.indexOf("\n")!=-1)
value+="\n";result[zf2eae]=value;}return result;},toString:function()
{var result="";result+='&-diagramtype:\n'+this.zb4ad2+'\n';result+='&-colorscheme:\n'+this.zba7a5+'\n';result+='&-piecestyle:\n'+this.z70c6b+'\n';result+='&-float:\n'+this.z222be+'\n';result+='&-flip:\n'+(this.z02e31?"true":"false")+'\n';result+='&-prompt:\n'+(this.z10212?"true":"false")+'\n';result+='&-coords:\n'+(this.z6a56d?"true":"false")+'\n';result+='&-size:\n'+this.z38fe2+'\n';if(this.z9b3d8)
result+='&-movelistcontrol:\n'+this.z9b3d8+'\n';if(this.zbcdcf)
result+='&-commentbox:\n'+this.zbcdcf+'\n';result+='&-lastmove:\n'+(this.zbef97?this.zbef97:'')+'\n';result+='&-focusnode:\n'+(this[zad2f6]?this[zad2f6]:'')+'\n';result+='&-beginnode:\n'+(this[z0a914]?this[z0a914]:'')+'\n';result+='&-endnode:\n'+(this[za7921]?this[za7921]:'')+'\n';result+='&-hideglobalbuttons:\n'+this.zf04fb+'\n';if(this.zd8198)
result+='&-pgnbody:\n'+this.zd8198;else
if(this.z185ca)
result+='&-pgnbody:\n'+this.z185ca.z22aa7(this.tags);+'\n';return result;},z7e1f2:function()
{var setup="";var z71f25="????.??.??";setup+='&-diagramtype:\n';setup+='simpleDiagram\n';setup+='&-colorscheme:\n';setup+='blue\n';setup+='&-piecestyle:\n';setup+='classic\n';setup+='&-float:\n';setup+='left\n';setup+='&-flip:\n';setup+='false\n';setup+='&-size:\n';setup+='45\n';setup+='&-lastmove:\n';setup+='\n';setup+='&-focusnode:\n';setup+='\n';setup+='&-beginnode:\n';setup+='\n';setup+='&-endnode:\n';setup+='\n';setup+='&-hideglobalbuttons:\n';setup+='false\n';setup+='&-pgnbody:\n';setup+='[Event ""]\n';setup+='[Site ""]\n';setup+='[Date "'+z71f25+'"]\n';setup+='[Round ""]\n';setup+='[White ""]\n';setup+='[Black ""]\n';setup+='[Result "*"]\n';setup+='[FEN "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"]\n';setup+='\n';setup+='*\n';return setup;}};(function(){
zcf9ce=null;zba130=function(z85d5d,zcd559,z745b7)
{if(typeof(z85d5d)=='string'){
this.z85d5d=z85d5d;this.za31e4=document.getElementById(this.z85d5d);}else{
this.z85d5d=z85d5d.id;this.za31e4=z85d5d;}this.zd6612=this.z85d5d.substr(this.z85d5d.lastIndexOf('_')+1);this.za31e4.viewer=this;this.zc2ba5=this.za31e4.className.indexOf("mobile")!=-1;
this.z6f31e=this.z85d5d+"_Main";this.z779e2=this.z85d5d+"_Info";this.z5dfc6=this.z85d5d+"_ButtonsBar";this.z98bf5=this.z85d5d+"_Players";this.z12b15=this.z85d5d+"_EventSite";this.zc9865=this.z85d5d+"_RoundDate";this.z94d90=this.z85d5d+"_EcoResult";this.z24127=this.z85d5d+"_ChessBoard";this.z2cb75=this.z85d5d+"_ChessBoardContainer";this.z7e2d5=this.z85d5d+"_Actions";this.zaf7c7=this.z85d5d+"_Navigate";this.zd3182=this.z85d5d+"_Comment";this.z35a65=this.z85d5d+"_CommentText";this.z29754=this.z85d5d+"_PuzzleButtons";this.z83b40=this.z85d5d+"_GlobalButtons";this.z48f02=this.z85d5d+"_MoveList";this.z27f2c=this.z85d5d+"_PuzzleMoveList";this.z24e2b=this.z85d5d+"_MoveListButton";this.zac67e=this.z85d5d+"_PuzzleProgressInfo";this.z69694=this.z85d5d+"_ShareMenuButton";
this.zff763=this.z85d5d+"_playPause";this.z0ef71=this.z85d5d+"_moveBackward";this.z977df=this.z85d5d+"_moveForward";this.z20020=this.z85d5d+"_moveBegin";this.z87f16=this.z85d5d+"_moveEnd";this.zf0e0e=null;this.z2c026=null;this.za0a15=null;this.zeae2c=null;this.z71cab=null;var z2b2ad;if(this.za31e4.childNodes[0]){z2b2ad=this.za31e4.childNodes[0].data.replace(/^\s+/,'').replace(/\s+$/,'');this.za31e4.childNodes[0].data="";}this.setup=z745b7;if(!this.setup&&z2b2ad)
this.setup=new z09150(z2b2ad);
if(this.setup["moveListControl"])this.z48f02=this.setup["moveListControl"];if(this.setup["commentBox"])this.z35a65=this.setup["commentBox"];this.size=this.setup.z38fe2;if(this.zc2ba5&&this.size>38)
this.size=38;
if(this.setup.zb4ad2=='chessGame')
this.size=this.zc2ba5?38:45;
this.za31e4.className+=" diagramType_"+this.setup.zb4ad2;this.z9b3d8=new z2beb5(this.z48f02,this.z24127,{"moveAnimation":true,"moveListVerticalStyle":false,"moveListCommentBox":this.z35a65,"diagramStyle":true,"withinDiagram":true
});this.setup.tags=this.z9b3d8.z51f47(this.setup.zd8198);this.zcd559=zcd559;if(!this.zcd559){if(this.setup.tags["Variant"]&&this.setup.tags["Variant"]=="Chess960"){this.zcd559=new z22e75.zb6118();}else{this.zcd559=new z22e75.zde520();}}this.zcd559.zea856(false);this.z7834f=new z7f42b();this.zcd559.z35e0a(this.z7834f);
if(this.setup.tags['FEN'])
z9689c(this.z7834f,this.setup.tags['FEN']);else
z9689c(this.z7834f,"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
if(this.setup[z0a914])
this.z9b3d8["beginNode"]=this.setup[z0a914];if(this.setup[zad2f6])
this.z9b3d8["focusNode"]=this.setup[zad2f6];if(this.setup[za7921])
this.z9b3d8["endNode"]=this.setup[za7921];
this.zd3700();
this.z9b3d8.za5bd9=document.getElementById(this.z48f02);if(this.z9b3d8.za5bd9){this.z9b3d8.za5bd9.z9b3d8=this.z9b3d8;this.z9b3d8.build();if(this.setup.zb4ad2=='chessGame'){this.z9b3d8.show();}}var z6c7a3=(this.setup.zb4ad2=="chessProblem");this.chessBoard=new z51432(this.z24127,this.z7834f,{"dragAndDrop":z6c7a3,"viewOnly":!z6c7a3,"size":this.size,"gfxUrl":Config.GfxUrl,"colorScheme":this.setup.zba7a5,"pieceStyle":this.setup.z70c6b,"boardCoords":this.setup.z6a56d,"boardSize":this.size,"boardFlip":this.setup.z02e31,"moveAnimationSpeed":"blitz","chessBoardBorder":false
});this.z587de=new z8ef21({z85d5d:this.za31e4,z9b3d8:this.z9b3d8,z745b7:this.setup,z1b6a3:this.z69694,container:this.z2cb75,z3b1c0:this.z6f31e,zd6612:this.zd6612
});
this.chessBoard.z9b3d8=this.z9b3d8;this.chessBoard.attachEvent("onRefresh",this.z2d27f,this);this.chessBoard.attachEvent("onAfterMoveAnimated",this.z65158,this);
this.chessBoard.z551de=this;this.chessBoard.zf0e0e="#6cf";
if(this.setup[z0a914]&&!this.setup[zad2f6]){this.z9b3d8.z77fdf(this.setup[z0a914]);z9689c(this.z7834f,this.z9b3d8.z33622());}if(this.setup[zad2f6]){this.z9b3d8.z77fdf(this.setup[zad2f6]);z9689c(this.z7834f,this.z9b3d8.z33622());}if(z6c7a3)
{this.chessBoard.attachEvent("onDropPiece",this.z348a8,this);this.chessBoard.attachEvent("onClickPiece",this.zd27a7,this);this.chessBoard.attachEvent("onClickArea",this.z1d154,this);this.chessBoard.attachEvent("onPromotionPieceSelected",this.z8145f,this);}this.z3b1cc=null;this.zf0866=false;this.z17d1d=false;this.z299fa='';this.zdacc7=true;if(this.setup["moveListControl"])
this.z9b3d8.show();this.refresh();this.za31e4["diagramHandler"]=this.z4949d();
this.z7a66e=(this.setup.zb4ad2=='chessGame');this.z9b657="#ff9";this.z8bc9d="#ff3";this.za0a15=null;this.zeae2c=null;this.z9b3d8.z912f4=bind(function(){zcf9ce=this;},this);};zba130.prototype={z4949d:function(){return{'showPuzzleHint':bind(this.showPuzzleHint,this),'showPuzzleStart':bind(this.showPuzzleStart,this),'showPuzzleSolution':bind(this.showPuzzleSolution,this),'flipBoard':bind(this.z1b515,this),'changePieceStyle':bind(this.zd05b6,this),'changeColorScheme':bind(this.z6e816,this)
};},zd05b6:function(style){this.chessBoard.z1b466(style);},z6e816:function(scheme){
this.chessBoard.z6609a(scheme);},move:function()
{this.z9b3d8.zb5312('forward1');this.z17d1d=false;},back:function()
{this.z9b3d8.zb5312('backward1');},zd3700:function()
{var template='';var z8fd23=Math.floor(Math.sqrt(this.size)+7)+"px";var z9309f=(this.setup.zb4ad2=='chessGame');var z7aba3=this.size*8;if(z9309f||this.setup.zb4ad2!="simpleDiagram"){if(!this.zc2ba5){z7aba3+=196;}template+='\n <div class="chessDiagram_Main '+this.setup.zb4ad2+'" id="'+this.z6f31e+'" style="font-size: '+z8fd23+'; width: '+z7aba3+'px;">';}else{template+='\n <div class="chessDiagram_Main '+this.setup.zb4ad2+'" id="'+this.z6f31e+'" style="font-size: '+z8fd23+'; '+((this.z85d5d.indexOf("chess_com_dailypuzzle")==-1)?'background: #f3f3f3;':'')+'width: '+z7aba3+'px;">';}
var z0f85a='';var z36982=0;var zdb29d=nvl(this.setup.tags["White"],"");var z21f0f=nvl(this.setup.tags["Black"],"");var z77cd9=this.setup.tags["WhiteElo"];if(z77cd9)
zdb29d+=" ("+z77cd9+")";var z4912c=this.setup.tags["BlackElo"];if(z4912c)
z21f0f+=" ("+z4912c+")";var z203cc='';if(zdb29d||z21f0f)
z203cc+='\n 	<div id="'+this.z98bf5+'" class="chessDiagram_Players">'+zdb29d+((zdb29d&&z21f0f)?" vs. ":"")+z21f0f+'</div>';
var event=nvl(this.setup.tags["Event"],"");var z0ef67=nvl(this.setup.tags["Site"],"");if(event=="?")
event="";if(z0ef67=="?")
z0ef67="";
var round=nvl(this.setup.tags["Round"],"");if(round&&round!="?")
round="Round "+round;else
round="";var date=nvl(this.setup.tags["Date"],"");if(date.length==10)
{var zade09=date.substring(0,4);var z99532=date.substring(5,7);var zed250=date.substring(8,10);date="";if(zade09!="????")
{date=""+(zade09*1);if(z99532!="??")
{var z84c19=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var zaf403=1*z99532-1;if(z84c19[zaf403])
{date=z84c19[zaf403]+" "+date;if(zed250!="??")
date=(zed250*1)+" "+date;}}}}
var zfbca5=nvl(this.setup.tags["ECO"],"");if(zfbca5)
zfbca5="ECO: "+zfbca5;var result=nvl(this.setup.tags["Result"],"");if(result=="*")
result="";
var z70298=false;if(event||z0ef67||round||date|zfbca5||result){z203cc+='<div id="'+this.z12b15+'">';if(event){z203cc+=' '+event+' ';z70298=true;}if(z0ef67){z203cc+=(z70298?'| ':' ')+z0ef67+' ';z70298=true;}if(round){z203cc+=(z70298?'| ':' ')+round+' ';z70298=true;}if(date){z203cc+=(z70298?'| ':' ')+date+' ';z70298=true;}z203cc+='<span id="'+this.z94d90+'">';if(zfbca5){z203cc+=(z70298?'| ':' ')+zfbca5+' ';z70298=true;}if(result){z203cc+=(z70298?'| ':' ')+result;z70298=true;}z203cc+='</span>';z203cc+='</div>';}z203cc=z203cc.replace(/^\s+|\s+$/g,'');
if(z203cc!='')
{z0f85a+='<div id="'+this.z779e2+'" class="chessDiagram_Info">';z0f85a+=z203cc;z0f85a+='</div>';
}
zae145='';if(this.setup.zb4ad2!="simpleDiagram"&&!this.setup["moveListControl"]){zae145+='\n 	<div class="chessDiagram_MoveList" id="'+this.z48f02+'"></div>';if(this.setup.zb4ad2=='chessProblem'){zae145+='<div class="chessDiagram_PuzzleMoveList" id="'+this.z27f2c+'"></div>';}}if(z9309f||this.setup.zb4ad2!="simpleDiagram"){template+=z0f85a;}else{template+=z0f85a+zae145;}var height=ChessPiece3dInfo[this.setup.z70c6b]?(this.size*8+ChessPiece3dInfo[this.setup.z70c6b][this.size]["large"]):(this.size*8);template+='<div class="chessDiagram_ChessBoardContainer" id="'+this.z2cb75+'" style="width: '+(this.size*8)+'px; height: '+height+'px;">';template+='\n 	<div class="chessDiagram_ChessBoard" id="'+this.z24127+'"></div>';template+='</div>';
var z7e9bf='<div class="chessDiagram_puzzleProgressInfo"><div id="'+this.zac67e+'"></div></div>';var zb1055='';if(z9309f||this.setup.zb4ad2!="simpleDiagram"){zb1055+='<div class="boxes-container" style="height: '+(this.zc2ba5?80:height)+'px;">';zb1055+=zae145;if(!z9309f&&!this.zc2ba5)
{zb1055+=z7e9bf;}zb1055+='</div>';}
var z2a122='\n <div id="'+this.z5dfc6+'" class="chessDiagram_ButtonsBar" style="'+(this.setup.zb4ad2=='simpleDiagram'?'display: none;':'')+'">';
z2a122+='\n <div id="'+this.z7e2d5+'" class="chessDiagram_Actions" style="width: '+(this.zc2ba5?'auto':this.size*8-10)+'px;">';z2a122+='<div id="'+this.z83b40+'" style="'+((this.setup.zb4ad2!="chessProblem"||this.zf0866)&&!this.zc2ba5?'':'display: none')+'">';z2a122+='<a href="'+Config.z688eb+'/analysis-board-editor?diagram_id='+this.zd6612+'" target="_blank">–</a>';z2a122+='<a id="'+this.z69694+'" href="#">X</a>';z2a122+='</div>';if(!this.zc2ba5){z2a122+='<a href="#" onClick="javascript:return false;" onMouseUp="javascript:document.getElementById(\''+this.z85d5d+'\').diagramHandler.flipBoard(); return false;" style="float: right; margin-right: 13px; font-size: 30px;">f</a>';}if(this.setup.zb4ad2=="chessProblem")
{z2a122+='<div id="'+this.z29754+'" style="'+(this.zf0866?'display: none':'')+'">';z2a122+='<a href="#" onClick="javascript:return false;" onMouseUp="javascript:document.getElementById(\''+this.z85d5d+'\').diagramHandler.showPuzzleHint(); return false;" style="font-size: 32px; line-height: 18px;">g</a>';z2a122+='<a href="#" onClick="javascript:return false;" onMouseUp="javascript:document.getElementById(\''+this.z85d5d+'\').diagramHandler.showPuzzleStart(); return false;" style="font-size: 27px;">:</a>';z2a122+='<a href="#" onClick="javascript:return false;" onMouseUp="javascript:document.getElementById(\''+this.z85d5d+'\').diagramHandler.showPuzzleSolution(); return false;" style="font-size: 27px;">(</a>';z2a122+='</div>';}z2a122+='\n </div>';

z2a122+='\n <div id="'+this.zaf7c7+'" class="chessDiagram_Navigate" style="'+((this.setup.zb4ad2=="chessGame"||this.zf0866)?'':'display: none')+'">';z2a122+='<a id="'+this.zff763+'" href="#" onClick="javascript:return false;" style="font-size: 22px;">J</a>';z2a122+='<a id="'+this.z20020+'" href="#" onClick="javascript:return false;" style="font-size: 22px; '+(this.zc2ba5&&this.setup.zb4ad2=='chessProblem'?'display: none;':'')+'">#</a>';z2a122+='<a id="'+this.z0ef71+'" href="#" onClick="javascript:return false;" style="font-size: 22px;">,</a>';z2a122+='<a id="'+this.z977df+'" href="#" onClick="javascript:return false;" style="font-size: 22px;">.</a>';z2a122+='<a id="'+this.z87f16+'" href="#" onClick="javascript:return false;" style="font-size: 22px; '+(this.zc2ba5&&this.setup.zb4ad2=='chessProblem'?'display: none;':'')+'">@</a>';z2a122+='</div>';
if(!z9309f&&this.zc2ba5)
{z2a122+=z7e9bf;}z2a122+='\n </div>';
if(this.zc2ba5){template+=z2a122+zb1055;}else{template+=zb1055+z2a122;}if(!this.setup["commentBox"]||z9309f){if(!z9309f){if(this.setup.zb4ad2=='simpleDiagram'){template+='\n 	<div class="chessDiagram_Comment" id="'+this.zd3182+'">';template+='\n 	<div id="'+this.z35a65+'" style=""></div>';template+='\n 	</div>';}}else{
template+='</div>';}}template+='\n </div>';insertContentAt(this.za31e4,template,"top");var z222be=this.setup.z222be;if(z222be=="center")
z222be="none";this.za31e4.style.cssFloat=z222be;this.za31e4.style.styleFloat=z222be;if(this.z85d5d.indexOf("chess_com_dailypuzzle")!=-1){this.za31e4.style.margin=this.setup.z222be=='center'?'0px auto 0px':'0px 15px 0px';}else{this.za31e4.style.margin=this.setup.z222be=='center'?'0px auto 15px':'0px 0px 15px';}
myEvent.registerRelated(this.z0ef71,this.z48f02);myEvent.registerRelated(this.z977df,this.z48f02);myEvent.registerRelated(this.z20020,this.z48f02);myEvent.registerRelated(this.z87f16,this.z48f02);myEvent.registerRelated(this.zff763,this.z48f02);this.z9b3d8.z4afcf=this.zff763;myEvent.observe(document.getElementById(this.z0ef71),'mousedown',z36b44.z1637d);myEvent.observe(document.getElementById(this.z977df),'mousedown',z36b44.z71cc6);myEvent.observe(document.getElementById(this.z20020),'click',z36b44.z08f7c);myEvent.observe(document.getElementById(this.z87f16),'click',z36b44.z53942);myEvent.observe(document.getElementById(this.zff763),'click',z36b44.z44277);},z1b515:function(){this.chessBoard.z24848(!this.chessBoard.z02e31);},z2d27f:function(e){var zfb82d=this.chessBoard;var z00704=zfb82d.z9b3d8.zdf569.z2e5e5[zfb82d.z9b3d8.z3ac0a];var z80123="";if(z00704.z80123)
z80123+=z00704.z80123;var z1f9e1=zfb82d.z9b3d8.zdf569.z193c4?zfb82d.z9b3d8.z3ac0a%2==0:zfb82d.z9b3d8.z3ac0a%2==1;if(z00704.z03a92&&this.zdacc7)
{this.z299fa+="<span>";var ze4630=zfb82d.z9b3d8.z193c4?zfb82d.z9b3d8.zdf569.z8ec4b+Math.floor((zfb82d.z9b3d8.z3ac0a)/2):zfb82d.z9b3d8.zdf569.z8ec4b+Math.floor((zfb82d.z9b3d8.z3ac0a-1)/2);if(z1f9e1){this.z299fa+=ze4630+". ";}else if(zfb82d.z9b3d8.z3ac0a==1){this.z299fa+=ze4630+"... ";}this.z299fa+=z00704.z03a92;if(z00704.zf98c9>0)
this.z299fa+=z3717b(z00704.zf98c9);this.z299fa+="</span>";}if(!this.setup["commentBox"]&&this.setup.zb4ad2!="chessGame"&&this.setup.zb4ad2!="chessProblem"){if(this.setup.zb4ad2!='chessGame')
document.getElementById(this.zd3182).style.display='none';if(document.getElementById(this.z35a65).innerHTML=z80123)
if(this.setup.zb4ad2=="simpleDiagram"
||this.setup.zb4ad2=="chessGame"
||this.zf0866)
{document.getElementById(this.zd3182).style.display='block';}}if(this.setup.zb4ad2=="chessProblem")
{document.getElementById(this.z27f2c).innerHTML=this.z299fa;var z79011=document.getElementById(this.zac67e);if(this.zf0866&&this.z9b3d8.z3ac0a==this.z9b3d8.z2e5e5.length-1)
{z79011.innerHTML='Solved!';z79011.className='success';}else
{z79011.innerHTML=(z1f9e1?"Black to Move":"White to Move");z79011.className=(z1f9e1?"blackToMove":"whiteToMove");}}
},z65158:function(e)
{var za7157=this.chessBoard.z9b3d8.zd82a4.pop();this.chessBoard.refresh(za7157);},refresh:function(e)
{this.chessBoard.refresh();if(this.setup.zb4ad2!="simpleDiagram"){var z3615d=false;var ze4596=false;var zfcf85=false;var z17070=false;zfcf85=z17070=((this.setup.zb4ad2=="chessGame"||this.zf0866)
&&(this.z9b3d8.z2e5e5.length>1));z3615d=(this.setup.zb4ad2!="chessProblem"||this.zf0866)&&!this.zc2ba5&&!this.setup.zf04fb;ze4596=(this.setup.zb4ad2=="chessProblem"&&!this.zf0866);if(this.z9b3d8.z2e5e5.length<2)
z17070=false;if(this.setup.zb4ad2=="chessProblem")
{document.getElementById(this.z83b40).style.display='none';document.getElementById(this.z29754).style.display='none';document.getElementById(this.zaf7c7).style.display='none';if(z3615d)document.getElementById(this.z83b40).style.display='block';if(ze4596)document.getElementById(this.z29754).style.display='block';if(zfcf85)document.getElementById(this.zaf7c7).style.display='block';}else if(!z3615d)
{document.getElementById(this.z83b40).style.display='none';}}var z9309f=(this.setup.zb4ad2=='chessGame');if(this.setup.zb4ad2=='simpleDiagram'){this.za31e4.style.height='auto';}else{this.za31e4.style.height='auto';if(document.getElementById(this.zd3182)&&!this.zc8cbd(this.z9b3d8)){document.getElementById(this.zd3182).style.display='none';}}},zc8cbd:function(obj){for(var n=0;n<obj.z2e5e5.length;n++){if(obj.z2e5e5[n].z80123)
return true;if(obj.z2e5e5[n].z4549b){for(var a=0;a<obj.z2e5e5[n].z4549b.length;a++){if(this.zc8cbd(obj.z2e5e5[n].z4549b[a]))
return true;}}}return false;},za1c34:function(z3d228)
{new Form.Element.EventObserver(document.getElementById(z3d228),this.z0bd82).parent=this;},zdba53:function(element,callback)
{new Form.Element.EventObserver(document.getElementById(element),callback).parent=this;},z8769b:function(z28335,callback)
{document.getElementById(z28335).parent=this;Event.observe(document.getElementById(z28335),"click",callback,false);},ze519b:function()
{this.chessBoard.z6609a(this.setup.zba7a5);this.chessBoard.z1b466(this.setup.z70c6b);this.chessBoard.z222be=this.setup.z222be;this.chessBoard.z24848(this.setup.z02e31);this.chessBoard.zbf689(this.setup.z6a56d);},z348a8:function(e)
{var zdbb15=e["fromAreaId"];var zcc2ef=e["targetAreaId"];var z70602=this.chessBoard.z7834f.areas[zdbb15].zad85d[0];this.z21841();this.z71cab=null;if(this.setup.zb4ad2=="chessProblem")
{if(this.zf0866)
return;if(this.z17d1d)
return;if(this.chessBoard.z9b3d8.z2e5e5.length==this.chessBoard.z9b3d8.z3ac0a+1)
return;if(!this.chessBoard.z074d9)
return;this.zcd559.zea856(false);var zf8bdb=this.zcd559.z31a2a(z70602,zcc2ef,this.chessBoard.z7834f);var z49dd9=(zf8bdb)?true:false;if(z49dd9)
{if(zf8bdb.z4e2bd)
this.chessBoard.zae48c(zdbb15,zcc2ef);else
this.zf5466(zdbb15,zcc2ef);}else
{this.zdacc7=false;this.refresh();}}},zd27a7:function(e)
{if(this.z71cab)
{this.z348a8({"fromAreaId":this.z71cab,"targetAreaId":e["dropTargetId"]});return;}var zdbb15=e["dropTargetId"];if(this.chessBoard.zf0e0e)
{this.z21841();this.chessBoard.z02ba7(zdbb15,this.chessBoard.zf0e0e);this.z71cab=zdbb15;}},z1d154:function(e)
{if(!this.z71cab)
return;this.chessBoard.z5dfbd=true;this.z348a8({"fromAreaId":this.z71cab,"targetAreaId":e["dropTargetId"]});},z21841:function()
{if(this.z71cab)
{this.chessBoard.z7690c(this.z71cab);}},z8145f:function(e)
{this.zf5466(this.chessBoard.zfed09.z7c0b1,this.chessBoard.zfed09.z80882,e["pieceType"]);},zf5466:function(zdbb15,z098d0,z2ba00)
{var z70602=this.chessBoard.z7834f.areas[zdbb15].zad85d[0];this.zcd559.zf5466(z70602,z098d0,this.chessBoard.z7834f,z2ba00,false,null);this.z9b3d8.z77fdf(this.z9b3d8.z3ac0a+1);var zd1deb=zbb170(this.chessBoard.z7834f,this.zcd559);this.zdacc7=(zd1deb==this.z9b3d8.z2e5e5[this.z9b3d8.z3ac0a].zd1deb);this.refresh();if(this.zdacc7)
{this.z17d1d=true;if(this.z9b3d8.z3ac0a+1<this.z9b3d8.z2e5e5.length-1)
{var z79011=document.getElementById(this.zac67e);z79011.innerHTML='Correct!';z79011.className='success';if(this.z52c71)
clearTimeout(this.z52c71);this.z52c71=setTimeout('document.getElementById("'+this.z85d5d+'").viewer.move();',1000);}else
{if(this.z52c71)
clearTimeout(this.z52c71);this.zf0866=true;this.refresh();var z79011=document.getElementById(this.zac67e);z79011.innerHTML='Solved!';z79011.className='success';document.getElementById(this.z27f2c).style.display='none';this.z9b3d8.show();}}else
{this.z9b3d8.z77fdf(this.z9b3d8.z3ac0a-1);z9689c(this.chessBoard.z7834f,this.z9b3d8.z33622());this.refresh();var z79011=document.getElementById(this.zac67e);z79011.innerHTML='Incorrect';z79011.className='failure';if(this.z52c71)
clearTimeout(this.z52c71);this.z52c71=setTimeout('document.getElementById("'+this.z85d5d+'").viewer.refresh();',2000);}},showPuzzleHint:function()
{if(this.z17d1d)
return;this.move();if(this.z9b3d8.z2e5e5.length>this.z9b3d8.z3ac0a+1)
{this.z17d1d=true;this.zdacc7=true;if(this.z52c71)
clearTimeout(this.z52c71);this.z52c71=setTimeout('document.getElementById("'+this.z85d5d+'").viewer.move();',1000);}else
{this.showPuzzleSolution();}},showPuzzleStart:function()
{if(this.z17d1d)
return;this.z299fa='';this.z9b3d8.zb5312("backwardBegin");this.refresh();},showPuzzleSolution:function()
{if(this.z17d1d)
return;this.zf0866=true;document.getElementById(this.z27f2c).style.display='none';this.z9b3d8.show();this.refresh();}};var zc623a=function(e){if(!e)
e=window.event;
var target=e.target?e.target:e.srcElement;if(target.nodeType==3)
target=target.parentNode;if(target.nodeName.toLowerCase()!='input'&&target.type!="text"&&target.nodeName.toLowerCase()!='textarea'){if(zcf9ce&&(zcf9ce.setup.zb4ad2=="chessGame"||zcf9ce.zf0866))
{if(e.keyCode==39){
zcf9ce.z9b3d8.zb5312('forward1');}else
if(e.keyCode==37){
zcf9ce.z9b3d8.zb5312('backward1');}}}};myEvent.observe(document,'keyup',zc623a);})();window['fillChessDiagramDivs']=function(){var za6476=document.getElementsByClassName("chessDiagramDiv");var z13560=document.getElementsByClassName("dailyPuzzleDiv");var z47c36=function(n){new zba130(this[n]);this[n].style.padding='0';};for(var n=0;n<za6476.length;n++){if(!za6476[n].z975c1)
setTimeout(bind(z47c36,za6476,n),1);}for(var n=0;n<z13560.length;n++){if(!z13560[n].z975c1)
setTimeout(bind(z47c36,z13560,n),1);}};window['fillChessDiagramDivs']();
