import inquirer from 'inquirer';
import chalk from 'chalk';
import open from 'open';
import models from './models.js';
import { downloadImage } from './hfService.js';

export async function promptUser() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'selectedModel',
            message: 'Select a model:',
            choices: models.map(model => ({
                name: model.title,
                value: model.model,
            })),
        },
        {
            type: 'input',
            name: 'prompt',
            message: 'Enter your prompt:',
        },
        {
            type: 'input',
            name: 'fileName',
            message: 'Enter the file name (without extension):',
        }
    ]);

    const { selectedModel, prompt, fileName } = answers;
    await downloadImage(prompt, `${fileName}.jpeg`, selectedModel);
}

export async function showSuccessMessage(path) {
    await open(path);
    console.log(chalk.bold.green('Image downloaded successfully'));
}

export function showErrorMessage(error) {
    console.error(chalk.bold.red('Error while downloading image: ', error.message));
}