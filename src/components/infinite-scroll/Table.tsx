import React, { useEffect, useRef, useState } from "react";
import "./Table.css";

interface TableProps {
  initialData: string[];
  loading: boolean;
  loadMore: (pageNum: number) => Promise<string[]>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const Table = (props: TableProps) => {
  const { initialData, loading, loadMore, setLoading } = props;
  const [showingdata, setShowingData] = useState<string[]>(initialData);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = async () => {
    const { scrollHeight, scrollTop, clientHeight } =
      scrollRef.current as HTMLDivElement;

    if (scrollTop + clientHeight >= scrollHeight - 3 && !loading) {
      setPageNumber((prevPageNum) => {
        const nextPageNum = prevPageNum + 1;
        const fetchData = async () => {
          const newData = await loadMore(nextPageNum);
          if (newData) setShowingData([...showingdata, ...newData]);
        };
        fetchData();
        return nextPageNum;
      });
    }
  };
  useEffect(() => {
    scrollRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      scrollRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);
  return (
    <div ref={scrollRef} className="scroll-list-div">
      <ul>
        {showingdata.map((item, ind) => {
          return <li key={item}>{item}</li>;
        })}
        {loading && <li>Loading.....</li>}
      </ul>
    </div>
  );
};

export default Table;
