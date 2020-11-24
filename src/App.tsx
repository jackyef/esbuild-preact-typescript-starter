import { h } from 'preact';
import logo from './assets/logo.png';
import * as classes from './styles/app';

const App: preact.FunctionComponent<{ name: string }> = ({ name = '' }) => {
  console.log('Welcome,', name);

  return (
    <div className={classes.App()}>
      <header className={classes.AppHeader()}>
        <img src={logo} className={classes.AppLogo()} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>Welcome to esbuild + Preact + TypeScript starter!</p>
        <div className={classes.Content()}>
          <pre className={classes.Pre()}>
            <code>$ yarn install</code>
            <br />
            <code>$ yarn build</code>
            <br />
            <code>$ yarn run</code>
          </pre>
        </div>
      </header>
    </div>
  );
};

export default App;