import http from "../utils/http";

function login(data) {
    return http.post('/login',data)
}
function register(data) {
    return http.post('/register',data)
}
function getUsers() {
    return http.get('/users')
}
function deleteUsers(id) {
    return http.delete('/users/' + id)
}
export {
    login,
    register,
    getUsers,
    deleteUsers
}