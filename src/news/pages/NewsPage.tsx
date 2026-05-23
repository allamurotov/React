import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";
import HeaderItem from "../../common/components/Header/Header.tsx";
import NewsItem from "../components/NewsItem.tsx";
import Footer from "../../common/components/Footer/Footer.tsx";
import Section from "../../common/components/Section.tsx";
import NewsItem2 from "../components/NewsItem2.tsx";
import BookItem from "../../common/components/Book/BookItem.tsx";

interface NewsType {
    id: number;
    title: string;
    date: string;
    image: string;
    content: string;
}

export default function NewsPage() {

    const [news, setNews] = useState<NewsType[]>([]);

    useEffect(() => {
        async function getAllNews() {
            const response = await axios.get('http://localhost:3000/public/news');
            console.log(response.data)
            setNews(response.data.data);
        }

        getAllNews();
    }, []); // dependency array


    return <div className="bg-[#202020]">
        <HeaderItem/>
        <Section/>
        <NewsItem2/>
        <div className="flex ml-[50px] gap-10">
            <div className="flex flex-wrap gap-5 mt-[26px] w-[1026px] justify-between">
                {news.map((item) => (
                    <NewsItem
                        key={item.id}
                        title={item.title}
                        date={item.date}
                        image={item.image}
                        content={item.content}
                    />
                ))}
                <button className="ml-[50%] w-[131px] h-[40px] bg-[#1A1D1F] rounded-[8px] text-white">Ko'proq</button>
            </div>
            <BookItem/>
        </div>
        <Footer/>
    </div>
}