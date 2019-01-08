(function () {
  function 请求(type, url, success, failed) {
    var xhr = null, arg = arguments[0];
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    arg['type'] = arg['type'].toUpperCase();
    xhr.open(arg['type'],arg['url']);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          arg['success'](JSON.parse(xhr.responseText));
        } else {
          if (arg['failed']) {
            arg['failed'](xhr.status);
          }
        }
      }
    }
    xhr.send();
  }
  var class2type = {} ;
  "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(e,i){
    class2type[ "[object " + e + "]" ] = e.toLowerCase();
  }) ;
  function _typeof(obj){
    if ( obj == null ){
        return String( obj );
    }
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[ class2type.toString.call(obj) ] || "object" :
        typeof obj;
  }
  function 新建(){
    var arg = arguments[0],a
    if (_typeof(arg) == 'string'){
      a = document.createElement(arg)
    }else if (_typeof(arg) == 'object') {
      a = document.createElement(arg['wrap'])
      if (arg['_html']){
        a.innerHTML = arg['_html']
      }
      if (arg['_src']){
        a.src = arg['_src']
      }
      if (arg['_href']){
        a.href = arg['_href']
      }
    }
    return a
  }
  function append(before,after) {
    after.appendChild(before)
  }
  window.妹子 = function(){
    root = document.querySelector(arguments[0]['容器'])
    请求({
      type: 'get',
      url: 'https://api.github.com/users/'+arguments[0]['你'],
      success: function (data) {
        append(新建({
          wrap: 'img',
          '_src': 'https://avatars2.githubusercontent.com/u/'+data['id']+'?s=200&v=4'
        }),root)
        append(新建({
          wrap: 'p',
          '_html': '<a href="'+data['html_url']+'">'+data['name']+'</a>'
        }),root)
        append(新建({
          wrap: 'p',
          '_html': '🗣<i>'+data['location']+'</i>'
        }),root)
        append(新建({
          wrap: 'blockquote',
          '_html': '<p>'+data['bio']+'</p>👾 Create date: '+data['created_at'].substr(0,10)+' ✨ Followers: '+data["followers"]+ ' 🌠 Following: ' +data["following"]
        }),root)
        if (data['blog'].indexOf('http://') || data['blog'].indexOf('https://')){
          if (data['blog'].charAt(4) == ':') {
            append(新建({
              wrap: 'a',
              '_href': data['blog'],
              '_html': 'My blog ⌘=> '+ data['blog'].slice(7)
            }),root)
          }else if (data['blog'].charAt == 's') {
            append(新建({
              wrap: 'a',
              '_href': data['blog'],
              '_html': 'My blog ⌘=> '+ data['blog'].slice(8)
            }),root)
          }
        }
        if (data['颜色']) {
          append(新建({
            wrap: 'img',
            '_src': 'https://ghchart.rshah.org/'+data['颜色'].substr(1)+arguments[0]['你']
          }))
        }else if (data['颜色']) {
          append(新建({
            wrap: 'img',
            '_src': 'https://ghchart.rshah.org/'+arguments[0]['你']
          }))
        }
      }
    })
    请求({
      type: 'get',
      url: 'https://api.github.com/users/'+arguments[0]['你']+'/repos',
      success: function (data) {
        append(新建({
          wrap: 'h2',
          '_html': 'My Projects 👓'
        }),root)
        repos = 新建({
          wrap: 'ul'
        })
        data.forEach(function(item){
          append(新建({
            wrap: 'li',
            '_html': '<a href="'+item['html_url']+'">'+item['full_name']+'</a> - '+item['description']
          }),repos)
        })
        append(repos,root)
      }
    })
    请求({
      type: 'get',
      url: 'https://api.github.com/users/'+arguments[0]['你']+'/starred',
      success: function (data) {
        append(新建({
          wrap: 'h2',
          '_html': 'My starred 💖'
        }),root)
        starred = 新建({
          wrap: 'ul'
        })
        data.forEach(function(item){
          append(新建({
            wrap: 'li',
            '_html': '<a href="'+item['html_url']+'">'+item['full_name']+'</a> - '+item['description']
          }),starred)
        })
        append(starred,root)
      }
    })
  }
})()
