import React,{useState} from "react";

export default function MessageBox() {
    let [text, setText] = useState("Hello World");
    let [size, setSize] = React.useState(16);

    const onClickButton = () => {
        let t = prompt('กำหนดข้อความ')
        if(t){
            setText(t);
        }
    }

    const onClickZoomIn = () => {
        let newSize = size + 5;
        setSize(newSize);
    }

    let msgboxstyle = {
        display: 'inline-block',
        width: 350,
        fontSize: size,
        backgroundColor: '#ccc',
        padding: 5,
        textAlign: 'left',
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <div style={msgboxstyle}>{text}</div><br></br>
            <button onClick={onClickButton}>ข้อความ</button>&nbsp;
            <button onClick={onClickZoomIn}>ขยาย</button>&nbsp;
            <button onClick={() => setSize(size - 5)}>ย่อ</button>
        </div>
    )
}