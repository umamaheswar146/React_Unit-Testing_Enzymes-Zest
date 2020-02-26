import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Footer from './Components/Footer';
it('It Should Test App Component',()=>{
    const wrapper = shallow(<App/>)
    const footter = wrapper.find(Footer)
    const ticket= wrapper.find('Ticket')
    expect(footter.exists()).toBe(true)
    expect(ticket.exists()).toBe(true)
})