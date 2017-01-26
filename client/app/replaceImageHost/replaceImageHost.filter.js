'use strict';

angular.module('mgbrowebApp')
    .filter('replaceImageHost', function() {
        // return function(str) {
        //     if (!str) {
        //         return str;
        //     }
        //     var find = '217.23.15.230';
        //     var re = new RegExp(find, 'g');
        //     str = str.replace(re, 'i3mangaxyz.azureedge.net');
        //     return str;
        // };
        return function(str){
            return str;
        }
    });