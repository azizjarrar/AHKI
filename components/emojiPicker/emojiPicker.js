import React, { useEffect, useState } from "react";
import Style from "./emojiPicker.module.scss";
import emojiPack1 from "../../public/Emoji/Pack";
import emojiPack2 from "../../public/Emoji/Pack2";
import emojiPack3 from "../../public/Emoji/Pack3";
import emojiPack4 from "../../public/Emoji/Pack4";

const EmojiPicker = (props) => {
    const [whatEmojiToDsiplay, setwhatEmojiToDsiplay] = useState("pack1");
    const displayEmoji = (data) => {
        setwhatEmojiToDsiplay(data);
    };
    return (
        <div className={Style.body}>
            <div className={Style.closebtn} onClick={() => props.fn()}></div>
            <div className={Style.emojiContainer}>
                {whatEmojiToDsiplay == "pack1" && emojiPack1.map((element) => {
                    return (
                        <img src={element.src} onClick={() => props.fn1(element.src, "pack1")} />
                    );
                })}
                {whatEmojiToDsiplay == "pack2" && emojiPack2.map((element) => {
                    return (
                        <img src={element.src} onClick={() => props.fn1(element.src, "pack2")} />
                    );
                })}
                {whatEmojiToDsiplay == "pack3" && emojiPack3.map((element) => {
                    return (
                        <img src={element.src} onClick={() => props.fn1(element.src, "pack3")} />
                    );
                })}
                {whatEmojiToDsiplay == "pack4" && emojiPack4.map((element) => {
                    return (
                        <img src={element.src} onClick={() => props.fn1(element.src, "pack4")} />
                    );
                })}
            </div>
            <div className={Style.packs}>
                <div>
                    <img className={Style.imagePack} src={emojiPack1[2].src} onClick={() => displayEmoji("pack1")} />
                </div>
                <div>
                    <img className={Style.imagePack} src={emojiPack2[0].src} onClick={() => displayEmoji("pack2")} />
                </div>
                <div>
                    <img className={Style.imagePack} src={emojiPack3[0].src} onClick={() => displayEmoji("pack3")} />
                </div>
                <div>
                    <img className={Style.imagePack} src={emojiPack4[0].src} onClick={() => displayEmoji("pack4")} />
                </div>
            </div>
        </div>
    );
};
export default EmojiPicker;
