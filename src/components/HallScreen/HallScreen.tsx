import { useEffect, useState } from 'react';
import type { HallData, GameState, Exhibit } from '../../types/museum';
import ExhibitItem from './ExhibitItem';
import BottomPanel from './BottomPanel';
import Journal from './Journal';
import ExhibitPopup from './ExhibitPopup';
import InfoPopup from '../HomeScreen/InfoPopup';

interface HallScreenProps {
  hall: HallData;
  gameState: GameState;
  onExhibitFound: (exhibitId: string) => void;
  onBack: () => void;
}

const hallIntroText: Record<string, { title: string; description: string }> = {
  hall1: {
    title: 'Зал 1. «Средневековый город»',
    description:
      'Добро пожаловать в зал «Средневековый город». Здесь мы увидим, из чего складывалась повседневная жизнь человека Средневековья: торговля, ремесло, деньги, письмо, украшения и предметы быта. Каждый экспонат поможет представить город не как далёкое прошлое, а как живое пространство людей, дел и привычек.',
  },
  hall2: {
    title: 'Зал 2. «Оружие и война»',
    description:
      'Теперь мы переходим в зал «Оружие и война». Здесь представлены предметы, связанные с защитой, нападением, конным снаряжением и воинской повседневностью. Мы увидим, как были устроены доспехи, какое оружие использовали в бою и почему лошадь в Средние века была важнейшим спутником воина.',
  },
  hall3: {
    title: 'Зал 3. «Духовная культура»',
    description:
      'Перед нами зал «Духовная культура», посвящённый вере, книжности и церковному искусству. Здесь собраны личные святыни, рукописи, богослужебные предметы и архитектурные детали. Эти экспонаты показывают, какое место занимала религия в жизни человека и как духовные идеи воплощались в вещах.',
  },
};

function HallScreen({ hall, gameState, onExhibitFound, onBack }: HallScreenProps) {
  const [isIntroOpen, setIsIntroOpen] = useState(true);
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [newlyFoundExhibit, setNewlyFoundExhibit] = useState<Exhibit | null>(null);
  const introText = hallIntroText[hall.id];

  useEffect(() => {
    setIsIntroOpen(true);
  }, [hall.id]);

  const safeFoundIds = gameState?.foundExhibitIds ?? new Set<string>();
  const getExhibitKey = (exhibitId: string) => `${hall.id}:${exhibitId}`;
  const hallFoundIds = new Set(
    hall.exhibits
      .filter(exhibit => safeFoundIds.has(getExhibitKey(exhibit.id)))
      .map(exhibit => exhibit.id),
  );

  const allFound = hallFoundIds.size === hall.exhibits.length;

  const foundExhibits = hall.exhibits.filter(e => hallFoundIds.has(e.id));
  const activeExhibit = hall.exhibits.find(e => !hallFoundIds.has(e.id));

  const handleExhibitClick = (id: string) => {
    if (activeExhibit?.id === id) {
      const exhibit = hall.exhibits.find(e => e.id === id);
      if (exhibit) {
        onExhibitFound(getExhibitKey(id));
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
          isFound={hallFoundIds.has(exhibit.id)}
          isActive={activeExhibit?.id === exhibit.id}
          onClick={handleExhibitClick}
        />
      ))}

      {/* Нижняя плашка */}
      <BottomPanel
        hallName={hall.name}
        exhibits={hall.exhibits}
        foundExhibitIds={hallFoundIds}
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

      {isIntroOpen && introText && (
        <InfoPopup
          title={introText.title}
          description={introText.description}
          onClose={() => setIsIntroOpen(false)}
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
