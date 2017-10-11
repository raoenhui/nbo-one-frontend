/**
 * storage localStorage
 */
export const setLocalStorage = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * get localStorage
 */
export const getLocalStorage = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

/**
 * delete localStorage
 */
export const removeLocalStorage = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

/**
 * storage sessionStorage
 */
export const setSessionStorage = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
};

/**
 * get sessionStorage
 */
export const getSessionStorage = name => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
};

/**
 * delete sessionStorage
 */
export const removeSessionStorage = name => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
};

/***
 * 判断浏览器是否为IE11
 * @returns {string}
 * @constructor
 */
export function Browser() {
  if (!!window.ActiveXObject || "ActiveXObject" in window) {
    return "IE";
  }
}

/*
 cookies handler
 */
export const cookie = {
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
