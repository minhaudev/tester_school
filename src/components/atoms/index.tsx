import React from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer";

function TimeValidate() {
    return (
        <div>
            <CountdownCircleTimer
                strokeLinecap="round"
                isPlaying
                duration={100000}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}>
                {({remainingTime}) => remainingTime}
            </CountdownCircleTimer>
        </div>
    );
}

export default TimeValidate;
