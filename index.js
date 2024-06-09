import { HfInference } from "@huggingface/inference";
import dotenv from 'dotenv';
import fs from 'fs';
import open from "open";
import readline from "readline";

dotenv.config();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("->> Enter your text:\n-> ", async (text) => {
    await downloadImage(text);
    rl.close();
});

async function downloadImage(text) {
    const hf = new HfInference(process.env.HF_ACCESS_TOKEN);
    const model = "runwayml/stable-diffusion-v1-5"
    const path = "output.jpeg";

    try {
        const response = await hf.textToImage({
            inputs: text,
            model: model,
        });
        
        console.log(response);

        const buffer = Buffer.from(await response.arrayBuffer());
        fs.writeFileSync(path, buffer);
        await open(path);
        console.log("Image downloaded successfully");
    } catch (error) {
        console.error("Error while downloading image: ", error.message);
    }
}