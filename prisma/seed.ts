import { PrismaClient } from '@prisma/client'

import 'dotenv/config'
const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding...')

    // Sample Aptitude Questions
    const q1 = await prisma.question.create({
        data: {
            content: 'A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is?',
            topic: 'Aptitude',
            subTopic: 'Speed Distance Time',
            difficulty: 'medium',
            options: JSON.stringify(['45 km/hr', '50 km/hr', '54 km/hr', '55 km/hr']),
            correctOption: '50 km/hr',
            solution: 'Relative speed = 125/10 m/sec = (25/2) * (18/5) km/hr = 45 km/hr. Train speed = 45 + 5 = 50 km/hr.',
            reliability: 'verified',
            source: 'TCS NQT Database'
        }
    })

    const q2 = await prisma.question.create({
        data: {
            content: 'Pointing to a photograph of a boy Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?',
            topic: 'Logical Reasoning',
            subTopic: 'Blood Relations',
            difficulty: 'easy',
            options: JSON.stringify(['Brother', 'Uncle', 'Cousin', 'Father']),
            correctOption: 'Father',
            solution: 'The only son of Suresh\'s mother is Suresh himself. So, the boy in the photograph is the son of Suresh.',
            reliability: 'verified',
            source: 'TCS NQT Database'
        }
    })

    // Sample Coding Challenge
    const q3 = await prisma.question.create({
        data: {
            content: 'Write a program to reverse an integer. The program should handle negative numbers as well.',
            topic: 'Coding',
            subTopic: 'Math',
            difficulty: 'medium',
            options: null,
            correctOption: null,
            solution: 'We can isolate the last digit using modulo 10 and build the reversed number.',
            reliability: 'verified',
            source: 'TCS NQT Programming Array'
        }
    })

    console.log('Seeding finished.')
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
