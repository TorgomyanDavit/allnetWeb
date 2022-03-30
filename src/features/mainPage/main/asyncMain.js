import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getMainContent = createAsyncThunk(
    "mainPage/getMainContent",
    async () => {
        // const response = await axios.get(`https://127.0.0.1:8000/api`)
        axios.get(`https://127.0.0.1:8000/api`)
        .then(function (response) {
            return response
        })
        .catch((err) => {
            console.log(err);
        })
      
        // return response.json()
    }
)