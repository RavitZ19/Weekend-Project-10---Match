import React from 'react';
import {MdOutlineThumbUpOffAlt, MdOutlineThumbDownOffAlt} from 'react-icons/md';

class Button extends React.Component {

  render() {
    let { title, task } = this.props;
    return (
      <button onClick = {task}>
        {title}
      {/* <div><FiThumbsDown className='left-thumb' /></div>
      <div<FiThumbsup className='right-thumb' /></div> */}
      </button>
      )
  }
}

export default Button;