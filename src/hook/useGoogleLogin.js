import { useEffect, useRef, useState } from "react";

// It's not ready for operation at the moment
//------------------ setting google --------------------------------//
const insertGapiScriptGG = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.onload = () => {
        initializeGoogleSignIn();
    };
    document.body.appendChild(script);
};

const initializeGoogleSignIn = () => {
    window.gapi.load("auth2", () => {
        window.gapi.auth2.init({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        });
        window.gapi.load("signin2", () => {
            const params = {
                onsuccess: (response) => {
                    // console.log("success");
                },
            };
        });
    });
};

const useLoginGoogle = (initialCheck) => {
    const isFirstRender = useRef(true);
    const [_check, _setCheck] = useState(initialCheck);
    const [_isDone, _setIsDone] = useState(false);
    const requestApiLogin = () => {
        _setCheck(false);
        window.gapi.auth2
            .getAuthInstance()
            .grantOfflineAccess()
            .then(async (authResult) => {
                if (authResult["code"]) {
                    //run success
                }
            });
    };
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return insertGapiScriptGG();
        }
        if (_check) {
            return requestApiLogin();
        }
    }, [_check]);

    return [_isDone, _setCheck];
};
export default useLoginGoogle;
