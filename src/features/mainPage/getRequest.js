import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllContent = createAsyncThunk(
    "mainPage/getAllContent",
    async (path) => {
        const response = await Promise.all([
            fetch(`${path}/home`),
            fetch(`${path}/about`),
            fetch(`${path}/contact`),
            fetch(`${path}/faq`),
            // fetch(`${path}/payment`)
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
            await fetch(`${path}/userPage`,configHeader),
            await fetch(`${path}/user`,configHeader)
        ])



        
        .then((streams) => {return Promise.all(streams.map((stream) => stream.json()))})
        return response
    }
)

