import http from "../utils/http";

function getData(data){
    return http.get('/Data',data);
}


function addData(data){
    return http.post('/Data', data)
}

function deleteData(id){
    return http.delete('/Data/' + id)
}
export {
    getData,
    addData,
    deleteData

}