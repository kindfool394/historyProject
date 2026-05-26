import { useState } from 'react';
import HallButton from './HallButton';
import InfoButton from './InfoButton';
import InfoPopup from './InfoPopup';
import { publicAsset } from '../../utils/assets';

interface HomeScreenProps {
  onHall1Click: () => void;
  onHall2Click: () => void;
  onHall3Click: () => void;
}

const hall1Info = {
  title: 'Средневековый город',
  description: `Зал рассказывает о жизни людей в XIII–XV веках -  развитии городов, ремёсел, торговли, военного дела и быта. Экспонаты помогают увидеть, как жили горожане Средневековья, чем они занимались, какие предметы использовали в повседневной жизни и как менялось общество того времени.`,
};

const hall2Info = {
  title: 'Оружие и война',
  description: `Зал посвящён военной культуре XIII–XV веков - времени походов, крепостей, конных дружин и столкновний разных государств и народов. Экспозиция помогает представить, как развивались вооружение, защитное снаряжение и военная тактика, какую роль играла конница и как войны влияли на жизнь средневекового общества.
`,
};

const hall3Info = {
  title: 'Духовная культура',
  description: `Зал посвящён религиозной жизни и духовной культуре Руси XIV–XV веков. Экспозиция помогает представить роль христианства в жизни средневекового общества, значение монастырей, храмов, священных книг и предметов церковного обихода. Здесь раскрывается мир веры, книжности и искусства, который занимал важное место в культуре Средневековья.
`,
};

function HomeScreen({ onHall1Click, onHall2Click, onHall3Click }: HomeScreenProps) {
  const [infoPopup, setInfoPopup] = useState<{ title: string; description: string } | null>(null);

  return (
    <div
      className="relative w-screen h-screen flex items-center justify-center bg-[#2a1a0e] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${publicAsset('images/фон на хоуп экран.png')}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10">
        <h1
          className="text-center m-0"
          style={{
            fontFamily: "'Cinzel', 'Georgia', serif",
            fontSize: 'clamp(2.8rem, 7vw, 5rem)',
            fontWeight: 900,
            letterSpacing: '0.1em',
            color: '#d4b483',
            textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 40px rgba(180,130,60,0.5)',
          }}
        >
          Музей Руси ХIII - XV вв
        </h1>

        <div className="flex flex-row items-center justify-center gap-8">
          <HallButton label="Средневековый город" onClick={onHall1Click} />
          <HallButton label="Оружие и война" onClick={onHall2Click} />
          <HallButton label="Духовная культура" onClick={onHall3Click} />
        </div>

        <div className="flex flex-row items-center justify-center gap-8">
          <InfoButton label="Подробнее" onClick={() => setInfoPopup(hall1Info)} />
          <InfoButton label="Подробнее" onClick={() => setInfoPopup(hall2Info)} />
          <InfoButton label="Подробнее" onClick={() => setInfoPopup(hall3Info)} />
        </div>

      </div>

      {/* Плашка с информацией */}
      {infoPopup && (
        <InfoPopup
          title={infoPopup.title}
          description={infoPopup.description}
          onClose={() => setInfoPopup(null)}
        />
      )}
    </div>
  );
}

export default HomeScreen;
