import Client from "../db/sequelizeModels/Client";
import connection from '../db/connection';
import {IClientCreate, IClientUpdate} from "../modelTypes/IClient";

const clientRepository = connection.getRepository(Client);

export async function create(client: IClientCreate) {
    return await clientRepository.create(client);
}

export async function updateBasic({id, email, phoneNumber}: IClientUpdate) {
    return await clientRepository.update({id, email, phoneNumber}, {where: {id}});
}

export async function remove(id: string) {
    return await clientRepository.destroy({where: {id}});
}