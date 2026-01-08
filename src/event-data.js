import React from 'react';

export function Eventdata2() {

    const onclickStartStop = (ev) => {
        let t = ev.target.innerText
        let s = (t === 'Start') ? 'Stop' : 'Start'
        ev.target.innerText = s
    }

    const onClickAdd = (ev) => {
        let t = ev.target.innerText
        let r = eval(t)
        alert(`${t} = ${r}`)
    }

    return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <button onClick={(ev) => onclickStartStop(ev)}>Start</button>&nbsp;&nbsp;
                <br /><br />
                <button onClick={(ev) => onClickAdd(ev)}>10 + 20</button>&nbsp;
                <br /><br />
                <button onClick={(ev) => onClickAdd(ev)}>30 * 40</button>&nbsp;
                <br /><br />
            </div>
    )
}