import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Soojin"
                message="a"
                timeStamp="1"
                profilePic="https://i.pinimg.com/originals/a6/f1/5d/a6f15de93b3539319bfcb9e0007b2905.jpg"
            />
            <Chat
                name="Mioseo"
                message="b"
                timeStamp="2"
                profilePic="https://vignette.wikia.nocookie.net/kpop/images/7/73/Minseo_The_Diary_of_Youth_promo_photo_1.png/revision/latest?cb=20190130023132"
            />
            <Chat
                name="Soyoon"
                message="c"
                timeStamp="3"
                profilePic="https://i.pinimg.com/236x/d9/3e/1a/d93e1ab86096a7c37fb5d6c33a65fa6b.jpg"
            />
            <Chat
                name="Ellen"
                message="d"
                timeStamp="4"
                profilePic="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F07%2F27%2Fellen-degeneres.jpg"
            />
        </div>
    );
}

export default Chats;
