import store from "../redux/store";
import { asyncRequest } from "../server/asyncLogic";

export const dataTransform = (values, url) => {
  for (const [key, value] of Object.entries(values)) {
    if (!value) {
      delete values[key];
    }
  }
  if (url === "group/") {
    values = {
      ...values,
      start_date: values["start_date"].format("YYYY-MM-DD"),
      time: values["time"].format("HH:mm:ss"),
    };
    store.dispatch(asyncRequest({ url, values }));
  } else if (url === "student/") {
    let formData = new FormData();
    for (const [key, value] of Object.entries(values)) {
      formData.append(key, value);
    }
    store.dispatch(asyncRequest({ url, values: formData }));
  } else {
    store.dispatch(asyncRequest({ url, values }));
  }
};
