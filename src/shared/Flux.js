import { Flummox } from 'flummox';

import CommentActions from './actions/CommentActions';
import CommentStore from './stores/CommentStore';

export default class Flux extends Flummox {
  constructor() {
    super();

    this.createActions('comments', CommentActions);
    this.createStore('comments', CommentStore, this);

  }
}
