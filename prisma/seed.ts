import { PrismaClient } from '@prisma/client'
import 'dotenv/config'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding...')

    // Clear existing questions
    await prisma.question.deleteMany({})
    console.log('Cleared existing data.')

    // Aptitude Questions
    await prisma.question.createMany({
        data: [
            {
                content: 'A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is?',
                topic: 'Aptitude',
                subTopic: 'Speed Distance Time',
                difficulty: 'medium',
                options: JSON.stringify(['45 km/hr', '50 km/hr', '54 km/hr', '55 km/hr']),
                correctOption: '50 km/hr',
                solution: 'Relative speed = 125/10 m/sec = (25/2) * (18/5) km/hr = 45 km/hr. Train speed = 45 + 5 = 50 km/hr.',
                reliability: 'verified',
                source: 'TCS NQT Database'
            },
            {
                content: 'Two ships are sailing in the sea on the two sides of a lighthouse. The angle of elevation of the top of the lighthouse is observed from the ships are 30° and 45° respectively. If the lighthouse is 100 m high, the distance between the two ships is:',
                topic: 'Aptitude',
                subTopic: 'Heights and Distances',
                difficulty: 'hard',
                options: JSON.stringify(['173 m', '200 m', '273 m', '300 m']),
                correctOption: '273 m',
                solution: 'Distance = 100 * cot(30°) + 100 * cot(45°) = 100 * 1.73 + 100 * 1 = 173 + 100 = 273 m.',
                reliability: 'verified',
                source: 'TCS Math Collection'
            },
            {
                content: 'A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is:',
                topic: 'Aptitude',
                subTopic: 'Simple Interest',
                difficulty: 'easy',
                options: JSON.stringify(['Rs. 650', 'Rs. 690', 'Rs. 698', 'Rs. 700']),
                correctOption: 'Rs. 698',
                solution: 'SI for 1 year = 854 - 815 = 39. SI for 3 years = 39 * 3 = 117. Principal = 815 - 117 = Rs. 698.',
                reliability: 'high',
                source: 'Previous Year Paper 2022'
            },
            {
                content: 'A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?',
                topic: 'Aptitude',
                subTopic: 'Profit and Loss',
                difficulty: 'medium',
                options: JSON.stringify(['3', '4', '5', '6']),
                correctOption: '5',
                solution: 'CP of 6 toffees is Re 1. SP of 6 toffees = 120% of 1 = Rs 6/5. For Rs 6/5, toffees sold = 6. For Re 1, toffees sold = (6 * 5) / 6 = 5.',
                reliability: 'verified',
                source: 'TCS Important Set'
            },
            {
                content: 'Three numbers are in the ratio of 3 : 4 : 5 and their L.C.M. is 2400. Their H.C.F. is:',
                topic: 'Aptitude',
                subTopic: 'LCM and HCF',
                difficulty: 'easy',
                options: JSON.stringify(['40', '80', '120', '200']),
                correctOption: '40',
                solution: 'Let numbers be 3x, 4x, 5x. LCM = 60x = 2400 => x = 40. The numbers are 120, 160, 200. HCF is 40.',
                reliability: 'verified',
                source: 'TCS Base DB'
            },
            {
                content: 'What is the probability of getting a sum 9 from two throws of a dice?',
                topic: 'Aptitude',
                subTopic: 'Probability',
                difficulty: 'medium',
                options: JSON.stringify(['1/6', '1/8', '1/9', '1/12']),
                correctOption: '1/9',
                solution: 'Total outcomes = 36. Favorable outcomes for sum 9 are (3,6), (4,5), (5,4), (6,3) = 4. Probability = 4/36 = 1/9.',
                reliability: 'verified',
                source: 'TCS Recent Pattern'
            },
            {
                content: 'A can do a piece of work in 4 hours; B and C together can do it in 3 hours, while A and C together can do it in 2 hours. How long will B alone take to do it?',
                topic: 'Aptitude',
                subTopic: 'Time and Work',
                difficulty: 'hard',
                options: JSON.stringify(['8 hours', '10 hours', '12 hours', '24 hours']),
                correctOption: '12 hours',
                solution: 'A\'s 1 hr work = 1/4. (A+C)\'s 1 hr = 1/2. C\'s 1 hr = 1/2 - 1/4 = 1/4. (B+C)\'s 1 hr = 1/3. B\'s 1 hr = 1/3 - 1/4 = 1/12. B takes 12 hours.',
                reliability: 'high',
                source: 'TCS Advanced DB'
            },
            {
                content: 'The average of 20 numbers is zero. Of them, at the most, how many may be greater than zero?',
                topic: 'Aptitude',
                subTopic: 'Averages',
                difficulty: 'easy',
                options: JSON.stringify(['0', '1', '10', '19']),
                correctOption: '19',
                solution: 'To make the average zero, the sum must be zero. We can have 19 positive numbers and 1 very large negative number that cancels them all out.',
                reliability: 'verified',
                source: 'TCS Quick Math'
            }
        ]
    })

    // Logical Reasoning
    await prisma.question.createMany({
        data: [
            {
                content: 'Pointing to a photograph of a boy Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?',
                topic: 'Logical Reasoning',
                subTopic: 'Blood Relations',
                difficulty: 'easy',
                options: JSON.stringify(['Brother', 'Uncle', 'Cousin', 'Father']),
                correctOption: 'Father',
                solution: 'The only son of Suresh\'s mother is Suresh himself. So, the boy in the photograph is the son of Suresh.',
                reliability: 'verified',
                source: 'TCS NQT Database'
            },
            {
                content: 'SCD, TEF, UGH, ____, WKL',
                topic: 'Logical Reasoning',
                subTopic: 'Letter Series',
                difficulty: 'easy',
                options: JSON.stringify(['CMN', 'UJI', 'VIJ', 'IJT']),
                correctOption: 'VIJ',
                solution: 'First letters are S, T, U, V, W. Second letters are C, E, G, I, K. Third letters are D, F, H, J, L. Result: VIJ.',
                reliability: 'verified',
                source: 'TCS Logical Bank'
            },
            {
                content: 'Statements: \n1. All cats are dogs.\n2. All dogs are birds.\nConclusions: \n1. All cats are birds.\n2. All birds are cats.',
                topic: 'Logical Reasoning',
                subTopic: 'Syllogism',
                difficulty: 'medium',
                options: JSON.stringify(['Only Conclusion 1 follows', 'Only Conclusion 2 follows', 'Both follow', 'Neither follows']),
                correctOption: 'Only Conclusion 1 follows',
                solution: 'Since cats are a subset of dogs, and dogs a subset of birds, all cats must be birds. But not all birds are cats.',
                reliability: 'high',
                source: 'TCS Core Setup'
            },
            {
                content: 'If A + B means A is the mother of B; A - B means A is the brother B; A % B means A is the father of B and A x B means A is the sister of B, which of the following shows that P is the maternal uncle of Q?',
                topic: 'Logical Reasoning',
                subTopic: 'Blood Relations',
                difficulty: 'hard',
                options: JSON.stringify(['Q - N + M x P', 'P + S x N - Q', 'P - M + N x Q', 'Q - S % P']),
                correctOption: 'P - M + N x Q',
                solution: 'P - M means P is brother of M. M + N means M is mother of N. N x Q means N is sister of Q. Therefore, M is mother of Q, and P is brother of M, so P is maternal uncle of Q.',
                reliability: 'high',
                source: 'TCS Advance DB'
            },
            {
                content: 'Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?',
                topic: 'Logical Reasoning',
                subTopic: 'Number Series',
                difficulty: 'easy',
                options: JSON.stringify(['(1/3)', '(1/8)', '(2/8)', '(1/16)']),
                correctOption: '(1/8)',
                solution: 'This is a simple division series; each number is one-half of the previous number.',
                reliability: 'verified',
                source: 'TCS Entry Math'
            }
        ]
    })

    // Verbal Ability
    await prisma.question.createMany({
        data: [
            {
                content: 'Choose the correct synonym for "OBSTINATE".',
                topic: 'Verbal Ability',
                subTopic: 'Vocabulary',
                difficulty: 'easy',
                options: JSON.stringify(['Stubborn', 'Flexible', 'Docile', 'Compliant']),
                correctOption: 'Stubborn',
                solution: 'Obstinate means stubbornly refusing to change one\'s opinion or chosen course of action.',
                reliability: 'verified',
                source: 'TCS NQT Pattern'
            },
            {
                content: 'Select the antonym of "PROFOUND".',
                topic: 'Verbal Ability',
                subTopic: 'Vocabulary',
                difficulty: 'medium',
                options: JSON.stringify(['Deep', 'Superficial', 'Intense', 'Sincere']),
                correctOption: 'Superficial',
                solution: 'Profound means very great or intense/having deep insight. Superficial means existing or occurring at or on the surface.',
                reliability: 'verified',
                source: 'TCS NQT Vocabulary Database'
            },
            {
                content: 'To "cry wolf" means to:',
                topic: 'Verbal Ability',
                subTopic: 'Idioms and Phrases',
                difficulty: 'easy',
                options: JSON.stringify(['To listen eagerly', 'To give false alarm', 'To turn pale', 'To keep off starvation']),
                correctOption: 'To give false alarm',
                solution: 'The phrase "cry wolf" comes from Aesop\'s fable and refers to intentionally raising a false alarm.',
                reliability: 'high',
                source: 'TCS Pattern 2021'
            },
            {
                content: 'Find the correctly spelt word.',
                topic: 'Verbal Ability',
                subTopic: 'Spelling',
                difficulty: 'medium',
                options: JSON.stringify(['Accomodation', 'Acomodation', 'Accommodation', 'Acommodation']),
                correctOption: 'Accommodation',
                solution: '"Accommodation" has double \'c\' and double \'m\'.',
                reliability: 'verified',
                source: 'TCS Common Errors'
            },
            {
                content: 'Select the one which best expresses the same sentence in Passive voice: "The pilot landed the plane safely."',
                topic: 'Verbal Ability',
                subTopic: 'Active and Passive Voice',
                difficulty: 'easy',
                options: JSON.stringify(['The plane was landed safely by the pilot.', 'The plane had been landed safely by the pilot.', 'The plane is being landed safely by the pilot.', 'The plane is landed safely by the pilot.']),
                correctOption: 'The plane was landed safely by the pilot.',
                solution: 'The sentence is in past tense. The passive form uses "was/were + past participle".',
                reliability: 'verified',
                source: 'TCS English DB'
            }
        ]
    })

    // English
    await prisma.question.createMany({
        data: [
            {
                content: 'Identify the segment in the sentence which contains a grammatical error: "Neither of the two men were very strong."',
                topic: 'English',
                subTopic: 'Grammar',
                difficulty: 'medium',
                options: JSON.stringify(['Neither of', 'the two men', 'were', 'very strong']),
                correctOption: 'were',
                solution: '"Neither of" takes a singular verb. So it should be "was" instead of "were".',
                reliability: 'verified',
                source: 'TCS NQT Database'
            },
            {
                content: 'He ________ his house seven days ago.',
                topic: 'English',
                subTopic: 'Tenses',
                difficulty: 'easy',
                options: JSON.stringify(['left', 'leave', 'leaves', 'is leaving']),
                correctOption: 'left',
                solution: '"Ago" indicates a completed action in the past, so simple past tense is required.',
                reliability: 'verified',
                source: 'English Grammar Set 1'
            },
            {
                content: 'I have been working here ________ 2015.',
                topic: 'English',
                subTopic: 'Prepositions',
                difficulty: 'easy',
                options: JSON.stringify(['from', 'since', 'for', 'by']),
                correctOption: 'since',
                solution: '"Since" is used to refer to a specific point in time when an action began.',
                reliability: 'high',
                source: 'English Grammar Set 2'
            },
            {
                content: 'A person who is incapable of making a mistake is called:',
                topic: 'English',
                subTopic: 'One Word Substitution',
                difficulty: 'medium',
                options: JSON.stringify(['Infallible', 'Incorrigible', 'Incomprehensible', 'Invincible']),
                correctOption: 'Infallible',
                solution: 'Infallible means incapable of making mistakes or being wrong.',
                reliability: 'verified',
                source: 'TCS Pattern Bank'
            },
            {
                content: 'Fill in the blank with the appropriate article: "He is _____ honest man."',
                topic: 'English',
                subTopic: 'Articles',
                difficulty: 'easy',
                options: JSON.stringify(['a', 'an', 'the', 'no article']),
                correctOption: 'an',
                solution: 'Although it starts with an \'h\', the sound is a vowel sound (\'o\'), so "an" is used.',
                reliability: 'verified',
                source: 'Core English DB'
            }
        ]
    })

    // Scenario-Based
    await prisma.question.createMany({
        data: [
            {
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
            },
            {
                content: 'You discover a colleague taking credit for your idea in a meeting with a manager. How do you handle it?',
                topic: 'Scenario-Based',
                subTopic: 'Professional Ethics',
                difficulty: 'medium',
                options: JSON.stringify([
                    'Interrupt the meeting aggressively to state that it was your idea.',
                    'Complain to Human Resources immediately after the meeting.',
                    'Speak to the colleague privately to understand their perspective, and if unresolved, highlight your contribution directly to the manager respectfully.',
                    'Ignore it, to avoid office politics.'
                ]),
                correctOption: 'Speak to the colleague privately to understand their perspective, and if unresolved, highlight your contribution directly to the manager respectfully.',
                solution: 'Direct, private communication is the most professional first step, followed by polite clarification.',
                reliability: 'verified',
                source: 'Corporate Ethics Protocol'
            },
            {
                content: 'A client requests a major feature change midway through the sprint which wasn\'t in the initial scope. You are the developer. What should you do?',
                topic: 'Scenario-Based',
                subTopic: 'Agile/Client Management',
                difficulty: 'medium',
                options: JSON.stringify([
                    'Code the feature immediately to keep the client happy.',
                    'Say no outright to the client.',
                    'Inform the Scrum Master/Project Manager to evaluate the effort and go through the formal change request process.',
                    'Work overtime secretly to add the feature without telling anyone.'
                ]),
                correctOption: 'Inform the Scrum Master/Project Manager to evaluate the effort and go through the formal change request process.',
                solution: 'Scope creep must be managed professionally through formal channels to ensure resource and timeline adjustments.',
                reliability: 'verified',
                source: 'Agile Best Practices'
            },
            {
                content: 'You realize you have made a critical coding error that might take down the production server in a few hours. No one has noticed yet. What is the best action?',
                topic: 'Scenario-Based',
                subTopic: 'Integrity',
                difficulty: 'easy',
                options: JSON.stringify([
                    'Try to fix it quietly without telling anyone to save face.',
                    'Wait for the server to crash, then claim it was a random bug.',
                    'Immediately notify the team lead/on-call engineer with the details and propose a fix.',
                    'Go home early and deal with it tomorrow.'
                ]),
                correctOption: 'Immediately notify the team lead/on-call engineer with the details and propose a fix.',
                solution: 'Transparency and immediate escalation are crucial in production environments to minimize downtime.',
                reliability: 'verified',
                source: 'TCS Production Standards'
            },
            {
                content: 'A teammate consistently misses deadlines, forcing you to pick up their slack. What is the most constructive approach?',
                topic: 'Scenario-Based',
                subTopic: 'Team Dynamics',
                difficulty: 'medium',
                options: JSON.stringify([
                    'Report them directly to the manager without talking to them.',
                    'Stop doing their work and let the project fail to teach them a lesson.',
                    'Have an open, non-confrontational discussion with them to identify blockers, and offer help or suggest escalating if needed.',
                    'Publicly shame them in the next daily stand-up.'
                ]),
                correctOption: 'Have an open, non-confrontational discussion with them to identify blockers, and offer help or suggest escalating if needed.',
                solution: 'Open communication and empathy build better team dynamics and solve underlying issues faster than blame.',
                reliability: 'verified',
                source: 'TCS Team Coordination'
            }
        ]
    })

    // Previous Year Papers - Real Data
    // Jan 2026
    await prisma.question.createMany({
        data: [
            {
                content: 'The sum of the ages of a father and his son is 45 years. Five years ago, the product of their ages was 34. Find their current ages.',
                topic: 'Aptitude',
                subTopic: 'Ages',
                difficulty: 'medium',
                options: JSON.stringify(['39 and 6', '40 and 5', '45 and 10', '35 and 10']),
                correctOption: '39 and 6',
                solution: 'Let ages be x, y. x+y=45. (x-5)(y-5)=34. If x=39, y=6. (34)*(1)=34. This matches the equation perfectly.',
                reliability: 'memory-based',
                source: 'TCS NQT Jan 2026 Shift 1'
            },
            {
                content: 'Identify the segment in the sentence which contains a grammatical error: "The manager, as well as the clerks, were fighting."',
                topic: 'English',
                subTopic: 'Subject Verb Agreement',
                difficulty: 'easy',
                options: JSON.stringify(['The manager', 'as well as', 'the clerks', 'were fighting']),
                correctOption: 'were fighting',
                solution: 'When subjects are joined by "as well as", the verb follows the first subject. Since "manager" is singular, it should be "was fighting".',
                reliability: 'memory-based',
                source: 'TCS NQT Jan 2026 Shift 1'
            }
        ]
    })

    // Oct 2025
    await prisma.question.createMany({
        data: [
            {
                content: 'A sum of money invested at compound interest amounts to Rs. 800 in 3 years and to Rs. 840 in 4 years. The rate of interest per annum is:',
                topic: 'Aptitude',
                subTopic: 'Compound Interest',
                difficulty: 'medium',
                options: JSON.stringify(['2.5%', '4%', '5%', '6.66%']),
                correctOption: '5%',
                solution: 'Interest for 1 year on Rs. 800 = 840 - 800 = Rs. 40. Rate = (100 * 40) / (800 * 1) = 5%.',
                reliability: 'verified',
                source: 'TCS NQT Oct 2025'
            },
            {
                content: 'In a certain code language, "COMPUTER" is written as "RFUVQNPC". How will "MEDICINE" be written in that code language?',
                topic: 'Logical Reasoning',
                subTopic: 'Coding Decoding',
                difficulty: 'hard',
                options: JSON.stringify(['EOJDJEFM', 'EOJDEJFM', 'MFEJDJOE', 'MFEDJJOE']),
                correctOption: 'EOJDJEFM',
                solution: 'The letters of the word are written in reverse order and then each letter is moved one step forward in the English alphabet.',
                reliability: 'verified',
                source: 'TCS NQT Oct 2025'
            }
        ]
    })

    // Aug 2024
    await prisma.question.createMany({
        data: [
            {
                content: 'What is the greatest number which on dividing 1657 and 2037 leaves remainders 6 and 5 respectively?',
                topic: 'Aptitude',
                subTopic: 'HCF and LCM',
                difficulty: 'medium',
                options: JSON.stringify(['127', '133', '235', '305']),
                correctOption: '127',
                solution: 'Required number = H.C.F. of (1657 - 6) and (2037 - 5) = H.C.F. of 1651 and 2032. 2032 = 1651 * 1 + 381. 1651 = 381 * 4 + 127. 381 = 127 * 3 + 0. Hence HCF is 127.',
                reliability: 'verified',
                source: 'TCS NQT Aug 2024'
            },
            {
                content: 'Pointing to a gentleman, Deepak said, "His only brother is the father of my daughter\'s father." How is the gentleman related to Deepak?',
                topic: 'Logical Reasoning',
                subTopic: 'Blood Relations',
                difficulty: 'medium',
                options: JSON.stringify(['Uncle', 'Father', 'Grandfather', 'Brother-in-law']),
                correctOption: 'Uncle',
                solution: 'Father of Deepak\'s daughter\'s father = Father of Deepak. So, the gentleman\'s only brother is Deepak\'s father. Therefore, the gentleman is Deepak\'s uncle.',
                reliability: 'verified',
                source: 'TCS NQT Aug 2024'
            }
        ]
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
