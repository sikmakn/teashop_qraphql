const model = {
    ProductSubType: {
        sqlTable: `${process.env.DB_NAME}.productsubtypes`,
        uniqueKey: 'id',
        fields: {
            id:{
                sqlColumn:'id'
            },
            name: {
                sqlColumn: 'name'
            },
            productTypeId: {
                sqlColumn: 'productTypeId'
            },
            productType: {
                sqlJoin: (productSubTypeTable: any, productTypeTable: any) =>
                    `${productSubTypeTable}.productTypeId = ${productTypeTable}.id`
            }
        }
    }
};

export default model;