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
        const response = await fetch(`${path}/logout`,{
            mode: 'cors',
            method : "POST",
            headers :{'Content-Type' : 'application/json','Accept' : 'application/json','Authorization': `Bearer${token}`}
        })

        return response.json()
    }
)


export const forgetPass = createAsyncThunk(
    "mainPage/forgetPass",
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
        console.log("exav");
        const response = await fetch(`${path}/password/reset`,{
            mode: 'cors',
            method : "POST",
            headers : {'Content-Type' : 'application/json','Accept' : 'application/json'},
            body:JSON.stringify(body)
        })
        return response.json()
    }
)

export const getUser = createAsyncThunk(
    "mainPage/getUser",
    async ({path,token}) => {
        const userPage = await fetch(`${path}/userPage`,{
            mode: 'cors',
            method : "GET",
            headers :{'Content-Type' : 'application/json','Accept' : 'application/json','Authorization': `Bearer ${token}`}
        })
        return userPage.json()
    }
)









