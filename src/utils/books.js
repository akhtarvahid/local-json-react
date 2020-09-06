import { v4 as uuidv4 } from 'uuid';

export let booksArray = [
    {
        id: uuidv4(),
        title: "Sass",
        description: "Learn from ",
        completed: false
    },
    {
        id: uuidv4(),
        title: "Node",
        description: "Nodejs documentation",
        completed: false
    },
    {
        id: uuidv4(),
        title: "EcmaScript",
        description: "Learn from es6.org",
        completed: false
    },
    {
        id: uuidv4(),
        title: "Angular",
        description: "One framework Mobile & desktop.",
        completed: false
    }
];