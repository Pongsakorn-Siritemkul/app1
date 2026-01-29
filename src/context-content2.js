import React from "react";
import {userContext} from "./context"

export default function Content2() {
    let [user, setUser] = React.useContext(userContext);

    const contentStyle = {
        backgroundColor: '#ddd',
        padding: '10px',
        marginTop: '10px',
        textAlign: 'center'
    };
    
    const onClickSignin = (event) => {
        event.preventDefault();
        setUser('Guest');
    }

    return (
        <div style={contentStyle}>
        {
            (user) 
            ? <span>Hello, {user}</span> 
            : <span>Please <a href="" onClick={onClickSignin}>Signin</a></span>
        }
        </div>
    );
}