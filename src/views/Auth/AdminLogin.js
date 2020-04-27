import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-formio';
import { push } from 'connected-react-router'
import {AppConfig, AdminConfig} from '../../config';
import { setUser } from 'react-formio';

const AdminLogin = class  extends Component {
  render() {
    return (
      <Form {...this.props} />
    );
  }
}

const mapStateToProps = () => {
  return {
    src: AppConfig.projectUrl + '/' + AdminConfig.login.form
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitDone: (submission) => {
      dispatch(push(AdminConfig.authState));
      dispatch(setUser(submission));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLogin)
