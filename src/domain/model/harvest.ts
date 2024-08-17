import { Agricultor } from "./agricultor";
import { Person as Client } from "./person";
import { Farm } from "./farm";
import { FruitVariety } from "./fruit";

export interface Harvest {
    agricultor: Agricultor,
    client: Client,
    farm: Farm,
    fruitVariety: FruitVariety,
}