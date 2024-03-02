import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";

export const AuthProvider = ({ children }) => {

    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

    if (!(domain && clientId && redirectUri)) {
        return (
            <div>
                <h1>Missing Auth0 configuration</h1>
                <p>
                    Please make sure you have added the Auth0 domain, client ID, and callback URL to your environment
                    variables.
                </p>
            </div>
        );
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri,
            }}
        >
            {children}
        </Auth0Provider>
    );
};