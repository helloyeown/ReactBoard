import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ListPage from "../pages/board/ListPage";
import IndexPage from "../pages/board/IndexPage";
import LoadingPage from "../pages/LoadingPage"

import { Suspense, lazy } from "react";

const Loading = <LoadingPage></LoadingPage>
const Board_Index = lazy(() => import("../pages/board/IndexPage"))
const Board_List = lazy(() => import("../pages/board/ListPage"))

const router = createBrowserRouter([
	{
		path: "",
		element: <MainPage></MainPage>
	},
	{
		path: "about",
		element: <AboutPage></AboutPage>
	},
	{
		path: "board",
		element: <Suspense fallback={Loading}><Board_Index/></Suspense>,
		// 실패하면 로딩, 성공하면 보드 인덱스
		children: [
			{
				path: "list",
				element: <Suspense fallback={Loading}><Board_List/></Suspense>
			}
		]
	}
])

export default router;