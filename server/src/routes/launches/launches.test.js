const request =  require('supertest');
const app = require('../../../app');






describe('Test GET /launches', () => {
    test('TEST: Successful response should result in status 200', async () =>{
        const response = await request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200);
    });
}); 


//Test for Succesful post request
describe('Test POST /launches', () => {
    const completeData = {
        mission : 'USS Retrospec',
        rocket: 'NCC 1701-D',
        target: 'Kepler-186 f',
        launchDate: 'January 4, 2484'
    };

    const noDateData = {
            mission : 'USS Retrospec',
            rocekt: 'NCC 1701-D',
            target: 'Kepler-186 f',

    };

    test("Succesful repsonse should be 201", async () => {
        const response = await request(app)
        .post('/launches')
        .send(completeData)
        .expect(201);


        // const requestDate = new Date(completeData.launchDate.valueOf());
        // const repsoneDate = new Date(response.body.launchDate.valueOf());
        // expect(repsoneDate).toStrictEqual(requestDate);

        // //checking response has the same object parameters
        // expect(response.body).toMatchObject(noDateData);

    });


    test("Test for Missing Parameters", async () => {
        const response = await request(app) 
        .post('/launches')
        .send(noDateData)
        .expect('Content-Type', /json/)
        .expect(400);

        expect(response.body).toStrictEqual({
            error: 'Missing required launch property',
        });
    });



    test("Test for Invalid date type", async () => {
        const response = await request(app)
        .post('/launches')
        .send(completeData)
        .expect('Content-Type', /json/)
        .expect(401);


        expect(response.body).toStrictEqual({
            error : `Invalid Type: Date should not be in ${type(completeData.launchDate)} format`,
        });
    });
});


