
import { mock, Mock } from 'ts-jest-mocker';
import { Farm } from "../../../../src/domain/model/farm";
import { FarmService } from "../../../../src/app/services/FarmService";
import { IFarmRepository } from "../../../../src/domain/interfaces/IFarmRepository";

let service: FarmService;
let serviceRepository: Mock<IFarmRepository>;

describe('Testing Farm Service Implementation', () => {

    const Promise_Rejection_Message = 'The serviceRepository.create() method 2nd call will always fail';

    beforeEach(() => {
        serviceRepository = mock<IFarmRepository>();
        service = new FarmService(serviceRepository);

        serviceRepository.getAll.mockImplementation(() => Promise.resolve(new Array<Farm>));
        serviceRepository.create.mockImplementation((farm: Farm) => Promise.resolve(farm));

        serviceRepository.getByNameAndLocation
            .mockImplementationOnce(() => Promise.resolve(null))
            .mockImplementationOnce(() => Promise.reject(Promise_Rejection_Message));
    });


    it('Should get all farms', async () => {

        let results = await service.getAll();

        expect(serviceRepository.getAll.mock.calls).toHaveLength(1);
    });


    it('Should create new farm', async () => {

        let farm: Farm = {
            name: 'Test farm',
            location: 'Test farm location'
        };

        //expect.assertions(1);

        let results = await service.create(farm);

        expect(serviceRepository.getByNameAndLocation.mock.calls).toHaveLength(1);
        expect(serviceRepository.create.mock.calls).toHaveLength(1);

    });


    it('Should not create new farm with existing name and location', async () => {

        // This test mimics adding a duplicated farm by making the 2nd call to create fail always 
        // (it will fail even if a different farm name and loc provided)
        // TODO: a mocking mechanism should be set on place so calls to create are rejected when the pair name and location already exists

        let farm: Farm = {
            name: 'Test farm',
            location: 'Test farm location'
        };

        let results = await service.create(farm);

        try {
            let results2 = await service.create(farm);
        }
        catch (error)
        {
            expect(error).toBe(Promise_Rejection_Message);
        }

        expect(serviceRepository.getByNameAndLocation.mock.calls).toHaveLength(2);
        expect(serviceRepository.create.mock.calls).toHaveLength(1);
    });     
});