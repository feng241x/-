(function (angular) {
  "use strict";

  // start your ride
  angular
    .module('moviecat', [
      'ngRoute',
      'moviecat.jsonp',
      'moviecat.movielist'
    ]);

})(angular);