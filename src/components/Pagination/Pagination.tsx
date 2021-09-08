import "./index.css";
import { Arrow } from "../common/Arrow";

interface IPagination {
    currentPage: number;
    pages: number[];
    handlePaginate: (pageNumber: number) => void;
    totalCount: number;
    indexOfLastItem: number;
    indexOfFirstItem: number;
    onClickArrow: (
        target: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

export const Pagination = ({
    currentPage,
    pages,
    handlePaginate,
    totalCount,
    indexOfLastItem,
    indexOfFirstItem,
    onClickArrow,
}: IPagination) => {
    return (
        <nav className="pagination">
            <div className="pagination__info">
                {indexOfFirstItem + 1}-{indexOfLastItem} of {totalCount} items
            </div>
            <Arrow onClickArrow={onClickArrow} arrowDirection="left" />
            <ul className="pagination__row">
                {pages.map((page: number, index: number) => (
                    <li key={index} className="pagination__item">
                        <button
                            onClick={() => handlePaginate(page)}
                            className={
                                currentPage === page
                                    ? "pagination__link active"
                                    : "pagination__link"
                            }
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
            <Arrow onClickArrow={onClickArrow} arrowDirection="right" />
        </nav>
    );
};