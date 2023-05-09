import React, { useRef } from "react";
import style from "./search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";
import { debounce } from "lodash";

export const Search = () => {
  const searchRef = useRef();
  const searchValue = useSelector((state) => state.filter.searchValue);
  const dispatch = useDispatch();
  return (
    <div className={style.root}>
      <svg
        className={style.searchIcon}
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 96 960 960"
        width="48"
      >
        <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" />
      </svg>
      <input
        ref={searchRef}
        onChange={(e) => {
          dispatch(setSearchValue(e.target.value));
        }}
        value={searchValue}
        className={style.input}
        type="text"
        placeholder="Search..."
      />
      <button
        className={
          searchValue.length == 0
            ? `${style.clearBtn} ${style.hidden}`
            : style.clearBtn
        }
        onClick={() => {
          searchRef.current.focus();

          dispatch(setSearchValue(""));
        }}
      >
        X
      </button>
    </div>
  );
};
