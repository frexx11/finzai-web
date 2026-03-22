import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProviders } from "./providers/AppProviders";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <AppProviders>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </AppProviders>
);

export default App;
