import { useParams } from "react-router-dom"
import ReplyWrapper from "../../components/reply/ReplyWrapper"
import useQueryObj from "../../hooks/useQueryObj"
import ReadComponent from "../../components/products/ReadComponent"

const ReadPage = () => {

	const {queryObj, setSearch, moveRead, moveList, moveModify} = useQueryObj()
	const {pno} = useParams()

	console.log(pno)
	console.log(queryObj)

	return (  	
		<div>
			<ReadComponent pno={pno} moveModify={moveModify} moveList={moveList}></ReadComponent>
		</div>
	);
}

 
export default ReadPage;