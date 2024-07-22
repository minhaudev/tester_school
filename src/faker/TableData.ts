export const TABLE_HEAD = [
    {label: "No", span: null},
    {label: "Type", span: null},
    {label: "Specifications", span: null, isLarge: true},
    {label: "Total coil", span: "(PCS)"},
    {label: "Total weight", span: "(KG)"},
    {label: "Prime", span: null},
    {label: "Preferred tolerances", span: null},
    {label: "Unit price", span: "(VND/KG)"},
    {label: "Discounted price", span: "(VND/KG)"},
    {label: "Rebate offer", span: "(VND/KG)"},
    {label: "Final price", span: "(VND/KG)"},
    {label: "Total price", span: "(VND)"},
    {label: "Status", span: null}
];
export const TABLE_HEAD2 = [
    {label: "Ticket ID"},
    {label: "Status", isSort: true},
    {label: "Customer"},
    {label: "Properties", isSort: true},
    {label: "Progresses", isSort: true},
    {label: "Service time", isSort: true},
    {label: "Validity time", isSort: true},
    {label: "Created date", isSort: true},
    {label: "Total tonnage", isSort: true}
];
export const TABLE_BODY2 = {
    total: 3,
    data: [
        {
            id: "1",
            icon: "",
            tickedId: "019100101",
            status: "PENDING",
            customer: "Thép Thiên Phước",
            properties: "NON-STANDARDS",
            progresses: "Price & Policy",
            serviceTime: "",
            validityTime: "",
            createdDate: "08:50",
            totalTonnage: "40000",
            circles: "text-green-light,text-violet,text-pink-light,text-blue",
            isIcon: false
        },
        {
            id: "2",
            icon: "",
            tickedId: "019100101",
            status: "NOT ENOUGH INVENTORY",
            customer: "Tôn Thép KOKORO",
            properties: "NON-STANDARDS",
            progresses: "Contents review",
            serviceTime: "",
            validityTime: "",
            createdDate: "08:50",
            totalTonnage: "40000",
            circles: "green-light, violet, pink-light, blue",
            isIcon: true
        },
        {
            id: "3",
            icon: "",
            tickedId: "019100101",
            status: "INVALID SCHEDULE",
            customer: "Sắt Thép Thiên Phúc",
            properties: "NON-STANDARDS",
            progresses: "Production planning",
            serviceTime: "",
            validityTime: "",
            createdDate: "08:50",
            totalTonnage: "40000",
            circles: "green-light, violet, pink-light, blue",
            isIcon: true
        }
    ]
};
