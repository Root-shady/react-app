import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


const HomePage = ({isAuthenticated, logout}) => (
    <div>
        <h1>Home Page</h1>
        { isAuthenticated ? <button onClick={() => logout()}>Loggout </button> : <Link to="/login">Login</Link>}
    </div>
)


function mapStateToProps(state){
    return {
        isAuthenticated: !! state.user.token
    }
}

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout })(HomePage);