import { useState } from 'react'
import { Provider } from './CounterContext'

const CounterProvider = ({children}) => {
    const [amount, setAmount] = useState(0)

    const add = () => {
        setAmount(amount + 1)
    }

    return (
        <Provider value={{amount, add}} >
            {children}
        </Provider>
    )
}

export default CounterProvider