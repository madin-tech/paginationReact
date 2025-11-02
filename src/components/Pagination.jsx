// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

const PaginationComponent = () => {
  const [datas, setdatas] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  useEffect(() => {
    getdata();
  }, [page]);
  let limit = 10;
  function getdata() {
    setLoading(true);
    fetch(`https://dummyjson.com/quotes?skip=${page * limit}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("api info: ", data);
        setdatas([data&& data]);
    })
      .catch((err) => err)
      .finally(()=>{
         setLoading(false);
      });
  }
  console.log(datas);
  
    
function handleInc() {
  setPage(page + 1);
}
function handleDec() {
  setPage(page - 1);
}


  // console.log("setdata info: ", datas);
  return (
    <div className="textPage">
      {isLoading && "Loading(^-^*)"}
      <div className="quotes">
        {datas?.map((info) =>
          info.quotes.map((quote) => (
            <div key={quote.id} className="quoteBox">
              <h1>"{quote.quote}"</h1>
            </div>
          ))
        )
        
        }
      </div>
      {/* <Stack spacing={2} className="container pagination">
        <Pagination
          page={page}
          onChange={handleChange}
          count={10}
          color="primary"
          className="blue"
        />
      </Stack> */}

      <div style={{display:`flex`, gap:`30px`}}>
        <button onClick={handleDec}>prev</button>
        <button onClick={handleInc}>next</button>
      </div>
    </div>
  );
};

export default PaginationComponent;
