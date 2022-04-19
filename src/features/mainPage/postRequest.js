import { createAsyncThunk } from "@reduxjs/toolkit";

export const postRegister = createAsyncThunk(
    "mainPage/postRegister",
        async ({path,body}) => {
        const response = await fetch(`${path}/register`,{
            mode: 'cors',
            method : "POST",
            headers :{'Content-Type' : 'application/json','Accept': 'application/json'},
            body : JSON.stringify(body)
        })
        return response.json()
    }
)

export const postSignIn = createAsyncThunk(
    "mainPage/postSignIn",
    async ({path,body}) => {
        let token = await fetch(`${path}/csrf`).then((result) => result.json(result)).then((result) => result.csrf_token)
        // console.log(localStorage.getItem("csrf_token"));

        const response = await fetch(`${path}/login`,{
            mode: 'cors',
            method : "POST",
            credentials: "same-origin",
            headers : {'Content-Type' : 'application/json','Accept': 'application/json', "XSRF-TOKEN" : token},
            body : JSON.stringify(body)
        })
        return response.json()
    }
)

export const postLogAuth = createAsyncThunk(
    "mainPage/postLogauth",
        async ({path,token}) => {
        const response = await fetch(`${path}/logout`,{
            mode: 'cors',
            method : "POST",
            headers :{'Content-Type' : 'application/json','Accept' : 'application/json','Authorization': `Bearer ${token}`}
        })

        return response.json()
    }
)

export const sendEmail = createAsyncThunk(
    "mainPage/sendEmail",
    async ({path,body}) => {
        const response = await fetch(`${path}/password/email`,{
            mode: 'cors',
            method : "POST",
            headers : {'Content-Type' : 'application/json','Accept' : 'application/json'},
            body:JSON.stringify(body)
        })
        return response.json()
    }
)

export const newPass = createAsyncThunk(
    "mainPage/newPass",
    async ({path,body}) => {
        const response = await fetch(`${path}/password/reset`,{
            mode: 'cors',
            method : "POST",
            headers : {'Content-Type' : 'application/json','Accept' : 'application/json'},
            body:JSON.stringify(body)
        })
        return response.json()
    }
)

export const changeUserData = createAsyncThunk(
    "mainPage/changeUserData",
    async ({path,token,body,id}) => {
        // console.log(body,path);
        const response = await fetch(`${path}/user/${id}`,{
            mode: 'cors',
            method : "PUT",
            headers : {'Content-Type' : 'application/json','Accept' : 'application/json','Authorization' : `Bearer ${token}`},
            body:JSON.stringify(body)
        })
        return response.json()
    }
)

export const buyTarif = createAsyncThunk(
    "mainPage/buyTarif",
    async ({path,token,body}) => {
        // console.log(body,path);
        const response = await fetch(`${path}/payment`,{
            mode: 'cors',
            method : "POST",
            headers : {'Content-Type' : 'application/json','Accept' : 'application/json','Authorization' : `Bearer ${token}`},
            body:JSON.stringify(body)
        })
        return response.json()
    }
)


// 'Content-Type' : 'multipart/form-data'
// 'Content-Type' : 'application/x-www-form-urlencoded'












// export const changeUserData = createAsyncThunk(
//     "mainPage/changeUserData",
//     async ({path,token,body,id}) => {
//         // console.log(body,path);
//         const response = await fetch(`${path}/user/${id}`,{
//             mode: 'cors',
//             method : "PUT",
//             headers : {'Content-Type' : 'application/json','Accept' : 'application/json','Authorization': `Bearer ${token}`},
//             body:body
//         })
//         return response.json()
//     }
// )










