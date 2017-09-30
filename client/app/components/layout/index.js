import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.object.isRequired
};

export default Layout;
