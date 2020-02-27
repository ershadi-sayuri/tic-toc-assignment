import React, { Component } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

class CookieConsent extends Component {
  constructor(props) {
    super(props);
    this.accept.bind(this);

    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    const { cookieName } = this.props;

    // if cookie undefined 
    if (Cookies.get(cookieName) === undefined) {
      this.setState({ visible: true });
    }
  }

  /**
   * Set a persistent accept cookie
   */
  accept() {
    const {
      cookieName,
      cookieValue,
      hideOnAccept,
      onAccept
    } = this.props;

    // fire onAccept
    onAccept();

    Cookies.set(cookieName, cookieValue);

    if (hideOnAccept) {
      this.setState({ visible: false });
    }
  }

  render() {
    // If the bar shouldn't be visible don't render anything.
    if (!this.state.visible) {
      return null;
    }

    const {
      buttonText
    } = this.props;

    return (
      <div className="cookie-consent-component">
        <button className="accept-button"
          onClick={() => {
            this.accept();
          }}>
          {buttonText}
        </button>
        <div className="cookie-consent-content">
          {this.props.children}
        </div>

      </div>
    );
  }
}

CookieConsent.propTypes = {
  buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
  cookieName: PropTypes.string,
  children: PropTypes.any,
  hideOnAccept: PropTypes.bool,
  onAccept: PropTypes.func,
  cookieValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
};

CookieConsent.defaultProps = {
  buttonText: "Accept",
  cookieName: "CookieConsent",
  hideOnAccept: true,
  onAccept: () => { },
  cookieValue: true,
};

export default CookieConsent;
export { Cookies };