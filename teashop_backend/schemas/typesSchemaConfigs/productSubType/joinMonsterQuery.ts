const query = {
    Query: {
        fields: {
            productSubType: {
                where: (table: any, args: any) => `${table}.id = "${args.id}"`
            },
        }
    }
};

export default query;