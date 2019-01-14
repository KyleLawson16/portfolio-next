import React, { Component } from 'react';
import posed from 'react-pose';

// Style
import './styles/Stars.scss';

const Star = posed.div({
	hidden: { opacity: 0 },
	visible: { opacity: 1 }
});
class Stars extends Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0, stars: {} };
	}
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}
	updateWindowDimensions = () => {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	};
	componentDidUpdate(prevProps, prevState) {
		if (prevState.width === 0 && this.state.width > 0) {
			let stars = {};
			Array.apply(null, Array(this.props.count)).forEach((obj, i) => {
				stars = this.renderStar(stars);
			});
			this.setState({ stars });
		}
	}
	activateStar = (id) => {
		let stars = { ...this.state.stars };
		let star = { ...stars[id] };
		star.pose = 'visible';
		stars[id] = star;
		this.setState({ stars });
	};
	generateValue = (range, adj = 0, round = true) => {
		return round ? adj + Math.round(range * Math.random()) : adj + range * Math.random();
	};
	renderStar = (stars) => {
		let size = this.generateValue(2, 3),
			id = Math.random().toString(36).substr(2, 5);
		stars[id] = {
			left: this.generateValue(this.state.width),
			top: this.generateValue(this.state.height),
			backgroundColor: `rgba(255,255,255,${this.generateValue(0.5, 0.3, false)})`,
			width: size,
			height: size,
			borderRadius: size / 2,
			pose: 'hidden'
		};
		setTimeout(() => this.activateStar(id), Math.random() * 5000);
		return stars;
	};
	render() {
		return (
			<div className="stars">
				{Object.keys(this.state.stars).map((key, index) => {
					const { left, top, backgroundColor, width, height, borderRadius, pose } = this.state.stars[key];
					return (
						<Star
							key={key}
							className="stars__star"
							style={{ position: 'absolute', left, top, backgroundColor, width, height, borderRadius }}
							pose={pose}
						/>
					);
				})}
			</div>
		);
	}
}

export { Stars };
