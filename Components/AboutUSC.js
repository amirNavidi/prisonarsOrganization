import { useState , useEffect, useRef } from "react";
import ChildParentCardsC from "./ChildParentCardsC";
import Image from "next/image";


const AboutUSC = () => {

    // const [hasOverflow, setHasOverflow] = useState(false);


    
    //     useEffect(() => {
    //         const checkOverflow = () => {
    //             if (refNumber.current) {
    //                 setHasOverflow(refNumber.current.scrollWidth > refNumber.current.clientWidth);
    //             }
    //         };
    //         checkOverflow();
    //         window.addEventListener("resize", checkOverflow);
    //         return () => window.removeEventListener("resize", checkOverflow);
    //     }, []);
        
    
    //     useEffect(() => {
    //         const handlePreventScroll = (event) => {
    //             if (refNumber.current && refNumber.current.matches(":hover") && hasOverflow) {
    //                 event.preventDefault();
    //             }
    //         };
    //         document.addEventListener("wheel", handlePreventScroll, { passive: false });
    //         return () => document.removeEventListener("wheel", handlePreventScroll);
    //     }, [hasOverflow]);
    
    // const handleWheelScroll = (event) => {
    //     if (refNumber.current && refNumber.current.matches(":hover") && hasOverflow) {
    //         event.preventDefault();
    //         refNumber.current.scrollLeft -= event.deltaY * 3;
    //     }
    // };
    const [data, setData]=useState({
        organizations:[]
    })
    
    useEffect(() => {
        const getCardsData = async () => {
            try {
                const response = await fetch('/api/get-cards-infoes');
                const fetchedData = await response.json();                
                const categorizedData = {
                    organizations: fetchedData.backendResponse.filter(item => item.TypeHelpCategory === "Company"),
                };

                setData(prev => ({ ...prev, ...categorizedData }));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getCardsData();
    }, []);
    const scrollRef4 = useRef(null);
    return (
        <div className="flex flex-col  mb-28">

            {/* top image ------------------------- */}
            <div className='relative flex justify-center w-full h-[106px] lg:h-[296px] bg-[url("/images/fence.png")] bg-cover bg-no-repeat bg-center'></div>
            <div className='relative w-full flex justify-center h-[450px] sm:h-[300px]'>
                <div className=' relative lg:absolute w-full lg:w-10/12 flex flex-col lg:top-[-40%] lg:shadow-md bg-white pb-[60px] rounded-[26px]'>
                    <span className='text-[16px] lg:text-[20px] font-semibold my-6 px-4 lg:px-9'>درباره ما</span>
                    <p className='text-[12px] lg:text-[14px] text-justify text-secondary700 px-9'>انجمن های حمایت زندانیان و خانواده آنان، انجمنی دارای شخصیت حقوقی مستقل و غیرانتفاعی است که با لطف خداوند متعال وظیفه ارائه خدمات مادي و معنوي به زندانیان نیازمند و خانواده زندانيان را با انجام فعالیت های اقتصادی معطوف به خدمت دهی به جامعه هدف و جلب کمک های جامعه نیکوکار و یاری رسان مردم عزیز کشورمان بر عهده دارد. این انجمن که از سال 1320 تشکیل و به فعالیت می پردازد تاکنون توانسته موفقیت های خوبی در زمينه توجه به مسائل کرامت انسانی، وضعیت اقتصادی و معیشتی، انسجام خانوادگی، بهداشت جسم و روان و پيشگيري از ارتكاب مجدد جرم زندانیان و خانواده آنان را فراهم آورد. این اقدامات شامل ارائه خدمات مشاوره ای و راهنمایی، اقدام جهت جلب رضایت شاکی،  ارائه حمایت های نقدی و غیرنقدی، اعطای تسهیلات قرض الحسنه، کمک به حرفه آموزی و اشتغال، تعامل با موسسات رفاه اجتماعی و سمن ها و خیرین، ارائه خدمات فرهنگی و تربیتی، ارائه خدمات آموزش مهارت های بهداشتی، رفتاری و زندگی، کمک به رهایی یا آزادی مددجوان و پیگیری پرونده قضایی زندانیان از طریق مراجع ذیربط با موضوع می باشد.</p>
                </div>
            </div>
           
           {/* under first iamge--------------------------------------- */}
           <div className='flex flex-col px-4 lg:px-[130px]'>
                <span className='text-[20px] font-semibold mt-10 lg:mt-0'>خدمات ما</span>
                <span className='text-[14px] lg:text-[16px] text-secondary600 mt-4'>ما با هدف ایجاد حمایت‌های جامع برای زندانیان و خانواده‌های آنان، خدمات متنوعی را به افراد نیازمند ارائه می‌دهیم :</span>


                <span className='text-[12px] lg:text-[20px] text-primary400 font-medium mt-12 mb-3'>خدمات نقدی</span>
              



            {/* connected organization ---------------------------------- */}
                <div className='mt-[60px] mb-[100px] mr-[-16px] lg:mr-[-120px] '>
                    <span className='mr-[16px] lg:mr-[120px] text-[20px] font-medium'>سازمان ها و نهاد های همکار</span>
                    <ChildParentCardsC dataV={{width:160 ,height:160 ,rounded :'50%' , data:data.organizations ,refNumber:scrollRef4 ,type:4}} />
                </div>



           {/* conditions ----------------------------------------------- */}
                    <div className='flex flex-col lg:flex-row '>
                        <div className=' w-full lg:w-1/2'>
                         <span className='block text-[20px] font-semibold mb-10'>شرایط و ضوابط اعطای خدمت </span>
                            <p className=' text-justify text-[16px] text-secondary600'>
                            اعطای کمک به افرادی تعلق می گیرد که یا در حبس باشند یا آزاد شده باشند یا عضوی از خانواده آنان در حال تحمل حبس باشند.
                            </p>
                            <p className=' text-justify text-[16px] text-secondary600 my-4'>
                            مددکاران اجتماعی با مطالعه وضعیت آنان از طریق مصاحبه ، تحقیقات میدانی ، بررسی شواهد و قرائن نیازمندی آنان را به دریافت خدمت تایید کرده باشند.
                            </p>
                            <p className=' text-justify text-[16px] text-secondary600 mb-4'>
                            اعطای کمک با نظارت انجمن های حمایت زندانیان و در راستای نیت خیرین محترم در محل مصرف انتخاب شده  با توجه به نوع نیاز جامعه هدف انجام خواهد شد
                            </p>
                        </div>
                        {/* Letf Parent------------------------------------------------ */}
                        <div className='relative flex justify-center w-full lg:w-1/2 px-14'>
                            <Image src={'/images/person.svg'} width={325} height={325}  fill />
                        </div>

                    </div>
           </div>


            
        </div>
    );
};

export default AboutUSC;