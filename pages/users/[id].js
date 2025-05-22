import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function UserPage() {
  const { id } = useRouter().query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data));
    }
  }, [id]);

  if (!user) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Usuario: {user.name}</h1>
      <p>ID: {user.id}</p>
    </div>
  );
}
