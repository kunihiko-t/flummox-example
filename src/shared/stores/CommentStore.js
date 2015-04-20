import { Store } from 'flummox';
import Immutable from 'immutable';

export default class CommentsStore extends Store {

  constructor(flux) {
    super();

    let commentActionIds = flux.getActionIds('comments');

    this.register(commentActionIds.getComments, this.handleGetComments);
    this.register(commentActionIds.postComment, this.handlePostComment);

    this.state = {
      data: Immutable.Map(),
    };
  }

  handleGetComments(comments) {
    comments = comments.comments;

    this.setState({
      data: comments
    });
  }

  handlePostComment(comments) {
    this.handleGetComments(comments);
  }

  getComments(){
    return this.state.data
  }


}
