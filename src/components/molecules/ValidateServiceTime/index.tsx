import useValidateTime from "@/hooks/useValidateTime";
import FormatTime from "../../atoms/FormatTime";
import TimeValidate from "../../atoms/TimeValidate";

function ValidateServiceTime({
    endDate,
    startDate,
    onEnd
}: {
    endDate: Date;
    startDate: Date;
    onEnd: () => void;
}) {
    const {
        timeAble,
        totalTimeHours,
        timeValidity,
        currentPercent,
        end,
        setEnd
    } = useValidateTime({endDate, startDate});
    if (end) {
        setTimeout(() => {
            onEnd();
            setEnd(false);
        }, 1000);
    }
    return (
        <div className="flex items-center gap-2 text-[11px] font-[500] text-center font-sf-ui-display text-text">
            <TimeValidate
                currentPercent={currentPercent}
                currentTime={timeAble}
                totalTime={totalTimeHours}
            />
            <FormatTime date={timeValidity} />
        </div>
    );
}

export default ValidateServiceTime;
