const model = {
    Order: {
        sqlTable: `${process.env.DB_NAME}.orders`,
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
            clientId: {
                sqlColumn: 'clientId'
            },
            client: {
                sqlJoin: (orderTable: any, clientTable: any) =>
                    `${orderTable}.clientId = ${clientTable}.id`
            },
            productOrders: {
                sqlJoin: (orderTable: any, productOrderTable: any) =>
                    `${orderTable}.id = ${productOrderTable}.orderId`
            }
        }
    }
};

export default model;