import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await Promise.all(getUsers().map((user) => {
    return prisma.user.create({data: user})
  }))

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

  function getUsers(){
    return [
      {
      name: 'Alice',
      email: 'alice@prisma.io',
      username: '@Alice',
      },
      {
        name: 'Clementine Bauch',
        email: 'clementine@gmail.com',
        username: '@clementine',
        },
      {
          name: 'Lee Robinson',
          email: 'lee@vercel.com',
          username: '@leerob',
      },
      {
        name: 'Leanne Graham',
        email: 'leanne@gmail.com',
        username: '@leanne',
      },
      {
       name: 'Ervin Howell',
        email: 'ervin@gmail.com',
        username: '@ervin',
      },
    ]
  }