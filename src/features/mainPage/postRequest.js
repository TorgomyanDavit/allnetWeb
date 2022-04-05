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
            console.log("post request",body);
        const response = await fetch(`${path}/login`,{
            mode: 'cors',
            method : "POST",
            headers :{'Content-Type' : 'application/json','Accept': 'application/json'},
            body : JSON.stringify(body)
        })
        return response.json()
    }
)

export const postLogAuth = createAsyncThunk(
    "mainPage/postLogauth",
        async ({path,token}) => {
        console.log("logauth token",token);
        const response = await fetch(`${path}/logout`,{
            mode: 'cors',
            method : "POST",
            headers :{'Content-Type' : 'application/json','Accept' : 'application/json','Authorization': `Bearer ${token}`}
        })

        return response.json()
    }
)


export const postSendEmail = createAsyncThunk(
    "mainPage/postSendEmail",
        async ({path,body}) => {
        console.log("logauth token",body);
        const response = await fetch(`${path}/logout`,{
            mode: 'cors',
            method : "POST",
            headers :{'Content-Type' : 'application/json','Accept' : 'application/json'},
            body : JSON.stringify(body)
        })

        return response.json()
    }
)