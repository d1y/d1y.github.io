(function () {
  function 请求(){
    var xhr = new XMLHttpRequest()
    xhr.open('GET',arguments[0].url)
    xhr.onreadystatechange = function(data){
      if(this.status == 200 && this.readyState == 2){
        console.log(data);
      }
    }
    xhr.send()
  }
  function 新建(){
    var arg = arguments[0]
    if (typeof arg == 'string'){
      var a = document.createElement(arg)
    }else ()
  }
  window.妹子 = function(){
    请求({
      url: 'user.json'
    })
  }
})()
