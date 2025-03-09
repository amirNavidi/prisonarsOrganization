import { useState } from "react";

const AccordionT = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="accordion-collapse">
            {accordionData.map((item, index) => (
                <div key={index}>
                    <h2>
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-1 border-gray-200  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>{item.title}</span>
                            <svg
                                className={`w-3 h-3 transform ${
                                    openIndex === index ? "rotate-180" : ""
                                }`}
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
                    <div
                        className={`overflow-hidden transition-all duration-300 ${
                            openIndex === index ? "block" : "hidden"
                        }`}
                    >
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const accordionData = [
    {
        title: "استان",
        content: (
            <>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a>.
                </p>
            </>
        ),
    },
    {
        title: "شهر ",
        content: (
            <>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the Figma software.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                    Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a>.
                </p>
            </>
        ),
    },
    {
        title: "جنسیت",
        content: (
            <>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that Flowbite is open-source, whereas Tailwind UI is a paid product.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                    Learn more about:
                </p>
                <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                    <li>
                        <a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">
                            Flowbite Pro
                        </a>
                    </li>
                    <li>
                        <a href="https://tailwindui.com/" className="text-blue-600 dark:text-blue-500 hover:underline">
                            Tailwind UI
                        </a>
                    </li>
                </ul>
            </>
        ),
    },
];

export default AccordionT;
