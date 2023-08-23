import { useState, useEffect } from "react";

const calculateRange = (tableData, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(tableData.length / rowsPerPage);
    let i = 1;
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };
  
  const sliceData = (tableData, page, rowsPerPage) => {
    return tableData.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  };

const useTable = (tableData, page, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    const range = calculateRange(tableData, rowsPerPage);
    setTableRange([...range]);

    const slice = sliceData(tableData, page, rowsPerPage);
    setSlice([...slice]);
  }, [tableData, setTableRange, page, setSlice]);

  return { slice, range: tableRange };
};

export default useTable;