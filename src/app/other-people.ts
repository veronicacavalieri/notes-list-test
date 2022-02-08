import { Note } from "./interfaces/notes";

const message: string =
    `Description Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

export const otherPeople: Note [] = [
    {
        userId: 2,
        name: "Giulio Cesare",
        message: message
    },
    {
        userId: 3,
        name: "Marco Aurelio",
        message: `Description Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.`
    },
    {
        userId: 4,
        name: "Plinio il Giovane",
        message: message
    },
    {
        userId: 3,
        name: "Marco Aurelio",
        message: message
    }
];