import request from "@/utils/request";
import qs from 'qs'
// 获取科室列表
export const getDepartmentList = (data)=> request({
    url:'/department/departmentInfo/list',
    method:'get',
    params:data
    // data:qs.stringify(data)
})
// 获取科室详情
export const getDepartmentInfo = (data)=> request({
    url:`/department/departmentInfo/selectDepartmentInfoByName/${data}`,
    method:'get',
})
// 获取新闻列表
export const getNewsList = (data)=> request({
    url:`/news/newsInfo/list`,
    method:'get',
    params:data
})
// 获取新闻的详情
export const getNewsInfo = (data)=> request({
    url:`/news/newsInfo/${data}`,
    method:'get',
})
// 获取所有医生列表
export const getDoctorList = (params)=> request({
    url:`/docker/dockerInfo/list`,
    method:'get',
    params
})
// 获取医生详细信息
export const getDoctorInfo = (params)=> request({
    url:`/docker/dockerInfo/${params}`,
    method:'get',
})
//
export const sendMessage = (data)=> request({
    url:`/system/messageInfo`,
    method:'post',
    data
})
// 首页康复案例
export const getKangFuList = (params) => request({
    url:`/caseManage/caseinfo/list`,
    method:'get',
    params
})
// 荣誉资质
export const getRyzzList = (params) => request({
    url:`/honor/honorInfo/list`,
    method:'get',
    params
})