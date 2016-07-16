import React from 'react';
import { Link } from 'react-router';
import Photo from './photo';
import Comments from './comments';

const Single = React.createClass({
  render() {
    // index of post
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postId);

    // get us the post
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
      </div>
    );
  },
});

export default Single;
