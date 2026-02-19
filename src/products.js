import React from "react";
import './products.css';

export default class Products extends React.Component {
    data = [
        ['React', 100],
        ['React Native', 80],
        ['Node.js', 70],
        ['MongoDB', 60],
        ['Express.js', 50]
      ]
    render() {
        return (
            <table border="1">
                <tr><th>ชื่อ</th><th>ราคา</th></tr>
            {
                this.data.map(d => {
                    return (<tr> <td>{d[0]}</td><td>{d[1]}</td></tr>)
                })
            }
            </table>
        )
    }
}