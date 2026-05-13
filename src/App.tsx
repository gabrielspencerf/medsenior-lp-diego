import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ClientBootstrap } from './components/ClientBootstrap';
import { LegalPageFallback } from './components/LegalPageFallback';
import { SeoHead } from './components/SeoHead';
import { LandingPage } from './pages/LandingPage';

const TermosPage = lazy(async () => {
  const m = await import('./pages/TermosPage');
  return { default: m.TermosPage };
});

const PrivacidadePage = lazy(async () => {
  const m = await import('./pages/PrivacidadePage');
  return { default: m.PrivacidadePage };
});

export default function App() {
  return (
    <>
      <SeoHead />
      <ClientBootstrap />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/termos"
          element={
            <Suspense fallback={<LegalPageFallback />}>
              <TermosPage />
            </Suspense>
          }
        />
        <Route
          path="/privacidade"
          element={
            <Suspense fallback={<LegalPageFallback />}>
              <PrivacidadePage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}
