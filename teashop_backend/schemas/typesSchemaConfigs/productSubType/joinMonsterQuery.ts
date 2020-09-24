const query = {
    Query: {
        fields: {
            productSubType: {
                where: (table: any, {id}: any) => id && `${table}.id = "${id}"`
            },
        }
    }
};

export default query;