import React from 'react';
import PropTypes from 'prop-types'

export const Link = ({ active, onClick, children }) => {
    if (active) {
        return (<span>{ children }</span>)
    }

    return (
        <a onClick={(e) => {
            e.preventDefault();
            onClick();
        }} href="#">{ children }</a>
    );
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};
