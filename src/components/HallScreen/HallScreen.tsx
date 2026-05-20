import { useState } from 'react';
import type { HallData, GameState, Exhibit } from '../../types/museum';
import ExhibitItem from './ExhibitItem';
import BottomPanel from './BottomPanel';
import Journal from './Journal';
import ExhibitPopup from './ExhibitPopup';

interface HallScreenProps {
  hall: HallData;
  gameState: GameState;
  onExhibitFound: (exhibitId: string) => void;
  onBack: () => void;
}

function HallScreen({ hall, gameState, onExhibitFound, onBack }: HallScreenProps) {
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [newlyFoundExhibit, setNewlyFoundExhibit] = useState<Exhibit | null>(null);

  const safeFoundIds = gameState?.foundExhibitIds ?? new Set<string>();

  const allFound = safeFoundIds.size === hall.exhibits.length;

  const foundExhibits = hall.exhibits.filter(e => safeFoundIds.has(e.id));

  const handleExhibitClick = (id: string) => {
    if (!safeFoundIds.has(id)) {
      const exhibit = hall.exhibits.find(e => e.id === id);
      if (exhibit) {
        onExhibitFound(id);
        setNewlyFoundExhibit(exhibit);
      }
    }
  };

  const handlePopupClose = () => {
    setNewlyFoundExhibit(null);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#2a1a0e', // fallback
      }}
    >
      {/* Фоновое изображение зала */}
      <img
        src={hall.backgroundImage}
        alt={`Фон ${hall.name}`}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'top',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
        draggable={false}
      />

      {/* Кликабельные экспонаты поверх фона */}
      {hall.exhibits.map(exhibit => (
        <ExhibitItem
          key={exhibit.id}
          exhibit={exhibit}
          isFound={safeFoundIds.has(exhibit.id)}
          onClick={handleExhibitClick}
        />
      ))}

      {/* Нижняя плашка */}
      <BottomPanel
        hallName={hall.name}
        exhibits={hall.exhibits}
        foundExhibitIds={safeFoundIds}
        onJournalOpen={() => setIsJournalOpen(true)}
        allFound={allFound}
      />

      {/* Модальный журнал */}
      {isJournalOpen && (
        <Journal
          foundExhibits={foundExhibits}
          onClose={() => setIsJournalOpen(false)}
        />
      )}

      {/* Всплывающая плашка при нахождении экспоната */}
      {newlyFoundExhibit && (
        <ExhibitPopup
          exhibit={newlyFoundExhibit}
          onClose={handlePopupClose}
        />
      )}

      {/* Кнопка «Назад» (для будущей навигации) */}
      <button
        type="button"
        aria-label="Вернуться на главную"
        onClick={onBack}
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          zIndex: 20,
          background: 'rgba(42,26,14,0.7)',
          border: '1px solid rgba(210,170,90,0.5)',
          borderRadius: '4px',
          color: '#d4b483',
          fontFamily: "'Cinzel', 'Georgia', serif",
          fontSize: '0.8rem',
          padding: '6px 12px',
          cursor: 'pointer',
          letterSpacing: '0.05em',
          transition: 'background 0.2s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(92,61,30,0.85)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(42,26,14,0.7)'; }}
      >
        ← Назад
      </button>
    </div>
  );
}

export default HallScreen;
