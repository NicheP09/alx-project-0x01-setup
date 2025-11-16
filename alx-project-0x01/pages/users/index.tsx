import { useState } from 'react';
import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';
import { UserData, UserProps } from '@/interfaces';

interface PageProps {
  posts: UserProps[];
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts: UserProps[] = await response.json();

  return {
    props: { posts },
  };
}

const Users: React.FC<PageProps> = ({ posts }) => {
  const [users, setUsers] = useState<UserProps[]>(posts);
  const [openModal, setOpenModal] = useState(false);

  const handleAddUser = (data: UserData) => {
    const nextId = Math.max(...users.map((u) => u.id)) + 1;
    setUsers([{ ...data, id: nextId }, ...users]);
    setOpenModal(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4 font-bold">Users</h1>

      <button
        onClick={() => setOpenModal(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Add User
      </button>

      <UserModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleAddUser}
      />

      {users.length === 0 ? (
        <p className="text-gray-500 mt-6">
          No users found. Add one to get started!
        </p>
      ) : (
        <div className="mt-6 grid gap-4">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
