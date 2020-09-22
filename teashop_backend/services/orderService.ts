import Order from "../db/sequelizeModels/Order";
import ProductOrder from "../db/sequelizeModels/ProductOrder";
import connection from '../db/connection';
import {IOrderCreate, IOrderUpdate, OrderStatus} from "../modelTypes/IOrder";

const orderRepository = connection.getRepository(Order);
const productOrderRepository = connection.getRepository(ProductOrder);

export async function create(order: IOrderCreate) {
    const newOrder = {
        ...order,
        price: order.productOrders
            .reduce((prevVal, {price}) => prevVal + price, 0)
    };
    return await orderRepository.create(newOrder, {include: [productOrderRepository]});
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