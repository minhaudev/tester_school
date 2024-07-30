"use client";
import SaveDraftIcon from "@/assets/svgs/save_draft.svg";
import AddIcon from "@/assets/svgs/add_light_larger.svg";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import ProcessFlow from "@/components/molecules/ProcessFlow";
import Standard from "@/components/molecules/Standard/Index";
import Toast from "@/components/molecules/Toast";
import ValidateServiceTime from "@/components/molecules/ValidateServiceTime";
import ValidateValidityTime from "@/components/molecules/ValidateValidityTime";
import {ToastPosition, ToastType} from "@/enums/ToastEnum";
import {processFlowData} from "@/faker";
import {useState} from "react";
import LayoutContainer from "./LayoutContainer";
import TableExample from "./TableExample";
import ServiceTime from "@/components/atoms/ServiceTime";
import {dataList} from "@/faker/AccountBalance";
import {isValidDate} from "@/hooks/useValidDate";
import {usePopup} from "@/context/PopupContext";
import Modal from "@/components/molecules/Modal";
import Drawer from "@/components/molecules/Drawer";
import StatusNote from "@/components/molecules/StatusNote";
import {StatusEnum} from "@/enums/StatusNum";
import RadioButton from "@/components/atoms/RadioButton/RadioButton";
import Paginator from "@/components/molecules/Pagination";
import Checkbox from "@/components/atoms/Checkbox";
import Propertie from "@/components/atoms/Properties";
import {PendingEnum} from "@/enums/PendingEnum";
import Pending from "@/components/atoms/Pending";
import Tooltip from "@/components/atoms/Tooltip";
import TablePrice from "@/components/molecules/TablePrice";
export default function Home() {
    const count1 = 32324;
    const count2 = 29292999;
    const [count, setCount] = useState(() => count2 - count1);

    let startDate = new Date();
    let endDate = new Date();
    const start = "2024-07-29T23:40:48.478Z";
    const end = "2024-07-29T23:41:48.478Z";
    if (isValidDate(start) && isValidDate(end)) {
        startDate = new Date(Date.parse(start));
        endDate = new Date(Date.parse(end));
    } else {
        console.log("false");
    }
    const handleEndIn = () => {};

    return (
        <LayoutContainer>
            <ValidateServiceTime
                onEnd={handleEndIn}
                endDate={endDate}
                startDate={startDate}
            />
            <ValidateValidityTime
                onEnd={handleEndIn}
                endDate={endDate}
                startDate={startDate}
            />
            <TablePrice />
        </LayoutContainer>
    );
}
