import { Farm } from '../../domain/model/farm'

export interface IFarmService {    
    getAll(): Promise<Farm[]>;
    create(farm: Farm): Promise<Farm>;
}