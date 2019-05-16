import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleDeletePost } from '../actions/posts';
import { withRouter, Redirect } from 'react-router-dom';
import Comments from './Comments';
import Header from './Header';
import ButtonIcon from './ButtonIcon';
import PostInfo from './PostInfo';
import {
  Wrapper,
  ContentSection,
  Container,
  Box,
  PostControl
} from '../styles';

class PagePostDetail extends Component {
  render() {
    const { post, history, deletePost } = this.props;

    if (post === undefined) {
      return <Redirect to="/404" />;
    }

    return (
      <Wrapper>
        <Header backTo="/" />
        <ContentSection>
          <Container detail>
            <Box>
              <PostControl>
                <ButtonIcon
                  icon="FaEdit"
                  action={() => history.push(`/posts/edit/${post.id}`)}
                />
                <ButtonIcon icon="FaTimes" action={() => deletePost(post.id)} />
              </PostControl>
              <h1>{post.title}</h1>
              <PostInfo post={post} />
              <div className="boxText">{post.body}</div>
            </Box>
            <Comments id={post.id} />
          </Container>
        </ContentSection>
      </Wrapper>
    );
  }
}

function mapStateToProps({ posts }, props) {
  const { id } = props.match.params;
  const post = posts.items.find(item => item.id === id);
  return { post };
}

function mapDispatchToProps(dispatch, { history }) {
  return {
    deletePost: id => {
      dispatch(handleDeletePost(id));
      history.push('/');
    }
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PagePostDetail)
);
