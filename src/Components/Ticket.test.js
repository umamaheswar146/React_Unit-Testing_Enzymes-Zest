import React from 'react';
import {shallow} from 'enzyme';
import Ticket from './Ticket';
it('Should test The Ticket Component',()=>{
    const wrapper = shallow(<Ticket/>);
    const htag1 = wrapper.find('h1.total');
    const hdata1=  htag1.text();
    expect(hdata1).toBe('0');
    const buttontag = wrapper.find('button');
    buttontag.simulate('click')
    const htag2 = wrapper.find('h1.total');
    const hdata2=  htag2.text();
    expect(hdata2).toBe('1');
})
it('Should test The Ticket Component',()=>{
    const wrapper = shallow(<Ticket name='Umamaheswar'/>);
    const data = wrapper.find('h1.heading').text();
    expect(data).toBe('Umamaheswar');
})