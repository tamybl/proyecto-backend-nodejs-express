
import { Model, DataType, Column, Table } from 'sequelize-typescript';
import { Place as IPlace } from '../interfaces/place.interface';

@Table({
  tableName: 'places', // Nombre de la tabla en la base de datos
  timestamps: true,    // Incluye `createdAt` y `updatedAt`
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
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  country: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image: string;

  constructor() {
    super();
    this.id = 0; // Asignación predeterminada
    this.name = '';
    this.country = '';
    this.description = '';
    this.image = '';
  }
}
