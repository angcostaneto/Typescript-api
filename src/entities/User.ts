import { uuid } from "uuidv4";

export class User {
    public readonly id!: string;
    
    public name: string;
    public email: string;
    public password: string;

    // Recebe todas as propriedades da classe User menos o id
    // Id é opcional
    constructor(props: Omit<User, 'id'>, id?: string) {
        // Assign automaticamente as propriedades com seus respectivos valores.
        Object.assign(this, props);

        if (!id) {
            this.id = uuid()
        }
    } 
}