import React from "react";
import {userContext} from "./context"

export default function Content() {
    let user = React.useContext(userContext);

    const contentStyle = {
        backgroundColor: '#ddd',
        padding: '10px',
        marginTop: '10px',
        textAlign: 'center'
    };
    return (
        <div style={contentStyle}>
            <h2>Hello, {user}!</h2>
        </div>
    );
}