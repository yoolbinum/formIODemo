import { Link, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import View from './View'
import Edit from './Edit'
import Delete from './Delete'
import {getForm, getSubmission} from "react-formio";

const Item = class extends Component {
  constructor() {
    super();

    this.state = {
      signatureId: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.signatureId !== prevState.signatureId) {
      nextProps.getForm();
      nextProps.getSubmission(nextProps.match.params.signatureId);
    }

    return {
      signatureId: nextProps.match.params.signatureId
    };
  }

  render() {
    const {match: {params: {signatureId}}} = this.props;
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to={`/signature`}>
              <i className="fa fa-chevron-left"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/signature/${signatureId}`}>
              <i className="fa fa-eye"></i> View
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/signature/${signatureId}/edit`}>
              <i className="fa fa-edit"></i> Edit
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/signature/${signatureId}/delete`}>
              <i className="fa fa-trash"></i> Delete
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/signature/:signatureId" component={View} />
          <Route path="/signature/:signatureId/edit" component={Edit} />
          <Route path="/signature/:signatureId/delete" component={Delete} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getForm: () => dispatch(getForm('signature')),
    getSubmission: (id) => dispatch(getSubmission('signature', id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
