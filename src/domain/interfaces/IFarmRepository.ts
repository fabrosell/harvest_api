import { Farm } from "../model/farm";

export interface IFarmRepository {
    getAll(): Promise<Farm[]>;
    getByNameAndLocation(name: string, location: string): Promise<Farm>;
    create(farm: Farm): Promise<Farm>;
}