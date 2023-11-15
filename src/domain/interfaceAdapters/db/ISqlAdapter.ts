export interface ISqlAdapter {
    connect(email: string, mdp: string): any;
    select(value: string): any
}