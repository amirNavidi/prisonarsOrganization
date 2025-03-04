import { useEffect, useState } from "react";
import bankLogo from '../public/images/Parsian.png'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
export default function PaymentDetailsC() {
    const ObjectUID =Cookies.get('ObjectUID');
    const router=useRouter();
    let pathname =router.pathname;
    const [selected, setSelected] = useState(false);
    const [howPay , setHowPay]=useState(1)
    const howIsPay =(type)=>{
           setHowPay(type)
    }
    const [checked, setChecked] = useState(false);
    const [err , setErr]=useState('');
    const handleChange = () => {
        setChecked(!checked);
        setErr('');
      };

      
      const payHandler=()=>{
        if(!checked){
            setErr('لطفا موافقت خود با قوانین را اعلام بفرمایید');
         }else{
            setErr('')
            if(pathname=='/prisoners-detail/payment-details'){
                router.push({
                    query:ObjectUID,
                    pathname:'success-pay'
                })
            }else if(pathname=='/choosing-challenge/payment-details'){
                router.push({
                    query:ObjectUID,
                    pathname:'success-pay'
                })
            }
         }
    }
    return (
       <div className='flex lg:flex-row lg:justify-between lg:mb-5 flex-col lg:mx-[120px] mx-4 mb-28 '>
           <div className='flex flex-col w-full lg:w-[65%] '>
               <div className="border-2 px-5 mt-5 h-[220px] rounded-[16px] ">
                    <span className='block text-[20px] mt-5 mb-8'>اطلاعات پرداخت</span>
                    <div className='flex justify-between my-4 text-[16px] text-secondary600'>
                       <span>اطلاعات رسید نیکو کاری</span>
                       <span>00042</span>
                    </div>
                    <div className='flex justify-between text-[16px] text-secondary600'>
                        <span>مبلغ</span>
                        <div><span>2400000</span><span>ریال</span></div>
                    </div>
                    <div className='flex justify-between my-4 text-[16px] text-secondary600'>
                        <span>عنوان </span>
                        <span>کمک به زندانی 124</span>
                    </div>

               </div>
               <div className='flex flex-col border-2 pr-5 h-[220px] my-5 rounded-[16px]'>
                    <span className='text-[20px] mt-5 mb-8'>درگاه پرداخت</span>
                <div
                    className=" flex flex-col justify-end items-start w-[50px] mb-8 cursor-pointer "
                    onClick={() => setSelected(true)}
                    >
                    <Image src={bankLogo} className="h-8" alt="Logo" width={48} height={48} />
                    </div>
                    <div className='flex mt-3'>
                        <input
                            type="radio"
                            checked={selected}
                            onChange={() => setSelected(true)}
                            className=" w-5 accent-blue-500 cursor-pointer"
                        /><label className='mr-2 text-[16px] text-secondary600'>بانک  پارسیان</label>
                    </div>
               </div>
           </div>
           {/* secoud parent------------- */}
           <div className='w-full flex flex-col items-center lg:w-[30%] h-[460px] rounded-[16px]  border-2 mt-5 px-4'>
                <span className=' block text-[20px] text-secondary600  mt-5 mb-12 '>مشخصات نیکوکار</span>
                <button style={{border:`1px solid ${howPay==1?'#5486ea':'#bfbfbf'}`}} onClick={()=>howIsPay(1)} className='flex justify-start items-center pr-5 rounded-[8px] w-[95%] h-[56px] mx-auto'>
                     <input  onChange={() => howIsPay(1)} checked={howPay==1?true:false} type="radio" className="cursor-pointer w-5 h-5"/><label style={{color:howPay==1?'#5486ea':'#bfbfbf'}} className={`cursor-pointer text-[12px] mr-2`}>میخواهم ناشناس پرداخت کنم </label>
                </button>
                <button style={{border:`1px solid ${howPay==2?'#5486ea':'#bfbfbf'}`}} onClick={()=>howIsPay(2)} className='flex my-8 justify-start items-center pr-5 rounded-[8px] w-[95%] h-[56px] mx-auto'>
                     <input  onChange={() => howIsPay(2)} checked={howPay==2?true:false} type="radio" className="cursor-pointer w-5 h-5"/><label style={{color:howPay==2?'#5486ea':'#bfbfbf'}} className={`cursor-pointer text-[12px] mr-2`}>میخواهم نام خودم نمایش داده شود </label>
                </button>
                <p className='px-4 text-[12px] text-gray-500'>در صورت تمایل به ارسال نام خود <Link href={'#'}><span className='text-primary500 cursor-pointer'>اطلاعات کاربری</span></Link>  خود را تکمیل کنید.</p>


                <button onClick={payHandler} className='bg-primary400 mt-10 mb-2  rounded-[10px] text-white w-6/12 h-[56px]'>
                      پرداخت 
                </button>
                <span className='text-[12px] text-red-500 mb-4'>{err}</span>
                <div className="flex justify-center items-center mb-4 space-x-2 ">
                <input
                    type="checkbox"
                    id="terms"
                    checked={checked}
                    onChange={handleChange}
                    className="h-3 w-3 text-Base ml-2  border-gray-300 rounded focus:ring focus:ring-blue-300"
                    />
                    <label htmlFor="terms" className="text-xs text-gray-700">
                        <Link href='/verification/costofverification/rules'><small className='text-primary500  underline underline-offset-4 text-[12px]'>کلیه قوانین و مقررات </small></Link> سایت را مطالعه کرده و پذیرفته ام.
                    </label>
                </div>
           </div>
       </div>
    );
  }
  