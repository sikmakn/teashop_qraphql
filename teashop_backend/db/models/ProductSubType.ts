import sequelize from '../connection';
import {DataTypes, Model} from 'sequelize';

class ProductSubType extends Model {
}

ProductSubType.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'ProductSubType',
    });

export default ProductSubType;