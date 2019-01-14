// Styles
import './styles/LaunchSVG.scss';

const LaunchSVG = () => {
	return (
		<svg
			className="launch"
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line className="launch__stroke" x1="25.5" y1="27" x2="25.5" y2="-1.77621e-06" strokeWidth="3" />
			<line className="launch__stroke" x1="27" y1="1.5" x2="1.31134e-07" y2="1.5" strokeWidth="3" />
			<line className="launch__stroke" x1="26.0358" y1="1.73565" x2="1.06076" y2="26.7107" strokeWidth="3" />
		</svg>
	);
};

export { LaunchSVG };
