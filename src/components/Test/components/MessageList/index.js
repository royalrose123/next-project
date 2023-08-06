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
  function rowRenderer({ index, isScrolling, key, parent, style }) {
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
  }
  return (
    <div className={cx("messageList")}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowCount={messageList.length}
            rowHeight={cache.rowHeight}
            rowRenderer={rowRenderer}
            deferredMeasurementCache={cache}
          />
        )}
      </AutoSizer>
    </div>
  );
}

export default MessageList;
