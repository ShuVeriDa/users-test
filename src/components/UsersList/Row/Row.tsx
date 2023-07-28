import {FC} from 'react';
import styles from "../UsersList.module.scss";
import {DownArrowSVG} from "../../SvgComponents.tsx";
import cn from "clsx";

interface IRowProps {
  sortedByRepos?: boolean,
  onChangeSort?: () => void
  id: string | number,
  login: string,
  isHeader?: boolean
}

export const Row: FC<IRowProps> = ({onChangeSort, sortedByRepos,login, id, isHeader}) => {
  return (
    <>
      <div className={styles.id} onClick={onChangeSort}>
        {id}
        {isHeader && <DownArrowSVG styles={cn(styles.arrowDown, sortedByRepos && styles.arrowUp)}/>}
      </div>
      <div className={styles.login} onClick={onChangeSort}>
        {login}
        {isHeader && <DownArrowSVG styles={cn(styles.arrowDown, sortedByRepos && styles.arrowUp)}/>}
      </div>
    </>
  );
};