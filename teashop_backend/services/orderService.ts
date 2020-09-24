import Order from "../db/sequelizeModels/Order";
import ProductOrder from "../db/sequelizeModels/ProductOrder";
import connection from '../db/connection';
import {IOrderCreate, IOrderUpdate, OrderStatus} from "../modelTypes/IOrder";
import Product from "../db/sequelizeModels/Product";
import {Op} from "sequelize";
import {calculatePrice} from "../helpers/calculatePrice";

const orderRepository = connection.getRepository(Order);
const productOrderRepository = connection.getRepository(ProductOrder);
const productRepository = connection.getRepository(Product);

export async function create({productOrders: productOrdersBasic, ...orderFields}: IOrderCreate) {
    const productOrders = await fillProductOrders();
    const newOrder = await createOrder();
    newOrder.productOrders = await createProductOrders(newOrder.id);
    return newOrder;

    async function createProductOrders(orderId:string) {
        const productOrdersForCreate = productOrders.map(fields => ({orderId, ...fields}));
        return await productOrderRepository.bulkCreate(productOrdersForCreate);
    }

    async function createOrder() {
        const orderToCreate = {
            ...orderFields,
            price: productOrders
                .reduce((prevVal, {price}) => prevVal + price, 0),
        };
        return await orderRepository.create(orderToCreate);
    }

    async function fillProductOrders() {
        const products = await findProductsByProductOrders();
        return productOrdersBasic.map(productOrder => {
            const {discount, price} = products.find(({id}: any) => id === productOrder.productId);
            return {
                ...productOrder,
                discount: discount,
                price: calculatePrice(productOrder.weight, price, discount)
            };
        });
    }

    async function findProductsByProductOrders() {
        const productIdsForSearch = productOrdersBasic.map(({productId}) => ({id: productId}));
        return await productRepository.findAll({where: {[Op.or]: productIdsForSearch}});
    }
}

export async function updateBasic({id, status}: IOrderUpdate) {
    let updateFields: any = {id, status};
    if (status === OrderStatus.Closed)
        updateFields.closedAt = Date.now();
    return await orderRepository.update(updateFields, {where: {id}});
}

export async function remove(id: string) {
    return await orderRepository.destroy({where: {id}});
}