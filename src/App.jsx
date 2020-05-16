import React from 'react';
import styled from 'styled-components';

const StyledApp = styled("div")`
    text-align: center;

    header {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;

        .App-logo {
            height: 40vmin;
            pointer-events: none;
        }
    }

    .App-link {
        color: #61dafb;
    }
`;

export default function App() {
  return (
    <StyledApp>
      <header>
        <p>Hello Vite + React!</p>
        <p>
          Edit <code>App.jsx</code> and save to reload.
        </p>
      </header>
    </StyledApp>
  );
}
