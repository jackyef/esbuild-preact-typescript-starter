import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import logo from './assets/logo.png';
import * as classes from './styles/app';

const LazyComponent = (props: any) => {
  const moduleRef = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadChunk = async () => {
      console.log('loadChunk called');
      moduleRef.current = (await import('./components/SomeComponent')).default;

      setLoaded(true);
    }

    loadChunk();
  }, []);

  const rendered = loaded ? <moduleRef.current {...props} /> : null;

  return rendered;
}

const App: preact.FunctionComponent<{ name: string }> = ({ name = '' }) => {
  const [show, setShow] = useState(false);
  console.log('Welcome,', name);

  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <img src={logo} className={classes.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>Welcome to esbuild + Preact + TypeScript starter!</p>
        <div className={classes.Content}>
          <pre className={classes.Pre}>
            <code>$ yarn install</code>
            <br />
            <code>$ yarn build</code>
            <br />
            <code>$ yarn serve</code>
          </pre>
        </div>
      </header>

      <main className={classes.AppMain}>
        <button className={classes.Button} onClick={() => setShow(true)}>Click me to render a lazily loaded component</button>
        {show ?
          <LazyComponent />
          : null}
      </main>
    </div>
  );
};

export default App;