const model = {
    Client:{
        sqlTable: `${process.env.DB_NAME}.clients`,
        uniqueKey: 'id',
        fields:{
            id: {
                sqlColumn: 'id'
            },
            phoneNumber:{
                sqlColumn: 'phoneNumber'
            },
            email:{
                sqlColumn: 'email'
            },
            orders:{
                sqlBatch:{
                    thisKey: 'id',
                    parentKey: 'clientId'
                }
            }
        }
    }
};

export default model;