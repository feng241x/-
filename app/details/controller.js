(function (angular) {
  'use strict'
  angular
    .module('moviecat.details', [])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/details/:id?', {
          templateUrl: './details/view.html',
          controller: 'detailsController'
        })
    }])
    .controller('detailsController', ['$scope', '$routeParams', '$route', 'jsonpSrv', function ($scope, $routeParams, $route, jsonpSrv) {
      
      var url = 'https://api.douban.com/v2/movie/subject/' + $routeParams.id;
      jsonpSrv.jsonp(url, {}, function (data) {
        console.log(data);
        $scope.data = data;
        // 非angular自身的代码 不会触发脏值检查机制 需要手动调用 $apply() 方法 手动触发脏值检查机制
        $scope.$apply();
      })

    }])
})(angular)