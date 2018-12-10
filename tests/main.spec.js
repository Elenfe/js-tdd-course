describe('Main', () => {
  let arr; // declara a variavel fora do bloco ou scopo

  // roda uma vez, antes do bloco
  before(() => {
    // inicia uma conexão no banco
    // criar um conjunto de dados
  });

  // roda uma vez, depois do bloco
  after(() => {
    // fecha conexão do banco
    // apagar esse conjunto de dados
  });

  // roda todas as vezes, antes de CADA bloco
  beforeEach(() => {
    arr = [1, 2, 3]; // Atribui a variavel dentro de bloco/scopo ou hooks (no caso de teste)
  });

  // roda todas as vezes, depois de CADA bloco
  afterEach(() => {

  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    console.log(arr.length); // 4
  });

  it('should remove the value 3 when use pop in the array', () => {
    console.log(arr.pop() === 3); // true
  });

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    console.log(arr.length); // 2
  });
});
