const model = {
    FileLink: {
        sqlTable: `${process.env.DB_NAME}.filelinks`,
        uniqueKey: 'id',
        fields: {
            id: {
                sqlColumn: 'id'
            },
            link: {
                sqlColumn: 'link'
            },
            productId: {
                sqlColumn: 'productId'
            },
            product: {
                sqlBatch: {
                    thisKey: 'productId',
                    parentKey: 'id'
                }
            }
        }
    }
};

export default model;