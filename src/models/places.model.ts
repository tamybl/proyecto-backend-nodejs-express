
import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { Place as IPlace } from '../interfaces/place.interface'

export class Place extends Model<IPlace> implements IPlace {
  declare public id: number;
  public name!: string;
  public country!: string;
  public description!: string;
  public image!: string;
} 

// Funcion para inicializar el modelo
export const placesModel = () => Place.init({
  id: { // Columna ID   
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataType.STRING,
    allowNull: false,
  },
  description: {
    type: DataType.STRING,
  },
  country: {
    type: DataType.STRING,
  },
  image: {
    type: DataType.STRING,
  },
}, {
  tableName: 'places',
  sequelize: require('../config/database'),
});