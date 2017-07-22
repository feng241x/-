(function(angular){
  'use strict'
  angular
    .module('moviecat.in_theaters',[])
    .config(['$routeProvider',function($routeProvider){
      $routeProvider
        .when('/in_theaters',{
          templateUrl:'./in_theaters/view.html',
          controller:'in_Controller'
        })
    }])
    .controller('in_Controller',['$scope','jsonpSrv',function($scope,jsonpSrv){
      var url = 'https://api.douban.com/v2/movie/in_theaters';
      jsonpSrv.jsonp(url,{},function(data){
        console.log(data);
        $scope.data = data;
        // 非angular自身的代码 不会触发脏值检查机制 需要手动调用 $apply() 方法 手动触发脏值检查机制
        $scope.$apply();
      })
      
    }])
})(angular)