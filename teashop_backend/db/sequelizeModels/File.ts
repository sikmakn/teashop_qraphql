import {BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from 'sequelize-typescript';
import Product from "./Product";

@Table
class File extends Model<File> {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false
    })
    id!: string;

    @Column({
        type: DataType.BLOB,
        allowNull: false,
    })
    data!: Buffer;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    mimetype!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    size!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    filename!: string;

    @ForeignKey(() => Product)
    productId!: string;

    @BelongsTo(() => Product)
    product!: Product;
}

export default File;