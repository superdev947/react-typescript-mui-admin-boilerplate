// ** Redux Imports
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// ** Reducer Imports
import { STORE_KEY } from '@/configs'
import reducers from './reducers'

const persistConfig = {
  key: STORE_KEY,
  storage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

const persister = persistStore(store)

export type RootState = ReturnType<typeof reducers>

export type AppDispatch = typeof store.dispatch

const { dispatch } = store

const useDispatch = () => useAppDispatch<AppDispatch>()
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector

export { dispatch, persister, store, useDispatch, useSelector }
