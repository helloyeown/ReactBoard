import { useEffect, useState } from "react";
import { getOne } from "../../../api/boardAPI";


const initState = {
	bno: 0,
	title: '',
	content: '',
	writer: '',
	regDate: '',
	modDate: ''
}

const ReadComponent = ({bno}) => {

	const [board, setBoard] = useState(initState)

	useEffect(() => {
		getOne(bno).then(data => {
			setBoard(data)
		})
	}, [bno])


	return (  
		<div>
			<div>
				{board.bno}
			</div>
			<div>
				{board.title}
			</div>
			<div>
				{board.content}
			</div>
			<div>
				{board.writer}
			</div>
			<div>
				{board.regDate}
			</div>
		</div>
	);
}
 
export default ReadComponent;