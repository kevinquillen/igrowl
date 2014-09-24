(function ($) {
  // add a custom ajax command to spawn an iGrowl alert.
  Drupal.ajax = Drupal.ajax || {};
  Drupal.ajax.prototype.commands = Drupal.ajax.prototype.commands || {};

  Drupal.ajax.prototype.commands.igrowl = function (ajax, response, status) {
    $.iGrowl(response.options);
  }
})(jQuery);