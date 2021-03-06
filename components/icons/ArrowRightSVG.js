// Styles
import './styles/ArrowRightSVG.scss';

const ArrowRightSVG = () => {
	return (
		<svg
			className="arrow-right"
			width="36"
			height="36"
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line className="arrow-right__stroke" x1="16.6171" y1="34.2947" x2="34.2947" y2="16.617" strokeWidth="3" />
			<line className="arrow-right__stroke" x1="34.2948" y1="18.7383" x2="16.6171" y2="1.06067" strokeWidth="3" />
		</svg>
	);
};

export { ArrowRightSVG };
