import ReactDOM from "react-dom";
import React from 'react';
import UserSearch from "./refs/UserSearch";

const App = () => {
    return (
        <div>
            <UserSearch/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));