import React from 'react';
import { useState, useEffect } from 'react';
import API from '../api/axios';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await API.get("/auth/profile");
      setProfile(data);
    };
    fetchProfile();
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Role: {profile.role}</p>
      <h3>Issued Books:</h3>
      <ul>
        {profile.issuedBooks.map((b) => (
          <li key={b.bookId}>{b.bookId}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile