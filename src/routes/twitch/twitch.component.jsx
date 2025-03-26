import { useEffect, useRef } from 'react';
import './twitch.styles.scss';
const Twitch = () => {
    const isInitialized = useRef(false);

    useEffect(() => {
        if(!isInitialized.current){
            isInitialized.current = true;
            console.log("Twitch component mounted");
            // Load the Twitch embed script
            const script = document.createElement("script");
            script.src = "https://player.twitch.tv/js/embed/v1.js";
            script.async = true;
            script.onload = () => {
                // Create a new Twitch.Player instance after the script is loaded
                new window.Twitch.Player("twitch-embed", {
                    channel: "coreyindahouse27", // Replace with your Twitch channel name
                    width: "100%",
                    height: "480",
                    theme: "dark", // Optional: "dark" or "light"
                });
            };
            document.body.appendChild(script);
        }

        // Cleanup script on component unmount
        return () => {
            const existingScript = document.querySelector('script[src="https://player.twitch.tv/js/embed/v1.js"]');
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return (
        <div>
            <h1>Twitch</h1>
            <div id="twitch-embed"></div>
        </div>
    );
};

export default Twitch;