import { HfInference } from "@huggingface/inference";
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

async function downloadImage() {
    const text = "A cat sitting on a table";
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
        console.log("Image downloaded successfully");
    } catch (error) {
        console.error("Error while downloading image: ", error.message);
    }
}

downloadImage();