import type { Exhibit } from '../../types/museum';

interface JournalProps {
  /** Только найденные экспонаты */
  foundExhibits: Exhibit[];
  onClose: () => void;
}

function Journal({ foundExhibits, onClose }: JournalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Журнал экспонатов"
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.7)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Панель журнала */}
      <div
        style={{
          background: '#1a0f07',
          border: '1px solid #d2aa5a',
          borderRadius: 8,
          padding: 32,
          width: 1000,
          maxWidth: '90vw',
          maxHeight: '85vh',
          overflowY: 'auto',
        }}
      >
        {/* Заголовок */}
        <h2
          style={{
            margin: '0 0 28px 0',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#d4b483',
            textAlign: 'center',
            letterSpacing: '0.1em',
            textShadow: '0 1px 4px rgba(0,0,0,0.6)',
          }}
        >
          Журнал находок
        </h2>

        {/* Кнопка закрытия */}
        <button
          type="button"
          aria-label="Закрыть журнал"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            background: 'transparent',
            border: 'none',
            color: 'rgba(245,230,200,0.7)',
            fontSize: '1.4rem',
            cursor: 'pointer',
            lineHeight: 1,
            padding: '4px 8px',
            fontFamily: 'inherit',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#f5e6c8'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(245,230,200,0.7)'; }}
        >
          ×
        </button>

        {/* Содержимое */}
        {foundExhibits.length === 0 ? (
          <p
            style={{
              color: 'rgba(245,230,200,0.5)',
              textAlign: 'center',
              fontSize: '0.9rem',
              margin: 0,
              fontStyle: 'italic',
            }}
          >
            Пока ничего не найдено
          </p>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
            }}
          >
            {foundExhibits.map(exhibit => (
              <div
                key={exhibit.id}
                style={{
                  display: 'flex',
                  gap: '24px',
                  padding: '20px',
                  background: 'rgba(42,26,14,0.4)',
                  borderRadius: '8px',
                  border: '1px solid rgba(210,170,90,0.2)',
                }}
              >
                {/* Картинка */}
                <div
                  style={{
                    objectFit: 'cover', 
                    flexShrink: 0,
                    width: '270px',
                    height: '250px',
                    background: '#2a1a0e',
                    border: '1px solid rgba(210,170,90,0.4)',
                    borderRadius: '6px',
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
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      margin: '0 0 12px 0',
                      fontSize: '1.2rem',
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
                      maxHeight: '200px',
                      overflowY: 'auto',
                      paddingRight: '8px',
                    }}
                  >
                    {exhibit.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Journal;
