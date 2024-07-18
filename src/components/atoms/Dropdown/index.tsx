import React from "react";

export default function DropsDown() {
    return (
        <div className="rounded-[6px] bg-white z-30 transition transform absolute min-w-[120px] w-full h-auto shadow-[0px_4px_11px_0px_rgba(0,0,0,0.1)] p-2 mt-4  right-[-20px]">
            <div>
                <p className="border-b py-2 text-[13px] border-stroke cursor-pointer">
                    Thông tin cá nhân
                </p>
                <p className="border-b text-[13px] py-2 border-stroke cursor-pointer">
                    Đổi mật khẩu
                </p>
                <p className="py-2 text-[13px] cursor-pointer">Đăng Xuất</p>
            </div>
        </div>
    );
}
