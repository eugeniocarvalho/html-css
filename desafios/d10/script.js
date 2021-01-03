function calcular() {
  const valorA = Number(window.prompt(`Qual é o valor de a?(≠ 0)`))
  const valorB = Number(window.prompt('Qual é o valor de b?'))
  const valorC = Number(window.prompt('Qual é o valor de c?'))
  res = document.querySelector('#res')
  res.innerHTML = ''

  if (valorA !== 0) {
    const delta = Math.pow(valorB, 2) - (4 * valorA * valorC)
    let x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA)
    let x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA)

    res.innerHTML = `<p>A equação atual é <b>${valorA}x<sup>2</sup> + ${valorB}x ${(valorC < 0 ? `- ${valorC * -1}` : `+ ${valorC}`)} = 0</b></p>
    <p>O cálculo realizado será <b>Δ = ${valorB}<sup>2</sup> - 4 * ${valorA} * ${valorC}</b></p>
    <p> O valor calculado foi <b>${delta}</b></p>
    <p>Valores de x<sub>1</sub> e x<sub>2</sub> são: <br>x<sub>1</sub>: <b>${x1.toFixed(4)}</b> x<sub>2</sub>: <b>${x2.toFixed(4)}</b></p>`
  }
}