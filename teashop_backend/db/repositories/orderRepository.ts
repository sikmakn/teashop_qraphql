import Order from "../models/Order";
import {IOrder, IOrderBasic} from "../types/IOrder";
import ProductOrder from "../models/ProductOrder";

export async function create(order: IOrder) {
    return await Order.create(order, {include: [{model: ProductOrder}]});
}

export async function findById(id: string) {
    return await Order.findByPk(id, {include: [{model: ProductOrder}]});
}

export async function update(id: string, order: IOrderBasic) {
    return await Order.update({...order, id}, {where: {id}});
}

export async function removeById(id: string) {
    return await Order.destroy({where: {id}});
}