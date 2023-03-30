import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "../../components/form/SearchBar";
import UsersListItem from "../../components/users/UsersListItem";
import { User } from "../../domains";
import { UserDTO, UserService } from "../../services";
import { Target } from "../../utils/type";

const Users = () => {
  const [users, setUsers] = useState<UserDTO[]>();
  const [search, setSearch] = useState<string>("");

  const handelSearch = useCallback(({ target: { value } }: Target) => {
    setSearch(value);
  }, []);

  useEffect(() => {
    UserService.getAll()
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full min-h-full bg-gray-100">
      <div className="p-8">
        <div className="bg-white p-4 rounded-lg">
          <div className="p-4 flex items-center justify-between border-b">
            <h3 className="font-bold text-xl">Users</h3>
            <div className="w-58">
              <SearchBar
                handelChange={handelSearch}
                value={search}
                placeholder="Serach users..."
              />
            </div>
          </div>
          <table className="w-full text-left">
            <thead className="text-gray-500 font-600 border-b">
              <tr>
                <th className="p-4">Picture</th>
                <th className="p-4">ID</th>
                <th className="p-4">username</th>
                <th className="p-4">email</th>
              </tr>
            </thead>
            <tbody className="w-full min-w-full">
              {users?.map((user, index) => (
                <UsersListItem user={new User(user)} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
