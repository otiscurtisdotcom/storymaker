import { useEffect } from 'react';
import './App.scss';
import Page from './page/Page';
import WebFont from 'webfontloader';

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Comforter Brush', 'Great Vibes']
      },
    });
   }, []);

  return (
    <div
      className="page"
      style={{backgroundImage: `url("${process.env.PUBLIC_URL}/img/wood.jpg")`}}
    >
      <div className="wrapper">
        <div className="top">
          <img src={`${process.env.PUBLIC_URL}/img/paper_top.png`}/>
        </div>
        <div
          className="content"
          style={{backgroundImage: `url("${process.env.PUBLIC_URL}/img/paper_body.png")`}}
        >
          <header>
            <h1>Story Maker</h1>
          </header>
          <main>
            <Page></Page>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
