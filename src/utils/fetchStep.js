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
  } else if (['POST', 'PUT', 'DELETE'].includes(type)) {
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
        /*   if (response.status === 200) {
         return response.json()
         } else {
         let responseData = response.json();
         responseData.errorCode = response.status;
         return responseData
         }*/
        return response.json()
      })
      .then(data => {
        if (data.error) {
          toastr.error(data.error)
          reject(data)
        }
        if (data.code !== "SUCCESS") {
          toastr.error(data.message)
          reject(data)
        }
        resolve(data) //返回成功数据
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
