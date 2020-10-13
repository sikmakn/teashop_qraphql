import {BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import Product from "./Product";

@Table
class FileLink extends Model<FileLink> {
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
    link!: string;

    @ForeignKey(() => Product)
    productId!: string;

    @BelongsTo(() => Product)
    product!: Product;
}

export default FileLink;