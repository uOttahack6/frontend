import msgOptions from "./messaging-options";
import Paho from "paho-mqtt";

const options = msgOptions();
class Messaging extends Paho.Client {
    constructor() {
        console.log(options)
        super(options.invocationContext.host, Number(options.invocationContext.port), options.invocationContext.clientId);
        this.onMessageArrived = this.handleMessage.bind(this);
        this.callbacks = [];
        this.connected = false;
    }

    connectWithPromise() {
        return new Promise((resolve, reject) => {
            options.onSuccess = resolve;
            options.onFailure = reject;
            this.connect(options);
        });
    }

    // called when the client loses its connection
    onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
            console.log("Connection lost with Solace Cloud");
        }
        // Add auto connect logic with backoff here if you want to automatically reconnect
    }

    register(callback) {
        this.callbacks.push(callback);
    }

    // called when a message arrives
    handleMessage(message) {
        console.log("Received message", message);
        this.callbacks.forEach(callback => callback(message));
    }

    getMessages() {
        return this.messages;
    }

    getConnected() {
        return this.connected;
    }

    setConnected(connected) {
        this.connected = connected;
    }
}

const messaging = new Messaging();
export default messaging;