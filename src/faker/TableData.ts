export const TABLE_BODY = {
    total: 2,
    data: [
        {
            id: "1",
            checkboxChecked: true,
            validityTimes: [
                {component: "ValidityTime1", className: "w-6 h-6"},
                {component: "ValidityTime2", className: "w-6 h-6"},
                {component: "ValidityTime3", className: "w-6 h-6"}
            ],
            itemId: "019100101",
            circles: [
                {className: "w-2 h-3 text-violet"},
                {className: "w-2 h-3 text-blue"},
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
                text: "Price & Policy",
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
            price: 40000
        },
        {
            id: "2",
            checkboxChecked: true,
            validityTimes: [
              
            ],
            itemId: "019100102",
            circles: [
                {className: "w-2 h-3 text-green"},
                {className: "w-2 h-3 text-violet"},
                {className: "w-2 h-3 text-red"},
                {className: "w-2 h-3 text-blue"}
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
                text: "Price & Policy",
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
            price: 40000
        },
        {
            id: "3",
            checkboxChecked: true,
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
                text: "Price & Policy",
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
            price: 40000
        }
    ]
};
