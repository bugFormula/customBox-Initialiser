/*Settings Modal Dialogs*/
jQuery(function () {
    'use_strict';
    jQuery('.settings_modal').unbind('click').click(function ( e ) { //unbind any click event handlers before applying the 'click' handler again.
        Custombox.open({
            id: jQuery(this).attr('data-id'),           //  This is probably not needed.
            target: jQuery(this).attr('href'),          //  The url of the 'a href'.
            esckey: true,                               //  Escape key closes modal (optional).
            effect: 'flip',                             //  Bells and whistles (note: adding effects disables the use of data attributes, so css widths added as fallback).
            //position: 'center, top',                  //  Not needed as modal positioning controlled by CSS for overlapping.
            speed: 300,                                 //  effect milliseconds.
            width: jQuery(this).attr('data-width'),     //  Get width from data-width attribute on <a href>.         
            overlay: true,                              //  Use overlay (good for making the user focus on popup).
            overlayClose: true,                         //  Close the modal by clicking the overlay.
            overlayColor: '#162230',                    //  Overlay colour.
            overlayOpacity: 0.6,                        //  Opacity...
            complete: function () {                     //  Callback function (not used...yet)
                // Do something...                      //
            }                                           //
        });                                             //
        console.log(e);                                 //  Handy for working out bugs and wiered stuff (comment out/delete) when merged
        e.stopImmediatePropagation();                   //  Prevents event handler duplication!
        e.preventDefault();                             //  Prevent hyperlink following default path
    });
});