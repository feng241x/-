(function (angular) {
  "use strict";

  // start your ride
  angular
    .module('moviecat', [
      'ngRoute',
      'moviecat.jsonp',
      'moviecat.details',
      'moviecat.movielist',
      'moviecat.search'
    ]);

})(angular);