import {FC} from 'react';
import styles from './UsersList.module.scss';
import {IUser} from "../../types.interface.ts";
import {Pagination} from "../Pagination/Pagination.tsx";
import {Header} from "./Header/Header.tsx";
import {Items} from "./Items/Items.tsx";

interface IUsersListProps {
  search: string
  setSearch: (search: string) => void
  users: IUser[]
  sortedByRepos: boolean
  setSortedByRepos: (sortedByRepos: boolean) => void
  currentPage: number
  onChaneCurrentPage: (num: number) => void
}

export const UsersList: FC<IUsersListProps> = (
  {
    users,
    sortedByRepos,
    setSortedByRepos,
    currentPage,
    onChaneCurrentPage,
    setSearch
  }
) => {
  const totalPages = Math.ceil(users.length / 10);
  const onChangeSort = () => setSortedByRepos(!sortedByRepos)

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <Header sortedByRepos={sortedByRepos}
                onChangeSort={onChangeSort}
        />
        <Items users={users}
               setSearch={setSearch}
        />
      </div>
      {users.length > 0 && <Pagination totalPages={totalPages}
                                       currentPage={currentPage}
                                       onPageChange={onChaneCurrentPage}
      />}
    </div>
  );
};