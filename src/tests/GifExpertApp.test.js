import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Pruebas de <GifExpertApp/>', () => {
    test('Debe comparar con snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe mostrar lista de categorias', () => {
        const props = {
            deffaultCategories: ['One Punch', 'HunterXHunter'],
        };
        const wrapper = shallow(<GifExpertApp {...props} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(props.deffaultCategories.length);
    })
    
})
