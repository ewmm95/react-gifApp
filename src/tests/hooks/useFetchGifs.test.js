import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from "@testing-library/react-hooks"

describe('Pruebas de hook useFetchGifs', () => {
    test('Debe retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    })

    test('Debe de retnornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data.length).toBe(14);
        expect(loading).toBe(false);
    })
    
    
})