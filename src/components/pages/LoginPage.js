import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';

class LoginPage extends React.Component {
    submit = data => this.props.login(data).then(() => this.props.history.push("/dashboard")) 

    render() {
        return (
            <div>
                <h1>Ligin Page</h1>
                <LoginForm submit={this.submit} />
            </div>
        );
    }
}

LoginPage.protoTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, {login})(LoginPage)