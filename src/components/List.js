import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo.js';
import { connect } from 'react-redux';
import { getList } from "./../actions/photo.js";

class List extends Component {

    componentWillMount() {
        this.props.getData();
    }

    /**
     * render
     * @returns {*}
     */
    render() {

        const { data, loading, error } = this.props;
        let loadingMessage = '';
        if (loading) {
            loadingMessage = 'loading .....';
        }

        let errorMessage = '';
        if (error) {
            errorMessage = 'error .....';
        }

        console.log(this.props);
        return (
            <div className="photos">
                {loadingMessage}
                {errorMessage}
                <ul>
                    {
                        data.length > 0 && data.map((item, index) =>
                            (<li key={index}><Photo title={item.title}></Photo></li>)
                        )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        loading: state.loading,
        error: state.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getList()),
    }
};

List.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string,
    dispatch: PropTypes.func,
};

List.defaultProps = {
    data: [],
    loading: true,
    error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
