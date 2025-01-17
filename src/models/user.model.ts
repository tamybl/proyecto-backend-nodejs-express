import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { User as IUser } from '../interfaces/user.interface'

@Table({
    tableName: 'users',
    timestamps: false,
})  
export default class User extends Model<IUser> implements IUser {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    declare id: string;
    @Column({
        type: DataType.STRING,
        defaultValue: '',
        allowNull: false,   
    })
    email: string;
    @Column({
        type: DataType.STRING,
        defaultValue: '',
        allowNull: false,
    })
    password: string;
    constructor() {
        super();
        this.id = '';
        this.email = '';
        this.password = '';
    }
}
