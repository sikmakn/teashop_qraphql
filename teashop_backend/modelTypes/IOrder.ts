import {IProductOrder} from "./IProductOrder";

export interface IOrderCreate{
    userId: string
    status: OrderStatus
    productOrders: IProductOrder[]
}

export interface IOrderUpdate {
    id:string
    status: OrderStatus
}

export enum OrderStatus {
    Active = 'active',
    NotConfirmed = 'not confirmed',
    Closed = 'closed',
    Canceled = 'canceled'
}