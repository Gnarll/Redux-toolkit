import { Provider } from 'react-redux';
import { setupStore } from './src/store';
import Main from './Main';

const App = () => {

  const store = setupStore()

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App

