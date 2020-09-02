import {literal, Op} from 'sequelize';
import Product from "../models/Product";
import {IProduct} from "../types/IProduct";
import File from "../models/File";
import ProductType from "../models/ProductType";
import ProductDescription from "../models/ProductDescription";

export async function create(product: IProduct) {
    return await Product.create(product,
        {include: [{model: File}, {model: ProductDescription}]})
}

export async function findById(productTypeId: string) {
    return await Product.findByPk(productTypeId,
        {include: [{model: File}, {model: ProductDescription}]});
}

export async function find(
    {
        productTypeId,
        productSubTypeId,
        sort,
        offset = 0, limit = 10
    }:
        {
            productTypeId?: string,
            productSubTypeId?: string,
            sort: { fieldName: 'price' | 'popularity', orderBy: 'ASC' | 'DESC' },
            offset: number, limit: number
        }) {
    const findObj: any = {offset, limit};
    if (productSubTypeId || productSubTypeId)
        findObj.where = {
            [Op.or]: [{productTypeId}, {productSubTypeId}]
        };

    const orderObj = createOrderFindObj(sort);
    return await Product.findAll({
        ...findObj, ...orderObj,
        include: [{model: File}, {model: ProductDescription}]
    });
}

export async function removeById(id: string) {
    return await ProductType.destroy({where: {id}});
}


function createOrderFindObj({fieldName, orderBy}:
                                { fieldName: 'price' | 'popularity', orderBy: 'ASC' | 'DESC' }) {
    if (fieldName === 'price') return {order: [[fieldName, orderBy]]};
    return {
        attributes: [
            [literal('(SELECT COUNT(*) FROM ProductOrder WHERE ProductOrder.productId = Product.id)'),
                'ProductsOrderCount']
        ],
        order: [[literal('ProductsOrderCount'), orderBy]]
    }
}