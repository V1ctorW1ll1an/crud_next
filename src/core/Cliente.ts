export default class Cliente {
    private id: string | null
    private nome: string
    private idade: number

    constructor(nome: string, idade: number, id: string | null = null) {
        this.id = id
        this.nome = nome
        this.idade = idade
    }

    public getId(): string | null {
        return this.id
    }

    public getIdade(): number {
        return this.idade
    }

    public getNome(): string {
        return this.nome
    }

    public static makeEmptyCliente(): Cliente {
        return new Cliente("", 0, null)
    }
}
