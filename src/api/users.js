import http from "../utils/http";

//登录
function login(data){
     return http.post('/login',data)
}

//注册
function register(data){
    return http.post('/register',data)
}

//查询
function getUsers(){
    return http.get('/users');
}

//删除
function deleteUser(id){
    return http.delete('/users/'+id)
}

//修改登录信息
function editUser(id,data){
    return http.patch(`/users/${id}`,data)
}

export {
    login,
    register,
    getUsers,
    deleteUser,
    editUser
}