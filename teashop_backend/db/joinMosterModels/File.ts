const model = {
    File: {
        sqlTable: `${process.env.DB_NAME}.files`,
        uniqueKey: 'id',
        fields: {
            id: {
                sqlColumn: 'id'
            },
            data: {
                sqlColumn: 'data'
            },
            mimetype: {
                sqlColumn: 'mimetype'
            },
            size: {
                sqlColumn: 'size'
            },
            filename: {
                sqlColumn: 'filename'
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