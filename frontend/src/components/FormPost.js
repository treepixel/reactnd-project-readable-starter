import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddPost, handleEditPost } from '../actions/posts';
import { generateUID } from '../utils/helpers';
import Header from './Header';
import { Wrapper, ContentSection, Container, Box, Form } from '../styles';

class FormPost extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: ''
  };

  componentDidMount() {
    const { post } = this.props;

    if (post !== undefined) {
      this.fillStateWithPost();
    }
  }

  fillStateWithPost = () => {
    const { title, body, author, category } = this.props.post;

    this.setState(() => ({
      title,
      body,
      author,
      category
    }));
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(() => ({
      [name]: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.post) {
      this.editPost();
    } else {
      this.newPost();
    }
  };

  newPost = () => {
    let data = {
      id: generateUID(),
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category
    };

    this.props.dispatch(handleAddPost(data));

    this.redirectTo('/');
  };

  editPost = () => {
    const { id, category } = this.props.post;

    let data = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.dispatch(handleEditPost(id, data));
    this.redirectTo(`/${category}/${id}`);
  };

  redirectTo = url => {
    this.props.history.push(url);
  };

  render() {
    const { title, body, author, category } = this.state;
    const { categories, post } = this.props;

    return (
      <Wrapper>
        <Header backTo={post ? `/posts/${post.id}` : '/'} />
        <ContentSection>
          <Container detail>
            <Box>
              <h3>{post ? 'Edit' : 'New'} Post</h3>

              <Form onSubmit={this.handleSubmit}>
                <label>Title:</label>
                <input
                  name="title"
                  type="text"
                  placeholder="Write here your title"
                  value={title}
                  onChange={this.handleChange}
                />

                <label>Body:</label>
                <textarea
                  name="body"
                  placeholder="Write here your post"
                  rows={10}
                  value={body}
                  onChange={this.handleChange}
                />

                <label>Category:</label>
                <select
                  name="category"
                  value={category}
                  onChange={this.handleChange}
                  disabled={post}
                >
                  <option value="">Select the category</option>
                  {categories.items !== undefined &&
                    categories.items.map(categoria => (
                      <option key={categoria.name} value={categoria.name}>
                        {categoria.name}
                      </option>
                    ))}
                </select>

                <label>Author:</label>
                <input
                  name="author"
                  type="text"
                  placeholder="Author"
                  value={author}
                  onChange={this.handleChange}
                  disabled={post}
                />

                <div>
                  <button
                    type="submit"
                    disabled={
                      title === '' ||
                      body === '' ||
                      author === '' ||
                      category === ''
                    }
                  >
                    {post ? 'Update' : 'Create'}
                  </button>
                </div>
              </Form>
            </Box>
          </Container>
        </ContentSection>
      </Wrapper>
    );
  }
}

function mapStateToProps({ categories, posts }, props) {
  const { id } = props.match.params;
  const post = posts.items.find(item => item.id === id);
  return {
    categories,
    post
  };
}

export default connect(mapStateToProps)(FormPost);
