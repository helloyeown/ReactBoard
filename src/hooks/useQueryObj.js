import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

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

const useQueryObj = () => {

	const [search, setSearch] = useSearchParams();
	const navigate = useNavigate()

	console.log(search);

	const page = search.get("page") || 1	// page가 없으면 1
	const size = search.get("size") || 10
	const type = search.get("type")
	const keyword = search.get("keyword")

	const queryObj = checkNull({page, size, type, keyword})

	const moveList = () => {
		const queryString = createSearchParams(queryObj).toString()

		navigate(`../list?${queryString}`)
	}

	const moveRead = (bno) => {
		console.log("move read: " + bno)

		const queryString = createSearchParams(queryObj).toString()

		navigate(`../read/${bno}?${queryString}`)
	}

	const moveModify = (bno) => {
		console.log("move modify: " + bno)

		const queryString = createSearchParams(queryObj).toString()

		navigate(`../modify/${bno}?${queryString}`)
	}

	return {queryObj, setSearch, moveList, moveRead, moveModify}

	

}

export default useQueryObj