import React from 'react';

const MessageParser = ({ children, actions }) => {
    // console.log(children.props.state)
    const { checker } = children.props.state;
    const parse = (message) => {
        if (checker === "got") {
            let val=message.toLowerCase();
            if(val==="got it")
            {
                actions.afterGotMessage();
            }
            // children.props.state.userData.name = message;
        }


        if (checker === "name") {
            children.props.state.userData.name = message;
            console.log(children.props.state.userData.name)
            actions.afterNameMessage();
        }

        if (checker === "age") {
            children.props.state.userData.age = message;
            console.log(children.props.state.userData.age);
            actions.afterAgeMessage();
        }



        if (checker === "preference" && Number(message)) {
            actions.afterAgeMessage();
            children.props.state.userData.age = message;
            if (message <= 10) {
                children.props.state.userData.category = "kid";
            } else if (message > 10 && message <= 20) {
                children.props.state.userData.category = "teenagers";
            } else {
                children.props.state.userData.category = "adults";
            }
        }
    }
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;
