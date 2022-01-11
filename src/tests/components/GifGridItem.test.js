import React from "react"
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem />', () => {
    const props = {
        title: 'Titulo',
        url: 'https://localhost:180908/login',
    };
    const wrapper = shallow(<GifGridItem {...props}/>);
    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(props.title)
    })
    test('debe de tener una imagen con el title y la url', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(props.url);
        expect(img.prop('alt')).toBe(props.title);
    })
    test('debe de tener la clase animate__zoomIn', () => {
        const div = wrapper.find('div');
        expect(div.prop('className').includes('animate__zoomIn')).toBe(true);
    })
    
})
