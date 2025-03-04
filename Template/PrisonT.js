import { Progress } from "@radix-ui/react-progress";
import { useRouter } from "next/router";
import { FormatNumber } from "../utilities/tomanSeprator";
import Cookies from 'js-cookie'
import { useEffect, useRef, useState } from "react";

const PrisonT = ({data}) => {
    const detailRef = useRef(null);
    const router =useRouter()
    const clickHandler =()=>{
        Cookies.set('PrisonerUID',data.PrisonerUID);
        Cookies.set('ObjectUID',data.PrisonerUID)
        router.push({
            pathname: '/prisoners-detail',
            query: { prisoner: data.PrisonerUID } 
        });
    }

    
    const [showDetail , setShowDetail] =useState(false);

    const clickToShow = (e)=>{
        setShowDetail(!showDetail);
        e.stopPropagation();
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (detailRef.current && !detailRef.current.contains(event.target)) {
                setShowDetail(false); 
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className="relative w-full  md:w-5/12 xl:w-[32%] bg-white shadow-lg rounded-2xl my-4 p-6 ">
            <div className="flex justify-between items-center">
                <p className="text-[14px] text-secondary700 lg:text-lg font-bold">زندانی شماره <span>{data.PrisonerNumber}</span></p>
                <span className=" border border-primary100  text-secondary600 text-xs px-2 py-1 rounded-md">اولویت حمایتی</span>
            </div>
            <div className="mt-4 space-y-2">
                <p className='flex justify-between'><span className="text-[16px] text-secondary600 ">جنسیت:</span> <span className="text-[17px]">{data.PrisonerGender} </span></p>
                <p className='flex justify-between'><span className="text-[16px] text-secondary600 ">شهر:</span> <span className="text-[17px]">{data.PrisonerCity} </span></p>
                <p className='flex justify-between'><span className="text-[16px] text-secondary600 ">سن:</span> <span className="text-[17px]">{data.PrisonerAge} </span></p>
            </div>
            <div className="w-full my-5 border-dashed border border-primary400"  style={{ borderImage: "repeating-linear-gradient(90deg, transparent, transparent 15px, #3b82f6 15px, #3b82f6 18px) 15" }}>

            </div>
            <div className="text-sm text-gray-700">
                <div className="flex justify-between mb-6 mt-9">
                    <p className="text-[14px] lg:text-lg font-medium">مبلغ جمع آوری شده</p>
                    <div className="flex text-[14px] lg:text-lg font-bold"><span>{FormatNumber(data.HelpPrice)} </span> <span>تومان</span></div>
                </div>
                <Progress value={50} className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary200" style={{ width: data.PercentDebt }}></div>
                </Progress>
            </div>
            <div className="my-[42px] text-sm text-gray-700">
                <div className='flex justify-between'>
                    <p className="text-[16px] font-medium">بدهی تا پایان ماه</p>
                    <div className="flex text-[16px] font-bold"><span>{FormatNumber(data.PrisonerDebtEndMonth)}</span> <span>تومان</span></div>
                </div>
                <div className="relative mt-4 flex justify-between items-center">
                    <div className="text-[16px] font-medium flex items-center group">
                        <span>مهلت پرداخت </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 cursor-pointer" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#B0C7F5" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/>
                        </svg>
                        <p className="absolute hidden group-hover:block text-[12px] p-3 rounded-[16px] bg-secondary200 top-[130%]">
                            با پرداخت تا پیش از این تاریخ، می‌توانید از افزایش احتمالی مبلغ بدهی جلوگیری کنید و در سریع‌تر آزاد شدن این زندانی سهیم باشید.
                        </p>
                    </div>
                    <p className="text-[16px] font-bold">{data.PrisonerDebtDate}</p>
                </div>
            </div>
            {/* hidden box---------------------------- */}
            <div  ref={detailRef}  style={{display:showDetail?'block':'none'}} className='absolute w-[90%] rounded-[16px] top-[85%] flex flex-col z-50 bg-[#ECF2FF] p-3 '>
                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#B0C7F5" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/>
                    </svg>
                    <span className='text-[12px] text-secondary700 mr-2 font-semibold'>چرا ممکن است بدهی افزایش یابد</span>
                </div>
                <span className='text-[12px] text-secondary600 mr-8  mb-5'>به علت خسارت در تاخیر تادیه</span>
                <hr className='border-b border-primary400 border-dashed mb-4'/>
                <div className='flex justify-between text-[12px] text-secondary700'>
                    <span>
                        مبلغ پیش بینی شده تا ماه آینده
                    </span>
                    <div className='flex '>
                        <span>
                            {FormatNumber(data.PrisonerDebtEndMonth)}
                        </span>
                        <span className='mr-1'>ریال</span>
                    </div>
                </div>
            </div>
        <div  className="mt-6 text-[14px]  text-[#595959]">امکان افزایش بدهی در صورت پرداخت نشدن در موعد مقرر وجود دارد <button onClick={clickToShow} className="text-blue-600 ">[جزئیات]</button></div>
            <div className="flex justify-end">
                 <button onClick={clickHandler} className="w-[105px] h-[48px] mt-10 rounded-[8px] text-[16px] text-white bg-primary400">کمک میکنم</button>
            </div>
         </div>
    );
};

export default PrisonT;