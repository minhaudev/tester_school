export const ProductData = [
    {
        id: "1",
        specifications: "Tôn lạnh màu xanh ngọc AZ070 Phủ AF: 0.41mmx1200mm",
        totalCoil: "2",
        totalWeight: "7850",
        prime: {
            value: ["1B", "1A", "1", "3"],
            isDisabled: true
        },
        preferredTolerances: [
            {
                key: "kg",
                value: [3700, 4300]
            },
            {
                key: "m",
                value: [1209, 1405]
            }
        ],
        unitPrice: 31500,
        totalPrice: 247275000,
        status: "warning",
        action: ["delete"]
    },
    {
        id: "2",
        specifications: "Tôn lạnh màu xanh ngọc AZ070 Phủ AF: 0.41mmx1200mm",
        totalCoil: "2",
        totalWeight: "7850",
        prime: "1B",
        preferredTolerances: [
            {
                key: "kg",
                value: [3700, 4300]
            },
            {
                key: "m",
                value: [1209, 1405]
            }
        ],
        unitPrice: 31500,
        totalPrice: 247275000,
        status: "success",
        action: ["delete"]
    },
    {
        id: "3",
        specifications: "Tôn lạnh màu xanh ngọc AZ070 Phủ AF: 0.41mmx1200mm",
        totalCoil: "2",
        totalWeight: "7850",
        prime: "1B",
        preferredTolerances: [
            {
                key: "kg",
                value: [3700, 4300]
            },
            {
                key: "m",
                value: [1209, 1405]
            }
        ],
        unitPrice: 31500,
        totalPrice: 247275000,
        status: "error",
        action: ["delete", "edit"]
    },
    {
        id: "4",
        specifications: "Tôn lạnh màu xanh ngọc AZ070 Phủ AF: 0.41mmx1200mm",
        totalCoil: "2",
        totalWeight: "7850",
        prime: "1B",
        preferredTolerances: [
            {
                key: "kg",
                value: [3700, 4300]
            },
            {
                key: "m",
                value: [1209, 1405]
            }
        ],
        unitPrice: 31500,
        totalPrice: 247275000,
        status: "success",
        action: ["delete", "edit"]
    }
];

export const ProductApprovalsData2 = [
    {
        id: "1",
        itemId: "019100101",
        status: "pending",
        customer: "Thép Thiên Phước1",
        property: "non-standars",
        progresses: "Price & Policy",
        statusProgress: "error",
        serviceTime: {
            endDate: "2024-08-19T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validityTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        createdDate: "2024-07-15T00:00:00Z",
        totalTonnage: 100000
    },
    {
        id: "2",
        itemId: "019100102",
        status: "not enough inventor",
        customer: "Thép Thiên Phước2",
        property: "standards",
        progresses: "Contents review",
        statusProgress: "error",
        serviceTime: {
            endDate: "2024-08-20T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validityTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        createdDate: "2024-07-15T00:00:00Z",
        totalTonnage: 40000
    },
    {
        id: "3",
        itemId: "019100102",
        status: "invalid schedule",
        customer: "Thép Thiên Phước3",
        
        property: "pre-order standards",
        progresses: "Production planning",
        statusProgress: "error",

        serviceTime: {
            endDate: "2024-08-08T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validityTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        createdDate: "2024-07-30T15:00:00Z",
        totalTonnage: 80000
    },
    {
        id: "4",
        itemId: "019100101",
        status: "pending",
        customer: "Thép Thiên Phước",
        property: "non-standars",
        progresses: "Price & Policy",
        statusProgress: "error",

        serviceTime: {
            endDate: "2024-08-07T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validityTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        createdDate: "2024-07-30T15:00:00Z",
        totalTonnage: 100000
    },
    {
        id: "5",
        itemId: "019100102",
        status: "not enough inventor",
        customer: "Thép Thiên Phước",
        property: "standards",
        progresses: "Contents review",
        statusProgress: "warning",

        serviceTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validityTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        createdDate: "2024-07-30T15:00:00Z",
        totalTonnage: 40000
    },
    {
        id: "6",
        itemId: "019100102",
        status: "invalid schedule",
        customer: "Thép Thiên Phước",
        property: "pre-order standards",
        progresses: "Production planning",
        statusProgress: "warning",

        serviceTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validityTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        createdDate: "2024-07-30T15:00:00Z",
        totalTonnage: 80000
    },
    {
        id: "7",
        itemId: "019100101",
        status: "pending",
        customer: "Thép Thiên Phước",
        property: "non-standars",
        progresses: "Price & Policy",
        statusProgress: "warning",
        serviceTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validityTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        createdDate: "2024-07-30T15:00:00Z",
        totalTonnage: 100000,

    }
];

export const ProductApprovalsData3 = [
    {
        id: "1",
        itemId: "019100101",
        status: "pending",
        customer: "Thép Thiên Phước",
        property: "non-standars",
        progresses: "Price & Policy",
        statusProgress: "warning",

        serviceTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validityTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        createdDate: "2024-07-30T18:30:00Z",
        totalTonnage: 100000
    },
    {
        id: "2",
        itemId: "019100102",
        status: "not enough inventor",
        customer: "Thép Thiên Phước",
        property: "standards",
        progresses: "Contents review",
        statusProgress: "warning",

        serviceTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validityTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        createdDate: "2024-07-30T18:30:00Z",
        totalTonnage: 40000
    },
    {
        id: "3",
        itemId: "019100102",
        status: "invalid schedule",
        customer: "Thép Thiên Phước",
        property: "pre-order standards",
        progresses: "Production planning",
        statusProgress: "warning",

        serviceTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validityTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        createdDate: "2024-07-30T18:30:00Z",
        totalTonnage: 80000
    },
    {
        id: "4",
        itemId: "019100101",
        status: "pending",
        customer: "Thép Thiên Phước",
        property: "non-standars",
        progresses: "Price & Policy",
        statusProgress: "error",

        serviceTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validityTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        createdDate: "2024-07-30T18:30:00Z",
        totalTonnage: 100000
    },
    {
        id: "5",
        itemId: "019100102",
        status: "not enough inventor",
        customer: "Thép Thiên Phước",
        property: "standards",
        progresses: "Contents review",
        statusProgress: "error",

        serviceTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validityTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        createdDate: "2024-07-30T18:30:00Z",
        totalTonnage: 40000
    },
    {
        id: "6",
        itemId: "019100102",
        status: "invalid schedule",
        customer: "Thép Thiên Phước",
        property: "pre-order standards",
        progresses: "Production planning",
        statusProgress: "error",

        serviceTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validityTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        createdDate: "2024-07-30T18:30:00Z",
        totalTonnage: 80000
    },
    {
        id: "7",
        itemId: "019100101",
        status: "pending",
        customer: "Thép Thiên Phước",
        property: "non-standars",
        progresses: "Price & Policy",
        statusProgress: "error",

        serviceTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validityTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        createdDate: "2024-07-30T18:30:00Z",
        totalTonnage: 100000,

    },
    {
        id: "8",
        itemId: "019100101",
        status: "pending",
        customer: "Thép Thiên Phước",
        property: "non-standars",
        progresses: "Price & Policy",
        statusProgress: "error",

        serviceTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        validityTime: {
            endDate: "2024-08-10T00:00:00Z",
            startDate: "2024-07-15T00:00:00Z"
        },
        createdDate: "2024-07-30T18:30:00Z",
        totalTonnage: 100000,

    }
];
