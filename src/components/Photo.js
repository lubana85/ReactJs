import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Photo extends Component {
    /**
     * render
     * @returns {*}
     */
  render() {

    const title = this.props.title;
    return (
     <div className="photo">
        <a href={url} className="link">
        <img src={thumbnailUrl} />
        <br/>
        {title}
        </a>
    </div>
    );
  }
}

Photo.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};
Photo.defaultProps = {
    id: '1',
    title: '',
};

export default Photo;
