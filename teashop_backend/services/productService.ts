import Product from "../db/sequelizeModels/Product";
import FileLink from "../db/sequelizeModels/FileLink";
import connection from "../db/connection";
import {IProduct, IProductBasic} from "../modelTypes/IProduct";
import {removeFiles, saveFile} from "./s3Service";
import {v4 as uuidv4} from "uuid";

const productRepository = connection.getRepository(Product);
const fileRepository = connection.getRepository(FileLink);

export async function create({files, ...fields}: IProduct) {
    const filesDataPromises = files.map(async (upload) => {
        const { createReadStream} = await upload.promise;
        const key = uuidv4();
        const link = await saveFile({stream: createReadStream(), key: key});
        return {id: key, link};
    });
    console.log(filesDataPromises)
    const resultFiles = await Promise.all(filesDataPromises);
    console.log(resultFiles)
    return await productRepository.create({
        files: resultFiles,
        ...fields
    }, {include: [fileRepository]});
}

export async function updateBasic({id, ...fields}: IProductBasic & { id: string }) {
    return await productRepository.update(fields, {where: {id}});
}

export async function remove(id: string) {
    const {files} = await productRepository
        .findOne({where: {id}, include: [fileRepository]});
    const keys = files.map(({link}: { link: string }) => (link));
    await removeFiles(keys);
    return await productRepository.destroy({where: {id}});
}