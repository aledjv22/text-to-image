import dotenv from 'dotenv';
dotenv.config();

export const config = {
    hfAccessToken: process.env.HF_ACCESS_TOKEN,
};