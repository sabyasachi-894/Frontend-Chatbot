import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './components/Avatar';
import StartBtn from './components/StartBtn';
import StartSlow from './components/StartSlow';
import data from './data';
import DipslayImage from './components/DipslayImage';

import EnrollBtn from './components/EnrollBtn';
import GotBtn from './components/GotBtn';
import Date from './components/Date';
import FinalMessage from './components/FinalMessage'


const config = {
    botName: "AgeDrive Explorer",
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
            category: "",
            product: {
                name: "",
                link: "",
                imageUrl: ""
            }
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
        },
        {
            widgetName: "startBtn",
            widgetFunc: (props) => <StartBtn {...props} />,
        },
        {
            widgetName: "startSlow",
            widgetFunc: (props) => <StartSlow {...props} />,
        },
        {
            widgetName: "finalImage",
            widgetFunc: (props) => <DipslayImage {...props} />,
        },
    ]
};

export default config;