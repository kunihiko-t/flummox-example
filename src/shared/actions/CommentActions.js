import { Actions } from 'flummox';
import request from 'superagent';

export default class CommentActions extends Actions {

  async getComments() {
    let response = await request
      .get(`comments.json`)
      .query({
        per_page: 50,
      })
      .exec();

    return {
      comments: response.body,
    };
  }

  async postComment(author,text){
    let response = await request
      .post(`comments.json`)
      .type('form')
      .send({
        author: author,
        text: text
      })
      .exec();

      return {
        comments: response.body,
      };

  }

}
