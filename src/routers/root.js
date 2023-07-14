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
const Board_Read = lazy(() => import("../pages/board/ReadPage"))

// Products
const Products_Index = lazy(() => import("../pages/products/indexPage"))
const Products_List = lazy(() => import("../pages/products/ListPage"))
const Products_Register = lazy(() => import("../pages/products/RegisterPage"))
const Products_Read = lazy(() => import("../pages/products/ReadPage"))
const Products_Modify = lazy(() => import("../pages/products/ModifyPage"))

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
			},
			{
				path: "read/:bno",
				element: <Suspense fallback={Loading}><Board_Read/></Suspense>
			}
		]
	},
	{
		path: "products",
		element: <Suspense fallback={Loading}><Products_Index/></Suspense>,
		children: [
			{
				path: "list",
				element: <Suspense fallback={Loading}><Products_List/></Suspense>
			},
			{
				path: "register",
				element: <Suspense fallback={Loading}><Products_Register/></Suspense>
			},
			{
				path: "read/:pno",
				element: <Suspense fallback={Loading}><Products_Read/></Suspense>
			},
			{
				path: "modify/:pno",
				element: <Suspense fallback={Loading}><Products_Modify/></Suspense>
			}
		]
	}
])

export default router;