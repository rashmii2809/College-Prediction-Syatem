import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

// Lazy load pages
const CollegesPage = lazy(() => import("./pages/CollegesPage"));
const CollegeDetailPage = lazy(() => import("./pages/CollegeDetailPage"));
const StocksPage = lazy(() => import("./pages/StocksPage"));
const StockDetailPage = lazy(() => import("./pages/StockDetailPage"));
const CryptoPage = lazy(() => import("./pages/CryptoPage"));
const CryptoDetailPage = lazy(() => import("./pages/CryptoDetailPage"));
const JobsPage = lazy(() => import("./pages/JobsPage"));
const JobDetailPage = lazy(() => import("./pages/JobDetailPage"));

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-foreground/70 font-display">Loading...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colleges" element={<CollegesPage />} />
          <Route path="/college/:slug" element={<CollegeDetailPage />} />
          <Route path="/stocks" element={<StocksPage />} />
          <Route path="/stock/:symbol" element={<StockDetailPage />} />
          <Route path="/crypto" element={<CryptoPage />} />
          <Route path="/crypto/:slug" element={<CryptoDetailPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/job/:slug" element={<JobDetailPage />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
