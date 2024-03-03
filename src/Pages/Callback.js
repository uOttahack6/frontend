// Callback.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import messaging from '../utils/Messaging';

const Callback = () => {
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        const handleAuthentication = async () => {
            if (isAuthenticated) {
                console.log('User is authenticated');
                messaging.connectWithPromise()
                    .then(response => {
                        console.log("Successfully connected to Solace Cloud.", response);
                        messaging.subscribe("ScheduledTasks");
                        messaging.subscribe("Leaderboard");
                        console.log('Subscribed to ScheduledTasks and Leaderboard');
                    })
                    .catch(error => {
                        console.log("Unable to establish connection with Solace Cloud, see above logs for more details.", error);
                    });
                // Redirect to homepage
                navigate('/');
            } else {
                console.log('User not authenticated');
            }
        };

        handleAuthentication();
    }, [isAuthenticated, isLoading]);

    return (
        <div>
            {/* You can optionally display a loading message or spinner here */}
            Authenticating...
        </div>
    );
};

export default Callback;
