const model = {
    ProductOrder: {
        sqlTable: `${process.env.DB_NAME}.files`,
        uniqueKey: ['productId', 'orderId'],
        fields: {
            productId: {
                sqlColumn: 'productId'
            },
            orderId: {
                sqlColumn: 'orderId'
            },
            price: {
                sqlColumn: 'price'
            },
            weight: {
                sqlColumn: 'weight'
            },
            product: {
                sqlBatch: {
                    thisKey: 'productId',
                    parentKey: 'id'
                }
            },
            order:{
                sqlBatch: {
                    thisKey: 'orderId',
                    parentKey: 'id'
                }
            }
        }
    }
};

export default model;