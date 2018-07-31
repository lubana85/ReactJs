import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Photo extends Component {

    /**
     * Constructor
     * @param props
     */
  constructor(props) {
    super(props);
  }

    /**
     * render
     * @returns {*}
     */
  render() {

    const title = this.props.title;
    return (
    <div className="albums">
      <div className="album">
          {title}
      </div>
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
