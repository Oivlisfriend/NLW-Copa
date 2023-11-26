import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Oivlis Marshall',
            email: 'oivlis@prisma.com',
            avatarUrl: 'https://github.com/Oivlisfriend.png'
        }
    })

    const pool = await prisma.pool.create({
        data: {
            title: 'Example Pool',
            code: 'BOL123',
            ownerId: user.id,
            participants: {
                create: {
                    userId: user.id,
                }
            }
        }
    })

    await prisma.game.create({
        data: {
            date: '2023-08-22T07:12:31.817Z',
            firstTeamCountryCode: 'DE',
            secondTeamCountryCode: 'AO'
        }
    })
    await prisma.game.create({
        data: {
            date: '2023-09-22T07:12:31.817Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'AO',
            guesses: {
                create: {
                    firstTeamPoints: 1,
                    secondTeamPoints: 2,
                    participant: {
                        connect: {
                            userId_poolId: {
                                userId: user.id,
                                poolId: pool.id,
                            }
                        }
                    }

                }
            }
        }

    })
}
main()