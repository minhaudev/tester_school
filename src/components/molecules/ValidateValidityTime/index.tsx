import useValidateTime from "@/hooks/useValidateTime";
import FormatTime from "../../atoms/FormatTime";
import {useEffect} from "react";

function ValidateValidityTime({
    endDate,
    startDate,
    onEnd
}: {
    endDate: Date;
    startDate: Date;
    onEnd?: () => void;
}) {
    const {timeValidity, currentPercent, timeAble, end, setEnd} =
        useValidateTime({
            endDate,
            startDate
        });
    useEffect(() => {
        if (end && onEnd && timeAble >= 0) {
            setTimeout(() => {
                onEnd();
                setEnd(false);
            }, 1000);
        }
    }, [end, onEnd, setEnd, timeAble]);
    const bgColor =
        currentPercent >= 50 ? "bg-green-bold"
        : currentPercent >= 30 && currentPercent < 50 ? "bg-yellow"
        : "bg-red";
    return (
        <div className=" text-[11px] font-[500]  font-sf-ui-display text-text">
            <div className="w-[90px] h-1 bg-stroke rounded-md ">
                <div
                    className={`${bgColor} mb-[8px]  h-1 rounded-md`}
                    style={{width: `${currentPercent}%`}}></div>
                <FormatTime date={timeValidity} />
            </div>
        </div>
    );
}

export default ValidateValidityTime;
