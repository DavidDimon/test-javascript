import moment from "moment";

const getMonth = indexMonth => {
  moment.locale("en");
  if (indexMonth && indexMonth > 0 && indexMonth < 13) {
    return moment(new Date())
      .month(indexMonth - 1)
      .format("MMMM");
  }
  return "invalid index :(";
};

export default getMonth;
