(function(angular){
  angular
    .module('myJson',[])
    .controller('',['jsonp',function(jsonp){
      function jsonp(url,params,callback){
        url += '?';
        for(var k in params){
          url += k + '=' + params[k] + '&';
        }
        // 随机生成全局函数的名字
        var callbackName = 'itcast_' + (new Date - 0);
        url += 'callback=' + callbackName;
        // 在函数中给window添加一个属性 来创建一个全局函数
        window[callbackName] = function(data){
          // console.log(data);
          callback(data);
          // 删除 script 标签
          documen.head.removeChild(script);
          // 删除全局函数
          delete window[callbackName];
        };
        // 动态创建 script 标签
        var script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
      }

      jsonp('https://ch.jd.com/homecate2',{
        source:'pc',
        _: 1500541730218
      },function(data){
        
      })
    }])
})(angular)