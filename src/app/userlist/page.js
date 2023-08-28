async function fetchUsers() {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    return data.users;
}

export default async function Page() {
    const users = await fetchUsers();
    console.log(users);

    return (
        <div>
            {
                users.map((user) => (
                    <h3 key={user.id}>FirstName: {user.firstName}</h3>
                ))
            }
        </div>
    );
}
