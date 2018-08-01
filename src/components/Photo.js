import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Photo extends Component {
    /**
     * render
     * @returns {*}
     */
  render() {

    const { title, url, thumbnailUrl }  = this.props;
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
  id: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string,
};
Photo.defaultProps = {
    title: '',
    url: '',
    thumbnailUrl: '',
};

export default Photo;
