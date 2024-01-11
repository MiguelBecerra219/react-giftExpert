import { getGift } from '../../src/helpers/getGifs'

/* eslint-disable */
describe('puerbas sobre getGift', () => { 
    test('debe de retornar un arreglo de gifs', async() => { 
        const gifs = await getGift('valorant')

        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({ 
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
         })
     })
})