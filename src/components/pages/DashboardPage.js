import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import PropTypes from 'prop-types';

const DashboardPage = ({isConformed}) => (
    <div>
        {!isConformed && <ConfirmEmailMessage />}
    </div>
);

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired
};

function mapStatetoProps(state) {
    return {
        isConformed: !! state.user.confirmed
    };
}

export default connect(mapStatetoProps)(DashboardPage)