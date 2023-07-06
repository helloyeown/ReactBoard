import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";


// 컴포넌트와 무관한 순수한 함수이기 때문에 밖으로 뺌
const checkNull = (obj) => {

  const result = {}

  for (const attr in obj) {
    const attrName = attr
    const attrValue = obj[attr]

    if( attrValue && attrValue !== 'null'){
      result[attrName] = attrValue
    }
  }

  return result
}


const ListPage = () => {

	// console.log("ListPage")
	const [search, setSearch] = useSearchParams();
	console.log(search);

	const page = search.get("page") || 1	// page가 없으면 1
	const size = search.get("size") || 10
	const type = search.get("type")
	const keyword = search.get("keyword")

	const queryObj = checkNull({page, size, type, keyword})

	console.log("queryObj --------------- ")
	console.log(queryObj)

  const movePage = (num) => {
    console.log("NUM ------------" + num)
    queryObj.page = num
    setSearch({...queryObj})
  }

	

	return (  
		<div>
			Board List Page
			<ListComponent queryObj={queryObj} movePage={movePage}></ListComponent>
		</div>
	);
}
 
export default ListPage;