// Styles
import './styles/LandingSection.scss';
import { GithubSVG, HyphenSVG, LinkedinSVG, TwitterSVG, LogoSVG } from '../icons';

const socials = [
	{ icon: <GithubSVG />, url: 'https://github.com/KyleLawson16' },
	{ icon: <LinkedinSVG />, url: 'https://www.linkedin.com/in/kylejlawson/' },
	{ icon: <TwitterSVG />, url: 'https://twitter.com/KyleLaws0n' }
];
const LandingSection = ({ data }) => {
	return (
		<div className="landing-section">
			<div className="landing-section__content">
				<p>
					<HyphenSVG color="#44a5ff" marginBottom={4} /> {data.fields.heading}
				</p>
				<h1>{data.fields.title}</h1>
				<h3>{data.fields.subtitle}</h3>
			</div>

			<div className="landing-section__footer">
				<div className="landing-section__logo">
					<LogoSVG />
				</div>
				{socials.map((i, idx) => (
					<a key={idx} className="landing-section__footer--social" href={i.url} target="__blank">
						{i.icon}
					</a>
				))}
			</div>
		</div>
	);
};

export { LandingSection };
