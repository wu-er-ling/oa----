import http from "../utils/http";

function getPlan(data){
    return http.get('/plan',data);
}

function getPlan2(id){
    return http.get(`/plan?id=${id}`);
}

function getPlan3(name){
    return http.get(`/plan?name=${name}`);
}

function addPlan(data){
    return http.post('/plan', data)
}

function deletePlan(id){
    return http.delete('/plan/' + id)
}

function updatePlan(id, data){
    return http.patch(`/plan/${id}`, data)
}
export {
    getPlan,
    addPlan,
    deletePlan,
    getPlan2,
    updatePlan,
    getPlan3
}