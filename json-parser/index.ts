import { Feature } from './index';
import * as fs from 'fs';

export interface Properties {
    name: string;
}

export interface Feature {
    properties: Properties;
}

export interface Country {
    features: Feature[];
}

let fileContent: string;

const testFolder = './json/';

fs.readdir(testFolder, (err: NodeJS.ErrnoException, files: string[]) => {
    files.forEach(file => {
        const data: Country = require(testFolder + file);
        data.features.forEach((value: Feature) => {
            const outcome = format(value.properties);
            if (outcome && outcome !== '') {
                if (fileContent) {
                    fileContent = fileContent + ',\n' + outcome;
                } else {
                    fileContent = outcome;
                }
            }
        });
        writeToFile(fileContent);
    });
})

function writeToFile(fileContent: string) {
    console.log(fileContent);
    const fileDesc = fs.openSync('./sample.out', 'a');

    fs.writeFile(fileDesc, fileContent, (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been created");
    });
}

function format(properties: Properties): string {
    let response: string = '';
    if (properties.name) {
        response = properties.name
    }
    return response;
}

