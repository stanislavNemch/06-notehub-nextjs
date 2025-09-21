import css from "./Pagination.module.css";

const Pagination = () => {
    return (
        <div className={css.pagination}>
            <button className={css.button}>Previous</button>
            <button className={css.button}>Next</button>
        </div>
    );
};

export default Pagination;
