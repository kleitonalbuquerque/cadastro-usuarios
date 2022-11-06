/* eslint-disable import/no-anonymous-default-export */
import "./Logo.css";
import logo from '../../assets/imgs/logo.png'

export default (props) => <aside className="logo">
  <a className="logo" href="/">
    <img src={logo} alt="logo" />
  </a>
</aside>;
