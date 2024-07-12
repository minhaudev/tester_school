import {CheckFillIcon, SuccessfulIcon, WarningIcon} from "@/assets/svgs";
import {CircleIcon} from "@/assets/svgs/icons";
import Propertie from "@/components/atoms/Properties/Propertie";
import Card from "@/components/molecules/Cards/Card";
import ServiceTime from "@/components/molecules/ServiceTimes/ServiceTime";
import StatusNote from "@/components/molecules/StatusNote/StatusNote";
import Toast from "@/components/molecules/Toasts/Toast";
import {ServiceTimeEnum} from "@/enums/ServiceTimeNum";
import {StatusEnum} from "@/enums/StatusNum";
import {ToastEnum} from "@/enums/ToastEnum";
import React from "react";

const page = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    {/* <Card
                        title="Toast message"
                        content={
                            <div className="gap-8 items-center flex flex-col ">
                                <button
                                    data-modal-target="popup-modal"
                                    data-modal-toggle="popup-modal"
                                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button">
                                    Toggle modal
                                </button>

                                <div
                                    id="popup-modal"
                                    className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative p-4 w-full max-w-md max-h-full">
                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <button
                                                type="button"
                                                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                data-modal-hide="popup-modal">
                                                <svg
                                                    className="w-3 h-3"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 14 14">
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                    />
                                                </svg>
                                                <span className="sr-only">
                                                    Close modal
                                                </span>
                                            </button>
                                            <div className="p-4 md:p-5 text-center">
                                                <svg
                                                    className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                    />
                                                </svg>
                                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                    Are you sure you want to
                                                    delete this product?
                                                </h3>
                                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                    Are you sure you want to
                                                    delete this product?
                                                </h3>
                                                <button
                                                    data-modal-hide="popup-modal"
                                                    type="button"
                                                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                                    Yes, I'm sure
                                                </button>
                                                <button
                                                    data-modal-hide="popup-modal"
                                                    type="button"
                                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                                    No, cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    /> */}
                </div>
                <div className="flex-1">
                    <Card
                        title="Status"
                        content={
                            <div className="gap-8 items-center flex flex-col ">
                                <WarningIcon />
                                <SuccessfulIcon />
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Card
                        title="Status note"
                        content={
                            <div className="gap-8 items-center flex flex-col">
                                <StatusNote
                                    type={StatusEnum.Normal}
                                    description="Kế hoạch sản xuất: Cần phải chỉnh sửa thông tin giao hàng của no.5"
                                />
                                <StatusNote
                                    type={StatusEnum.Success}
                                    description="Kế hoạch sản xuất: Đã hoàn tất thông tin giao hàng."
                                />
                                <StatusNote
                                    type={StatusEnum.Error}
                                    description="Kế hoạch sản xuất: Có lỗi trong thông tin giao hàng."
                                />
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Card
                        title="Blue"
                        content={
                            <div className="gap-8 items-center flex">
                                <CircleIcon
                                    fill="#5A92F7"
                                    width="20px"
                                    height="20px"
                                />
                                <CheckFillIcon
                                    fill="#5A92F7"
                                    width="20px"
                                    height="20px"
                                />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Pink"
                        content={
                            <div className="gap-8 items-center flex justify-center">
                                <CircleIcon
                                    fill="#EB557F"
                                    width="20px"
                                    height="20px"
                                />
                                <CheckFillIcon
                                    fill="#EB557F"
                                    width="20px"
                                    height="20px"
                                />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Purple"
                        content={
                            <div className="gap-8 items-center flex justify-center">
                                <CircleIcon
                                    fill="#A644F6"
                                    width="20px"
                                    height="20px"
                                />
                                <CheckFillIcon
                                    fill="#A644F6"
                                    width="20px"
                                    height="20px"
                                />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Green"
                        content={
                            <div className="gap-8 items-center flex justify-center">
                                <CircleIcon
                                    fill="#70E28D"
                                    width="20px"
                                    height="20px"
                                />
                                <CheckFillIcon
                                    fill="#70E28D"
                                    width="20px"
                                    height="20px"
                                />
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Card
                        title="Properties"
                        content={
                            <div className="gap-8 items-center flex flex-col">
                                <Propertie title={"Approval request denied"} />
                                <Propertie title={"Out-of-stock"} />
                                <Propertie title={"Approval voided"} />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Service time"
                        content={
                            <div className="gap-8 items-center flex flex-col">
                                <ServiceTime
                                    type={ServiceTimeEnum.Success}
                                    start={"01:24:45"}
                                    end={"10:00:00"}
                                />
                                <ServiceTime
                                    type={ServiceTimeEnum.Warning}
                                    start={"01:24:45"}
                                    end={"10:00:00"}
                                />
                                <ServiceTime
                                    type={ServiceTimeEnum.Error}
                                    start={"01:24:45"}
                                    end={"10:00:00"}
                                />
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default page;
