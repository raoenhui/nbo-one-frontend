
function getHtml(){
  var html = '<div id="loading"><div id="loading-center"><div id="loading-center-absolute">' +
    '<div class="object"></div><div class="object"></div><div class="object"></div>' +
    '<div class="object"></div><div class="object"></div><div class="object"></div>' +
    '<div class="object"></div><div class="object"></div><div class="object"></div>' +
    '<div class="object"></div></div></div></div>';
  return html;
}
function closeLoading() {
  var el = document.getElementById('newLoadDiv');
  if (document.readyState == 'complete' && el) {   //当页面加载状态
    // document.getElementById("newDiv").remove();
    el.parentNode.removeChild(el);
  }
}

function NewLoading() {
// debugger;
  var el = document.getElementById('newLoadDiv');
  if(el){
    el.parentNode.removeChild(el);
  }
  var html = getHtml();
  var newnode = document.createElement("div");
  newnode.setAttribute("id", "newLoadDiv");
  newnode.innerHTML = html;
  var modelLoading = document.body;
  modelLoading.appendChild(newnode);

  // document.onreadystatechange = closeLoading;//当页面加载状态改变的时候执行这个方法.
}

const Fetch = function (url = '', fetchData = {}, type = 'GET') {
  type = type.toUpperCase();
  let requestConfig = {
    credentials: 'include',
    method: type,
    mode: "cors",
    cache: "no-cache"
  }

  let dataStr = ''; //数据拼接字符串
  Object.keys(fetchData).forEach(key => {
    dataStr += key + '=' + fetchData[key] + '&';
  })
  dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));

  if (['GET'].includes(type)) {
    if (dataStr !== '') {
      url = url + '?' + dataStr;
    }
  } else if (['POST'].includes(type)) {
    requestConfig.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    Object.defineProperty(requestConfig, 'body', {
      value: JSON.stringify(fetchData)
    })

  }
  else if (['PUT', 'DELETE'].includes(type)) {
    requestConfig.headers = {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}
    Object.defineProperty(requestConfig, 'body', {
      value: dataStr
    })
  } else if (type == 'UPLOAD') {
    Object.defineProperty(requestConfig, 'body', {
      value: fetchData
    });
    requestConfig.method = 'POST';
  }


  const defer = new Promise((resolve, reject) => {
    NewLoading();
    fetch(url, requestConfig)
      .then(response => {
        return response.json()
      })
      .then(data => {
        closeLoading();
        if (data.status !== 200) {
          toastr.error(data.message);
          toastr.error(data.message);
          reject(data)
        }
        resolve(data.body) //返回成功数据
      })
      .catch(error => {
        //捕获异常
        toastr.error(error)
        reject()
      })
  })

  return defer
}
export default Fetch
