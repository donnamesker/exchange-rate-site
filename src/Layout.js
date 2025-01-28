import React from 'react';
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { BriefcaseFill } from 'react-bootstrap-icons';

const Layout = (props) => {
  const currentYear = new Date().getFullYear();
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 ms-2 h1">Currency Exchange Rates</span>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="py-3 px-5 bg-light">
        <div className="me-3 d-inline-block">
            <a className="text-secondary text-decoration-none"  href="https://imagegardeninc.com/web/" target="_blank"><BriefcaseFill /> Portfolio</a>
        </div>
        <div className="me-3 d-inline-block">
            <a className="text-secondary text-decoration-none"  href="https://github.com/donnamesker" target="_blank"><Github /></a>
        </div>
        <div className="me-3 d-inline-block">
            <a className="text-secondary text-decoration-none" href="https://linkedin.com/in/donna-mesker-5069a869" target="_blank"><Linkedin /></a>
        </div>
        <div className="d-inline-block text-secondary float-end"><small>&copy; { currentYear } Image Garden Inc.</small></div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;