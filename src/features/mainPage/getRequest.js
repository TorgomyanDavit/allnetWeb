import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllContent = createAsyncThunk(
    "mainPage/getAllContent",
    async (path) => {
        const response = await Promise.all([
            fetch(`${path}/home`),
            fetch(`${path}/about`),
            fetch(`${path}/contact`),
            fetch(`${path}/faq`),
            fetch(`${path}/csrf`)
        ])
        .then((streams) => {return Promise.all(streams.map((stream) => stream.json()))})
        return response
    }
)

// export const getUserPage = createAsyncThunk(
//     "mainPage/getUserPage",
//     async ({path,token}) => {
//         let configHeader = { 
//             mode: 'cors', method : "GET", headers : {'Content-Type' : 'application/json','Accept' : 'application/json','Authorization': `Bearer ${token}`}
//         };
//         const response = await Promise.all([
//             fetch(`${path}/userPage`,configHeader),
//             fetch(`${path}/user`,configHeader),
//             fetch(`${path}/payment`,configHeader)
//             // fetch(`${path}/notification`,configHeader)
//         ])
//         .then((streams) => {return Promise.all(streams.map((stream) => stream.json()))})
//         if(!!response[1].user) {const id = response[1].user.id;
//             const pagination = await fetch(`${path}/payment/${id}`,configHeader).then((result) => result.json())
//             const notification = await fetch(`${path}/notification/${id}`,configHeader).then((result) => result.json())
//             response.push(pagination,notification)
//         }
//         return response
//     }
// )

export const getUserHomePage = createAsyncThunk(
    "mainPage/getUserHomePage",
    async ({path,token}) => {
        let configHeader = { 
            mode: 'cors', method : "GET", headers : {'Content-Type' : 'application/json','Accept' : 'application/json','Authorization': `Bearer ${token}`}
        };
        const response = await fetch(`${path}/userPage`,configHeader).then((result) => result.json())
        return response
    }
)

export const getUserHistory = createAsyncThunk(
    "mainPage/getUserHistory",
    async ({path,token,id}) => {
        let configHeader = { 
            mode: 'cors', method : "GET", headers : {'Content-Type' : 'application/json','Accept' : 'application/json','Authorization': `Bearer ${token}`}
        };
        const response = await fetch(`${path}/payment/${id}`,configHeader).then((result) => result.json())
        return response
    }
)

export const getNotification = createAsyncThunk(
    "mainPage/getNotification",
    async ({path,token,id}) => {
        let configHeader = { 
            mode: 'cors', method : "GET", headers : {'Content-Type' : 'application/json','Accept' : 'application/json','Authorization': `Bearer ${token}`}
        };
        const response = await fetch(`${path}/notification/${id}`,configHeader).then((result) => result.json())
        return response
    }
)

export const getTarif = createAsyncThunk(
    "mainPage/getTarif",
    async ({path,token,id}) => {
        let configHeader = { 
            mode: 'cors', method : "GET", headers : {'Content-Type' : 'application/json','Accept' : 'application/json','Authorization': `Bearer ${token}`}
        };
        const response = await fetch(`${path}/payment`,configHeader).then((result) => result.json())
        return response
    }
)




// export function getUserHomePageSimple({path,token}) {
//     let configHeader = { 
//         mode: 'cors', method : "GET", headers : {'Content-Type' : 'application/json','Accept' : 'application/json','Authorization': `Bearer ${token}`}
//     };
//     return fetch(`${path}/userPage`,configHeader).then((result) => result.json())
// }
    

