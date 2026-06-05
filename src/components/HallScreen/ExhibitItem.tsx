import type { Exhibit } from '../../types/museum';

interface ExhibitItemProps {
  exhibit: Exhibit;
  isFound: boolean;
  isActive: boolean;
  onClick: (id: string) => void;
}

function ExhibitItem({ exhibit, isFound, isActive, onClick }: ExhibitItemProps) {
  const { position, width, height, id, shortName } = exhibit;
  const isDisabled = isFound || !isActive;

  return (
    <button
      type="button"
      aria-label={`Экспонат: ${shortName}`}
      aria-pressed={isFound}
      aria-disabled={isDisabled}
      disabled={isDisabled}
      onClick={() => onClick(id)}
      style={{
        position: 'absolute',
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${width}%`,
        height: `${height}%`,
        opacity: isFound ? 0.3 : 1,
        pointerEvents: isDisabled ? 'none' : 'auto',
        cursor: isActive ? 'pointer' : 'default',
        background: 'transparent',
        border: '2px solid transparent',
        borderRadius: '4px',
        transition: 'box-shadow 0.2s ease, opacity 0.3s ease',
        padding: 0,
      }}
      onMouseEnter={e => {
        if (isActive) {
          e.currentTarget.style.boxShadow = '0 0 8px 2px rgba(255,220,100,0.8)';
          e.currentTarget.style.borderColor = 'rgba(255,220,100,0.5)';
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'transparent';
      }}
    />
  );
}

export default ExhibitItem;
