import request from "@/utils/requests";
// 获取科室列表
export const getDepartmentList = (data) => request({
    url: '/department/departmentInfo/list',
    method: 'post',
    data
    // data:qs.stringify(data)
})
// 获取科室详情
export const getDepartmentInfo = (data) => request({
    url: `/department/departmentInfo/selectDepartmentInfoByName/${data}`,
    method: 'get',
})
// 获取新闻列表
export const getNewsList = (data) => request({
    url: `/news/newsInfo/list`,
    method: 'post',
    data
})
// 获取新闻的详情
export const getNewsInfo = (data) => request({
    url: `/news/newsInfo/${data}`,
    method: 'get',
})
// 获取所有医生列表
export const getDoctorList = (data) => request({
    url: `/docker/dockerInfo/list`,
    method: 'post',
    data
})
// 获取医生详细信息
export const getDoctorInfo = (params) => request({
    url: `/docker/dockerInfo/${params}`,
    method: 'get',
})
//
export const sendMessage = (data) => request({
    url: `/system/messageInfo`,
    method: 'post',
    data
})
// 首页康复案例
export const getKangFuList = (data) => request({
    url: `/caseManage/caseinfo/list`,
    method: 'post',
    data
})
// 荣誉资质
export const getRyzzList = (data) => request({
    url: `/honor/honorInfo/list`,
    method: 'post',
    data
})

// 首页banner图
export const reqBanner = (query) => request({
    url: '/system/banner/list',
    method: 'post',
    data: query
})


// 医院概括文章
export const reqAboutMe = (query) => request({
    url: '/system/Msinfo/list',
    method: 'post',
    data: query
})
