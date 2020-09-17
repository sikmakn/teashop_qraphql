import {
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';
import ProductType from "./ProductType";
import ProductSubType from "./ProductSubType";
import ProductOrder from "./ProductOrder";
import Order from "./Order";
import File from "./File";

@Table
class Product extends Model<Product> {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false
    })
    id!: string;

    @Column({
        type: DataType.DECIMAL(65, 2),
        allowNull: false
    })
    price!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    weight!: number;

    @Column(DataType.DECIMAL(5, 4))
    discount?: number;

    @Column(DataType.STRING,)
    effect?: string;

    @Column(DataType.STRING)
    packaging?: string;

    @Column(DataType.STRING)
    taste?: string;

    @HasMany(() => File, {onDelete: "cascade"})
    files!: [File];

    @ForeignKey(() => ProductType)
    productTypeId?: string;

    @BelongsTo(() => ProductType)
    productType?: ProductType;

    @ForeignKey(() => ProductSubType)
    productSubTypeId?: string;

    @BelongsTo(() => ProductSubType)
    productSubType?: ProductSubType;

    @BelongsToMany(() => Order, () => ProductOrder)
    orders!: Array<Order & { ProductOrder: ProductOrder }>
}

export default Product;