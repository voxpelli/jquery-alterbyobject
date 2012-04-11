/*jslint browser: true, maxerr: 50, indent: 2 */
/*global jQuery: false */
(function ($) {
  "use strict";

  var processTarget = function (target) {
    var i, length, data, $target;
    for (i = 0, length = target.length; i < length; i++) {
      data = target[i];
      $target = this.find(data.selector);
      if (data.has) {
        $target = $target.has(data.has);
      }
      if (data.addClass) {
        $target.addClass(data.addClass);
      }
      if (data.removeClass) {
        $target.removeClass(data.removeClass);
      }
      if (data.content) {
        $target.replaceWith(data.content);
      }
      if (data.text) {
        $target.text(data.text);
      }
      if (data.attr) {
        $target.attr(data.attr);
      }
      if (data.targets) {
        processTarget.call($target, data.targets);
      }
    }
  };

  $.fn.alterByObject = function (targets) {
    return this.each(function () {
      processTarget.call($(this), targets);
    });
  };
}(jQuery));
