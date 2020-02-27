import * as React from "react";
import Cookies from "js-cookie";

export interface CookieConsentProps {
  buttonText?: Function | React.ReactNode;
  cookieName?: string;
}

export default class CookieConsent extends React.Component<CookieConsentProps, {}> { }

export { Cookies };