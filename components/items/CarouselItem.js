// Styles
import './styles/CarouselItem.scss';

// Components
import { HyphenSVG } from '../icons';

const CarouselItem = ({ category, name, shortDesc, url, slideDirection }) => {
	return (
		<div className={`landing-carousel__slide ${slideDirection}`} style={{ backgroundImage: `url(${url})` }}>
			<div className="landing-carousel__slide--content">
				<h3>
					<HyphenSVG color="#ffffff" marginBottom={6} /> {category}
				</h3>
				<h1>{name}</h1>
				<h3>{shortDesc}</h3>
			</div>
		</div>
	);
};

export { CarouselItem };
