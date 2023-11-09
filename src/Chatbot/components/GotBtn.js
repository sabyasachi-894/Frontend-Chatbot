import React from 'react'

export default function GotBtn(props) {

    const afterGotMessage = () => {
        props.actions.afterGotMessage();
    }

    return (
        <div>
            <button className='got-btn' onClick={() => afterGotMessage()}>Got It!</button>
        </div >
    )
}
