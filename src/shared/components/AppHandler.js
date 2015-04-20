import React from 'react';
import { State } from 'react-router';
import Immutable from 'immutable';
import CommentFormView from './CommentFormView';
import CommentListView from './CommentListView';
import FluxComponent from 'flummox/component';
import connectToStores from 'flummox/connect';


let AppHandler = React.createClass({

  statics: {
    async routerWillRun(state, flux) {
      let commentActions = flux.getActions('comments');
      return await commentActions.getComments();
    }
  },

  contextTypes: {
    flux: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    this.commentStore = this.context.flux.getStore('comments');
    return {data: this.commentStore.getComments()};
  },

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentListView data={this.props.data} />
          <FluxComponent flux={this.context.flux}>
            <CommentFormView />
          </FluxComponent>
      </div>
    );
  },

});

export default AppHandler;
