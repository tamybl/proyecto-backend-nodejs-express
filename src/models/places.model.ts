
import { Model, DataType, Column, Table } from 'sequelize-typescript';
import { Place as IPlace } from '../interfaces/place.interface';

@Table({
  tableName: 'places', // Nombre de la tabla en la base de datos
  timestamps: false,    // Incluye `createdAt` y `updatedAt`
})
export default class Place extends Model<IPlace> implements IPlace {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare country: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare image: string;
}
