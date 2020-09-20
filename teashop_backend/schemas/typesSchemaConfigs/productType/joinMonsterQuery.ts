const query = {
    Query: {
        fields: {
            productType: {
                where: (table: any, args: any) => `${table}.id = "${args.id}"`
            },
        }
    }
};

export default query;