import { v4 as uuid } from 'uuid';

export let booksArray = [
    {
        id: uuid(),
        title: "Sass",
        description: "Learn from ",
        completed: false
    },
    {
        id: uuid(),
        title: "Node",
        description: "Nodejs documentation",
        completed: false
    },
    {
        id: uuid(),
        title: "EcmaScript",
        description: "Learn from es6.org",
        completed: false
    },
    {
        id: uuid(),
        title: "Angular",
        description: "One framework Mobile & desktop.",
        completed: false
    }
];