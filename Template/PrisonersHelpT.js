import { Progress } from "@radix-ui/react-progress";
import { useRouter } from "next/router";


const PrisonersHelpT = ({helpDetails}) => {
    const router =useRouter();
    const detailHandler=()=>{
        // when I get data I will cahnge uId for true address
          router.push('/prisoners-detail?prisoner=76E401B8-2DED-4367-B53B-85E64913FAB7')
    }

    return (
        <div className='flex flex-col  items-center w-11/12 lg:w-[49%] mt-8 bg-white rounded-[16px] p-4'>
            <div className='w-full flex items-center justify-between my-3 '>
                <div className='text-[20px] font-medium'>
                    <span>زندانی شماره</span>
                    <span>124</span>
                </div>
                
                <span className=' px-3 text-[#3FA34D] text-center  py-2 border border-green-500 bg-[#ECF6ED] rounded-[8px]'>آزاد شده</span>
            </div>
            <p className=' w-full mt-3 text-[12px]'>
             به یاری و همراهی شما این زندانی در تاریخ <span>1403/11/20</span> به آغوش خانواده بازگشت .
            </p>
            {/* Progress bar-------------------------- */}
            <Progress className="w-full h-2 bg-gray-200 rounded-full my-6 overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: `${100}%` }}></div>
            </Progress>

            <div className='w-full flex justify-between items-center mb-10 text-[14px] text-secondary600'>
                <span>مبلغ باقی مانده</span>
                <div className='flex '>
                    <span>0</span>
                    <span>ریال</span>
                </div>
            </div>

            <div className='w-full flex justify-between items-center mb-10 text-[14px] text-secondary600'>
                <span>تاریخ اتمام</span>
                <span>1403/11/19</span>
            </div>

            <button onClick={detailHandler} className='text-[16px] text-primary400 mr-auto'>مشاهده جزئیات</button>
        </div>
    );
};

export default PrisonersHelpT;