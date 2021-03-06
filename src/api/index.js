// 包含n个接口请求函数的模块
import ajax from "./ajax";
//[1、根据经纬度获取位置详情](#1 根据经纬度获取位置详情)<br/>
export const reqAddress =(geohash) =>ajax('/position/${geohash}')
//[2、获取食品分类列表](#2 获取食品分类列表)<br/>
export const reqFoodTypes =() =>ajax('/index_category')
//[3、根据经纬度获取商铺列表](#3 根据经纬度获取商铺列表)<br/>
export const reqShop =({longitude,latitude}) =>ajax('/shops',{longitude,latitude})
//[4、根据经纬度和关键字搜索商铺列表](#4 根据经纬度和关键字搜索商铺列表)<br/>
export const reqShops = ({latitude, longitude}) => ajax('/api/shops', {latitude,longitude})
//[5、获取一次性验证码](#5 获取一次性验证码)<br/>
export const reqSendCode = phone => ajax('/api/sendcode', {phone})
//[6、用户名密码登陆](#6 用户名密码登陆)<br/>
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {
    name,
    pwd,
    captcha
    }, 'POST')
//[7、发送短信验证码](#7 发送短信验证码)<br/>
//[8、手机号验证码登陆](#8 手机号验证码登陆)<br/>
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')
//[9、根据会话获取用户信息](#9 根据会话获取用户信息)<br/>
export const reqUser = () => ajax('/api/userinfo')
//[10、用户登出](#10 用户登出)<br/>
export const reqLogout = () => ajax('/api/logout')