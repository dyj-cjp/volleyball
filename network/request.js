const app=getApp();
//method(HTTP 请求方法)
const GET='GET';
const POST='POST';
//定义全局常量baseUrl用来存储前缀
const baseURL="http://172.81.245.195:8080/ball";

function request(method,url,data){
  return new Promise(function(resolve,reject){
    let header={
      'content-type':'application/json',
      'cookie':app.globalData.login_token
    };
    wx.request({
      url:baseURL+url,
      method:method,
      data:method===POST?JSON.stringify(data):data,
      header:header,
      success(res){
        //请求成功
        //判断状态码---errCode状态根据后端定义来判断
        if(res.statusCode==200){
          resolve(res);
        }else{
          //其他异常
          reject('运行时错误，请稍后再试');
        }
      },
      fail(err){
        //请求失败
        reject(err)
      }
    })
  })
}

const API={
  //get请求
  getCollegeTeam: (data) => request(GET, `/api/collegeTeam/search`, data), //院队信息查询
  upDateCollegeImg: (data) => request(GET, `/api/collegeTeam/updatecollegeimg`, data), //院队图片修改
  upDatePopularity: (data) => request(GET, `/api/collegeTeam/updatepopularity`, data), //院队人气值修改
  getTeam: (data) => request(GET, `/api/team/search`, data), //根据学院查找院队队伍
  getTeamInfo: (data) => request(GET, `/api/team/find`, data), //根据teamName来获取队伍信息
  upDateTeamImg: (data) => request(GET, `/api/team/updateteamimg`, data), //队伍图片修改
  getTeamSpcByTn: (data) => request(GET, `/api/teamMember/search`, data), //根据球队名字获取队伍信息
  getTeamSpcByNn: (data) => request(GET, `/api/teamMember/find`, data), //根据球员昵称获取相关信息
  getAllMatch: (data) => request(GET, `/api/match/find`, data), //所有赛事查询接口
  getMatchByCollege: (data) => request(GET, `/api/match/findByCollege`, data), //根据学院查询相关赛事
  getMatchByTeamName: (data) => request(GET, `/api/match/findByName`, data), //根据球队名字来获取相关赛事
  getMatchDataById: (data) => request(GET, `/api/matchData/find`, data), //根据赛事id查询赛事数据
  getMatchGroup: (data) => request(GET, `/api/matchGroup/search`, data), //根据分组和赛事阶段获取统计数据

  //post请求
  addCollegeTeam: (data) => request(POST, `/api/collegeTeam`, data), //院队信息添加
  addTeam: (data) => request(POST, `/api/team`, data), //院队队伍添加
  addTeamMember: (data) => request(POST, `/api/teamMember`, data), //队伍成员添加
  addMatch: (data) => request(POST, `/api/match`, data), // 添加赛事
  addMatchData: (data) => request(POST, `/api/matchData`, data), //赛事数据添加
  addMatchGroup: (data) => request(POST, `/api/matchGroup`, data), //赛事阶段数据添加


  
};
module.exports={
  API:API
}