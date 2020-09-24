import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from 'sequelize-typescript';
import Product from "./Product";
import Client from "./Client";
import ProductOrder from "./ProductOrder";

enum OrderStatus {
    Active = 'ACTIVE',
    NotConfirmed = 'NOT_CONFIRMED',
    Closed = 'CLOSED',
    Canceled = 'CANCELED'
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
    createdAt?: Date;

    @Column(DataType.DATE)
    closedAt?: Date;

    @Column({
        type: DataType.ENUM,
        values: ['ACTIVE', 'NOT_CONFIRMED', 'CLOSED', 'CANCELED'],
        defaultValue: 'NOT_CONFIRMED',
        allowNull: false
    })
    status!: OrderStatus;

    @BelongsToMany(() => Product, () => ProductOrder)
    products!: Array<Product & { ProductOrder: ProductOrder }>;

    @ForeignKey(() => Client)
    clientId!: string;

    @BelongsTo(() => Client)
    client!: Client;
}

export default Order;