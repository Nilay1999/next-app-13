import React from 'react';

type CompassIconProps = {
	className?: string;
};

const CompassIcon: React.FC<CompassIconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className={className}>
			<path d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5Zm5.21 5.49a.75.75 0 0 0-.95-.95L9.51 9.04a.75.75 0 0 0-.47.47l-2.25 6.75a.75.75 0 0 0 .95.95l6.75-2.25c.22-.07.4-.25.47-.47ZM12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
		</svg>
	);
};

export default CompassIcon;
