import useValidateTime from '@/hooks/useValidateTime';
import FormatTime from '../../atoms/FormatTime';
import TimeValidate from '../../atoms/TimeValidate';

function ValidateServiceTime({endDate,startDate}:any) {
    const {timeAble,totalTimeHours,timeValidity,} = useValidateTime({endDate,startDate})
    return (
        <div className="flex items-center gap-2 text-[11px] font-[500] text-center font-sf-ui-display text-text">
             <TimeValidate currentTime={timeAble} totalTime={totalTimeHours} />
             <FormatTime date = {timeValidity}/>
            </div>
    );
}

export default ValidateServiceTime;