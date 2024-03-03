import { useState } from 'react';
import messaging from "./Messaging";
import React, { useEffect } from 'react';
import Paho from "paho-mqtt";

function Msg() {
    const [connected, setConnected] = useState(false);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const handleMessage = (message) => {
            setMessages(prevMessages => [...prevMessages, message.payloadString]);
            setConnected(prevConnected => prevConnected);
        };

        messaging.register(handleMessage);
    }, []); // Empty dependency array ensures the effect runs only once

    const handleConnectClick = () => {
        if (connected) {
            messaging.disconnect();
            setConnected(false);
            setMessages([]);
        } else {
            messaging.connectWithPromise()
                .then(response => {
                    console.log("Successfully connected to Solace Cloud.", response);
                    messaging.subscribe("ScheduledTasks");
                    messaging.subscribe("Leaderboard");
                    setConnected(true);
                })
                .catch(error => {
                    console.log("Unable to establish connection with Solace Cloud, see above logs for more details.", error);
                });
        }
    };

    const handleSendClick = () => {
        let message = new Paho.Message(JSON.stringify({ text: "Hello" }));
        message.destinationName = "exampletopic";
        messaging.send(message);
    };

    return (
        <div className="App">
            <div className="buttons">
                <button onClick={handleConnectClick}>{connected ? 'Disconnect' : 'Connect'}</button>
                <button onClick={handleSendClick} disabled={!connected}>Send</button>
            </div>
            <ol>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ol>
        </div>
    );
}

export default Msg;