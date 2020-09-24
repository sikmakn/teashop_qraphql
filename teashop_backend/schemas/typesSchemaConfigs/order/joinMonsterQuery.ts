const query = {
    Query: {
        fields: {
            order: {
                where: (table: any, args: any) => `${table}.id = "${args.id}"`
            },
            orders: {
                orderBy: ({orderBy}: any) => {
                    if (!orderBy) return;
                    const {field, direction} = orderBy;
                    return {[field]: direction};
                },
                where: (table: any, {filter}: any) => {
                    if (!filter) return;//todo check
                    const {userId, status, createdFrom, createdTo} = filter;
                    let result = '';
                    if (userId) result += `${table}.productTypeId = "${userId}"`;
                    if(status) result += `${table}.status = "${status}"`;
                    if(createdFrom)result += `${table}.createdAt >= "${createdFrom}"`;
                    if(createdTo)result += `${table}.createdAt <= "${createdFrom}"`;
                    return result;
                },
            }
        }
    }
};
export default query;