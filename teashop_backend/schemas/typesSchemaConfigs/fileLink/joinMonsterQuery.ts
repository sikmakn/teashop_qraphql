const query = {
    Query: {
        fields: {
            file: {
                where: (table: any, args: any) => `${table}.id = "${args.id}"`
            },
            filesByProductId: {
                where: (table: any, args: any) => `${table}.productId = "${args.id}"`
            }
        }
    }
};

export default query;