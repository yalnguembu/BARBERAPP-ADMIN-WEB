import { User } from "../../domains";

const UsersListItem = ({ user }: { user: User }) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-4 py-3 w-24">
        <div className="w-10 bg-gray-100 rounded-full overflow-hidden">
          <img
            className="w-full"
            src={`${import.meta.env.VITE_API_URL}/storage/images/users/${
              user.picture
            }`}
            alt=""
          />
        </div>
      </td>
      <td className="p-4">{user.id.substring(0, 12).toUpperCase()}</td>
      <td className="font-bold p-4">{user.username}</td>
      <td className="p-4">{user.email}</td>
    </tr>
  );
};

export default UsersListItem;
