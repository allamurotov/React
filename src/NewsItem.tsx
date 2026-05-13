import {useState} from "react";

interface NavItemProps {
    label: string;
    index: number;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

interface NewsItemProps {
    title: string;
    date: string;
    image: string;
    content: string;
}

function NavItem({label, index, activeIndex, setActiveIndex}: NavItemProps) {
    const isActive = activeIndex === index;

    return (
        <li
            onClick={() => setActiveIndex(index)}
            className="relative cursor-pointer py-2 group"
        >
      <span
          className={`font-poppins text-sm transition-all duration-300 ${
              isActive ? "text-white" : "text-gray-400 hover:text-white"
          }`}
      >
        {label}
      </span>

            {isActive && (
                <div className="left-0 w-full h-[2px] bg-[#00A3FF]"></div>
            )}
        </li>
    );
}

export default function NewsItem({title, date, image, content}: NewsItemProps) {
    const [activeIndex, setActiveIndex] = useState(1);

    const menuItems = ["Asosiy", "Yangiliklar", "Kurslar", "Kutubxona", "Bog'lanish"];

    return (
        <div>
            <header className="w-[1473px] h-[76px] bg-[#1A1D1F] rounded-2xl flex items-center justify-between">
                <div className="flex items-center my-[26px] ml-[24px]">
                    <img src='/icon1.svg' alt="bu shaxmat iconi rasmi" className="w-[103.61px] h-[28px] mb-[4px]"/>

                    <div className="h-[24px] w-px bg-gray-500"></div>

                    <div className="flex w-[112px] h-[24px] gap-14">
                        <span className="text-white text-sm font-medium size-4 font-poppins mb-1 ml-4">O'zbekcha</span>
                        <img src="/icon2.svg" alt="bu select iconni"/>
                    </div>
                </div>
                <div>
                    <ul className="flex items-center gap-10">
                        {menuItems.map((item, index) => (
                            <NavItem
                                key={index}
                                label={item}
                                index={index}
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                            />
                        ))}
                    </ul>
                </div>
                <div className="w-[293px] h-[40px] flex items-center gap-6">
                    <div className="w-[120px] h-[24px] flex gap-6">
                        <img src="/icon5.svg" alt="icon" className="w-[24px] h-[24px]"/>
                        <img src="/icon3.svg" alt="icon" className="w-[24px] h-[24px]"/>
                        <img src="/icon4.svg" alt="icon" className="w-[24px] h-[24px]"/>
                    </div>
                    <div className="h-[24px] w-px bg-gray-500"></div>
                    <button
                        className="text-white flex justify-center items-center bg-[#1C92E0] w-33 h-10 gap-[10px] rounded-[8px] mr-5 cursor-pointer hover:bg-gray-600">
                        Kirish
                        <img src="/icon6.svg" alt="icon" className="w-5 h-5"/>
                    </button>
                </div>
            </header>
            <div className="flex gap-2 w-[1374px] h-[44px] items-center pl-[30px]">
                <img src="/icon8.svg" alt="icon" className="w-5 h-5"/>
                <h4 className="w-[42px] h-[18px] text-[#6D7274] font-medium mb-1">Asosiy</h4>
                <img src="/icon7.svg" alt="icon" className="w-2 h-2 mt-2 mb-[2px]"/>
                <h4 className="w-[42px] h-[18px] text-white font-medium mb-1">Yangiliklar</h4>
            </div>
            <div className="w-[1036px] h-[52px] flex items-center mt-5 justify-between">
                <h1 className="w-[180px] h-[42px] font-bold text-[32px] text-white ">Yangiliklar</h1>
                <input
                    type="text"
                    placeholder="Izlash"
                    className="bg-[#15181A] w-[326px] h-[52px] text-white rounded-[8px] px-[16px] py-[4px] outline-none border-[#232627] border-[1px]"
                />
            </div>
            <div className="w-[1026px] h-[1076px] mt-[26px] flex justify-between">
                <div className="w-[326px] h-[251px] p-3 bg-[#1A1D1F] rounded-[8px] text-white">
                    <div>
                        <img src={image} alt="image1" className="w-[302px] h-[113px] rounded-t-[4px]"/>
                        <p className="w-[106px] h-[21px] font-inter font-[400px] text-[#F7F9FA66] tracking-tighter text-[14px] mt-[7px] line-clamp-2">{date}</p>
                    </div>
                    <div className="w-[302px] h-[80px] flex flex-col justify-between mt-[6px]">
                        <h4 className="text-[14px] font-sans w-[302px] h-[36px] font-medium tracking-tighter line-clamp-2 leading-[18px]">{title}</h4>
                        <h4 className="text-[14px] font-sans w-[302px] h-[36px] font-medium tracking-tighter line-clamp-2 leading-[18px]">{content}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}