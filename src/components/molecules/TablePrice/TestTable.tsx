"use client";
import {
    Table,
    Header,
    HeaderRow,
    Body,
    Row,
    HeaderCell,
    Cell
} from "@table-library/react-table-library/table";
import {useTheme} from "@table-library/react-table-library/theme";
import "./styles.css";
import {nodes} from "./data";
import {tableList} from "./tablelist";

const TestTable = () => {
    const data = {nodes};

    const theme = useTheme({
        Table: `
          --data-table-library_grid-template-columns:  56px 56px 15% 83px 93px 98px 145px 80px 104px 80px 88px 88px 88px 88px 88px 88px 133px 133px 133px 100px 100px  ;
        `,
        BaseCell: `
          &:nth-of-type(1) {
            left: 0px;
          }
          &:nth-of-type(2) {
            left: 56px;
          }
            &:nth-of-type(3) {
            left:112px;
          }
            &:nth-of-type(4) {
            left: calc(112px + 15%);
          }
            &:nth-of-type(5) {
            left: calc(112px + 15% + 83px);
          }
            &:nth-of-type(6) {
            left: calc(112px + 15% +  83px + 93px);
          }
            &:nth-of-type(7) {
            left: calc(112px + 15% + 83px + 93px + 98px);
          }
            &:nth-of-type(8) {
            left: calc(112px + 15% + 83px + 93px + 98px + 145px);
          }
            &:nth-of-type(9) {
            left: calc(112px + 15% + 83px + 93px + 98px + 145px + 80px);
          }
            &:nth-of-type(10) {
            left: calc(112px + 15% + 83px + 93px + 98px + 145px + 80px + 104px);
          }
          
        `
    });
    return (
        <Table
            data={data}
            className="border"
            theme={theme}
            layout={{custom: true}}>
            {(tableList) => (
                <>
                    <Header>
                        <HeaderRow>
                            <HeaderCell
                                className="border-r border-stroke"
                                resize
                                pinLeft>
                                No
                            </HeaderCell>
                            <HeaderCell
                                resize
                                pinLeft
                                className="border-r border-stroke">
                                Type
                            </HeaderCell>
                            <HeaderCell
                                resize
                                pinLeft
                                className="border-r border-stroke">
                                Specifications
                            </HeaderCell>
                            <HeaderCell
                                resize
                                pinLeft
                                className="border-r border-stroke">
                                <div className="flex-col min-w-[83px]">
                                    <p>Total coil</p>
                                    <p className="col-subTitle">(PCS)</p>
                                </div>
                            </HeaderCell>
                            <HeaderCell
                                resize
                                pinLeft
                                className="border-r border-stroke">
                                <div className="flex-col min-w-[93px]">
                                    <p>Total coil</p>
                                    <p className="col-subTitle">(KG)</p>
                                </div>
                            </HeaderCell>
                            <HeaderCell
                                resize
                                pinLeft
                                className="border-r border-stroke">
                                Prime
                            </HeaderCell>
                            <HeaderCell
                                resize
                                pinLeft
                                className="border-r border-stroke">
                                Preferred tolerances
                            </HeaderCell>
                            <HeaderCell
                                resize
                                pinLeft
                                className="border-r border-stroke">
                                <div className="flex-col w-[80px]">
                                    <p>Unit price</p>
                                    <p className="col-subTitle">(PCS)</p>{" "}
                                </div>
                            </HeaderCell>
                            <HeaderCell
                                pinLeft
                                resize
                                className="border-r border-stroke">
                                <div className="flex-col w-[104px]">
                                    <p>Discounted price</p>
                                    <p className="col-subTitle">(PCS)</p>
                                </div>
                            </HeaderCell>
                            <HeaderCell
                                resize
                                pinLeft
                                className="border-r border-stroke">
                                <div className="flex-col w-[78px]">
                                    <p>Rebate offer</p>
                                    <p className="col-subTitle">(PCS)</p>{" "}
                                </div>
                            </HeaderCell>
                            <HeaderCell
                                resize
                                stiff
                                className="border-r border-stroke r-start-1 col-span-3 ">
                                <div className="flex flex-col w-[264px]  ">
                                    <div className=" w-full h-[28px] border-b border-stroke  flex-center text-center">
                                        Special rebate offer
                                    </div>
                                    <div className="flex max-w-[264px] flex-center h-[28px]">
                                        <div className="col-subTitle w-[88px] flex-center  h-full  border-r border-stroke  ">
                                            (VND/KG)
                                        </div>
                                        <div className="col-subTitle w-[88px] flex-center  h-full  border-r border-stroke  ">
                                            (%)
                                        </div>
                                        <div className="col-subTitle w-[88px] flex-center  h-full    ">
                                            (VND/KG)
                                        </div>
                                    </div>
                                </div>
                            </HeaderCell>
                            <HeaderCell
                                resize
                                stiff
                                className="border-r border-stroke r-start-1 col-span-3 ">
                                <div className="flex flex-col w-[264px]  ">
                                    <div className=" w-full h-[28px] border-b border-stroke  flex-center text-center">
                                        Special rebate offer
                                    </div>
                                    <div className="flex max-w-[264px] flex-center h-[28px]">
                                        <div className="col-subTitle w-[88px] flex-center  h-full  border-r border-stroke  ">
                                            (VND/KG)
                                        </div>
                                        <div className="col-subTitle w-[88px] flex-center  h-full  border-r border-stroke  ">
                                            (%)
                                        </div>
                                        <div className="col-subTitle w-[88px] flex-center  h-full    ">
                                            (VND/KG)
                                        </div>
                                    </div>
                                </div>
                            </HeaderCell>
                            <HeaderCell>Fullfillment</HeaderCell>
                            <HeaderCell>
                                <div>
                                    <p> Final price</p>
                                    <p className="col-subTitle">(VND)</p>
                                </div>
                            </HeaderCell>
                            <HeaderCell>
                                <div className="flex-col">
                                    <p> Total price</p>
                                    <p className="col-subTitle">(PCS)</p>
                                </div>
                            </HeaderCell>
                            <HeaderCell>Status</HeaderCell>
                            <HeaderCell>Action</HeaderCell>
                        </HeaderRow>
                    </Header>

                    <Body>
                        {tableList.map((item) => (
                            <Row key={item.id} item={item}>
                                <Cell pinLeft>{item.name}</Cell>
                                <Cell pinLeft>
                                    {item.deadline.toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit"
                                    })}
                                </Cell>
                                <Cell pinLeft>{item.type}</Cell>
                                <Cell pinLeft>{item.type}</Cell>
                                <Cell pinLeft>{item.type}</Cell>
                                <Cell pinLeft>{item.type}</Cell>
                                <Cell pinLeft>{item.type}</Cell>
                                <Cell pinLeft>{item.type}</Cell>
                                <Cell pinLeft>{item.type}</Cell>
                                <Cell pinLeft>{item.type}</Cell>
                                <Cell>{item.type}</Cell>
                                <Cell>{item.type}</Cell>
                                <Cell>{item.type}</Cell>
                                <Cell>{item.type}</Cell>
                                <Cell>{item.type}</Cell>
                                <Cell>{item.type}</Cell>
                                <Cell>{item.type}</Cell>
                                <Cell>{item.type}</Cell>
                                <Cell>{item.type}</Cell>
                                <Cell>{item.type}</Cell>
                                <Cell>{item.type}</Cell>
                            </Row>
                        ))}
                    </Body>
                </>
            )}
        </Table>
    );
};

export default TestTable;
