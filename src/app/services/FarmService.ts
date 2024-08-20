import { injectable, inject } from 'inversify'
import { Farm } from '../../domain/model/farm'
import { IFarmService } from '../interfaces/IFarmService'
import { IFarmRepository } from '../../domain/interfaces/IFarmRepository'
import { APPTYPES } from '../apptypes';
import 'reflect-metadata';

@injectable()
export class FarmService implements IFarmService {

    constructor(
        @inject(APPTYPES.IFarmRepository) private readonly farmRepository: IFarmRepository) {
        this.farmRepository = farmRepository;
    }

    async getAll(): Promise<Farm[]> {

        return this.farmRepository.getAll();
    }

    async create(farm: Farm): Promise<Farm> {
 
        let existing_farm = await this.farmRepository.getByNameAndLocation(farm.name, farm.location);

        if (existing_farm)
            throw new Error('Cannot create farm: name and location already exists for a farm.');

        return this.farmRepository.create(farm);
    }
}