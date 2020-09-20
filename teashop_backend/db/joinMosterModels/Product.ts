const model = {
    Product: {
        sqlTable: `${process.env.DB_NAME}.products`,
        uniqueKey: 'id',
        fields: {
            id: {
                sqlColumn: 'id'
            },
            shortDescription:{
                sqlColumn:'shortDescription'
            },
            price: {
                sqlColumn: 'price'
            },
            weight: {
                sqlColumn: 'weight'
            },
            discount: {
                sqlColumn: 'discount'
            },
            effect: {
                sqlColumn: 'weight'
            },
            packaging: {
                sqlColumn: 'discount'
            },
            productTypeId: {
                sqlColumn: 'productTypeId'
            },
            productType: {
                sqlBatch: {
                    thisKey: 'productTypeId',
                    parentKey: 'id'
                }
            },
            productSubTypeId: {
                sqlColumn: 'productSubTypeId'
            },
            productSubType: {
                sqlBatch: {
                    thisKey: 'productSubTypeId',
                    parentKey: 'id'
                }
            },
            files: {
                sqlJoin: (productTable: any, fileTable: any) =>
                    `${productTable}.id = ${fileTable}.productId`
            },
            productOrders: {
                junction: {
                    sqlTable: 'productOrder',
                    uniqueKey: ['productId', 'orderId'],
                    sqlBatch: {
                        thisKey: 'productId',
                        parentKey: 'id',
                        sqlJoin: (productOrderTable: any, orderTable: any) =>
                            `${productOrderTable}.orderId = ${orderTable}.id`
                    }
                }
            }
        }
    }
};

export default model;