import Choose from './screens/ChooseScreen';
import MainScreen from './screens/MainScreen';
import Phrase from './screens/PhraseScreen';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [phraseResponse, setPhraseResponse] = useState<string>('');
  const [autorResponse, setAutorResponse] = useState<string>('');

  // tela: 'main' | 'choose' | 'phrase'
  const [screen, setScreen] = useState<'main' | 'choose' | 'phrase'>('main');
  const [fade, setFade] = useState<'fade-in' | 'fade-out'>('fade-in');

  // Quando phraseResponse ou autorResponse mudam, vai para tela de frase
  useEffect(() => {
    if (phraseResponse || autorResponse){
      setScreen('phrase');
    } else if(screen == 'phrase'){
      setScreen('choose');
    }  
  }, [phraseResponse, autorResponse]);

  // Splash: mostra MainScreen, depois de 2.5s faz fade-out e troca para Choose
  useEffect(() => {
    if (screen === 'main') {
      setFade('fade-in');
      const timeout1 = setTimeout(() => setFade('fade-out'), 2000);
      const timeout2 = setTimeout(() => {
        setScreen('choose');
        setFade('fade-in');
      }, 2700);
      return () => { clearTimeout(timeout1); clearTimeout(timeout2); };
    }
  }, [screen]);

  let content = null;
  if (screen === 'main') {
    content = <div className={`fade ${fade}`}><MainScreen /></div>;
  } else if (screen === 'choose') {
    content = <div className={`fade ${fade}`}><Choose setPhraseResponse={setPhraseResponse} setAutorResponse={setAutorResponse} /></div>;
  } else {
    content = <Phrase setPhraseResponse={setPhraseResponse} setAutorResponse={setAutorResponse} phrase={phraseResponse} autor={autorResponse} />;
  }

  return content;
}

export default App
