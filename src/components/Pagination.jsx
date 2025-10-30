import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const limit = 20;

const PaginationComponent = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [data, setData] = useState({
    quotes: [],
    limit: 0, //bitta gurpada nechta item bolishi
    skip: 0, // nechtasini boshidan ob tashash
    total: 0, // nechta item bor
  });

  useEffect(() => {
    getData();
  }, [page]);
  const getData = () => {
    setLoading(true);
    fetch(
      `https://dummyjson.com/quotes?limit=${limit}&skip=${limit * (page - 1)}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleChange = (event, value) => {
    console.log("Page changed to:", value);
    setPage(value); 
  };
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      {data?.quotes &&
        data.quotes.map((quote) => (
          <div key={quote.id}>
            <h1>{quote.id}</h1>
          </div>
        ))}
      <Stack spacing={2} className="container pagination">
        <Pagination
          page={page}
          onChange={handleChange}
          count={Math.ceil(data.total / data.limit)}
          color="primary"
          className="blue"
        />
      </Stack>
    </div>
  );
};

export default PaginationComponent;
