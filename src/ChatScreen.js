import React, { useState } from "react";

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: "Soojin",
            image:
                "https://i.pinimg.com/originals/a6/f1/5d/a6f15de93b3539319bfcb9e0007b2905.jpg",
            message: "HI",
        },
        {
            name: "Soojin",
            image:
                "https://i.pinimg.com/originals/a6/f1/5d/a6f15de93b3539319bfcb9e0007b2905.jpg",
            message: "I'm Soojin of gidle",
        },
        {
            message: "hi nice to meet you ",
        },
    ]);
    return (
        <div className="chatScreen">
            <p>YOU MATCHED WITH SOOJIN ON 10/08/20</p>
            {messages.map((message) => (
                <div>
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    );
}

export default ChatScreen;
