const model = {
    ProductType: {
        sqlTable: `${process.env.DB_NAME}.producttypes`,
        uniqueKey: 'id',
        fields: {
            id:{
                sqlColumn:'id'
            },
            name: {
                sqlColumn: 'name'
            },
            products: {
                sqlBatch: {
                    thisKey: 'productTypeId',
                    parentKey: 'id'
                }
            },
            productSubTypes: {
                sqlJoin: (productTypeTable: any, productSubTypeTable: any) =>
                    `${productTypeTable}.id = ${productSubTypeTable}.productTypeId`
            }
        }
    }
};

export default model;