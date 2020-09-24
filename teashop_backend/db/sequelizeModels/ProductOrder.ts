import {BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from 'sequelize-typescript';
import Product from "./Product";
import Order from "./Order";

@Table
class ProductOrder extends Model<ProductOrder> {
    @ForeignKey(() => Product)
    @PrimaryKey
    @Column({allowNull:false})
    productId!: string;

    @BelongsTo(() => Product)
    product!: Product;

    @ForeignKey(() => Order)
    @PrimaryKey
    @Column({allowNull:false})
    orderId!: string;

    @BelongsTo(() => Order)
    order!: Order;

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
}

export default ProductOrder;