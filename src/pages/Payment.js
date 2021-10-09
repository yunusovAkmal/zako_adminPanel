import React from "react";
import TableComp from "../Components/table/TableComp";
import { PaymentColumns } from "../helpers/columns";

const Payment = () => {
    return <TableComp url="payment/" way='payment/' columns={PaymentColumns} />;

};

export default Payment;
