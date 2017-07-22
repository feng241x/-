(function (angular) {
  "use strict";

  // start your ride
  angular
    .module('moviecat', [
      'ngRoute',
      'moviecat.jsonp',
      'moviecat.details',
      'moviecat.home_page',
      'moviecat.movielist',
      'moviecat.search',
      'moviecat.menuActive'
    ]);

})(angular);