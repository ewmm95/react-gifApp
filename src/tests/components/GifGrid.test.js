import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => {
    const props = {
        category: 'categoria'
    };
    test('debe mostrar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid {...props}/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostrar los items cuando se cargan las imagenes', () => {
        const gifs = [{
            id: 'id',
            title: 'Titulo',
            url: 'https://localhost:180908/login',
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid {...props}/>);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
    
})
