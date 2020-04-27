import React from 'react';
import { connect } from 'react-redux';
import Confirm from '../../../containers/Confirm';
import _get from 'lodash/get';
import {deleteSubmission, resetSubmissions, selectError, Errors} from 'react-formio';
import {push, goBack} from 'connected-react-router';

const Delete = props => (
  <div>
    <Errors errors={props.errors} />
    <Confirm {...props} />
  </div>
)


const mapStateToProps = (state) => {
  return {
    message: `Are you sure you wish to delete the signature "${_get(state, 'signature.submission.submission.data.title', '')}"?`,
    errors: [
      selectError('submission', state),
      selectError('form', state)
    ],
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onYes: () => {
      dispatch(deleteSubmission('signature', ownProps.match.params.signatureId, null, (err) => {
        if (!err) {
          dispatch(resetSubmissions('signature'));
          dispatch(push(`/signature`));
        }
      }));
    },
    onNo: () => {
      dispatch(goBack());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Delete)
