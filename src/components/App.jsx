import React from 'react';
import { AddTodo } from './AddTodo';
import { VisibleTodoList } from '../containers/VisibleTodoList';
import { Footer } from './Footer';

export const App = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    )
};
