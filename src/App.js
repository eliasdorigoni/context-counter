import CounterProvider from './CounterProvider';
import CounterContainer from './CounterContainer'
import CounterResult from './CounterResult';

const App = () =>
  <>
    {/* El provider debe ser común a los componentes que lo usan... */}
    <CounterProvider>
      <CounterContainer />
      <CounterResult />
    </CounterProvider>

    <hr />

    {/* si no los datos no se mantienen */}
    <CounterProvider>
      <CounterContainer />
      <CounterResult />
    </CounterProvider>
  </>

export default App;
