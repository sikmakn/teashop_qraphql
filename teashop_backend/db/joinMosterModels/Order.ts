const model = {
    Order: {
        sqlTable: `${process.env.DB_NAME}.files`,
        uniqueKey: 'id',
        fields: {
            id: {
                sqlColumn: 'id'
            },
            price: {
                sqlColumn: 'price'
            },
            closedAt: {
                sqlColumn: 'closedAt'
            },
            status: {
                sqlColumn: 'status'
            },
            productOrders: {
                junction: {
                    sqlTable: 'productOrder',
                    uniqueKey: ['productId', 'orderId'],
                    sqlBatch: {
                        thisKey: 'orderId',
                        parentKey: 'id',
                        sqlJoin: (productOrderTable: any, productTable: any) =>
                            `${productOrderTable}.productId = ${productTable}.id`
                    }
                }
            }
        }
    }
};

export default model;