import {useLocation, useNavigate} from "react-router";

const menuItems = [
    { label: "Asosiy", path: "/" },
    { label: "Yangiliklar", path: "/news" },
    { label: "Kurslar", path: "/course" },
    { label: "Kutubxona", path: "/library" },
    { label: "Bog'lanish", path: "/contact" },
];

function NavItem({ label, path, index, activeIndex }: {
    label: string;
    path: string;
    index: number;
    activeIndex: number;
}) {
    const navigate = useNavigate();
    const isActive = activeIndex === index;

    return (
        <li
            onClick={() => { (index); navigate(path); }}
            className="relative cursor-pointer py-2 group"
        >
            <span className={`font-poppins text-sm transition-all duration-300 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
            }`}>
                {label}
            </span>
            {isActive && <div className="left-0 w-full h-[2px] bg-[#00A3FF]"></div>}
        </li>
    );
}

export default function HeaderItem() {
    const location = useLocation()

    const activeIndex = menuItems.findIndex(item => item.path === location.pathname);

    return (
        <header className="w-[1473px] h-[76px] border-[#232627] border-[1px] bg-[#1A1D1F] rounded-2xl flex items-center justify-between ml-[34px]">
            {/* logo qismi o'zgarishsiz */}
            <div className="flex items-center my-[26px] ml-[24px]">
                <img src='/icon1.svg' alt="shaxmat icon" className="w-[103.61px] h-[28px] mb-[4px]"/>
                <div className="h-[24px] w-px bg-gray-500"></div>
                <div className="flex w-[112px] h-[24px] gap-14">
                    <span className="text-white text-sm font-medium size-4 font-poppins mb-1 ml-4">O'zbekcha</span>
                    <img src="/HeaderImage/icon2.svg" alt="select icon"/>
                </div>
            </div>

            <ul className="flex items-center gap-10">
                {menuItems.map((item, index) => (
                    <NavItem
                        key={index}
                        label={item.label}
                        path={item.path}
                        index={index}
                        activeIndex={activeIndex}
                    />
                ))}
            </ul>

            {/* kirish qismi o'zgarishsiz */}
            <div className="w-[293px] h-[40px] flex items-center gap-6">
                <div className="w-[120px] h-[24px] flex gap-6">
                    <img src="/HeaderImage/icon5.svg" alt="icon" className="w-[24px] h-[24px]"/>
                    <img src="/HeaderImage/icon3.svg" alt="icon" className="w-[24px] h-[24px]"/>
                    <img src="/HeaderImage/icon4.svg" alt="icon" className="w-[24px] h-[24px]"/>
                </div>
                <div className="h-[24px] w-px bg-gray-500"></div>
                <button className="text-white flex justify-center items-center bg-[#1C92E0] w-33 h-10 gap-[10px] rounded-[8px] mr-5 cursor-pointer hover:bg-gray-600">
                    Kirish
                    <img src="/HeaderImage/icon6.svg" alt="icon" className="w-5 h-5"/>
                </button>
            </div>
        </header>
    );
}