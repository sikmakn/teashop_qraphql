import Product from "../db/sequelizeModels/Product";
import File from "../db/sequelizeModels/File";
import connection from '../db/connection';
import {IProduct, IProductBasic} from "../db/types/IProduct";

const productRepository = connection.getRepository(Product);
const fileRepository = connection.getRepository(File);

export async function create(product: IProduct) {
    return await productRepository.create(product, {include: [fileRepository]});
}

export async function updateBasic({
                                      id,
                                      ...fields
                                  }: IProductBasic & { id: string }) {
    return await productRepository.update(fields, {where: {id}});
}

export async function remove(id: string) {
    return await productRepository.destroy({where: {id}});
}