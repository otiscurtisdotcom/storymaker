import './App.scss';
import Page from './page/Page';

const App = () => {
  return (
    <div className="wrapper">
      <header>
        <h1>Story Maker</h1>
      </header>
      <main>
        <Page></Page>
      </main>
    </div>
  );
}

export default App;
