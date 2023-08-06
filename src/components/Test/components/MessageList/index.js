import { useEffect, useRef } from "react";
import classnames from "classnames/bind";
import {
  AutoSizer,
  List,
  CellMeasurerCache,
  CellMeasurer,
} from "react-virtualized";

// Components
import Message from "./components/Message";

// Libs

import styles from "./style.module.scss";

const cx = classnames.bind(styles);

const cache = new CellMeasurerCache({
  defaultHeight: 26,
  minHeight: 26,
  fixedWidth: true,
});

const messageList = [
  "111",
  "你好",
  "哈哈哈哈哈",
  "111",
  "你好",
  "哈哈哈哈哈",
  "111",
  "你好",
  "哈哈哈哈哈",
  "111",
  "你好",
  "哈哈哈哈哈",
  "111",
  "你好",
  "哈哈哈哈哈 哈哈哈哈哈 哈哈哈哈哈 哈哈哈哈哈 哈哈哈哈哈s",
  "111",
  "你好",
  "哈哈哈哈哈",
  "111",
  "你好",
  "哈哈哈哈哈",
  "111",
  "你好",
  "哈哈哈哈哈",
  "111",
  "你好",
  "哈哈哈哈哈",
  "111",
  "你好",
  "哈哈哈哈哈",
  "111",
  "你好",
  "哈哈哈哈哈",
  "111",
  "你好",
  "哈哈哈哈哈 哈哈哈哈哈 哈哈哈哈哈 哈哈哈哈哈 哈哈哈哈哈s",
  "111",
  "你好",
  "哈哈哈哈哈",
  "111",
  "你好",
  "哈哈哈哈哈",
];

function MessageList(props) {
  const listRef = useRef(null);

  const rowRenderer = ({ index, key, parent, style }) => {
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        <div style={style}>
          <Message
            className={cx("messageList-item")}
            text={messageList[index]}
          />
        </div>
      </CellMeasurer>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      cache.clearAll();
      listRef.current.recomputeRowHeights();
    };

    if (listRef.current) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={cx("messageList")}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            ref={listRef}
            width={width}
            height={height}
            rowCount={messageList.length}
            rowHeight={({ index }) => {
              return (
                cache._rowHeightCache[`${index}-0`] + 10 ||
                cache.rowHeight(index) + 10
              );
            }}
            rowRenderer={rowRenderer}
            deferredMeasurementCache={cache}
          />
        )}
      </AutoSizer>
    </div>
  );
}

export default MessageList;
