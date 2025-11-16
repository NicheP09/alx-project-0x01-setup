import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface PageProps {
  posts: UserProps[];
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts: UserProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}

const Users: React.FC<PageProps> = ({ posts }) => {
  return (
    <div>
      <h1>Users</h1>

      {posts.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;
