import ProductOrder from "../db/sequelizeModels/ProductOrder";
import Product from "../db/sequelizeModels/Product";
import connection from '../db/connection';
import {IProductOrderCreate} from "../modelTypes/IProductOrder";
import {calculatePrice} from "../helpers/calculatePrice";

const productOrderRepository = connection.getRepository(ProductOrder);
const productRepository = connection.getRepository(Product);

export async function create({weight, productId, orderId}: IProductOrderCreate) {
    const {discount, price} = await productRepository.findByPk(productId);
    return await productOrderRepository.create({
        productId,
        orderId,
        discount,
        price: calculatePrice(weight, price, discount)
    });
}

export async function updateBasic({orderId, productId, weight}: IProductOrderCreate) {
    const {discount, price} = await productRepository.findByPk(productId);
    return await productOrderRepository.update({
        orderId,
        productId,
        weight,
        discount,
        price: calculatePrice(weight, price, discount)
    }, {where: {productId, orderId}});
}

export async function remove({orderId, productId}: { orderId: string, productId: string }) {
    return await productOrderRepository.destroy({where: {orderId, productId}});
}

