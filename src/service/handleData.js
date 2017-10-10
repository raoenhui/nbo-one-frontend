import $http from 'src/utils/fetch'


/**
 * 账号密码登录
 */
export const ApiUserLogin = (email,pwd,validCode) => $http('/login',{email,pwd,validCode},'post');


/**
 * 获取我的项目
 */
export const ApiGetMyProject = () => $http('/security/project/getMyProject', {}, 'post');


