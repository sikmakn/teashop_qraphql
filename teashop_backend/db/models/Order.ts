import {BelongsToMany, Column, DataType, Model, PrimaryKey, Table} from 'sequelize-typescript';
import Product from "./Product";
import ProductOrder from "./ProductOrder";

enum OrderStatus {
    Active = 'active',
    NotConfirmed = 'not confirmed',
    Closed = 'closed',
    Canceled = 'canceled'
}

@Table
class Order extends Model<Order> {
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

    @Column(DataType.DATE)
    closedAt?: Date;

    @Column({
        type: DataType.ENUM,
        values: ['active', 'not confirmed', 'closed', 'canceled'],
        defaultValue: 'not confirmed',
        allowNull: false
    })
    status!: OrderStatus;

    @BelongsToMany(() => Product, () => ProductOrder)
    products!: Array<Product & { ProductOrder: ProductOrder }>
}

export default Order;