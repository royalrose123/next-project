import getDaysInMonth from "date-fns/getDaysInMonth";

const startYear = 1900;
const endYear = new Date().getFullYear();

const handleDateOtion = () => {
  let yearOptions = [];

  for (let index = startYear; index <= endYear; index++) {
    yearOptions.push({ label: String(index), value: String(index) });
  }

  return yearOptions.map((year) => {
    const startMonth = 1;
    const endMonth = 12;

    let monthOptions = [];

    for (let index = startMonth; index <= endMonth; index++) {
      monthOptions.push({ label: String(index), value: String(index) });
    }

    return {
      ...year,
      monthOptions: monthOptions.map((month) => {
        const startDay = 1;
        const endDay = getDaysInMonth(new Date(`${year.value}/${month.value}`));

        let dayOptions = [];

        for (let index = startDay; index <= endDay; index++) {
          dayOptions.push({ label: String(index), value: String(index) });
        }

        return { ...month, dayOptions };
      }),
    };
  });
};

export default handleDateOtion;
