import { Farm } from '../../domain/model/farm'

export interface IFarmService {
    getAll(): Promise<Farm[]>;
    create(farm: Farm): Promise<Farm>;
}

const FarmServiceStrings = {
    duplicated_farm_error_message: 'Error: farm name and location already exists in database. Name and location must be unique.'
}

export {FarmServiceStrings}