import {IProductOrder} from "./IProductOrder";

export interface IOrder extends IOrderBasic{
    productOrders: IProductOrder[]
}

export interface IOrderBasic {
    price: number
    status: OrderStatus
    createdAt: Date
    closedAt: Date
}

export enum OrderStatus {
    Active = 'active',
    NotConfirmed = 'not confirmed',
    Closed = 'closed',
    Canceled = 'canceled'
}