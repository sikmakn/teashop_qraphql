import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table} from 'sequelize-typescript';
import ProductType from "./ProductType";
import Product from "./Product";

@Table
class ProductSubType extends Model<ProductSubType> {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false
    })
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @ForeignKey(() => ProductType)
    productTypeId!: string;

    @BelongsTo(() => ProductType)
    productType?: ProductType;

    @HasMany(() => Product)
    products?: Product[];
}

export default ProductSubType;