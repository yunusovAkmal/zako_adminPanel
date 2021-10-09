import React from "react";
import { useParams } from "react-router-dom";
import TableComp from "../Components/table/TableComp";
import { StudentColumns } from "../helpers/columns";

const Student = () => {
  const { id } = useParams();
  const way = id ? `student_by_group/${id}/` : "student/";

  return <TableComp url="student/" way={way} columns={StudentColumns} />;
};

export default Student;
