import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/board/read/ReadComponent";
import ReplyWrapper from "../../components/reply/ReplyWrapper";

// 라우팅 전용
const ReadPage = () => {

	const {queryObj, moveList} = useQueryObj()
	const {bno} = useParams()

	console.log(bno)
	console.log(queryObj)

	return (  	
		<div>
			Board Read Page

			<ReadComponent bno={bno}></ReadComponent>
			<ReplyWrapper bno={bno}></ReplyWrapper>

			<button onClick={e => moveList()}>List</button>
		</div>
	);
}
 
export default ReadPage;