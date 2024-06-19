import React, { useState } from "react";
import Table from "./Table";

const totalData = Array.from({ length: 100 }, (_, ind) => `test ${ind + 1}`);
const InfiniteScroll = () => {
  const [sendingData, setSendingData] = useState<string[]>(
    totalData.slice(0, 10)
  );
  const [loading, setLoading] = useState<boolean>(false);
  const loadMore = async (pageNum: number): Promise<string[]> => {
    console.log("NUM::::", pageNum);
    setLoading(true);
    await setTimeout(() => {
      setLoading(false);
    }, 2000);
    const x = totalData.slice(pageNum * 10 + 1, pageNum + 1 * 10);
    console.log(x, "::::::");
    return x;
  };
  return (
    <div>
      <h1>InfiniteScroll</h1>
      <Table sendingData={sendingData} loading={loading} loadMore={loadMore} />
    </div>
  );
};

export default InfiniteScroll;
