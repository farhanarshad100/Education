import React, { useEffect, useState } from 'react'
import withLoading from '../../src/Component/hoc/withLoading';
import UserList from '../../src/Component/UserList';
const MainUser = withLoading(UserList);

const reacthoc = () => {
      const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

    useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Farhan" },
        { id: 2, name: "Saleh" },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
   <div>
      <MainUser isLoading={isLoading} users={users} />
    </div>
    </>
  )
}

export default reacthoc