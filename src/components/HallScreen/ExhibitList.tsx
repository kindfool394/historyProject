import type { Exhibit } from '../../types/museum';

interface ExhibitListProps {
  exhibits: Exhibit[];
  foundExhibitIds: Set<string>;
}

function ExhibitList({ exhibits, foundExhibitIds }: ExhibitListProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, auto)',
        gap: '4px 16px',
        fontFamily: "'Cinzel', 'Georgia', serif",
        fontSize: '0.85rem',
        lineHeight: 1.3,
        width: '100%',
      }}
    >
      {exhibits.slice(0, 9).map(exhibit => {
        const found = foundExhibitIds.has(exhibit.id);
        return (
          <span
            key={exhibit.id}
            style={{
              color: found ? 'rgba(245,230,200,0.45)' : '#f5e6c8',
              textDecoration: found ? 'line-through' : 'none',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              transition: 'color 0.3s ease',
              textAlign: 'left',
            }}
          >
            {exhibit.shortName}
          </span>
        );
      })}
    </div>
  );
}

export default ExhibitList;
