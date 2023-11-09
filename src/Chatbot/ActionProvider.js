import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {


    const updateState = (message, checker) => {
        console.log(checker)
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }))
    }


    const initialAction = () => {
        const message = createChatBotMessage('Hello, Welcome to student info system!',{
            widget: "gotIt"
        });
        console.log("Inside Initial Action")
        updateState(message, "got")
    }

    const afterGotMessage = () => {
        const message = createChatBotMessage("Pick a Slot!", {
            widget: "date"
        })
        updateState(message)
    }

    const afterDateMessage = () => {
        const message = createChatBotMessage("Enter your name")
        updateState(message,"name")
    }

    const afterNameMessage = () => {
        const message = createChatBotMessage("Enter your age")
        updateState(message,"age")
    }

    const afterAgeMessage = () => {
        const message = createChatBotMessage("Thank you. In 5 seconds, bot will exit", {widget: "finalMessage"})
        updateState(message)
    }

    const finalResult = (name, age, preference, vehicle) => {
        const message = createChatBotMessage(`Got it, ${name}! Based on your age ${age} and preference for a ${preference} ride, I recommend the '${vehicle}.' Enjoy the thrill!`, {
            widget: "finalImage"
        })
        updateState(message)
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        initialAction,
                        afterGotMessage,
                        afterDateMessage,
                        afterNameMessage,
                        afterAgeMessage,
                        finalResult
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;