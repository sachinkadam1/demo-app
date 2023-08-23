import React, { useEffect } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TableFooter = ({ range, setPage, page, slice }) => {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);
    return (
        <tfoot className="tableFooter">
            <div className="pagination-buttons">
                {/* <button className="paginationButton"><ArrowBackIosNewIcon style={{ fontSize: 14 }} /></button>
                <button className="paginationButton"><ArrowForwardIosIcon style={{ fontSize: 14 }}  /></button> */}
                {range.map((el, index) => (
                    <button
                        key={index}
                        className={`button ${page === el ? "activeButton" : "inactiveButton"
                            }`}
                        onClick={() => setPage(el)}
                    >
                        {el}
                    </button>
                ))}
            </div>
        </tfoot>
    );
};

export default TableFooter;