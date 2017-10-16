import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <div>
        <Header/>
        <div className="container-fluid">
            {children}
        </div>
        <Footer/>
    </div>
);

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

Layout.defaultProps = {
    children: null
};

export default Layout;
