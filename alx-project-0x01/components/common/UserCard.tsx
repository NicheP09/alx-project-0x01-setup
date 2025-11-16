import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div>
      <div>{id}</div>
      <h2>{name}</h2>
      <p>@{username}</p>
      <p>{email}</p>
      <p>
        {address.city}, {address.street}
      </p>
      <p>
        {address.geo.lat}, {address.geo.lng}
      </p>
      <p>{phone}</p>
      <p>{website}</p>
      <p>{company.name}</p>
    </div>
  );
};

export default UserCard;
