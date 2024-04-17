import { useState } from 'react';
import reactLogo from './assets/react.svg';
import styldComponentsLogo from './assets/styled-components.svg';
import typeScriptLogo from './assets/typescript.svg';
import viteLogo from '/vite.svg';
import styled from 'styled-components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <Logo src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <LogoReact src={reactLogo} alt="React logo" />
        </a>
        <a href="https://styled-components.com/" target="_blank">
          <Logo src={styldComponentsLogo} alt="Styled components logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <Logo src={typeScriptLogo} alt="Typescript logo" />
        </a>
      </div>
      <h1>Vite + React + Styled Components + TS</h1>
      <Card>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <ReadTheDocs>Click on the Vite and React logos to learn more</ReadTheDocs>
    </>
  );
}

const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  :hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;

const LogoReact = styled(Logo)`
  filter: drop-shadow(0 0 2em #61dafbaa);
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: logo-spin infinite 20s linear;
  }
`;

const Card = styled.div`
  padding: 2em;
`;

const ReadTheDocs = styled.p`
  color: #888;
`;

export default App;
