{/* <div className="flex flex-row m-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-primary text-base font-medium">Product</h1>
                    <p className="text-input text-[13px] font-normal">Sales Order Management - Create Sales Order</p>
                </div>
            </div>
            <div className="bg-highlight py-4">
                <DataTable className="w-full" tableId={""} >
                    <thead className="bg-white">
                        <tr className="flex flex-row  ">
                            <th className={`${thClasses} min-w-[55px] border-l-0 px`}>
                                No
                            </th>
                            <th className={`${thClasses} min-w-[55px]`}>
                                Type
                            </th>
                            <th className={`${thClasses} flex-1`}>
                                Specifications
                            </th>
                            <th className={`${thClasses} min-w-[93px] flex-col`}>
                                Total coil
                                <span className="text-unit">(PCS)</span>
                            </th>
                            <th className={`${thClasses} min-w-[119px] flex-col`}>
                                Total weight
                                <span className="text-unit">(KG)</span>
                            </th>
                            <th className={`${thClasses} min-w-[113px]`}>
                                Prime
                            </th>
                            <th className={`${thClasses} min-w-[158px]`}>
                                Preferred tolerances
                            </th>
                            <th className={`${thClasses} min-w-[120px] flex-col`}>
                                Unit price
                                <span className="text-unit">(PCS)</span>
                            </th>
                            <th className={`${thClasses} min-w-[120px] flex-col`}>
                                Total price
                                <span className="text-unit">(VND)</span>
                            </th>
                            <th className={`${thClasses} min-w-[64px]`}>
                                Status
                            </th>
                            <th className={`${thClasses} min-w-[115px]`}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tables.table1.data.map((item) => {

                                return (
                                    <tr key={item.id} className="flex flex-row odd:bg-highlight even:bg-white  ">
                                        <td className={`${tdClasses} min-w-[55px] border-l-0`}>
                                            {item.No}
                                        </td>
                                        <td className={`${tdClasses} min-w-[55px]`}>
                                            <CartReport className="size-6" />
                                        </td>
                                        <td className={`${tdClasses} flex-1 !justify-start`}>
                                            {item.Specifications}
                                        </td>
                                        <td className={`${tdClasses} min-w-[212px] !px-0`} colSpan={2}>
                                            <div className="flex flex-row gap-x-[9px]">
                                                <Input isTextCenter isDisabled={isInputDisabled[item.id]} value={item.TotalCoil} className="max-w-[74px] w-full flex flex-row justify-center">
                                                </Input>
                                                <div className="flex flex-row justify-center items-center">
                                                    <Arrow className="w-4 h-4 text-gray-10 hover:cursor-pointer hover:opacity-80"
                                                        onClick={() => changeInputDisabled(item.id)} />
                                                </div>
                                                <Input isTextCenter isDisabled={!isInputDisabled[item.id]} value={formatNumber(Number(item.TotalWeight))} className="max-w-[74px] w-full flex flex-row justify-center">
                                                </Input>
                                            </div>
                                        </td>
                                        <td className={`${tdClasses} min-w-[113px]`}>
                                            <select
                                                disabled={!item.Prime.isDisabled}
                                                className="text-center min-w-[97px] rounded-[7px] border border-[#D9D9D9] border-t-transparent bg-transparent p-2 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-[#40A9FF]   "

                                            >
                                                {
                                                    item.Prime.value.map((primeItem, index) => (
                                                        <option key={index} value={index}>
                                                            {primeItem}
                                                        </option>
                                                    ))
                                                }
                                            </select>

                                        </td>
                                        <td className={`${tdClasses} min-w-[158px]`}>

                                        </td>
                                        <td className={`${tdClasses} min-w-[120px] `}>
                                            {formatNumber(item.UnitPrice)}
                                        </td>
                                        <td className={`${tdClasses} min-w-[120px] `}>
                                            {formatNumber(item.TotalPrice)}
                                        </td>
                                        <td className={`${tdClasses} min-w-[64px]`}>
                                            <Inventory className={`size-5 ${item.Status}`} />
                                        </td>
                                        <td className={`${tdClasses} min-w-[115px] gap-2`}>
                                            {
                                                item.Action.includes("delete") && <Trash className="size-6" />
                                            }
                                            {
                                                item.Action.includes("edit") && <Wrench className="size-6" />
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </DataTable>
            </div>
            <div className="flex flex-row m-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-primary text-base font-medium">Product Approvals</h1>
                </div>
            </div>
            <div className="flex flex-row my-4 bg-highlight p-4 items-center justify-between">
                <div className="flex flex-col gap-1">
                </div>
                <div className="flex flex-col gap-1">
                    <PaginationSelect tableId={""} currentPage={0} totalRecords={0} recordsPerPage={0} handlePageChangePrevious={function (): void {
                        throw new Error("Function not implemented.");
                    }} handlePageChangeNext={function (): void {
                        throw new Error("Function not implemented.");
                    }} handleRecordsPerPageChange={function (e: React.ChangeEvent<HTMLSelectElement>): void {
                        throw new Error("Function not implemented.");
                    }} />
                </div>
            </div> */}