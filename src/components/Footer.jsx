import React from 'react';
import { FilterLink } from '../containers/FilterLink';

export let Footer = () => {
    return (
        <div>
            <FilterLink filter="SHOW_ALL">
                Show All
            </FilterLink>
            {' '}
            <FilterLink filter="SHOW_ACTIVE">
                Show Active
            </FilterLink>
            {' '}
            <FilterLink filter="SHOW_COMPLETED">
                Show Completed
            </FilterLink>
        </div>
    );
}
