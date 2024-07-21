import Button from '@/components/atoms/Button';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import Propertie from '@/components/atoms/Properties/Propertie';
import { useProcessFlow } from '@/context/FlowContext';

function TableExample() {
    const {currentProcessIndex,flows,onSubmit,onNext,onBack} = useProcessFlow()
    return (
      <>
        <div>
               <div className="overflow-x-auto mt-4">
                <table className="min-w-full text-xs table-fixed">
                    <thead>
                        <tr className="flex flex-row">
                            <th className="w-[5%] px-4 py-2  flex flex-row justify-center items-center border-stroke border-y border-l">
                                No
                            </th>
                            <th className="w-[5%]  px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l ">
                                Type
                            </th>
                            <th className="flex-1  px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Specifications
                            </th>
                            <th className="w-[10%]  px-4 py-2 flex flex-col justify-center items-center border-stroke border-y border-l">
                                Total coil
                                <span className="text-unit">(PCS)</span>
                            </th>
                            <th className="w-[10%]   px-4 py-2 flex flex-col justify-center items-center border-stroke border-y border-l ">
                                Total weight
                                <span className="text-unit">(KG)</span>
                            </th>
                            <th className="w-[10%]   px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Prime
                            </th>
                            <th className="w-[12%]   px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Preferred tolerances
                            </th>
                            <th className="w-[10%]  px-4 py-2 flex flex-col justify-center items-center border-stroke border-y border-l">
                                Unit price
                                <span className="text-unit">(PCS)</span>
                            </th>

                            <th className="w-[10%]   px-4 py-2 flex flex-col justify-center items-center border-stroke border-y border-l">
                                Total price
                                <span className="text-unit">(VND)</span>
                            </th>
                            <th className="w-[5%] px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Status
                            </th>
                            <th className="w-[10%]   px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="flex flex-row ">
                            <td className="w-[5%] px-4 py-2  text-[13px] font-normal border-stroke border-y border-l text-text flex justify-center">
                                01
                            </td>
                            <td className="w-[5%] px-4 py-2 border-stroke border-y border-l "></td>
                            <td className="px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l flex-1"></td>
                            <td className="w-[10%] px-4 py-2  border-stroke border-y border-l"></td>
                            <td className="w-[10%] px-4 py-2  border-stroke border-y border-l"></td>
                            <td className="w-[10%] px-4 py-2  border-stroke border-y border-l"></td>
                            <td className="w-[12%]  px-4 py-2  border-stroke border-y border-l"></td>
                            <td className="w-[10%] px-4 py-2  border-stroke border-y border-l"></td>
                            <td className="w-[10%]  px-4 py-2  border-stroke border-y border-l"></td>
                            <td className="w-[5%]  px-4 py-2  border-stroke border-y border-l"></td>
                            <td className="w-[10%]  px-4 py-2  border-stroke border-y border-l"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full text-xs table-fixed">
                    <thead>
                        <tr className="flex flex-row text-text">
                            <th className="w-[3%] px-4 py-2  flex flex-row justify-center items-center border-stroke border-y border-l">
                                <Checkbox
                                    description={""}
                                    id={"allIds"}

                                />
                            </th>
                            <th className=" w-1/12 text-primary  px-4 py-2 flex flex-row text-[12px] justify-center items-center border-stroke border-y border-l "></th>
                            <th className="w-1/12 text-primary   px-4 py-2 flex flex-row text-[12px] justify-center items-center border-stroke border-y border-l ">
                                Ticket ID
                            </th>
                            <th className="w-[15%] text-primary   px-4 py-2 flex flex-row gap-x-1 text-[12px] justify-center items-center border-stroke border-y border-l">
                                Status
                            </th>
                            <th className="w-[10%]  text-primary   text-[12px] px-4 py-2 flex flex-col justify-center items-center border-stroke border-y border-l ">
                                Customer
                            </th>
                            <th className="w-[15%] px-4 py-2 text-primary   flex flex-row gap-x-1 text-[12px] justify-center items-center border-stroke border-y border-l ">
                                Properties
                            </th>
                            <th className="w-[10%] text-primary    text-[12px] gap-x-1 px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Progresses
                            </th>
                            <th className="w-[10%] text-primary    text-[12px] gap-x-1 px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Service time
                            </th>

                            <th className="w-[10%] text-primary    text-[12px] gap-x-1  px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Validity time
                            </th>
                            <th className="w-[10%] text-primary    text-[12px] gap-x-1 px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Created date
                            </th>
                            <th className="w-[10%] text-primary    text-[12px] gap-x-1 px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Total tonnage
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="flex flex-row text-text font-normal w-full ">
                            <td className="w-[3%] px-4 py-2 flex flex-col justify-center items-center">
                                <Checkbox
                                    description={""}
                                    id="1"
                           
                                />
                            </td>
                            <td className="flex flex-row w-1/12 px-4 py-2 justify-center items-center ">
                               
                            </td>
                            <td className=" px-4 py-2 text-text  flex flex-col font-normal  w-1/12">
                                019100101
                                <div className="flex flex-row gap-x-1">
                                  
                                </div>
                            </td>

                            <td className=" px-4 py-2 w-[15%] ">
                                <Propertie status  title="PENDING" />
                            </td>
                            <td className=" px-4 py-2 font-normal w-[10%]  flex  justify-center items-center">
                                Thép Thiên Phước
                            </td>
                            <td className=" px-4 py-2 w-[15%] ">
                                <Propertie  title="NON STANDARDS" />
                            </td>
                            <td className=" px-4 py-2 w-[10%]  flex flex-col justify-start gap-x-1">
                                <div className="flex flex-row items-center gap-x-1">
                                    Price & Policy
                                </div>
                                <p className="text-text-1">See details</p>
                            </td>
                            <td className=" px-4 py-2 w-[10%] flex items-center">
                 
                            </td>
                            <td className=" px-4 py-2 w-[10%] flex items-center">
                              
                            </td>
                            <td className=" px-4 py-2  font-normal w-[10%] flex justify-center items-center">
                                08:50
                            </td>
                            <td className=" px-4 py-2 text-text  font-normal w-[10%] flex justify-center items-center">
                                40,000
                            </td>
                        </tr>
                        <tr className="flex flex-row text-text font-normal w-full ">
                            <td className="w-[3%] px-4 py-2 flex flex-col justify-center items-center">
                                <Checkbox
                                    description={""}
                                    id="2"
                                   
                                />
                            </td>
                            <td className="flex flex-row w-1/12 px-4 py-2 justify-center items-center ">
                                
                            </td>
                            <td className=" px-4 py-2 text-text  flex flex-col font-normal  w-1/12">
                                019100101
                                <div className="flex flex-row gap-x-1">
                                </div>
                            </td>

                            <td className=" px-4 py-2 w-[15%] ">
                                <Propertie status  title="NOT ENOUGH INVENTORY" />
                            </td>
                            <td className=" px-4 py-2 font-normal w-[10%]  flex  justify-center items-center">
                                Tôn thép KOKORO
                            </td>
                            <td className=" px-4 py-2 w-[15%] ">
                                <Propertie title="STANDARDS" />
                            </td>
                            <td className=" px-4 py-2 w-[10%]  flex flex-col justify-start gap-x-1">
                                <div className="flex flex-row items-center gap-x-1">
                                    Price & Policy
                                </div>
                                <p className="text-text-1">See details</p>
                            </td>
                            <td className=" px-4 py-2 w-[10%] flex items-center ">
                               
                            </td>
                            <td className=" px-4 py-2 w-[10%] flex items-center">
                              
                            </td>
                            <td className=" px-4 py-2  font-normal w-[10%] flex justify-center items-center">
                                08:50
                            </td>
                            <td className=" px-4 py-2 text-text  font-normal w-[10%] flex justify-center items-center">
                                40,000
                            </td>
                        </tr>
                        <tr className="flex flex-row text-text font-normal w-full ">
                            <td className="w-[3%] px-4 py-2 flex flex-col justify-center items-center">
                                <Checkbox
                                    description={""}
                                    id="3"
                            
                                />
                            </td>
                            <td className="flex flex-row w-1/12 px-4 py-2 justify-center  items-center">
                               
                            </td>
                            <td className=" px-4 py-2 text-text  flex flex-col font-normal  w-1/12 ">
                                019100101
                                <div className="flex flex-row gap-x-1">
                                  
                                </div>
                            </td>

                            <td className=" px-4 py-2 w-[15%] ">
                                <Propertie status isIcon title="INVALID SCHEDULE" />
                            </td>
                            <td className=" px-4 py-2 font-normal w-[10%]  flex  justify-center  items-center">
                                Sắt thép Thiên Phúc
                            </td>
                            <td className=" px-4 py-2 w-[15%] ">
                                <Propertie title="PRE-ORDER STANDARDS" />
                            </td>
                            <td className=" px-4 py-2 w-[10%]  flex flex-col justify-start gap-x-1">
                                <div className="flex flex-row items-center gap-x-1">
                                    {/* <TimeFill className={`mr-1 text-red`} />{" "} */}
                                    Price & Policy
                                </div>
                                <p className="text-text-1">See details</p>
                            </td>
                           
                            <td className=" px-4 py-2  font-normal w-[10%] flex justify-center items-center">
                                08:50
                            </td>
                            <td className=" px-4 py-2 text-text  font-normal w-[10%] flex justify-center items-center">
                                40,000
                            </td>
                        </tr>
                
                    </tbody>
                </table>
            </div>
        </div>
        <div className="flex gap-4 mt-[50px]"> 
        <Button
            typeFile=""
              variant="secondary"
        size="medium"
             className={`${currentProcessIndex <=  1 ?"disabled text-gray-4 cursor-not-allowed":""}`}
                onClick={() =>
                    onBack()
                }>
               back
            </Button>
      {currentProcessIndex >= flows.length ? (  <Button
        typeFile={''}
        variant="secondary"
        size="medium"
                onClick={() =>
                    onSubmit()
                }>
                submit
            </Button>):(
                  <Button
                  typeFile={''}
                  variant="secondary"
                  size="medium"
                      className={`${currentProcessIndex >= flows.length ?"disabled text-gray-4 cursor-not-allowed":""}`}
                          onClick={() =>
                              onNext()
                          }>
                          next
                      </Button>
            )}
         
        </div>
        </>
    );
}

export default TableExample;