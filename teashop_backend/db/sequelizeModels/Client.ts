import {Column, DataType, HasMany, Model, PrimaryKey, Table} from 'sequelize-typescript';
import Order from "./Order";

@Table
class Client extends Model<Client> {
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
    phoneNumber!: string;

    @Column({
        type: DataType.STRING,
    })
    email?: string;

    @HasMany(() => Order, {onDelete: "cascade"})
    orders!: [Order];
}

export default Client;