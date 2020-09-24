const query = {
    Query: {
        fields: {
            product: {
                where: (table: any, args: any) => `${table}.id = "${args.id}"`
            },
            productsByIds: {
                orderBy,
                where: (table: any, args: any) => {
                    const idsInQuotes = args.ids.map((id: string) => (`"${id}"`));
                    return `${table}.id IN (${idsInQuotes})`;
                },
            },
            products: {
                orderBy,
                where: (table: any, {filter}: any) => {
                    if (!filter) return;
                    const {productTypeId, productSubTypeId} = filter;
                    return productTypeId ?
                        `${table}.productTypeId = "${productTypeId}"` :
                        `${table}.productSubTypeId = "${productSubTypeId}"`;
                },
            }
        }
    }
};

function orderBy({order}: any) {
    if (!order) return;
    const {field, direction}: { field: string, direction: string } = order;
    if (field !== 'orders') return {[field]: direction};
    //todo change with new version of join monster
    const sqlDirection = direction.toUpperCase();
    const ordersSort = `price\` ASC, (SELECT count(*) FROM productorders where \`products\`.id = productorders.productId) ${sqlDirection}, \`price`;
    return {[ordersSort]: 'asc'};
}

export default query;