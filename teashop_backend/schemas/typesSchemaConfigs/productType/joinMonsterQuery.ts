const query = {
    Query: {
        fields: {
            productType: {
                where: (table: any, {id}: any) => id && `${table}.id = "${id}"`
            },
        }
    }
};

export default query;