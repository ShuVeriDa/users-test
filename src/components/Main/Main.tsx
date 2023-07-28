import {FC} from 'react';
import styles from './Main.module.scss';
import {Search} from "../Search/Search.tsx";
import {Outlet} from "react-router-dom";

interface IMainProps {
  search: string
  setSearch: (search: string) => void
}

export const Main: FC<IMainProps> = ({setSearch, search}) => {
  return (
    <div className={styles.wrapper}>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};