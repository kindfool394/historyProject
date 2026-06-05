import type { Exhibit } from '../../types/museum';

interface ExhibitPopupProps {
  exhibit: Exhibit;
  title?: string;
  actionLabel?: string;
  onClose: () => void;
}

function ExhibitPopup({
  exhibit,
  title = 'Найден новый экспонат!',
  actionLabel = 'Продолжить',
  onClose,
}: ExhibitPopupProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title}: ${exhibit.fullName}`}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.7)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Плашка */}
      <div
        style={{
          background: '#1a0f07',
          border: '2px solid #d2aa5a',
          borderRadius: '12px',
          width: '950px',
          maxWidth: '90vw',
          maxHeight: '80vh',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Заголовок */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(160,110,40,0.8), rgba(100,65,15,0.8))',
            padding: '20px 32px',
            borderBottom: '1px solid rgba(210,170,90,0.5)',
            flexShrink: 0,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#f5e6c8',
              textAlign: 'center',
              letterSpacing: '0.08em',
              textShadow: '0 1px 4px rgba(0,0,0,0.6)',
            }}
          >
            {title}
          </h2>
        </div>

        {/* Контент */}
        <div
          style={{
            display: 'flex',
            padding: '32px',
            gap: '32px',
            flex: 1,
            overflow: 'auto',
          }}
        >
          {/* Картинка */}
          <div
            style={{
              flexShrink: 0,
              width: '180px',
              height: '180px',
              background: '#2a1a0e',
              border: '1px solid rgba(210,170,90,0.4)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              src={exhibit.image}
              alt={exhibit.fullName}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Текст */}
          <div style={{ flex: 1, minHeight: 0 }}>
            <h3
              style={{
                margin: '0 0 16px 0',
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#f5e6c8',
                letterSpacing: '0.05em',
              }}
            >
              {exhibit.fullName}
            </h3>
            <div
              style={{
                fontSize: '1rem',
                color: 'rgba(245,230,200,0.8)',
                lineHeight: 1.6,
                maxHeight: '300px',
                overflowY: 'auto',
                paddingRight: '8px',
              }}
            >
              {exhibit.description}
            </div>
          </div>
        </div>

        {/* Кнопка закрытия */}
        <div
          style={{
            padding: '20px 32px',
            borderTop: '1px solid rgba(210,170,90,0.3)',
            display: 'flex',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              fontFamily: "'Cinzel', 'Georgia', serif",
              fontSize: '1rem',
              fontWeight: 600,
              color: '#f5e6c8',
              background: 'linear-gradient(135deg, rgba(160,110,40,0.7), rgba(100,65,15,0.7))',
              border: '1px solid rgba(210,170,90,0.75)',
              borderRadius: '6px',
              padding: '12px 36px',
              cursor: 'pointer',
              letterSpacing: '0.08em',
              textShadow: '0 1px 3px rgba(0,0,0,0.6)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.35)',
              transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(200,150,60,0.9), rgba(140,90,20,0.9))';
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(200,150,50,0.45)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(160,110,40,0.7), rgba(100,65,15,0.7))';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.35)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExhibitPopup;
