
export default function msgOptions() {
    return {
        userName: process.env.REACT_APP_SOLACE_USERNAME,
        password: process.env.REACT_APP_SOLACE_PASSWORD,
        invocationContext: {
            host: process.env.REACT_APP_SOLACE_HOST,
            port: 8443,
            clientId: "react-app"
        },
        timeout: 3,
        keepAliveInterval: 60,
        cleanSession: true,
        useSSL: true,
        reconnect: true,
    }
}