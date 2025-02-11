import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles'
import App from './App'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persister, store } from './store'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <App />
        </PersistGate>
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
)
