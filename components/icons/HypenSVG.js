const HyphenSVG = ({ color, marginBottom }) => {
	return (
		<svg
			style={{ marginBottom: marginBottom, marginRight: 8 }}
			width="20"
			height="2"
			viewBox="0 0 20 2"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="20" height="2" fill={color} />
		</svg>
	);
};

export { HyphenSVG };
