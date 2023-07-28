import {FC, useEffect, useState} from 'react';
import styles from './FullUser.module.scss';
import {useNavigate, useParams} from "react-router-dom";
import {IRepository, IUser} from "../../types.interface.ts";
import {axiosClassic} from "../../api/api.ts";

interface IFullUserProps {
  search: string
}

export const FullUser: FC<IFullUserProps> = ({search}) => {
  const {login} = useParams()
  const navigate = useNavigate()

  const [user, setUser] = useState<IUser | null>(null)
  const [followers, setFollowers] = useState<number | null>(null)
  const [repos, setRepos] = useState<number | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosClassic.get<IUser>(`/users/${login!}`);
        setUser(res.data);
        const foll = await axiosClassic.get<IUser[]>(res.data.followers_url)
        setFollowers(foll.data.length)
        const repos = await axiosClassic.get<IRepository[]>(res.data.repos_url)
        setRepos(repos.data.length)
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUser();
  }, [login])

  useEffect(() => {
    if (search) {
      navigate('/');
    }
  }, [search, navigate]);

  return (
    <div className={styles.fullUser}>
      {user && (
        <>
          <img src={user.avatar_url} alt="" />
          <div className={styles.userId}>{user.id}</div>
          <div className={styles.userLogin}><a href={user.html_url}>{user.login}</a></div>
          <div className={styles.followerRepo}>
            <div className={styles.followerCount}>Followers: {followers}</div>
            <div className={styles.repoCount}>Repos: {repos}</div>
          </div>
        </>
      )}
    </div>
  );
};