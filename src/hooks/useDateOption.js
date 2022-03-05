import { useState, useEffect, useMemo } from "react";
import { find } from "lodash";
import handleDateOtion from "@/methods/handleDateOption";

export const useDateOption = ({ year, month }) => {
  const [currentMonthOptions, setCurrentMonthOptions] = useState([]);
  const [currentDayOptions, setCurrentDayOptions] = useState([]);

  const yearOptions = useMemo(() => handleDateOtion(), []);

  useEffect(() => {
    const selectYearOptions = find(yearOptions, { value: year });

    setCurrentMonthOptions(selectYearOptions.monthOptions);
  }, [year, yearOptions]);

  useEffect(() => {
    const selectMonthOptions = find(currentMonthOptions, { value: month });

    setCurrentDayOptions(selectMonthOptions?.dayOptions);
  }, [month, currentMonthOptions]);

  return {
    yearOptions,
    monthOptions: currentMonthOptions || [],
    dayOptions: currentDayOptions || [],
  };
};
