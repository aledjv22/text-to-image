import { HfInference } from "@huggingface/inference";
import chalk from "chalk";
import dotenv from 'dotenv';
import fs from 'fs';
import inquirer from 'inquirer';
import open from "open";

dotenv.config();

const models = [
    {
        model: "runwayml/stable-diffusion-v1-5",
        title: "Diffusion V1.5",
    },
    {
        model: "stabilityai/sdxl-turbo",
        title: "SDXL Turbo",
    },
    {
        model: "CompVis/stable-diffusion-v1-4",
        title: "Diffusion V1.4",
    },
    {
        model: "runwayml/stable-diffusion-inpainting",
        title: "Diffusion Inpainting",
    },
    {
        model: "stabilityai/stable-diffusion-2-1-base",
        title: "Diffusion 2.1 Base",
    },
    {
        model: "stabilityai/stable-diffusion-2-1",
        title: "Diffusion 2.1",
    },
    {
        model: "SG161222/Realistic_Vision_V4.0_noVAE",
        title: "Realistic Vision V4.0",
    },
    {
        model: "h94/IP-Adapter-FaceID",
        title: "IP Adapter FaceID",
    },
    {
        model: "ByteDance/SDXL-Lightning",
        title: "SDXL Lightning",
    }
];

inquirer.prompt([
    {
        type: "list",
        name: "selectedModel",
        message: "Select a model:",
        choices: models.map(model => ({
            name: model.title,
            value: model.model,
        })),
    },
    {
        type: "input",
        name: "prompt",
        message: "Enter your prompt:",
    },
    {
        type: "input",
        name: "fileName",
        message: "Enter the file name (without extension):",
    }
]).then(answers => {
    const { selectedModel, prompt, fileName } = answers;
    downloadImage(prompt, `${fileName}.jpeg`, selectedModel);
});

async function downloadImage(text, path, model) {
    const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

    try {
        const response = await hf.textToImage({
            inputs: text,
            model: model,
        });

        const buffer = Buffer.from(await response.arrayBuffer());
        fs.writeFileSync(path, buffer);
        await open(path);
        console.log(
            chalk.bold.green("Image downloaded successfully")
        );
    } catch (error) {
        console.error(
            chalk.bold.red("Error while downloading image: ", error.message)
        );
    }
}