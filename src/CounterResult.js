import { useContext } from 'react'
import CounterContext from './CounterContext'

const CounterResult = () => {
    let context = useContext(CounterContext)
    return (
        <p>Resultado: {context.amount}</p>
    )
}

export default CounterResult
