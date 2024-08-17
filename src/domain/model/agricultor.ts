import { Farm } from "./farm";
import { Person } from "./person";

export interface Agricultor extends Person{
    farms: Farm[],
}