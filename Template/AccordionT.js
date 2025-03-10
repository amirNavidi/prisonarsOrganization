import { useState } from "react";

const AccordionT = ({ provinces }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [selectedProvinces, setSelectedProvinces] = useState([]);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleSelectProvince = (id) => {
        setSelectedProvinces((prev) =>
            prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
        );
    };

    return (
        <div id="accordion-collapse">
            {/* Province -------------------------------*/}
            <div>
                <h2>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-1 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                        onClick={() => toggleAccordion(0)}
                    >
                        <span>استان</span>
                        <svg
                            className={`w-3 h-3 transform ${openIndex === 0 ? "rotate-180" : ""}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === 0 ? "block" : "hidden"}`}>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <div>
                            {provinces.map((province) => (
                                <label key={province.ProvinceID} className="flex items-center gap-2 p-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value={province.ProvinceID}
                                        checked={selectedProvinces.includes(province.ProvinceID)}
                                        onChange={() => handleSelectProvince(province.ProvinceID)}
                                    />
                                    {province.ProvinceName}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* City ----------------------------------------------------------*/}
            <div>
                <h2>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-1 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                        onClick={() => toggleAccordion(1)}
                    >
                        <span>شهر</span>
                        <svg
                            className={`w-3 h-3 transform ${openIndex === 1 ? "rotate-180" : ""}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === 1 ? "block" : "hidden"}`}>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p>انتخاب شهر</p>
                    </div>
                </div>
            </div>

            {/*Gender------------------------------------------------ */}
            <div>
                <h2>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-1 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                        onClick={() => toggleAccordion(2)}
                    >
                        <span>جنسیت</span>
                        <svg
                            className={`w-3 h-3 transform ${openIndex === 2 ? "rotate-180" : ""}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === 2 ? "block" : "hidden"}`}>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p>انتخاب جنسیت</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionT;




