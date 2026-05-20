interface InfoPopupProps {
  title: string;
  description: string;
  onClose: () => void;
}

function InfoPopup({ title, description, onClose }: InfoPopupProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
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
      <div
        style={{
          background: '#1a0f07',
          border: '2px solid #d2aa5a',
          borderRadius: '12px',
          width: '600px',
          maxWidth: '90vw',
          maxHeight: '70vh',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
        }}
      >
        {/* Заголовок */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(160,110,40,0.8), rgba(100,65,15,0.8))',
            padding: '16px 24px',
            borderBottom: '1px solid rgba(210,170,90,0.5)',
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#f5e6c8',
              textAlign: 'center',
              letterSpacing: '0.08em',
            }}
          >
            {title}
          </h2>
        </div>

        {/* Текст */}
        <div
          style={{
            padding: '24px',
            fontSize: '1rem',
            color: 'rgba(245,230,200,0.85)',
            lineHeight: 1.7,
            maxHeight: '400px',
            overflowY: 'auto',
          }}
        >
          {description}
        </div>

        {/* Кнопка закрытия */}
        <div
          style={{
            padding: '16px 24px',
            borderTop: '1px solid rgba(210,170,90,0.3)',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              fontFamily: "'Cinzel', 'Georgia', serif",
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#f5e6c8',
              background: 'linear-gradient(135deg, rgba(160,110,40,0.7), rgba(100,65,15,0.7))',
              border: '1px solid rgba(210,170,90,0.75)',
              borderRadius: '6px',
              padding: '10px 32px',
              cursor: 'pointer',
              letterSpacing: '0.08em',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(200,150,60,0.9), rgba(140,90,20,0.9))';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(160,110,40,0.7), rgba(100,65,15,0.7))';
            }}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoPopup;