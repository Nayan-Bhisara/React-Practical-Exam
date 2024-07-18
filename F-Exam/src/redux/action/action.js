import { app } from "../../firebase"
import { getDatabase,ref,set } from "firebase/database"
const db = getDatabase(app)

export const ADDEM = (data) => {
    return async(dispatch) => {
        try {
            set(ref(db,"emp/",data.emid),{
                name:data.name,
                email:data.email,
                city : data.city,
                pass : data.pass,
                salary : data.salary,
                designation : data.degignation,
            })
            dispatch({
                type: 'ADDEM',
                payload: data
            })
        }catch(error){
            console.log(error);
            dispatch({
                type: 'ERROR',
                payload : error
            })
        }
    }
}