import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Contato } from "@/pages/Contato";
import { Home } from "@/pages/Home";
import { Portfolio } from "@/pages/Portfolio";
import { Sobre } from "@/pages/Sobre";

function App() {
  return (
    <ErrorBoundary>
      <SEO />
      <Layout>
        <Home />
        <Sobre />
        <Portfolio />
        <Contato />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;