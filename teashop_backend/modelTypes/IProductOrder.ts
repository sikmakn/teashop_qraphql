export interface IProductOrder {
    price: number
    weight: number
    productId: string
}

export interface IProductOrderCreate {
    weight: number
    productId: string
    orderId: string
}