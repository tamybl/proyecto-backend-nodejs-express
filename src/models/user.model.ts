import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { User as IUser } from '../interfaces/user.interface'

export class User extends Model<IUser> implements IUser {
    declare public id: string;
    public email!: string;
    public password!: string;
}

User.init({
    id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataType.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users',
    sequelize: require('../config/database'),
})