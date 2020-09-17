import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import ProductType from "./ProductType";

@Table
class ProductSubType extends Model<ProductSubType> {

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

    @ForeignKey(() => ProductType)
    @Column
    productTypeId!: string;

    @BelongsTo(() => ProductType)
    productType?: ProductType;
}

export default ProductSubType;