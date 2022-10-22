import http from "../utils/http"

function getProperty(data){
    return http.get('/property',data)
}
function postProperty(data){
    return http.post('/property',data)
}
function deleteProperty(id){
    return http.delete('/property/'+ id)
}
function patchProperty(id, data){

  return http.patch('/property/'+ id, data)
}
function getPropertyFrom(data){
  return http.get(`/property?number=${data}`)
}
export{
    getProperty,
    postProperty,
    deleteProperty,
    patchProperty,
    getPropertyFrom
}