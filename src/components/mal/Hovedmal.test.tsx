import React from 'react';
import ReactDOM from 'react-dom';
import Hovedmal from './Hovedmal';
import Enzyme from 'enzyme';

describe(Hovedmal, () => {
	const cssBtnLeggTil = '#btn-legg-til-situasjon';

	it('rendrer uten å krasje', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Hovedmal />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('Skal vise "Legg til" knapp', () => {
		const wrapper = Enzyme.shallow(<Hovedmal />);
		const btnLeggTil = wrapper.find(cssBtnLeggTil);
		expect(btnLeggTil.prop('hidden')).toEqual(false);
	});

	it('Skal ikke vise alternativer', () => {
		const wrapper = Enzyme.shallow(<Hovedmal />);
		const collapse = wrapper.find('Collapse');
		expect(collapse).toHaveLength(0);
	});

	it('Skal vise alternativer når man trykker på legg til knapp', () => {
		const wrapper = Enzyme.shallow(<Hovedmal />);
		const btnLeggTil = wrapper.find(cssBtnLeggTil);

		btnLeggTil.simulate('click');

		const collapse = wrapper.find('Collapse');
		expect(collapse.prop('isOpened')).toEqual(true);
	});

	it('Skal skjule "Legg til" knapp når man trykker på den', () => {
		const wrapper = Enzyme.shallow(<Hovedmal />);
		const btnLeggTil = wrapper.find(cssBtnLeggTil);

		btnLeggTil.simulate('click');
		expect(wrapper.find(cssBtnLeggTil).prop('hidden')).toEqual(true);
	});
});
