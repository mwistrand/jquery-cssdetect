/**
 * A Zepto-compatible jQuery function that determines
 * whether a certain CSS property is supported. The following
 * vendor prefixes are included: -ms, -o, -webkit, -moz
 *
 * `$.cssDetect('transform'); // returns true or false`
 */
(function($) {
  'use strict';

  $.cssDetect = (function() {
    var memo = {},
      vendors = 'ms,o,moz,webkit'.split(',');

    return function(prop) {
      var supported = false,
        style = document.createElement('div').style,
        i = vendors.length - 1,
        suffix;

      if (memo[prop]) {
        return memo[prop];
      } else if (prop in style) {
        memo[prop] = true;
        return true;
      }

      suffix = prop.charAt(0).toUpperCase() + prop.slice(1);

      while (i >= 0) {

        if ((vendors[i] + suffix) in style) {
          supported = true;
          break;
        }
        
        i -= 1;
      }

      memo[prop] = supported;

      return supported;
    };
  })();
})(window.Zepto || window.jQuery);