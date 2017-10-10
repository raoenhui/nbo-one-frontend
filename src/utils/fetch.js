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
    fetch(url, requestConfig)
      .then(response => {
        return response.json()
      })
      .then(data => {
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
