import styled, { css } from 'styled-components';
import bgHeader from '../assets/images/bg-top.jpg';
import { Link } from 'react-router-dom';

export const BtnIcon = styled.button.attrs(({ type }) => ({
  type: type || 'default'
}))`
  background: #fdba00;
  cursor: pointer;
  border: 0;
  border-radius: 5px;
  padding: 5px 7px;
  color: #fff;
  font-size: 12px;
  margin-left: 5px;
  margin-top: 8px;

  &:hover {
    background: #85640c;
  }

  ${props =>
    props.type === 'outline' &&
    css`
      background: transparent;
      border: 1px solid #fdba00;
      border-radius: 5px 0 0 5px;
      font-size: 8px;
      margin: 0;
      color: #fdba00;
      padding: 4px 6px;
      cursor: pointer;

      &:hover {
        background: #fdba00;
        color: #fff;
      }
    `};

  ${props =>
    props.type === 'outline left' &&
    css`
      background: transparent;
      border: 1px solid #fdba00;
      border-radius: 5px 0 0 5px;
      font-size: 8px;
      margin: 0;
      color: #fdba00;
      padding: 4px 6px;
      cursor: pointer;

      &:hover {
        background: #fdba00;
        color: #fff;
      }
    `};

  ${props =>
    props.type === 'outline right' &&
    css`
      background: transparent;
      border: 1px solid #fdba00;
      border-radius: 0 5px 5px 0;
      font-size: 8px;
      margin: 0;
      color: #fdba00;
      padding: 4px 6px;
      cursor: pointer;

      &:hover {
        background: #fdba00;
        color: #fff;
      }
    `};

  ${props =>
    props.type === 'small invert' &&
    css`
      background: #eaeaea;
      cursor: pointer;
      border: 0;
      border-radius: 5px;
      padding: 4px 5px;
      color: #fff;
      font-size: 10px;
      margin-left: 5px;
      margin-top: 10px;

      &:hover {
        background: #fdba00;
      }
    `}
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 100%;
  grid-template-areas:
    'top'
    'content';
  height: 100%;
`;

export const HeaderSection = styled.div`
  grid-area: top;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${bgHeader}) no-repeat;
  background-size: cover;
  color: #fff;

  a {
    position: absolute;
    left: 10px;
    background: #fff;
    padding: 12px;
    border-radius: 10px;

    &:hover {
      background: #fdba00;
      color: #fff;
    }
  }
`;

export const ContentSection = styled.div`
  padding: 2rem 0;
  grid-area: content;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1.5rem;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 4fr;
  }

  ${props =>
    props.detail &&
    css`
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: max-content;
      grid-row-gap: 1.5rem;
      padding: 0 1rem;

      @media (min-width: 500px) {
        grid-template-columns: 1fr;
      }
    `}
`;

export const MenuBox = styled.div`
  h3 {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
  }

  li {
    border: 1px solid #fdbb00;
    border-radius: 5px;
    padding: 5px;
    color: #fdbb00;
    text-align: center;
    margin-bottom: 5px;

    &:hover {
      background: #fdbb00;
      color: #fff;
    }

    &.active {
      background: #fdbb00;
      color: #fff;
    }
  }
`;

export const Box = styled.div`
  position: relative;
  min-width: 290px;
  max-width: 480px;
  background: #fff;
  margin-top: 2rem;
  padding: 20px;

  h1 {
    font-size: 44px;
    line-height: 1;
    padding-bottom: 20px;
    color: #abaaa3;
    border-bottom: 1px solid #e5e2d8;
  }

  .boxText {
    margin-top: 25px;
  }

  @media (min-width: 500px) {
    min-width: 1000px;
  }

  ${props =>
    props.notFound &&
    css`
      h1 {
        text-align: center;
        border-bottom: 0;
        font-size: 155px;
        color: #e4e0e0;
      }

      h2 {
        text-align: center;
        text-transform: uppercase;
        color: #fdbe01;
      }

      p {
        padding: 15px;
      }

      .box-button {
        text-align: center;
      }

      a {
        text-align: center;
        background: #eccd65;
        display: inline-block;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        color: #fff;

        &:hover {
          background: #fdbb00;
        }
      }
    `}
`;

export const BtnAddPost = styled(Link)`
  position: fixed;
  z-index: 9999;
  bottom: 50px;
  right: 50px;
  background: #ffc107;
  font-size: 26px;
  border-radius: 100px;
  padding: 15px 20px;
  color: #fff;
  box-shadow: 2px 3px 7px grey;

  @media (max-width: 500px) {
    bottom: 15px;
    right: 10px;
  }
`;

export const PostControl = styled.div`
  position: absolute;
  top: -40px;
  right: 0;
`;

export const ListPosts = styled.div`
  .posts-order-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #fdbb00;
  }
`;

export const PostGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  grid-auto-rows: minmax(350px, auto);
  min-width: 312px;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
    min-width: 984px;
  }
`;

export const ItemGrid = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  width: 280px;
  padding: 1rem;

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 40px;
    line-height: 1.2;
    color: #a3aaab;
  }
`;

export const InfoPost = styled.div`
  display: flex;
  align-items: center;

  .item {
    display: flex;
    align-items: center;
    height: 30px;
    margin-right: 10px;
    font-size: 14px;

    .icon {
      margin-right: 10px;
    }
  }
`;

export const ListComment = styled.div`
  .comment-order-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    h3 {
      color: #fdba00;
    }
  }
`;

export const Comment = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 20px;

  .comment-user-avatar {
    padding-right: 10px;
  }

  .comment-box {
    flex: 1;
    background: #fbfbfb;
    padding: 8px;
  }
  span {
    font-size: 12px;
  }

  .comment-text {
    margin-top: 15px;
    font-size: 14px;
  }
`;

export const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
`;

export const SelectSort = styled.div`
  select {
    padding: 2px;
    border-radius: 0;
    border: 1px solid #ccc;
    margin-bottom: 0;
  }
`;

export const AddComment = styled.div`
  margin-top: 30px;

  h3 {
    color: #fdba00;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  input,
  textarea,
  select {
    margin-bottom: 15px;
    border: 1px solid #fdba00;
    border-radius: 5px;
    padding: 10px;
    flex: 1;
  }

  button {
    float: right;
    cursor: pointer;
    background: #fdba00;
    border: 0;
    border-radius: 5px;
    padding: 10px 50px;
    color: #fff;

    &:disabled {
      background: #eaeaea;
      cursor: not-allowed;
    }
  }
  .txtEditComment {
    width: 260px;

    @media (min-width: 500px) {
      width: 470px;
    }
  }
`;

export const ControlRate = styled.div`
  margin-top: 15px;
  font-size: 14px;

  span {
    margin-right: 15px;
  }
`;
