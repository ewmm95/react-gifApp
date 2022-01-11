import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGif fetch', () => {
    test('debe traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(14);
    })
    test('debe traer 10 elementos 2', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
        
})
