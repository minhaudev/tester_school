import React, {useRef, useEffect} from "react";
import TestTable from "./TestTable";
import TestTablePrice from "./TestTablePrice";

const TablePrice = () => {
    return (
        <div className="w-full h-auto">
            <div className="flex overflow-auto">
                <div className="sticky left-0 w-[80%]">
                    <TestTable />
                </div>
                <div className=" w-full max-w-[300px] ">
                    <TestTablePrice />
                </div>
            </div>
        </div>
    );
};

export default TablePrice;
