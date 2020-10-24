import React from 'react';
import {Alert} from "antd";

const ErrorBanner = ({
                         message = "Something went wrong",
                         description = "Look like something went wrong. Please check your connection and/or try again later."
}) => {
    return (
        <Alert
            banner
            closable
            message={message}
            description={description}
            type="error"
            className="error-banner"
        />
    );
};

export default ErrorBanner;