import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
