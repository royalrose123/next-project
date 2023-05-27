import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import classnames from "classnames/bind";
import { find, filter, omitBy, isEmpty } from "lodash";

const cx = classnames.bind(styles);

const optionData = {
  color: {
    label: "顏色",
    list: [
      { groupValue: "color", label: "藍色", value: "blue" },
      { groupValue: "color", label: "黃色", value: "yellow" },
      { groupValue: "color", label: "紫色", value: "pink" },
    ],
  },
  size: {
    label: "尺寸",
    list: [
      { groupValue: "size", label: "L | 90", value: "l" },
      { groupValue: "size", label: "M | 60", value: "m" },
      { groupValue: "size", label: "S | 30", value: "s" },
    ],
  },
  capacity: {
    label: "容量",
    list: [
      { groupValue: "capacity", label: "128G", value: "128" },
      { groupValue: "capacity", label: "256G", value: "256" },
      { groupValue: "capacity", label: "512G", value: "512" },
    ],
  },
};

const stockList = [
  { color: "blue", size: "l", capacity: "128", stock: 10 },
  { color: "blue", size: "l", capacity: "256", stock: 0 },
  { color: "blue", size: "l", capacity: "512", stock: 10 },
  { color: "blue", size: "m", capacity: "128", stock: 10 },
  { color: "blue", size: "m", capacity: "256", stock: 10 },
  { color: "blue", size: "m", capacity: "512", stock: 10 },
  { color: "blue", size: "s", capacity: "128", stock: 10 },
  { color: "blue", size: "s", capacity: "256", stock: 10 },
  { color: "blue", size: "s", capacity: "512", stock: 10 },
  { color: "yellow", size: "l", capacity: "128", stock: 0 },
  { color: "yellow", size: "l", capacity: "256", stock: 4 },
  { color: "yellow", size: "l", capacity: "512", stock: 10 },
  { color: "yellow", size: "m", capacity: "128", stock: 10 },
  { color: "yellow", size: "m", capacity: "256", stock: 10 },
  { color: "yellow", size: "m", capacity: "512", stock: 10 },
  { color: "yellow", size: "s", capacity: "128", stock: 10 },
  { color: "yellow", size: "s", capacity: "256", stock: 10 },
  { color: "yellow", size: "s", capacity: "512", stock: 10 },
  { color: "pink", size: "l", capacity: "128", stock: 10 },
  { color: "pink", size: "l", capacity: "256", stock: 0 },
  { color: "pink", size: "l", capacity: "512", stock: 3 },
  { color: "pink", size: "m", capacity: "128", stock: 10 },
  { color: "pink", size: "m", capacity: "256", stock: 10 },
  { color: "pink", size: "m", capacity: "512", stock: 10 },
  { color: "pink", size: "s", capacity: "128", stock: 10 },
  { color: "pink", size: "s", capacity: "256", stock: 10 },
  { color: "pink", size: "s", capacity: "512", stock: 10 },
];

const defaultLabel = Object.keys(optionData);

const defaultValueData = {};

defaultLabel.forEach((item) => (defaultValueData[item] = ""));

export default function Good() {
  const [currentValueData, setCurrentValueData] = useState(defaultValueData);

  useEffect(() => {
    console.log("stockList 00000", stockList);
  }, []);

  const hanldeOptionClick = (item) => {
    if (item.value === currentValueData[item.groupValue]) {
      const newValueData = { ...currentValueData, [item.groupValue]: "" };

      setCurrentValueData(newValueData);
    } else {
      const newValueData = {
        ...currentValueData,
        [item.groupValue]: item.value,
      };

      setCurrentValueData(newValueData);
    }
  };

  const currentValueDataByOmit = omitBy(
    currentValueData,
    (value) => value === ""
  );

  const currentDisableStock = isEmpty(currentValueDataByOmit)
    ? []
    : filter(stockList, currentValueDataByOmit).filter(
        (item) => item.stock === 0
      );

  console.log("currentDisableStock 88888", currentDisableStock);
  console.log("currentValueData 99999", currentValueData);

  return (
    <div className={cx("good")}>
      <div className={cx("good-wrapper")}>
        {defaultLabel.map((group, index) => {
          return (
            <div className={cx("good-group")} key={`${group}-${index}`}>
              <p className={cx("good-group-name")}>{group}</p>
              <div className={cx("good-group-option")}>
                {optionData[group].list.map((item, index) => {
                  const isDisabled = find(currentDisableStock, {
                    [item.groupValue]: item.value,
                  });

                  return (
                    <div
                      className={cx("good-group-option-item", {
                        isActive:
                          item.value === currentValueData[item.groupValue],
                        isDisabled,
                      })}
                      key={`${item.label}-${index}`}
                      onClick={() => hanldeOptionClick(item)}
                    >
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
