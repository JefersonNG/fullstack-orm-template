import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "mayk brito",
        email: "mayk@email.com",
      },
      {
        name: "diego fernandes",
        email: "diego@email.com",
      },
    ],
  });
}

seed().then(() => {
  console.log("seed executado com sucesso");
  prisma.$disconnect();
});
