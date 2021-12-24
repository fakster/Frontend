import { HTTP } from "./common";

export const Vacancy = {
    create(config){
        return HTTP.post('api/vacancy/', config).then(Response =>{
            return Response.data
        })
    },
    delete(vacancy){
        return HTTP.delete('api/vacancy/${vacancy.id}/')
    },
    list(){
        return HTTP.get('api/vacancy/').then(Response=>{
            return Response.data
        })
    }
}
