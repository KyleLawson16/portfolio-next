// Content
import { createClient } from '../common/contentful';

// Styles
import '../_global.scss';
import './styles/index.scss';

// Components
import { HeadCommon } from '../components/seo';
import { LandingSection } from '../components/sections';
import { LandingCarousel } from '../containers/carousels';

const Index = ({ pageContent, projects }) => (
	<div className="container">
		<HeadCommon title={'Page Title'} description={'Page Description'} />
		<div className="content-container">
			<LandingSection data={pageContent} projects={projects} />
			<LandingCarousel data={projects} />
		</div>

		<div className="blue-background" />
	</div>
);

Index.getInitialProps = async () => {
	const client = createClient();
	const pageContent = await client.getEntries({
		'fields.id': 'landing',
		content_type: 'page'
	});
	const projects = await client.getEntries({
		content_type: 'project'
	});
	console.log(projects);
	return { pageContent: pageContent.items[0], projects: projects.items };
};

export default Index;
