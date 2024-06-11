import { HfInference } from "@huggingface/inference";
import chalk from "chalk";
import dotenv from 'dotenv';
import fs from 'fs';
import inquirer from 'inquirer';
import open from "open";
import models from "./models.js";

dotenv.config();

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