(function(angular){
  angular
    .module('moviecat.menuActive',[])
    .directive('menuActive',['$location',function($location){
      return {
        templateUrl:'./common/directives/view.html',
        link: function(scope,element,attribute){
          scope.location = $location;
          scope.$watch('location.url()',function(newVal){
            var lis = element.find('li');
            for(var i=0;i<lis.length;i++){
              var curLi = lis.eq(i);
              var href = curLi.children('a').attr('href').substr(1);
              if(newVal.startsWith(href)){
                curLi.parent().children().removeClass('active');
                curLi.addClass('active');
              }
            }
          })
        }
      }
    }])
})(angular)