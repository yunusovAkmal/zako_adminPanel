import React from "react";
import { useParams } from "react-router-dom";
import TableComp from "../Components/table/TableComp";
import { GroupColumns } from "../helpers/columns";

const Group = () => {
  const { id } = useParams();
  const way = id ? `group_by_course/${id}/` : "group/";

  return <TableComp url="group/" way={way} columns={GroupColumns} />;
};

export default Group;
