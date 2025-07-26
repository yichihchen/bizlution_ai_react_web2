
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TdStyle = {
    ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-xl font-medium lg:py-7 lg:px-4`,
    TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
    TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
    TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
}

const Bxp301tabledownload = () => {
    return (
        <section className='bg-white dark:bg-dark py-10'>
            <div className='container'>
                <div className='flex flex-wrap -mx-4'>
                    <div className='w-full '>
                        <div className='max-w-full overflow-x-auto'>
                            <table className='w-full table-auto'>
                                <thead className='text-center bg-primary'>
                                    <tr>
                                        <th className={TdStyle.ThStyle}> 類型 </th>
                                        <th className={TdStyle.ThStyle}> 下載 </th>
                                        <th className={TdStyle.ThStyle}> DATE </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>BXP-301 硬體規格 (CHT)</td>
                                        <td className={TdStyle.TdStyle2}>BXP-301-CHT.compressed.pdf</td>
                                        <td className={TdStyle.TdStyle}>2018-05-04</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Bxp301tabledownload;

