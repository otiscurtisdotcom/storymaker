import { useEffect, useState } from 'react';
import './App.scss';
import Page from './page/Page';
import WebFont from 'webfontloader';

const App = () => {
  const [allLoaded, setAllLoaded] = useState(false);
  const [currentRow, setCurrentRow] = useState(0);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Comforter Brush', 'Great Vibes']
      },
    });
  }, []);

  const loaded = () => {
    setAllLoaded(true);
  };

  const nextRow = () => {
    const newRow = currentRow + 1;
    setCurrentRow(newRow);
    setTimeout(() => {
      window.scrollTo({top: document.body.clientHeight, behavior: 'smooth'});
    }, 100);
  };

  return (
    <div
      className={`page ${allLoaded ? 'loaded' : ''}`}
    >
      <div
        className="wood"
        style={{backgroundImage: `url("${process.env.PUBLIC_URL}/img/wood.jpg")`}}
      ></div>
      <button onClick={nextRow}>Next</button>
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
            <Page allLoaded={loaded} currentRow={currentRow}></Page>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
