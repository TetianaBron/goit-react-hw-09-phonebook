import React, { Component } from 'react';
import * as phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import './Notification.scss';
import selectors from '../../redux/phoneBook/phoneBook-selectors';
import authSelectors from '../../redux/auth/auth-selectors';
import authActions from '../../redux/auth/auth-actions';

class Notification extends Component {
    static propTypes = {
        message: PropTypes.string,
        errorPb: PropTypes.object,
        errorAuth: PropTypes.string,
        clearErrorPb: PropTypes.func,
        clearErrorPAuth: PropTypes.func
    };
   
   
    componentDidUpdate() {
         if (this.props.errorAuth) {
            setTimeout(() => {
                this.props.clearErrorAuth(this.state);
            }, 2500);
             return;
        }
           if (this.props.errorPb) {
            setTimeout(() => {
                this.props.clearErrorPb(this.state);
            }, 2500);
             return;
        }
    }
    
    render() {
        return (
            <CSSTransition
            in={this.props.message}
            timeout={250}
            classNames="Notification-fade"
            unmountOnExit>
            
        <div className="Overlay">
        <p className="Notification">
            {this.props.message}
        </p>
        </div>
        </CSSTransition>
        );
    };
}

const mapStateToProps = (state) => ({
    errorPb: selectors.getError(state),
    errorAuth: authSelectors.getError(state)
})

const mapDispatchToProps = dispatch => ({
    clearErrorPb: () => dispatch(phoneBookActions.clearError()),
    clearErrorAuth: () => dispatch(authActions.clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);

