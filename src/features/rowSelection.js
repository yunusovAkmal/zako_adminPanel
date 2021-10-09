import store from "../redux/store";
import { setRow } from "../redux/reducers/rowSlice";
import moment from "moment";

export const ToogleChangeRow = (keys = []) => {
  const buttons = document.getElementById("edit_delete");
  if (keys.length === 1) {
    buttons.classList.remove("editDeleteBtns");
    const [rowId] = keys;
    store.dispatch(setRow(rowId));
  } else {
    if (!buttons.classList.contains("editDeleteBtns")) {
      buttons.classList.add("editDeleteBtns");
    }
  }
};

export const getObj = () => {
  const {
    row: { rowId },
    data: { dataSource },
  } = store.getState();

  const [obj] = dataSource.filter((obj) => obj.id === rowId);
  let data = { ...obj };
  if (data.hasOwnProperty("start_date")) {
    data = {
      ...data,
      start_date: moment(data.start_date, "YYYY/MM/DD"),
      time: moment(data.time, "HH:mm:ss"),
    };
  }
  if (data.hasOwnProperty("image")) delete data.image;
  return data;
};
