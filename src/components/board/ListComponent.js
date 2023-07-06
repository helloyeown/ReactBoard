import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";

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

const ListComponent = ({queryObj, movePage}) => {

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

	const handleClickPage = (pageNums) => {
		movePage(pageNums)
	}

	return (  
		<div>	
			<div>List Component</div>
			<div>
				<ul>
					{listData.dtoList.map(({bno, title, writer, replyCount}) => <li key={bno}>{bno} - {title} [{replyCount}]</li>)}
				</ul>
			</div>

			<div className="m-4 p-2">
				<ul className="flex">

					{listData.prev ? <li
					className="m-2 p-2 bg-blue-100 border-2 text-white font-bold rounded"
					onClick={() => handleClickPage(listData.start -1)}
					>Prev</li> : <></>}

					{listData.pageNums.map(num => <li key={num} 
					className="m-2 p-2 bg-blue-100 border-2 text-white font-bold rounded"
					onClick={() => handleClickPage(num)}>{num}</li>)}

					{listData.next ? <li
					className="m-2 p-2 bg-blue-100 border-2 text-white font-bold rounded"
					onClick={() => handleClickPage(listData.end +1)}>Next</li> : <></>}
				</ul>
			</div>
		</div>
	);
}
 
export default ListComponent;