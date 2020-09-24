import {Column, DataType, HasMany, Model, PrimaryKey, Table} from 'sequelize-typescript';
import ProductSubType from "./ProductSubType";
import Product from "./Product";

@Table
class ProductType extends Model<ProductType> {
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

    @HasMany(() => ProductSubType, {onDelete: 'cascade'})
    productSubTypes!: ProductSubType[];

    @HasMany(() => Product)
    products?: Product[];
}

export default ProductType;