import React, { useEffect, useState } from 'react';



const UseEffectExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('Bret');


  useEffect(() => {
    if(searchQuery.length > 0) {
      const fetchFunc = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
        );
        const resJson = await response.json();
        setUser(resJson[0]);
      };

      fetchFunc();
    }
  }, [searchQuery]);

  return (
    <div>
      <input
        type='search'
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3>{user.username}</h3>
          <h3>{user.email}</h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
};

export default UseEffectExample;