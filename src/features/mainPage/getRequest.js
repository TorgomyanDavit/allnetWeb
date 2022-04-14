import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllContent = createAsyncThunk(
    "mainPage/getAllContent",
    async (path) => {
        const response = await Promise.all([
            fetch(`${path}/home`),
            fetch(`${path}/about`),
            fetch(`${path}/contact`),
            fetch(`${path}/faq`),
        ])
        .then((streams) => {return Promise.all(streams.map((stream) => stream.json()))})
        return response
    }
)

export const getUserPage = createAsyncThunk(
    "mainPage/getUserPage",
    async ({path,token}) => {
        let configHeader = { 
            mode: 'cors', method : "GET", headers : {'Content-Type' : 'application/json','Accept' : 'application/json','Authorization': `Bearer ${token}`}
        };
        const response = await Promise.all([
            fetch(`${path}/userPage`,configHeader),
            fetch(`${path}/user`,configHeader),
            fetch(`${path}/payment`,configHeader),
            fetch(`${path}/notification`,configHeader)


            
        ])
        .then((streams) => {return Promise.all(streams.map((stream) => stream.json()))})
        if(!!response[1].user) {const id = response[1].user.id;
            const pagination = await fetch(`${path}/payment/${id}`,configHeader).then((result) => result.json())
            response.push(pagination)
        }
        return response
    }
)

