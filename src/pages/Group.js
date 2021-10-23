import React from "react";
import { useParams } from "react-router-dom";
import TableComp from "../Components/table/TableComp";
import { GroupColumns } from "../helpers/columns";
import CarouselComp from "../Components/table/CarouselComp";

const Group = () => {
	const { id } = useParams();
	const way = id ? `group_by_course/${id}/` : "group/";

	return (
		<div className='group_container'>
			<CarouselComp />
			<TableComp url="group/" way={way} columns={GroupColumns} />
		</div>
	);
};

export default Group;
