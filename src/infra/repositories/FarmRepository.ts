import { IFarmRepository } from "../../domain/interfaces/IFarmRepository";
import { Farm } from "../../domain/model/farm";

export class FarmRepository implements IFarmRepository {

    constructor() {

    }

    async getAll(): Promise<Farm[]> {
        throw new Error("Method not implemented.");
    }

    async getByNameAndLocation(name: string, location: string): Promise<Farm> {
        throw new Error("Method not implemented.");
    }

    async create(farm: Farm): Promise<Farm> {
        throw new Error("Method not implemented.");
    }
}