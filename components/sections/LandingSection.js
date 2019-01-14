// Styles
import './styles/LandingSection.scss';
import { GithubSVG, HyphenSVG, LinkedinSVG, TwitterSVG } from '../icons';

const socials = [
	{ icon: <GithubSVG />, url: 'https://github.com' },
	{ icon: <LinkedinSVG />, url: 'https://linkedin.com' },
	{ icon: <TwitterSVG />, url: 'https://twitter.com' }
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
				{socials.map((i, idx) => (
					<a key={idx} className="landing-section__footer--social" href={i.url}>
						{i.icon}
					</a>
				))}
			</div>
		</div>
	);
};

export { LandingSection };
