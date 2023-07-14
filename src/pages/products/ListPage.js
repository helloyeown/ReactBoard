import ListComponent from "../../components/products/ListComponent"
import useQueryObj from "../../hooks/useQueryObj"

const ProductList = () => {

	const {queryObj, setSearch, moveRead, moveList} = useQueryObj()

	const movePage = (num) => {
    console.log("NUM ------------" + num)
    queryObj.page = num
    setSearch({...queryObj})
  }

	return (  
		<div className="text-2xl">
			<ListComponent moveRead={moveRead} queryObj={queryObj} movePage={movePage}></ListComponent>
		</div>
	);
}
 
export default ProductList;