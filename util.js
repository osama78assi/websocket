const people = [
    "Osama",
    "Ali",
    "Israa",
    "Mohammad",
    "Ahmad",
    "Alaa",
    "Reem",
    "Abode",
    "Basmaa",
    "Lama",
    "Lamar",
];
const messages = [
    "Hello there how can I help you ?",
    "Where have you been ?",
    "Let's say we are here",
    "Fine I think what about you ?",
    "You know it's hard to start this project but let's get over with",
    "Chess is a great game",
    "Why do you want that ?",
    "1 Shaorma with extra garlic please",
    "Let's have a drink what do you think ?",
    "yeah I know I know. I hope you will find the happiness in your jounry",
    "While(true) Wake up, Eat, Code, Sleep",
];

export function getRandomMessage() {
    const from = people[Math.floor(Math.random() * people.length)];
    const message = messages[Math.floor(Math.random() * people.length)];

    return {
        from,
        message
    }
}
