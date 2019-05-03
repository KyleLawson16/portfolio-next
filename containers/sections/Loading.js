import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

// Styles
import "./styles/Loading.scss";

// Components
import { LogoSVG } from "../../components/icons";

export class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      time: 0
    };
  }
  componentDidMount() {
    this.setState({ mounted: true });
    this.fadeInTime = setTimeout(() => this.startCountDown(), 300);
  }
  componentWillUnmount() {
    clearInterval(this.intervalHandle);
    clearTimeout(this.fadeInTime);
  }
  tick = () => {
    if (this.state.time < 80) this.setState({ time: this.state.time + 1 });
    else {
      clearInterval(this.intervalHandle);
      this.setState({ slideDirection: "next" }, this.handleNext);
    }
  };
  startCountDown = () => {
    this.intervalHandle = setInterval(this.tick, 25);
  };
  render() {
    const { mounted, time } = this.state;

    return (
      <div className="loading-overlay">
        <ReactCSSTransitionGroup
          transitionName="loading__logo"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={0}
        >
          {mounted && (
            <div className="loading-overlay__content">
              <LogoSVG />

              <div style={{ height: 20 }} />

              <div className="loading-overlay__progress-bar">
                <div
                  className="loading-overlay__progress-bar--active"
                  style={{ width: time * 2 }}
                />
              </div>
            </div>
          )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
