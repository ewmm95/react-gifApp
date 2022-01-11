import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en componente <AddCategory/>', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Texto de prueba';
        input.simulate('change', { target: { value } } );
        expect(wrapper.find('input').prop('value')).toBe(value);
    });
    
    test('No debe postear la informacion en submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('Debe de llamar el set categories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'HunterXHunter';
        input.simulate('change', { target: { value } } );
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
})
