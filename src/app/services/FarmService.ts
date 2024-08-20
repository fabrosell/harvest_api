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
        throw new Error('Method not implemented.')
    }

    async create(farm: Farm): Promise<Farm> {
        throw new Error('Method not implemented.')
    }
}