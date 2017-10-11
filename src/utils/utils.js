window._={};
Object.assign(_,{
  // storage localStorage
  setLocalStorage: (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
  },
  //get localStorage
  getLocalStorage : name => {
    if (!name) return;
    return window.localStorage.getItem(name);
  },
  //delete localStorage
  removeLocalStorage : name => {
    if (!name) return;
    window.localStorage.removeItem(name);
  },
  //storage sessionStorage
  setSessionStorage : (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    window.sessionStorage.setItem(name, content);
  },
  //get sessionStorage
  getSessionStorage : name => {
    if (!name) return;
    return window.sessionStorage.getItem(name);
  },
  //delete sessionStorage
  removeSessionStorage : name => {
    if (!name) return;
    window.sessionStorage.removeItem(name);
  },
  setStore : (name, content)=>{
    return _.setSessionStorage(name, content)
  },
  getStore : (name)=>{
    var val=_.getSessionStorage(name);
    if(_.IsJsonString(val)){
      return JSON.parse(val)
    }
    return val
  },
  removeStore : (name)=>{
    return _.removeSessionStorage(name)
  },
  //判断是不是json字符串
  IsJsonString:(str)=> {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  },
  //判断浏览器是否为IE11
  isIE:()=>{
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
      return "IE";
    }
    return false;
  },
  //cookies handler
  cookie: {
    set: function (name, value, days) {
      var d = new Date;
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
      window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
    },
    get: function (name) {
      var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      return v ? v[2] : null;
    },
    delete: function (name) {
      this.set(name, '', -1);
    }
  }
});



