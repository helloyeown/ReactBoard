import { useEffect, useState } from "react";
import { deleteReply, getReply, putReply } from "../../api/repliesAPI";

const initState = {
	rno: 0,
	bno: 0,
	replyText: '',
	replyFile: '',
	replyer: ''
}

const ReplyRead = ({rno, cancelRead, refreshPage}) => {
	
	const [reply, setReply] = useState({...initState})


	useEffect(() => {
		getReply(rno).then(data => {
			console.log(data)
			setReply(data)
		})
	}, [rno])

	const handleClickDelete = () => {
		deleteReply(rno).then(data => {
			alert(`${data.result}번 댓글이 삭제되었습니다.`)	// controller map result
			refreshPage(true)
		})
	}

	const handleChange = (e) => {

		//console.log(reply)
		// console.log("------------------------")
		// console.log(e.target.value)
		// console.log(reply.replyText)

		reply.replyText = e.target.value

		setReply({...reply})
	}

	const handleClickModify = () => {

		console.log("---------------------------")
		console.log(reply)

		putReply(reply).then(data => {
			alert(`${data.result} 수정되었습니다.`)
			refreshPage(true)
		})
	}

	if(reply.replyText === '해당 글은 삭제되었습니다.'){
		return <></>
	}


	return (  
		<div  className="m-8 bg-green-50 border-2">
			<div>Reply Read {rno}</div>
			<div>
				<div>{rno}</div>
				<div> 
					<input type="text" name={'replyText'} onChange={handleChange} value={reply.replyText}></input>
				</div>
				<div>{reply.replyer}</div>
			</div>
			<div>
				<button onClick={handleClickModify}>MOD</button>
				<button onClick={handleClickDelete}>DEL</button>
				<button onClick={cancelRead}>Cancel</button>
			</div>
		</div>
	);
}
 
export default ReplyRead;