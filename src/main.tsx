import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router";
import NewsPage from "./news/pages/NewsPage.tsx";
import CoursesPage from "./courses/pages/CoursesPage.tsx";
import './index.css';
import BookPages from "./book/pages/BookPages.tsx";

const routes = createBrowserRouter([
    { path: '/', element: <NewsPage /> },
    {path: '/news', element: <NewsPage/>},
    {path: '/course', element: <CoursesPage/>},
    {path: '/library', element: <BookPages/>},

])

const root = document.getElementById('root')
createRoot(root!).render(<RouterProvider router={routes}/>)