import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./Records.css";
import { MenuItem, Select } from "@mui/material";
interface AllPostsInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function Records() {
  const [allPosts, setAllPosts] = useState<AllPostsInterface[]>(
    [] as AllPostsInterface[]
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const indexOfLastRecord = recordsPerPage * currentPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentShowingRecords = allPosts.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(allPosts.length / recordsPerPage);

  const handlePageChange = (pagenum: number): void => {
    setCurrentPage(pagenum);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const res = await response.json();
        setAllPosts(res);
      } catch (error: any) {
        alert(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Pagination Example</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {currentShowingRecords?.map((record, index) => {
            return (
              <tr key={index}>
                <td>{record.id}</td>
                <td>{record.userId}</td>
                <td>{record.title}</td>
                <td>{record.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        recordsPerPage={recordsPerPage}
        setRecordsPerPage={setRecordsPerPage}
      />
    </div>
  );
}

export default Records;
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (num: number) => void;
  recordsPerPage: number;
  setRecordsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  totalPages,
  currentPage,
  handlePageChange,
  recordsPerPage,
  setRecordsPerPage,
}: PaginationProps) => {
  const pageNumbers: number[] = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  // eslint-disable-next-line
  const [options, setOptions] = useState([
    { value: 10, label: 10 },
    { value: 15, label: 15 },
    { value: 20, label: 20 },
    { value: 25, label: 25 },
  ]);
  return (
    <div>
      <div className="pagination">
        <Button
          variant="contained"
          color="success"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <span>
          {" "}
          {currentPage} of {totalPages}{" "}
        </span>
        <Button
          variant="contained"
          color="success"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
      <div className="pagination">
        <Button
          variant="contained"
          color="success"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        {pageNumbers.map((number) => {
          return (
            <Button
              key={number}
              disabled={currentPage === number}
              onClick={() => handlePageChange(number)}
            >
              {" "}
              {number}{" "}
            </Button>
          );
        })}
        <Button
          variant="contained"
          color="success"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
        <Select
          value={recordsPerPage}
          onChange={(e) => setRecordsPerPage(Number(e.target.value))}
        >
          {options.map((option) => {
            return <MenuItem value={option.value}>{option.label}</MenuItem>;
          })}
        </Select>
      </div>
    </div>
  );
};
