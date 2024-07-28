export const ProductData = [
    {
        "id": "1",
        "No": "01",
        "Type": "",
        "Specifications": "Tôn lạnh màu xanh ngọc AZ070 Phủ AF: 0.41mmx1200mm",
        "TotalCoil": "2",
        "TotalWeight": "7850",
        "Prime": {
            "value": ["1B", "1A", "1", "3"],
            "isDisabled": true
        },
        "PreferredTolerances": [
            {
                "key": "kg",
                "value": [3700, 4300]
            },
            {
                "key": "m",
                "value": [1209, 1405]

            }
        ],
        "UnitPrice": 31500,
        "TotalPrice": 247275000,
        "Status": "text-red",
        "Action": ["delete"]
    },
    {
        "id": "2",
        "No": "02",
        "Type": "",
        "Specifications": "Tôn lạnh màu xanh ngọc AZ070 Phủ AF: 0.41mmx1200mm",
        "TotalCoil": "2",
        "TotalWeight": "7850",
        "Prime": {
            "value": ["1B", "1A", "1", "3"],
            "isDisabled": false
        },
        "PreferredTolerances": [
            {
                "key": "kg",
                "value": [3700, 4300]
            },
            {
                "key": "m",
                "value": [1209, 1405]

            }
        ],
        "UnitPrice": 31500,
        "TotalPrice": 247275000,
        "Status": "text-green",
        "Action": ["delete", "edit"]
    }
]
export const ProductApprovalsData = [
    {
        id: "1",
        validityTimes: [
            { component: "ValidityTime1", className: "w-6 h-6" },
            { component: "ValidityTime2", className: "w-6 h-6" },
            { component: "ValidityTime3", className: "w-6 h-6" }
        ],
        itemId: "019100101",
        circles: [

        ],
        propertieStatus: {
            status: true,
            isIcon: false,
            title: "PENDING"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "NON-STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-yellow",
            title: "Price & Policy",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "08:50",
        price: 100000
    },
    {
        id: "2",
        validityTimes: [

        ],
        itemId: "019100102",
        circles: [
            { className: "size-2 text-green" },
            { className: "size-2 text-red" },

        ],
        propertieStatus: {
            status: true,
            isIcon: true,
            title: "NOT ENOUGH INVENTORY"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-green",
            title: "Contents review",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "08:30",
        price: 40000
    },
    {
        id: "3",
        validityTimes: [

        ],
        itemId: "019100102",
        circles: [

        ],
        propertieStatus: {
            status: true,
            isIcon: true,
            title: "INVALID SCHEDULE"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "PRE-ORDER STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-red",
            title: "Production planning",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "18:00",
        price: 80000
    },
    {
        id: "4",
        validityTimes: [
            { component: "ValidityTime1", className: "w-6 h-6" },
            { component: "ValidityTime2", className: "w-6 h-6" },
            { component: "ValidityTime3", className: "w-6 h-6" }
        ],
        itemId: "019100101",
        circles: [

        ],
        propertieStatus: {
            status: true,
            isIcon: false,
            title: "PENDING"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "NON-STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-yellow",
            title: "Price & Policy",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "08:50",
        price: 100000
    },
    {
        id: "5",
        validityTimes: [

        ],
        itemId: "019100102",
        circles: [
            { className: "size-2 text-green" },
            { className: "size-2 text-red" },

        ],
        propertieStatus: {
            status: true,
            isIcon: true,
            title: "NOT ENOUGH INVENTORY"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-green",
            title: "Contents review",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "08:30",
        price: 40000
    },
    {
        id: "6",
        validityTimes: [

        ],
        itemId: "019100102",
        circles: [

        ],
        propertieStatus: {
            status: true,
            isIcon: true,
            title: "INVALID SCHEDULE"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "PRE-ORDER STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-red",
            title: "Production planning",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "18:00",
        price: 80000
    },
    {
        id: "7",
        validityTimes: [
            { component: "ValidityTime1", className: "w-6 h-6" },
            { component: "ValidityTime2", className: "w-6 h-6" },
            { component: "ValidityTime3", className: "w-6 h-6" }
        ],
        itemId: "019100101",
        circles: [

        ],
        propertieStatus: {
            status: true,
            isIcon: false,
            title: "PENDING"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "NON-STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-yellow",
            title: "Price & Policy",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "08:50",
        price: 100000
    },
    {
        id: "8",
        validityTimes: [

        ],
        itemId: "019100102",
        circles: [
            { className: "size-2 text-green" },
            { className: "size-2 text-red" },

        ],
        propertieStatus: {
            status: true,
            isIcon: true,
            title: "NOT ENOUGH INVENTORY"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-green",
            title: "Contents review",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "08:30",
        price: 40000
    },
    {
        id: "9",
        validityTimes: [

        ],
        itemId: "019100102",
        circles: [

        ],
        propertieStatus: {
            status: true,
            isIcon: true,
            title: "INVALID SCHEDULE"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "PRE-ORDER STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-red",
            title: "Production planning",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "18:00",
        price: 80000
    },
    {
        id: "10",
        validityTimes: [

        ],
        itemId: "019100102",
        circles: [

        ],
        propertieStatus: {
            status: true,
            isIcon: true,
            title: "INVALID SCHEDULE"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "PRE-ORDER STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-red",
            title: "Production planning",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "18:00",
        price: 80000
    },
]
export const ProductApprovalsData2 = [
    {
        id: "1",

        circles: [

        ],
        propertieStatus: {
            status: true,
            isIcon: false,
            title: "PENDING"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "NON-STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-yellow",
            title: "Price & Policy",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "08:50",
        price: 100000
    },
    {
        id: "2",

        circles: [
            { className: "size-2 text-green" },
            { className: "size-2 text-red" },

        ],
        propertieStatus: {
            status: true,
            isIcon: true,
            title: "NOT ENOUGH INVENTORY"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-green",
            title: "Contents review",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "08:30",
        price: 40000
    },
    {
        id: "3",

        circles: [

        ],
        propertieStatus: {
            status: true,
            isIcon: true,
            title: "INVALID SCHEDULE"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "PRE-ORDER STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-red",
            title: "Production planning",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "18:00",
        price: 80000
    },
    {
        id: "4",
        validityTimes: [
            { component: "ValidityTime1", className: "w-6 h-6" },
            { component: "ValidityTime2", className: "w-6 h-6" },
            { component: "ValidityTime3", className: "w-6 h-6" }
        ],
        itemId: "019100101",
        circles: [

        ],
        propertieStatus: {
            status: true,
            isIcon: false,
            title: "PENDING"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "NON-STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-yellow",
            title: "Price & Policy",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "08:50",
        price: 100000
    },
    {
        id: "5",

        circles: [
            { className: "size-2 text-green" },
            { className: "size-2 text-red" },

        ],
        propertieStatus: {
            status: true,
            isIcon: true,
            title: "NOT ENOUGH INVENTORY"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-green",
            title: "Contents review",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "08:30",
        price: 40000
    },
    {
        id: "6",

        circles: [

        ],
        propertieStatus: {
            status: true,
            isIcon: true,
            title: "INVALID SCHEDULE"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "PRE-ORDER STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-red",
            title: "Production planning",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "18:00",
        price: 80000
    },
    {
        id: "7",
        validityTimes: [
            { component: "ValidityTime1", className: "w-6 h-6" },
            { component: "ValidityTime2", className: "w-6 h-6" },
            { component: "ValidityTime3", className: "w-6 h-6" }
        ],
        itemId: "019100101",
        circles: [

        ],
        propertieStatus: {
            status: true,
            isIcon: false,
            title: "PENDING"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "NON-STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-yellow",
            title: "Price & Policy",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "08:50",
        price: 100000
    },
    {
        id: "8",

        circles: [
            { className: "size-2 text-green" },
            { className: "size-2 text-red" },

        ],
        propertieStatus: {
            status: true,
            isIcon: true,
            title: "NOT ENOUGH INVENTORY"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-green",
            title: "Contents review",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "08:30",
        price: 40000
    },
    {
        id: "9",

        circles: [

        ],
        propertieStatus: {
            status: true,
            isIcon: true,
            title: "INVALID SCHEDULE"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "PRE-ORDER STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-red",
            title: "Production planning",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "18:00",
        price: 80000
    },
    {
        id: "10",

        circles: [

        ],
        propertieStatus: {
            status: true,
            isIcon: true,
            title: "INVALID SCHEDULE"
        },
        companyName: "Thép Thiên Phước",
        propertieTitle: {
            status: false,
            isIcon: false,
            title: "PRE-ORDER STANDARDS"
        },
        pricePolicy: {
            iconClassName: "mr-1 text-red",
            title: "Production planning",
            details: "See details"
        },
        validateServiceTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validateValidityTime: {
            onEnd: "handleEndIn",
            endDate: "2024-07-21T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        time: "18:00",
        price: 80000
    },
]
