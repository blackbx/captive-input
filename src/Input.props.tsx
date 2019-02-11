export interface Props {
	className?: string;
	placeholder?: string;
	elementType?: 'Input' | 'TextArea';
	value?: string;
	inputType?: string;
	autoFocus?: boolean;
	isValid?: boolean;
	name?: string;
	dataTestId?: string;
	theme?: 'default' | 'invalid' | 'halfWidth';
	onBlur?(e: React.FocusEvent): void;
	onFocus?(e: React.FocusEvent): void;
	onKeyDown?(e: React.KeyboardEvent): void;
	onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}
