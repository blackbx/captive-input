import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Input from './Input';
import { Props } from './Input.props';

const props: Props = {
	placeholder: 'email',
	name: 'name',
	dataTestId: 'input',
	className: 'any-class'
};

describe('Input', () => {
	it('Input should be defined', () => {
		const { getByTestId } = render(<Input {...props} />);
		const input = getByTestId('input');
		expect(input).toBeDefined();
		expect(input).not.toBeNull();
	});

	it('Pleaceholder should be defined', () => {
		const { getByPlaceholderText } = render(<Input {...props} />);
		const inputPlaceholder = getByPlaceholderText('email');
		expect(inputPlaceholder).toBeDefined();
		expect(inputPlaceholder).not.toBeNull();
	});

	it('Class should be defined', () => {
		const { container } = render(<Input {...props} />);
		const inputWithClass = container.querySelector('.Input');
		expect(inputWithClass).toBeDefined();
		expect(inputWithClass).not.toBeNull();
	});

	it('The added class should exist', () => {
		const { container } = render(<Input {...props} />);
		const inputWithClass = container.querySelector('.Input');
		if (inputWithClass !== null) {
			expect(inputWithClass.className).toContain('any-class');
		}
	});

	it('onChange works', () => {
		const handleChange = jest.fn();
		const {
			container: { firstChild: input }
		} = render(<Input {...props} onChange={handleChange} />);
		fireEvent.change(input as HTMLInputElement, { target: { value: 'a' } });
		expect(handleChange).toHaveBeenCalledTimes(1);
	});
});
