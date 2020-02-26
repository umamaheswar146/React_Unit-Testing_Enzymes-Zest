import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';
it('Should test The Footer Component',()=>{
    const wrapper = shallow(<Footer/>);
    const Ptag= wrapper.find('p');
    const PtagDtaa=Ptag.text()
    expect( PtagDtaa).toBe('Checking Data 1-800-555-4444');
})