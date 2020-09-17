import {Column, DataType, HasMany, Model, Table} from 'sequelize-typescript';
import ProductSubType from "./ProductSubType";

@Table
class ProductType extends Model<ProductType> {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false
    })
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @HasMany(() => ProductSubType, {onDelete: 'cascade'})
    productSubTypes!: ProductSubType[];
}

export default ProductType;