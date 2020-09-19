const query = {
    Query: {
        fields: {
            product: {
                where: (table: any, args: any) => `${table}.id = "${args.id}"`
            },
            productsByIds: {//todo
                where: (table: any, args: any) => {
                   return `${table}.productId = "${args.id}"`;
                }
            },
            products:{
                //todo
            }
        }
    }
};

export default query;