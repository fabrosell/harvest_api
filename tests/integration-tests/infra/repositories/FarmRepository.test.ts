import { createDecipheriv } from "crypto";
import { Farm } from "../../../../src/domain/model/farm";
import { FarmRepository } from "../../../../src/infra/repositories/FarmRepository";
import { FarmServiceStrings } from "../../../../src/app/interfaces/IFarmService";
import { before } from "node:test";

let repository: FarmRepository;

describe('Testing Farm Repository Implementation', () => {

    let test_farm: Farm = {
        name: `Test farm`,
        location: `Test farm Location`
    }

    beforeAll(async () => {
        
        repository = new FarmRepository();

        let created_farm = await repository.create(test_farm);
    });

    it('Should get all Farms', async () => {

        let farms = await repository.getAll();

        expect(farms).toHaveLength(1);
        expect(farms[0]).toEqual(test_farm);
    });


    it('Should get Farm by Name and Location', async () => {

        let farm = await repository.getByNameAndLocation(test_farm.name, test_farm.location);

        expect(farm).toEqual(test_farm);
    });


    it('Should create Farm', async () => {

        let farm2: Farm = {
            name: `Test farm create`,
            location: `Farm Location create`
        }

        let created_farm = await repository.create(farm2);

        expect(created_farm).toEqual(farm2);
    });


    it('Should not create Farm with duplicated Name and Location', async () => {

        let duplicated_farm: Farm = {
            name: test_farm.name,
            location: test_farm.location
        }

        try {
            let created_farm = await repository.create(duplicated_farm);
        }
        catch (error) {
            expect(error).toBe(FarmServiceStrings.duplicated_farm_error_message);
        }
    });

});