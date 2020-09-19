import {Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import Product from "./Product";
import Order from "./Order";

@Table
class ProductOrder extends Model<ProductOrder> {
    @ForeignKey(() => Product)
    @Column
    productId!: string;

    @ForeignKey(() => Order)
    @Column
    orderId!: string;

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