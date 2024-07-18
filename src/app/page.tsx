"use client";
import Button from "@/components/atoms/Button";
import Header from "@/components/layouts/Header";

import Navigation from "@/components/molecules/Navigation";
import Toast from "@/components/molecules/Toasts/Toast";
import {ToastPosition, ToastType} from "@/enums/ToastEnum";
import {NavigationType} from "@/interfaces";
import {useState} from "react";
<<<<<<< HEAD
import CreditCart from "@/components/atoms/CreditCart";
import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import LayoutContainer from "./LayoutContainer";
import Standard from "@/components/molecules/Standard/Index";
import Input from "@/components/atoms/Input";

=======
>>>>>>> cae016d (fix conflict code)
export default function Home() {
    const [fileDetails, setFileDetails] = useState([]);

    const handleFileDetailsChange = (details: any) => {
        setFileDetails(details);
    };

    return (
<<<<<<< HEAD
        <LayoutContainer>
            {/* <CustomerBalanceInfo /> */}
            <Standard />
            <Input variant="select" optionSelect={["avc", "bc", "vc"]} />
        </LayoutContainer>
=======
        <div className="flex w-full">
            {/* <Navigation type={NavigationType.CLIENT} />
            <Header /> */}
            <Button
                warningFile={
                    <Toast
                        type={ToastType.Warning}
                        position={ToastPosition.Top_Right}
                        description="vượt quá số file cho phép!"
                    />
                }
                typeFile="image/*"
                size="semi"
                variant="file"
                color="blue"
                fileDetails={fileDetails}
                setFileDetails={handleFileDetailsChange}>
                Button
            </Button>
            {/* <TableFuture /> */}
        </div>
>>>>>>> cae016d (fix conflict code)
    );
}
