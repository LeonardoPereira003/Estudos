
import { useState } from 'react'

export default function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [resultado, setResultado] = useState(null)

  function calcIMC(e) {
    e.preventDefault()
    const h = parseFloat(altura.replace(',', '.'))
    const p = parseFloat(peso.replace(',', '.'))
    if (!h || !p) return
    const imc = p / (h*h)
    let classif = ''
    if (imc < 18.5) classif = 'Baixo peso'
    else if (imc < 24.9) classif = 'Normal'
    else if (imc < 29.9) classif = 'Sobrepeso'
    else classif = 'Obesidade'
    setResultado({imc: imc.toFixed(2), classif})
  }

  return (
    <div>
      <h1>IMC</h1>
      <form onSubmit={calcIMC}>
        <input placeholder="Altura (m)" value={altura} onChange={e => setAltura(e.target.value)} />
        <input placeholder="Peso (kg)" value={peso} onChange={e => setPeso(e.target.value)} />
        <button>Calcular</button>
      </form>
      {resultado && <>
        <p>IMC: {resultado.imc}</p>
        <p>Classificação: {resultado.classif}</p>
      </>}
    </div>
  )
}
