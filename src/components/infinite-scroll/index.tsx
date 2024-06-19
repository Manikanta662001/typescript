import React, { useState } from "react";
import Table from "./Table";

const totalData = Array.from({ length: 100 }, (_, ind) => `test ${ind + 1}`);
const InfiniteScroll = () => {
  const initialData = totalData.slice(0, 10);
  const [loading, setLoading] = useState<boolean>(false);
  const loadMore = async (pageNum: number): Promise<string[]> => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    const x = totalData.slice(pageNum * 10, (pageNum + 1) * 10);
    return x;
  };
  return (
    <div>
      <h1>InfiniteScroll</h1>
      <Table
        initialData={initialData}
        loading={loading}
        loadMore={loadMore}
        setLoading={setLoading}
      />
    </div>
  );
};

export default InfiniteScroll;
