import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/productsAPI";
import ListPageComponent from "../common/ListPageComponent";
import BasicLayout from "../../layouts/BasicLayout";


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
			<div>
        <ul className="flex flex-wrap container justify-center">
          {listData.dtoList.map((dto) => 
            <li
            className="w-2/5 h-[300px] m-2 p-1 text-[707070#] hover:bg-gray-100 border-b-2 rounded-md shadow-lg" 
            key={dto.pno}
            onClick={() => moveRead(dto.pno)}
            >
              <div className="">
                <div className="text-black font-extrabold" >
                  {dto.pno}
                </div>
                <div className="flex justify-center items-center">
                <img src={`http://localhost/s_${dto.fname}`}></img>
                </div>
                <div className="text-center">
                  {dto.pname} {dto.price} REVIEW {dto.reviewCnt} {dto.reviewAvg}
                </div>
              </div>
            </li>)}
        </ul>
      </div>
      <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
    </div>
   );
	}
 
export default ListComponent;