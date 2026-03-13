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

    const q4 = await prisma.question.create({
        data: {
            content: 'Choose the correct synonym for "OBSTINATE".',
            topic: 'Verbal Ability',
            subTopic: 'Vocabulary',
            difficulty: 'easy',
            options: JSON.stringify(['Stubborn', 'Flexible', 'Docile', 'Compliant']),
            correctOption: 'Stubborn',
            solution: 'Obstinate means stubbornly refusing to change one\'s opinion or chosen course of action.',
            reliability: 'verified',
            source: 'TCS NQT Pattern'
        }
    })

    const q5 = await prisma.question.create({
        data: {
            content: 'Identify the segment in the sentence which contains a grammatical error: "Neither of the two men were very strong."',
            topic: 'English',
            subTopic: 'Grammar',
            difficulty: 'medium',
            options: JSON.stringify(['Neither of', 'the two men', 'were', 'very strong']),
            correctOption: 'were',
            solution: '"Neither of" takes a singular verb. So it should be "was" instead of "were".',
            reliability: 'verified',
            source: 'TCS NQT Database'
        }
    })

    const q6 = await prisma.question.create({
        data: {
            content: 'You are leading a project and a key team member falls ill two days before an important deadline. The client is strict about timelines. What is your immediate course of action?',
            topic: 'Scenario-Based',
            subTopic: 'Leadership',
            difficulty: 'hard',
            options: JSON.stringify([
                'Inform the client immediately and ask for an extension.',
                'Distribute the ill member\'s tasks among the rest of the team and work extra hours.',
                'Do the ill member\'s work yourself while managing the team.',
                'Tell the team member to work from home despite being ill.'
            ]),
            correctOption: 'Distribute the ill member\'s tasks among the rest of the team and work extra hours.',
            solution: 'Distributing tasks and managing the load demonstrates proactive leadership and teamwork to meet the deadline without immediately compromising or making excuses.',
            reliability: 'high',
            source: 'TCS NQT Scenario Bank'
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
