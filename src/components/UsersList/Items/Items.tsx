import {FC} from 'react';
import styles from "../UsersList.module.scss";
import {IUser} from "../../../types.interface.ts";
import {Row} from "../Row/Row.tsx";
import {useNavigate} from "react-router-dom";

interface IItemsProps {
  users: IUser[]
  setSearch: (search: string) => void
}

export const Items: FC<IItemsProps> = ({users, setSearch}) => {
  const navigate = useNavigate()

  const onNavigate = (id: string) => {
    setSearch('')
    navigate(`/user/${id}`)
  }

  return (
    <div className={styles.items}>
      {users.length > 0
        ? <ul>
          {users.map(user => <li key={user.id} onClick={() => onNavigate(user.login)}>
            <Row id={user.id}
                 login={user.login}
            />
          </li>)}
        </ul>
        : <div className={styles.notFound}>Ничего не найдено</div>
      }
    </div>
  );
};