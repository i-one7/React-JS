import React from 'react';

const Button = ({
	children,
	disable,
	click,
	type
}) => {
	return <button
		disabled={disable}
		type={type}
		onClick={click}
	>{children}</button>;
};

export default Button;