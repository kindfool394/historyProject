import { useState } from 'react';
import HomeScreen from './components/HomeScreen/HomeScreen';
import HallScreen from './components/HallScreen/HallScreen';
import type { GameState } from './types/museum';
import { hall1Data, hall2Data, hall3Data } from './data/halls';

type Screen = 'home' | 'hall1' | 'hall2' | 'hall3';

function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [gameState, setGameState] = useState<GameState>({ foundExhibitIds: new Set() });

  const handleExhibitFound = (exhibitId: string) => {
    setGameState(prev => ({
      foundExhibitIds: new Set([...prev.foundExhibitIds, exhibitId]),
    }));
  };

  if (screen === 'hall1') {
    return (
      <HallScreen
        hall={hall1Data}
        gameState={gameState}
        onExhibitFound={handleExhibitFound}
        onBack={() => setScreen('home')}
      />
    );
  }

  if (screen === 'hall2') {
    return (
      <HallScreen
        hall={hall2Data}
        gameState={gameState}
        onExhibitFound={handleExhibitFound}
        onBack={() => setScreen('home')}
      />
    );
  }

    if (screen === 'hall3') {
    return (
      <HallScreen
        hall={hall3Data}
        gameState={gameState}
        onExhibitFound={handleExhibitFound}
        onBack={() => setScreen('home')}
      />
    );
  }

  return (
    <HomeScreen
      onHall1Click={() => setScreen('hall1')}
      onHall2Click={() => setScreen('hall2')}
      onHall3Click={() => setScreen('hall3')}
    />
  );
}

export default App;
