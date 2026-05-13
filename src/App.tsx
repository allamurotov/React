import axios from "axios";
import {useEffect, useState} from "react";
import NewsItem from "./NewsItem.tsx";

export default function App() {
    interface NewsType {
        id: number;
        title: string;
        date: string;
        image: string;
        content: string;
    }

    const [news, setNews] = useState<NewsType[]>([]);

    useEffect(() => {
        async function getAllNews() {
            const response = await axios.get('http://localhost:3000/public/news');
            console.log(response.data);
            setNews(response.data.data);
        }

        getAllNews();
    }, []); // dependency array


    return <div className="bg-[#202020]">
        {news.map((item) => <NewsItem key={item.id}
                                      title={item.title}
                                      date={item.date}
                                      image={item.image}
                                      content={item.content}/>)}
    </div>
}
