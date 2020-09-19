import File from '../db/sequelizeModels/File';
import connection from '../db/connection';
import {IFile} from "../db/types/IFile";

const fileRepository = connection.getRepository(File);

export async function create(file:IFile) {
    return await fileRepository.create(file);
}

export async function remove(id:string) {
    return await fileRepository.destroy({where: {id}});
}