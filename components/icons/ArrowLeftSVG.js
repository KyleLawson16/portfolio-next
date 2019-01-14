// Styles
import './styles/ArrowLeftSVG.scss';

const ArrowLeftSVG = () => {
	return (
		<svg
			className="arrow-left"
			width="36"
			height="36"
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line className="arrow-left__stroke" x1="18.7384" y1="1.06066" x2="1.06073" y2="18.7383" strokeWidth="3" />
			<line className="arrow-left__stroke" x1="1.06066" y1="16.617" x2="18.7383" y2="34.2947" strokeWidth="3" />
		</svg>
	);
};

export { ArrowLeftSVG };
