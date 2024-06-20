import React, { useEffect, useRef } from "react";
import "./Table.css";

interface TableProps {
  uiData: string[];
  loading: boolean;
  loadMore: () => void;
  hasData: boolean;
}
const Table = (props: TableProps) => {
  const { uiData, loading, loadMore, hasData } = props;
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } =
      scrollRef.current as HTMLDivElement;
    if (scrollTop + clientHeight >= scrollHeight - 3 && !loading && hasData) {
      loadMore();
    }
  };
  useEffect(() => {
    scrollRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      scrollRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [loading, hasData]);

  return (
    <div ref={scrollRef} className="scroll-list-div">
      <ul>
        {uiData.map((item, ind) => {
          return <li key={item + ind}>{item}</li>;
        })}
        {loading && <li>Loading.....</li>}
        {!hasData && <li>No More Records</li>}
      </ul>
    </div>
  );
};

export default Table;
