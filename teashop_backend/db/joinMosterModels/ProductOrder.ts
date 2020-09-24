const model = {
    ProductOrder: {
        sqlTable: `${process.env.DB_NAME}.productorders`,
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
                    thisKey: 'id',
                    parentKey: 'productId'
                }
            },
            order:{
                sqlBatch: {
                    thisKey: 'id',
                    parentKey: 'orderId'
                }
            }
        }
    }
};

export default model;