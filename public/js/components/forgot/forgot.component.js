import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import * as flashMessage  from '../../actions/flashMessage';

/**
 * Import custom components
 */
import FlashMessage from '../common/flash/message.component';
import renderText from '../common/form/renderText';

class ForgotForm extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        window.$('body').addClass('hold-transition login-page');
    }

    componentWillUnmount() {
        this.props.actions.removeFlashMessage();
    }

    handleSubmit(formProps) {
        //TODO
    }

    render() {
        let message = this.props.message;
        const {handleSubmit, submitting} = this.props;

        return (
            <div className="login-box">
                <div className="login-logo">
                    <a href="#">Forgot your password</a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Enter your email address and we'll send you a link to reset it.</p>

                    <FlashMessage message={message}/>

                    <form method="post" onSubmit={handleSubmit(this.handleSubmit)}>
                        <Field
                            name="email"
                            component={renderText}
                            type="email"
                            label="Email"
                        >
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </Field>

                        <div className="row">
                            <div className="col-xs-4">
                            </div>
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-flat"
                                        disabled={submitting}>Reset Password
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

ForgotForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

/**
 * Map the state to props.
 */
function mapStateToProps(state) {
    return {
        message: state.flash.message
    }
}

/**
 * Map the actions to props.
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(_.assign({}, flashMessage), dispatch)
    }
}

const validateForgot = values => {
    const errors = {};
    if (!values.email) {
        errors.email = '(The email field is required.)'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address.'
    }

    return errors
};

/**
 * Connect the component to the Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'ForgotForm', // ←A Unique identifier for this form
    validate: validateForgot  // ←Callback function for client-side validation
})(ForgotForm))