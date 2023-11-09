import React from 'react'

export default function StartSlow(props) {


    const { name, age, date } = props.state.userData;

    return (
        <div>
            <button className='final-message-btn' >Your name {name} aged {age} has been added to student system.
            Your appointment is scheduled on {date}. You may now exit.</button>
        </div >
    )
}
