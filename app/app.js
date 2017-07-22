(function (angular) {
  "use strict";

  // start your ride
  angular
    .module('moviecat', [
      'ngRoute',
      'moviecat.jsonp',
      'moviecat.in_theaters',
      'moviecat.coming_soon',
      'moviecat.top250'
    ]);

})(angular);