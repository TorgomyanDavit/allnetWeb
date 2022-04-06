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
            // fetch(`${path}/user`)
        ])
        .then((streams) => {return Promise.all(streams.map((stream) => stream.json()))})
        return response
    }
)