import React from 'react'

export default function EnrollBtn(props) {

    const initialAction = () => {
        props.actions.initialAction();
    }

    return (
        <div>
            <button className='enroll-btn' onClick={() => initialAction()}>Enroll Now!</button>
        </div >
    )
}
