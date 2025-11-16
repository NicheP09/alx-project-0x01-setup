import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white dark:bg-neutral-800">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p>Company: {company.name}</p>
      <p>
        Address: {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
