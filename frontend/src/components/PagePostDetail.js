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
  handleDelete = id => {
    this.props.dispatch(handleDeletePost(id));
    this.props.history.push('/');
  };

  render() {
    const { post, history } = this.props;

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
                <ButtonIcon
                  icon="FaTimes"
                  action={() => this.handleDelete(post.id)}
                />
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

export default withRouter(connect(mapStateToProps)(PagePostDetail));
