const ListPageComponent = ({movePage, start, end, prev, next, pageNums, page}) => {
	
	const handleClickPage = (pageNums) => {
		movePage(pageNums)
	}


	return (  
		<div className="m-4 p-2 justify-center">
			<ul className="flex">
					{prev ? <li
					className="m-2 p-2 bg-blue-100 border-2 text-white font-bold rounded"
					onClick={() => handleClickPage(start -1)}
					>Prev</li> : <></>}

					{pageNums.map(num => <li key={num} 
					className="m-2 p-2 bg-blue-100 border-2 text-white font-bold rounded"
					onClick={() => handleClickPage(num)}>
						{page === num ? <span className="text-blue-300">{num}</span> : <span>{num}</span>}
						</li>)}

					{next ? <li
					className="m-2 p-2 bg-blue-100 border-2 text-white font-bold rounded"
					onClick={() => handleClickPage(end +1)}>Next</li> : <></>}
			</ul>
		</div>
	);
}
 
export default ListPageComponent;