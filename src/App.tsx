import { Fragment } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Router from "./router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // optional
    },
  },
});

function App() {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Router /> {/* Your app routes */}
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;

