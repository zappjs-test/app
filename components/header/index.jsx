import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
}

Header.defaultProps({
    username: ''
});

Header.propTypes = {
    username: PropTypes.string
};

export default connect()(Home);
