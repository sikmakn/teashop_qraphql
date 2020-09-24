import {Dirent, readdir} from 'fs';

export default async function getSubDirectories(source: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        readdir(source, {withFileTypes: true}, (err, dirents) => {
            if (err) return reject(err);
            resolve(getNames(dirents));
        });
    });
}

function getNames(dirents: Dirent[]) {
    return dirents
        .filter(dir => dir.isDirectory())
        .map(dir => dir.name);
}
