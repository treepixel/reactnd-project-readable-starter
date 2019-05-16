import React from 'react';
import { connect } from 'react-redux';
import { handleVotePost } from '../actions/posts';
import { formatDate } from '../utils/helpers';
import { FaRegClock, FaRegStar, FaRegCommentAlt } from 'react-icons/fa';
import ButtonIcon from './ButtonIcon';
import { InfoPost } from '../styles';

const PostInfo = ({ post, dispatch }) => {
  function handleBtVote(id, option) {
    const data = { option };
    dispatch(handleVotePost(id, data));
  }

  return (
    <InfoPost>
      <div className="item">
        <FaRegClock color="#FDBA00" className="icon" />
        {' ' + formatDate(post.timestamp)}
      </div>
      <div className="item">
        <FaRegCommentAlt color="#FDBA00" className="icon" />
        {' ' + post.commentCount + ' '}
      </div>
      <div className="item">
        <FaRegStar color="#FDBA00" className="icon" />
        {' ' + post.voteScore + ' '}
      </div>
      <div className="item">
        <ButtonIcon
          action={() => handleBtVote(post.id, 'downVote')}
          icon="FaMinus"
          type="outline left"
        />
        <ButtonIcon
          action={() => handleBtVote(post.id, 'upVote')}
          icon="FaPlus"
          type="outline right"
        />
      </div>
    </InfoPost>
  );
};

export default connect()(PostInfo);
