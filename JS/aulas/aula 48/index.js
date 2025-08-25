const pessoas = [
    {id: 3, nome: 'Miguel'},
    {id: 2, nome: 'Giovana'},
    {id: 1, nome: 'João'},
];

const pessoasnovas = new Map (); 
for (const pessoas of pessoas) {
const {id} = pessoas
pessoasnovas.set(id, {...pessoas});
}