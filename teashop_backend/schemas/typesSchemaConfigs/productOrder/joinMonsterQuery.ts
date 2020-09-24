const query = {
    Query: {
        fields: {
            productOrderByOrderId: {
                where: (table: any, {orderId}: any) => `${table}.orderId = "${orderId}"`
            },
        }
    }
};

export default query;