import React, { useState } from 'react';
import { UserModalProps, UserData } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [form, setForm] = useState<UserData>({
    id: Date.now(),
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: { lat: '', lng: '' },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const keys = name.split('.');
      setForm((prev) => {
        const updated = { ...prev };
        let current: any = updated;
        keys.slice(0, -1).forEach((k) => {
          current[k] = { ...current[k] };
          current = current[k];
        });
        current[keys[keys.length - 1]] = value;
        return updated;
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl w-full max-w-lg shadow-xl">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        <div className="flex flex-col gap-3">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            name="website"
            placeholder="Website"
            value={form.website}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            name="company.name"
            placeholder="Company Name"
            value={form.company.name}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            name="address.street"
            placeholder="Street"
            value={form.address.street}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            name="address.city"
            placeholder="City"
            value={form.address.city}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => onSubmit(form)}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
