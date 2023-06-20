import Header from "./components/Header";
import { Route } from "wouter";
import { Suspense, lazy } from "react";

const TopStories = lazy(() => import("./pages/TopStories"));
const Detail = lazy(() => import("./pages/Detail"));

function App() {
  return (
    <>
      <Header />
      <main className="p-2 bg-[#f6f6ef]">
        <Suspense>
          <Route path="/" component={TopStories} />
          <Route path="/article/:id" component={Detail} />
        </Suspense>
      </main>
    </>
  );
}

export default App;
