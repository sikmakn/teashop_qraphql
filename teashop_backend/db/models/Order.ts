import sequelize from '../connection';
import {DataTypes, Model} from 'sequelize';
import ProductOrder from "./ProductOrder";

class Order extends Model {
}

Order.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(65, 2),
            allowNull: false
        },
        closedAt: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.ENUM,
            values: ['active', 'not confirmed', 'closed', 'canceled'],
            defaultValue: 'not confirmed',
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Order',
    });

Order.hasMany(ProductOrder, {onDelete: 'cascade'});

export default Order;