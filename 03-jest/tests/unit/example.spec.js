
describe('Example Component', () => {
  test( 'Debe de ser mayor a 10', () => {
    // Arrange => Arreglar o definir
    let value = 10;

    // Act => Estímulo
    value++

    // Assert  => Observar
    expect(value).toBeGreaterThanOrEqual(10);

  })
})