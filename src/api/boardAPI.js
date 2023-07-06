import axios from "axios"
import { createSearchParams } from "react-router-dom"

export const getList = async (queryObj) => {

	const queryString = createSearchParams(queryObj).toString();

	const res = await axios.get(`http://localhost:8080/api/board/list?${queryString}`)

	return res.data

}