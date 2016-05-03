/*!
 * Angular FileManager v1.4.0 (https://github.com/joni2back/angular-filemanager)
 * Jonas Sciangula Street <joni2back@gmail.com>
 * Licensed under MIT (https://github.com/joni2back/angular-filemanager/blob/master/LICENSE)
 */

(function(window, angular, $) {
    "use strict";
    var app = angular.module('FileManagerApp', ['pascalprecht.translate', 'ngCookies', 'ngFileUpload', 'AgavePlatformScienceAPILib']);

    /**
     * jQuery inits
     */
    $(window.document).on('shown.bs.modal', '.modal', function() {
        setTimeout(function() {
            $('[autofocus]', this).focus();
        }.bind(this), 100);
    });

    $(window.document).on('click', function() {
        $("#context-menu").hide();
    });

    $(window.document).on('contextmenu', '.main-navigation .table-files td:first-child, .iconset a.thumbnail', function(e) {
        var clickPosition = $(this).position();
        console.log("right click context menu at: " + clickPosition.x + ',' + clickPosition.y);
        $("#context-menu").hide().css({
            left: clickPosition.left, //.pageX,
            top: clickPosition.top + 20 //.pageY
        }).show();
        e.preventDefault();
    });

})(window, angular, jQuery);
