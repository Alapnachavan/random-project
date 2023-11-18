import React from 'react';

const UserProfile = () => {
  const userData = {
    name: 'John Doe',
    bio: 'Frontend Developer',
    image: 'https://example.com/avatar.jpg',
    // Other profile data
  };

  return (
    <div className="profile">
      <img src={userData.image} alt={userData.name} />
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
    </div>
  );
};

export default UserProfile;