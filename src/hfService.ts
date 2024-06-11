import { HfInference } from '@huggingface/inference';
import fs from 'fs';
import { config } from './config.js';
import { showSuccessMessage, showErrorMessage } from './ui.js';

export async function downloadImage(text: string, path: string, model: string) {
    const hf = new HfInference(config.hfAccessToken);

    try {
        const response = await hf.textToImage({
            inputs: text,
            model: model,
        });

        const buffer = Buffer.from(await response.arrayBuffer());
        fs.writeFileSync(path, buffer);
        await showSuccessMessage(path);
    } catch (error) {
        showErrorMessage(error);
    }
}