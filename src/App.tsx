import { Suspense, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./component/ErrorFallback";
import Contact from "./routes/Contact";
import BottomBar from "./component/Common/BottomBar";
import Topbar from "./component/Common/Topbar";
import Blogs from "./routes/Blogs";
import Blog from "./routes/Blog";
import ScrollToTop from "./component/Common/ScrollToTop";
import SplashLoading from "./component/Common/SplashLoading";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Topbar scrollContainerRef={scrollContainerRef} />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<SplashLoading/>}>
          <ScrollToTop scrollContainerRef={scrollContainerRef} />
          <div ref={scrollContainerRef} className="pt-[60px] overflow-y-auto h-[calc(100vh-60px)] text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:title" element={<Blog />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Suspense>
      </ErrorBoundary>
      <BottomBar />
    </>
  );
}

export default App;
