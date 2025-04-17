import { useState } from "react"
import "./ImageShot.css"
import gunSound from "./assets/gun.mp3"

function ImageShot(props) {
    const { image, imageShot } = props;
    const [shot, setShot] = useState(false);
    const [rotation, setRotation] = useState(0);
    const audio = new Audio(gunSound);
    console.log(audio)


    function handleClick() {
        setShot(!shot);
        audio.play();
        setRotation(Math.random() * 360);
    }

    return (
        <div
            className={"image"}
            onClick={() => {
                handleClick();
            }}
            style={{
                transform: `rotate(${rotation}deg) scale(${shot ? 1.2 : 1})`,
            }}
        >
            <img className={"image"} src={shot ? imageShot : image} />
        </div>
    )
}

export default ImageShot