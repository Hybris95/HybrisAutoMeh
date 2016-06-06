/** GNU GPLv3 Licensing :
Christian BUISSON French Developper contact by electronic mail: hybris_95@hotmail.com
Copyright © 2014 Christian BUISSON

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 3 of the License, or
    (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    
    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software Foundation,
    Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301  USA
*/

/** USAGE :
Firefox:
Add the following line as a bookmark :
javascript:(function(){$.getScript('https://raw.githubusercontent.com/Hybris95/HybrisAutoMeh/master/hybrisAutoMeh.js');}());
Chrome:
Add the following line as a bookmark :
javascript:(function(){$.getScript('https://rawgit.com/Hybris95/HybrisAutoMeh/master/hybrisAutoMeh.js');}());
 ** Usage Method :
 ** copy/paste the entire script into the Firefox/Chrome Console (Ctrl+Shift+C Shortcut)
 ** For Firefox users (if you want notice sound) :
 ** about:config -> security.mixed_content.block_active_content = false
*/

/**
 * Global Vars
 */
var debug = false;

/**
 * Main functions
 */
function meh() {// TODO - Fix the fact that it doesnt meh correctly after changing room (random bug)
    if(document.getElementById('meh') && API.enabled){
        $("#meh").click();
    }else{
        window.setTimeout(meh, 200);
    }
}

/**
 * ADVANCE EVENT :
 * AutoMeh
 */
var advanceEventHookedOnApi;
var advanceFunction;
if(advanceFunction && advanceEventHookedOnApi){
    API.off(API.ADVANCE, advanceFunction);
    advanceEventHookedOnApi = false;
}
advanceFunction = function(data) {
    if(debug){console.log("Advance event");console.log(data);}
    meh();
};
if(!advanceEventHookedOnApi){
    API.on(API.ADVANCE, advanceFunction);
    advanceEventHookedOnApi = true;
}
