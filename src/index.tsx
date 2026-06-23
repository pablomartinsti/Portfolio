import { createRoot } from 'react-dom/client';
import Home from './pages/home';
import GlobalStyles from './styles/GlobalStyles';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Elemento root não encontrado.');
}

const root = createRoot(rootElement);

root.render(
  <>
    <GlobalStyles />
    <Home />
  </>
);
