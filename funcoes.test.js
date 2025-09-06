const {sum} = require('./funcoes'); //Importando o funcoes.js
describe('Funções matemáticas', ()=>{
    beforeAll(()=>{
        console.log('etapas antes de todos os testes')
    });
    beforeEach(()=>{
        console.log('etapas antes de cada teste')
    });
    it('Soma de dois números', ()=>{
        expect(sum(1,2)).toBe(3);
    });
    it('Soma de dois números', ()=>{
        expect(sum(5,6)).toBe(11);
    });
    afterAll(()=>{
        console.log('etapas depois de todos os testes')
    });
    afterEach(()=>{
        console.log('etapas depois de cada teste')
    });
})
