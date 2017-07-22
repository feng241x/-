(function (angular) {
  'use strict'
  angular
    .module('moviecat.in_theaters', [])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/in_theaters/:curPage?', {
          templateUrl: './in_theaters/view.html',
          controller: 'in_Controller'
        })
    }])
    .controller('in_Controller', ['$scope', '$routeParams', '$route', 'jsonpSrv', function ($scope, $routeParams, $route, jsonpSrv) {
      // 实现分页功能
      var PAGESIZE = 5,
        page = 0; //当前页
      page = $routeParams.curPage || 1;
      $scope.page = page;
      var paramObj = {
        start: (page - 1) * PAGESIZE,
        count: PAGESIZE
      }
      $scope.goPage = function (page) {
        if (page < 1 || page > $scope.MaxPage) {
          console.log(123);
          return;
        }
        console.log(page);
        $route.updateParams({ curPage: page })
      }
      // 当前页开始索引 = (当前页 - 1) * 每页数量
      // start = (page - 1) * PAGESIZE

      var url = 'https://api.douban.com/v2/movie/in_theaters';
      jsonpSrv.jsonp(url, paramObj, function (data) {
        console.log(data);
        $scope.data = data;
        $scope.MaxPage = Math.ceil(data.total / PAGESIZE)
        // 非angular自身的代码 不会触发脏值检查机制 需要手动调用 $apply() 方法 手动触发脏值检查机制
        $scope.$apply();
      })

    }])
})(angular)