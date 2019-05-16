import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { receivePostsByCategory } from '../actions/posts';
import { handleInitialData } from '../actions/shared';
import Header from './Header';
import MenuCategories from './MenuCategories';
import PostList from './PostList';
import { Wrapper, ContentSection, Container, BtnAddPost } from '../styles';

class PagePosts extends Component {
  componentDidMount() {
    const { category } = this.props.match.params;
    const { getData } = this.props;

    getData(category);
  }

  componentDidUpdate(prevProps, prevState) {
    const { category } = this.props.match.params;
    const { getData } = this.props;

    if (category !== prevProps.match.params.category) {
      getData(category);
    }
  }

  render() {
    const { categories, posts } = this.props;
    const { category } = this.props.match.params;
    return (
      <Fragment>
        <Wrapper>
          <Header />
          <ContentSection>
            <Container>
              <MenuCategories
                categories={categories}
                currentCategory={category}
              />
              <PostList posts={posts} />
            </Container>
          </ContentSection>
        </Wrapper>
        <BtnAddPost to="/posts/new">
          <FaPlus />
        </BtnAddPost>
      </Fragment>
    );
  }
}

function mapStateToProps({ categories, posts }) {
  return {
    categories,
    posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: category => {
      if (category) {
        dispatch(receivePostsByCategory(category));
      } else {
        dispatch(handleInitialData());
      }
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagePosts);
