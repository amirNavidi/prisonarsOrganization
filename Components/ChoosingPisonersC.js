import { useEffect ,useState } from "react";
import PrisonT from "../Template/PrisonT";



const ChoosingPisonersC = () => {
    const [prisoners , setPrisoners] =useState([]);
    useEffect(()=>{
        const getPrisoners =async()=>{
            const response =await fetch('/api/get-prisoners',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
            }); 
            const data = await response.json();
            setPrisoners(data.backendResponse)
            console.log(data, 'this is data')
        };
       getPrisoners();
    },[])
    
    return (
        <div className="pr-4 ml-10 mb-28 mr-4 xl:mr-[120px] mt-10 xl:mt-24">
            <span className="text-[20px]  text-secondary800 font-semibold">کمک به آزادی زندانیان کم توان</span>
            <p className='text-justify text-[16px] mb-16 lg:mb-25 mt-8 text-secondary700'>
                زندگی پشت میله­ ها برای آدم­های آبرودار یا کسانی که از کردۀ خود پشیمانند، آسیب­های وحشتناکی دارد. هم خودشان نابود می­شوند و هم خانواده­شان. یکی درون محبس ذرّه ­ذرّه آب می­شود و خانواده­اش با کاسۀ چه­ کنم، چه­ کنم. در واقع این بخش در ارتباط با زندانیان نادمی است که صرفاً به دلیل عجز در پرداخت بدهی، جریمه و نظایر آن در زندان تحمل کیفر می کنند و با پرداخت مبلغ به طور قطع از زندان آزاد می شوند. به قطع یقین زندان برای افراد آبرومند یا افراد پشیمانی که قصد جبران گذشته را دارند آثار زیانباری را نه تنها برای خود بلکه برای خانواده های آنان در بر دارد. لطمات روحی و روانی و دیگر آسیب های اجتماعی از عواقب این امر بوده که از لحاظ جنبه های فردی ، خانوادگی و اجتماعی قابل بررسی و تأمل است، اگر چه بخشی از آسیب ها با پرداخت دین قابل جبران است ولی بخش عمده ای از این صدمات که شامل آسیب های روانی و اجتماعی است، جبران آن کاری بسیار سخت و بعضاً غیر ممکن می باشد لذا حمایت شما بزرگواران در این مسیر ما را بیش از پیش دلگرم تر و مصمم تر می نماید. پس رحمت خدا بر دست­هایی که دستگیر هستند؛ بر دست­هایی که فرصت تنفس در هوای آزادی را برای انسان های گرفتار فراهم می­کنند.
            </p>
            {/* prisoners --------------------------------------- */}
            <div className='w-full flex justify-center flex-wrap lg:justify-between'>
            
                {                    
                prisoners?.length>0&&prisoners.map(item=>{
                    return <PrisonT key={item.PrisonerUID} data={item} />
                })
                }
            </div>
        </div>
    );
};

export default ChoosingPisonersC;