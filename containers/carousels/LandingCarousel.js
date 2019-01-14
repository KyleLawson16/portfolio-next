import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Components
import { CarouselItem } from '../../components/items';

// Styles
import './styles/LandingCarousel.scss';
import { ArrowLeftSVG, ArrowRightSVG, LaunchSVG } from '../../components/icons';

class LandingCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSlide: 0,
			slideDirection: '',
			time: 0
		};
	}
	componentDidMount() {
		this.setState({ slideDirection: 'next' });
		this.startCountDown();
	}
	componentWillUnmount() {
		clearInterval(this.intervalHandle);
		clearTimeout(this.animationTimeout);
	}
	handleNext = () => {
		clearInterval(this.intervalHandle);
		const { activeSlide } = this.state;
		if (activeSlide === this.props.data.length - 1) this.setState({ activeSlide: 0 });
		else this.setState({ activeSlide: activeSlide + 1 });
		this.setState({ isAnimating: true, time: 0 });
		this.animationTimeout = setTimeout(() => this.setState({ isAnimating: false }), 500);
		this.startCountDown();
	};
	handlePrev = () => {
		clearInterval(this.intervalHandle);
		const { activeSlide } = this.state;
		if (activeSlide === 0) this.setState({ activeSlide: this.props.data.length - 1, isAnimating: true, time: 0 });
		else this.setState({ activeSlide: activeSlide - 1, isAnimating: true, time: 0 });
		this.animationTimeout = setTimeout(() => this.setState({ isAnimating: false }), 500);
		this.startCountDown();
	};
	tick = () => {
		if (this.state.time < 90) this.setState({ time: this.state.time + 1 });
		else {
			clearInterval(this.intervalHandle);
			this.setState({ slideDirection: 'next' }, this.handleNext);
		}
	};
	startCountDown = () => {
		this.intervalHandle = setInterval(this.tick, 55);
	};
	render() {
		const { data } = this.props;
		const { activeSlide, slideDirection, isAnimating } = this.state;
		return (
			<div>
				<div className={'landing-carousel'}>
					<div className="landing-carousel__content">
						<ReactCSSTransitionGroup
							transitionName="anim__carousel__slide"
							transitionEnterTimeout={500}
							transitionLeaveTimeout={500}
						>
							<CarouselItem
								category={data[activeSlide].fields.category}
								name={data[activeSlide].fields.name}
								shortDesc={data[activeSlide].fields.shortDesc}
								url={data[activeSlide].fields.carouselImage.fields.file.url}
								key={activeSlide}
								slideDirection={slideDirection}
							/>
						</ReactCSSTransitionGroup>
					</div>
				</div>
				<div className="landing-carousel__launch-btn">
					<a href={data[activeSlide].fields.href} target="__blank">
						<LaunchSVG />
					</a>
				</div>
				<div className="landing-carousel__controls">
					<div className="landing-carousel__controls--progress">
						<p>0{activeSlide + 1}</p>
						<div className="landing-carousel__controls--progress-bar">
							<div
								className="landing-carousel__controls--progress-bar__active"
								style={{ width: this.state.time * 2 }}
							/>
						</div>
						<p>0{data.length}</p>
					</div>
					<div
						className="landing-carousel__controls--arrow"
						onClick={() => {
							if (!isAnimating) this.setState({ slideDirection: 'prev' }, this.handlePrev);
						}}
					>
						<ArrowLeftSVG />
					</div>
					<div
						className="landing-carousel__controls--arrow"
						onClick={() => {
							if (!isAnimating) this.setState({ slideDirection: 'next' }, this.handleNext);
						}}
					>
						<ArrowRightSVG />
					</div>
				</div>
			</div>
		);
	}
}

export { LandingCarousel };
