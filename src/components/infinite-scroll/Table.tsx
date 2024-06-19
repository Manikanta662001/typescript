import React, { useEffect, useRef, useState } from "react";
import "./Table.css";

interface TableProps {
  sendingData: string[];
  loading: boolean;
  loadMore: (pageNum: number) => Promise<string[]>;
}
const Table = (props: TableProps) => {
  const { sendingData, loading, loadMore } = props;
  const [showingdata, setShowingData] = useState<string[]>(sendingData);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = async () => {
    const { scrollHeight, scrollTop, clientHeight } =
      scrollRef.current as HTMLDivElement;
    console.log("SCROLL::::", { scrollHeight, scrollTop, clientHeight });
    if (scrollTop + clientHeight >= scrollHeight - 3) {
      setPageNumber(pageNumber + 1);
      const newData = await loadMore(pageNumber);
      console.log("DATA:::::::", newData);
      setShowingData([...showingdata, ...newData]);
    }
  };

  useEffect(() => {
    scrollRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      scrollRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={scrollRef} className="scroll-list-div">
      <ul>
        {showingdata.map((item, ind) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Table;
