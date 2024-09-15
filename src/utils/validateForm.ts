import {
    emailPattern,
    emojiRegex,
    fieldInput,
    passwordPattern,
    patternPhone,
    validateVietnameseName
} from "@/consts/validates";

export const validateField = (field: string, value: string) => {
    if (value.trim() === "") {
        return "Trường này không được để trống!";
    }
    switch (field) {
        case fieldInput.NAME:
            if (!validateVietnameseName.test(value)) {
                return "Họ tên không được để số và phải 2 ký tự trở lên";
            }
            return "";
        case fieldInput.EMAIL:
            if (!emailPattern.test(value.trim())) {
                return "Địa chỉ email không hợp lệ!";
            }
            return "";
        case fieldInput.PASSWORD:
            if (value.trim().length < 6) {
                return "Mật khẩu phải lớn hơn 6 kí tự!";
            }

            // else if (!passwordPattern.test(value.trim())) {
            //     return "Mật khẩu phải chứa chữ hoa  chữ số và ký tự đặt biệt!";
            // }
            return "";
    }
};
