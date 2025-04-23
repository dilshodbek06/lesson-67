"use client";

import useUserStore from "@/store/useUserStore";

interface UserProps {
  data: {
    id: number;
    fullName: string;
    age: number;
    isStudent: boolean;
  }[];
}

const UsersData = ({ data }: UserProps) => {
  const { setEditingId } = useUserStore();

  return (
    <div className="mt-3">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>№</th>
            <th>FullName</th>
            <th>Age</th>
            <th>Is Student</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, ind) => (
            <tr key={ind}>
              <td>{ind + 1}</td>
              <td>{user.fullName}</td>
              <td>{user.age}</td>
              <td>{user.isStudent ? "true" : "false"}</td>
              <td>
                <button onClick={() => setEditingId(user.id)}>edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersData;
