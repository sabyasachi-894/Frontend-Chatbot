import React from 'react'

export default function Date(props) {


    const dateFix = (dat) => {
        props.state.userData.date=dat;
        console.log(props.state.userData.date);
        props.actions.afterDateMessage();
    }

    return (
        <div>
            <button className='date-btn' onClick={() => dateFix("9/11/2023")}>9th Nov, Thu</button>
            <button className='date-btn second-btn' onClick={() => dateFix("10/11/2023")}>10th Nov, Fri</button>
            <button className='date-btn third-btn' onClick={() => dateFix("11/11/2023")}>11th Nov, Sat</button>
            <button className='date-btn fourth-btn' onClick={() => dateFix("12/11/2023")}>12th Nov, Sun</button>
        </div >
    )
}
