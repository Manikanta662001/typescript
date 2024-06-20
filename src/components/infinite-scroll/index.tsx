import React, { useState } from "react";
import Table from "./Table";

const totalData = Array.from({ length: 100 }, (_, ind) => `test ${ind + 1}`);
const InfiniteScroll = () => {
  const [uiData, setUiData] = useState(totalData.slice(0, 10));
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasData, setHasData] = useState<boolean>(true);
  const loadMore = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const newPageNum = pageNumber + 1;
    setPageNumber(newPageNum);
    const x = totalData.slice(newPageNum * 10, (newPageNum + 1) * 10);
    const newUiData = [...uiData, ...x];
    if (newUiData.length >= totalData.length) setHasData(false);
    setUiData(newUiData);
    setLoading(false);
  };
  return (
    <div>
      <h1>InfiniteScroll</h1>
      <Table
        uiData={uiData}
        loading={loading}
        loadMore={loadMore}
        hasData={hasData}
      />
    </div>
  );
};

export default InfiniteScroll;
