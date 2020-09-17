// import sequelize from '../connection';
// import {DataTypes, Model} from 'sequelize';
//
// class ProductOrder extends Model {
// }
//
// ProductOrder.init({
//         id: {
//             type: DataTypes.UUID,
//             defaultValue: DataTypes.UUIDV4,
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false
//         },
//         price: {
//             type: DataTypes.DECIMAL(65, 2),
//             allowNull: false
//         },
//         discount: {
//             type: DataTypes.DECIMAL(5, 4),
//         },
//         weight: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
//     },
//     {
//         sequelize,
//         modelName: 'ProductOrder',
//     });
//
// export default ProductOrder;