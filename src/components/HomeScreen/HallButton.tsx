interface HallButtonProps {
  label: string;
  onClick: () => void;
}

function HallButton({ label, onClick }: HallButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        px-12 py-4
        text-lg tracking-[0.15em]
        rounded
        cursor-pointer
        transition-all duration-300 ease-in-out
        focus-visible:outline-2 focus-visible:outline-offset-3
      "
      style={{
        fontFamily: "'Cinzel', 'Georgia', serif",
        fontWeight: 600,
        color: '#f5e6c8',
        background: 'linear-gradient(135deg, rgba(160, 110, 40, 0.55), rgba(100, 65, 15, 0.55))',
        border: '1px solid rgba(210, 170, 90, 0.7)',
        boxShadow: '0 2px 16px rgba(180, 130, 50, 0.25), inset 0 1px 0 rgba(255,220,120,0.15)',
        textShadow: '0 1px 4px rgba(0,0,0,0.6)',
      }}
      onMouseEnter={e => {
        const btn = e.currentTarget;
        btn.style.background = 'linear-gradient(135deg, rgba(200, 150, 60, 0.75), rgba(140, 90, 20, 0.75))';
        btn.style.borderColor = 'rgba(240, 200, 100, 0.95)';
        btn.style.boxShadow = '0 4px 24px rgba(200, 150, 50, 0.45), inset 0 1px 0 rgba(255,220,120,0.25)';
        btn.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        const btn = e.currentTarget;
        btn.style.background = 'linear-gradient(135deg, rgba(160, 110, 40, 0.55), rgba(100, 65, 15, 0.55))';
        btn.style.borderColor = 'rgba(210, 170, 90, 0.7)';
        btn.style.boxShadow = '0 2px 16px rgba(180, 130, 50, 0.25), inset 0 1px 0 rgba(255,220,120,0.15)';
        btn.style.transform = 'translateY(0)';
      }}
    >
      {label}
    </button>
  );
}

export default HallButton;
