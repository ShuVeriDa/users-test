import {FC} from 'react';
import styles from "../UsersList.module.scss";
import {Row} from "../Row/Row.tsx";

interface IHeaderProps {
  sortedByRepos: boolean
  onChangeSort: () => void
}

export const Header: FC<IHeaderProps> = ({onChangeSort, sortedByRepos}) => {
  return (
    <div className={styles.header}>
      <Row id={"ID"}
           login={"Логин"}
           onChangeSort={onChangeSort}
           sortedByRepos={sortedByRepos}
           isHeader
      />
    </div>
  );
};