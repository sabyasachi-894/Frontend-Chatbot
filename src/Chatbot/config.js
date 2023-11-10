import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './components/Avatar';
import data from './data';

import EnrollBtn from './components/EnrollBtn';
import GotBtn from './components/GotBtn';
import Date from './components/Date';
import FinalMessage from './components/FinalMessage'


const config = {
    botName: "Student Enrollment Chatbot",
    initialMessages: [createChatBotMessage(`Enter into Student Info System!`, {
        widget: "enrollBtn"
    })],
    customComponents: {
        botAvatar: (props) => <Avatar {...props} />,
    },
    state: {
        checker: null,
        data,
        userData: {
            name: "",
            age: 0,
            date:"",
        }
    },
    widgets: [
        {
            widgetName: "enrollBtn",
            widgetFunc: (props) => <EnrollBtn {...props} />,
        },
        {
            widgetName: "gotIt",
            widgetFunc: (props) => <GotBtn {...props} />,
        },
        {
            widgetName: "date",
            widgetFunc: (props) => <Date {...props} />,
        },
        {
            widgetName: "finalMessage",
            widgetFunc: (props) => <FinalMessage {...props} />,
        }
    ]
};

export default config;