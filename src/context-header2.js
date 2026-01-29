import React from "react";
import {userContext} from "./context"

export default class Header extends React.Component{
    static contextType = userContext

    render(){
        let [user, setUser] = this.context

        const headerStyle = {
            backgroundColor:'#dddddd',
            padding:'10px',
            marginTop:'10px',
            textAlign:'center'
        }

        const onClickSignout = (event) => {
            event.preventDefault()
            setUser('')
        }

        const onClickSignin = (event) => {
            event.preventDefault()
            setUser('Guest')
        }

        return(
        <div style={headerStyle}>
            <a href="">Home</a>&nbsp;-&nbsp;
            <a href="">Products</a>&nbsp;-&nbsp;
            <a href="">Contact Us</a>&nbsp;-&nbsp;
            {
                (user)
                ?<span>[{user}&nbsp;:&nbsp;<a href="" onClick={onClickSignout}>Signout</a>]</span>
                :<span>[<a href="" onClick={onClickSignin}>Signin</a>]</span>
            }
        </div>
        )
    }   
}