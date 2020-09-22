const query = {
    Query: {
        fields: {
            client: {
                where: (table: any, {filter}: any) => {
                    if (filter.id)
                        return `${table}.id = "${filter.id}"`;
                    if (filter.phoneNumber)
                        return `${table}.phoneNumber = "${filter.phoneNumber}"`;
                    if (filter.email)
                        return `${table}.email = "${filter.email}"`;
                }
            },
        }
    }
};

export default query;