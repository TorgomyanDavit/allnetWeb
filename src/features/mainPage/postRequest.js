import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "axios";
export const postRegister = createAsyncThunk(
    "mainPage/postAllContent",
    async ({path,body}) => {

        // fetch(`http://127.0.0.1:8000/api/register`,{
        //     method : "post",
        //     headers : { "Content-Type" : "application/json"},
        //     body : JSON.stringify({ username:'Serge',email:'test@mail.ru',password:'123123123'})
        // }).then((resp) => {
        //     return resp.json();
        // }).then((resp) => {
        //     console.log("exav",resp)
        // }).catch((err) => {
        //     console.log("chexav",err)
        // })

        // const response = await axios({
        //     method: 'post',
        //     url: `${path}/register`,
        //     data: body
        // });

        // return response

        // const response = await axios.POST(`${path}/register1`,body)
        // return response
    }
)