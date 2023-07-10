import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";
import ListPageComponent from "../common/ListPageComponent";


const initState = {
	dtoList: [],
	end: 0,
	start: 0,
	next: false,
	prev: false,
	pageNums: [],
	page: 0,
	size: 0,
	requestDTO: null
}

const ListComponent = ({queryObj, movePage, moveRead}) => {

	const [listData, setListData] = useState(initState)	// 목록 뿌릴 때 에러 안 나게

	// 비동기 통신은 항상 useEffect
	useEffect(() => {

		getList(queryObj).then(data => {
			console.log(data)
			setListData(data)
		})

	}, [queryObj])

	// console.log(createSearchParams(queryObj).toString())
	// page=1&size=10&type=null&keyword=null


	return (  
		<div>	
			<div>List Component</div>

			<div>
				<ul>
					{listData.dtoList.map(({bno, title, writer, replyCount}) => 
					<li key={bno}
					onClick={() => moveRead(bno)}
					>{bno} - {title} [{replyCount}]</li>)}
				</ul>
			</div>


			<ListPageComponent movePage={movePage} {...listData}></ListPageComponent>

		</div>
	);
}
 
export default ListComponent;