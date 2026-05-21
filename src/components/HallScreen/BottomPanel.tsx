import type { Exhibit } from '../../types/museum';
import ExhibitList from './ExhibitList';
import { publicAsset } from '../../utils/assets';

interface BottomPanelProps {
  hallName: string;
  exhibits: Exhibit[];
  foundExhibitIds: Set<string>;
  onJournalOpen: () => void;
  allFound: boolean;
}

function BottomPanel({ hallName, exhibits, foundExhibitIds, onJournalOpen }: BottomPanelProps) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      {/* Картинка плашки */}
      <img
        src={publicAsset('images/плашка вниз в зал.png')}
        alt=""
        aria-hidden="true"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
        draggable={false}
      />

      {/* Контент поверх картинки */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          padding: '0 80px',
          alignItems: 'center',
        }}
      >
        {/* Левая половина — список экспонатов */}
        <div
          style={{
            width: '45%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingRight: '20px',
            overflow: 'visible',
          }}
        >
          {
            <ExhibitList exhibits={exhibits} foundExhibitIds={foundExhibitIds} />
          }
        </div>

        {/* Правая половина — название зала и кнопка журнала */}
        <div
          style={{
            flex: 1,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Кнопка журнала  ляляля*/}
        <button
          type="button"
          onClick={onJournalOpen}
          style={{
            position: 'absolute',

            right: '90px',
            top: '42%',
            transform: 'translateY(-50%)',

            fontFamily: "'Cinzel', 'Georgia', serif",
            fontSize: '1rem',
            fontWeight: 600,
            color: '#f5e6c8',
            background: 'linear-gradient(135deg, rgba(160,110,40,0.65), rgba(100,65,15,0.65))',
            border: '1px solid rgba(210,170,90,0.75)',
            borderRadius: '6px',
            padding: '10px 22px',
            cursor: 'pointer',
            letterSpacing: '0.1em',
            textShadow: '0 1px 3px rgba(0,0,0,0.6)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.35)',
            transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease',
            whiteSpace: 'nowrap',
            zIndex: 3,
          }}
        >
          Журнал
        </button>
        </div>

        <span
            style={{
              position: 'absolute',
              left: '50%',
              top: '35%',
              transform: 'translate(-50%, -35%)',

              fontFamily: "'Cinzel', 'Georgia', serif",
              fontSize: '2rem',
              fontWeight: 700,
              color: '#d4b483',
              letterSpacing: '0.12em',
              textShadow: '0 1px 6px rgba(0,0,0,0.8)',
              whiteSpace: 'nowrap',
            }}
          >
            {hallName}
          </span>

      </div>
    </div>
  );
}

export default BottomPanel;
