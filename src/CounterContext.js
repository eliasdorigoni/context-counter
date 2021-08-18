import { createContext } from 'react'

const CounterContext = createContext()

export const { Consumer, Provider } = CounterContext

export default CounterContext
