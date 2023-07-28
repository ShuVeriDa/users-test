import './App.css'
import {Route, Routes} from "react-router-dom";
import {UsersList} from "./components/UsersList/UsersList.tsx";
import {Main} from "./components/Main/Main.tsx";
import {useEffect, useState} from "react";
import {IUser} from "./types.interface.ts";
import {FullUser} from "./components/FullUser/FullUser.tsx";
import {axiosClassic} from "./api/api.ts";

function App() {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState<IUser[]>([]);
  const [sortedByRepos, setSortedByRepos] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const perPage = 50
      const sortOrder = sortedByRepos ? 'asc' : 'desc';
      const url = `search/users?q=${search}&sort=public_repos&order=${sortOrder}&page=${currentPage}&per_page=${perPage}`;

      if (search.trim() === '') {
        setUsers([]);
        return;
      }

      try {
        const {data} = await axiosClassic.get(url);
        setUsers(data.items);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [search, sortedByRepos, currentPage]);

  const onChaneCurrentPage = (num: number) => setCurrentPage(num)

  return (
    <Routes>
      <Route path={'/'} element={<Main search={search} setSearch={setSearch}/>}>
        <Route path={'/'} element={<UsersList users={users}
                                              setSortedByRepos={setSortedByRepos}
                                              sortedByRepos={sortedByRepos}
                                              currentPage={currentPage}
                                              onChaneCurrentPage={onChaneCurrentPage}
                                              search={search}
                                              setSearch={setSearch}
        />
        }
        />
        <Route path={'/user/:login'} element={<FullUser search={search}/>}/>
      </Route>
    </Routes>
  )
}

export default App
