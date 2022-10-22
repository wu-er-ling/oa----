import http from '../utils/http'

function getChecksFrom(id) {
    return http.get(`checks?checkfromid=${id}`)
}
function getUsersTo() {
    return http.get('users?role=经理')
}
function addCheck(data) {
    return http.post('checks', data)
}
function getChensTo(id) {
    return http.get(`checks?checktoid=${id}`)
}
function updateCheck(id, data) {
    return http.patch(`checks/${id}`, data)
}
export {
    getChecksFrom,
    getUsersTo,
    addCheck,
    getChensTo,
    updateCheck
}