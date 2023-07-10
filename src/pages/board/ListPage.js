import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";
import ListSearchComponent from "../../components/board/ListSearchComponent";
import useQueryObj from "../../hooks/useQueryObj";
import BasicLayout from "../../layouts/BasicLayout";





const ListPage = () => {

	// console.log("ListPage")
	
	const {queryObj, setSearch, moveRead} = useQueryObj()


	console.log("queryObj --------------- ")
	console.log(queryObj)

  const movePage = (num) => {
    console.log("NUM ------------" + num)
    queryObj.page = num
    setSearch({...queryObj})
  }

	const moveSearch = (type, keyword) => {
		queryObj.page = 1
		queryObj.type = type
		queryObj.keyword = keyword
		setSearch({...queryObj})
	}



	

	return (  
		<div >
			<ListSearchComponent queryObj={queryObj} moveSearch={moveSearch}></ListSearchComponent>
			<ListComponent moveRead={moveRead} queryObj={queryObj} movePage={movePage}></ListComponent>
		</div>
	);
}
 
export default ListPage;