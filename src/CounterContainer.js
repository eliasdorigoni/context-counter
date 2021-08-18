import { useContext } from "react"
import Counter from "./Counter"
import CounterContext from "./CounterContext"

const CounterContainer = () => {
    let context = useContext(CounterContext)

    return (
        <Counter onclick={context.add} />
    )
}

export default CounterContainer
