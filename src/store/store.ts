import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { EmployeeSlice } from "./slice/employeeSlice";

// Define persist config
const persistConfig = {
    key: "persist-key",
    storage,
  };

// Combine reducers
const rootReducer = combineReducers({
    //Add your reducers here
    employeesData: EmployeeSlice.reducer,
})

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create the Redux store
export const store = configureStore({
    reducer: persistedReducer,

// If you've unserilaizable data, you can use the middleware to ignore the actions
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore these actions for serializable data check
      },
    }),  
})

// Create the Redux persistor
export const persistor = persistStore(store);

// Custom hooks for useDispatch and useSelector 
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;