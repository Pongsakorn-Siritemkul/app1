import React from 'react';
import {userContext} from './context';
import Header2 from './context-header2';
import Content2 from './context-content2';

export default function App() {
  let [user, setUser] = React.useState("Guest");
  return (
    <userContext.Provider value={[user,setUser]}>
      <Header2 />
      <Content2 />
    </userContext.Provider>
  )
}
