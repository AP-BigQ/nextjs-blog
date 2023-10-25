import { Card, Title, Text } from '@tremor/react';
import UsersTable from './table';
import Search from './search'

interface User{
    id: number;
    name: string;
    username: string;
    email: string;
}

export default function Page({users}:{users: User[]}){
    


    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title>Users</Title>
      <Text>
        A list of users retrieved from [NOT MySQL database (PlanetScale)] Prisma ORM sqlite3.
      </Text>
      <Search />

      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>

        </main>
    )

}

