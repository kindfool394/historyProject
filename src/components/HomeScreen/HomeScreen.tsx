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
  title: 'Великая Отечественная война',
  description: `Зал, посвящённый 1945 году, раскрывает события завершающего этапа Великой Отечественной войны и периода Победы. Материалы зала отражают особенности фронтовой жизни, средства связи, личные вещи военнослужащих и медицинские предметы военного времени. Посетители смогут увидеть свидетельства эпохи, связанные с повседневностью на фронте и в тылу, а также глубже познакомиться с историей последних месяцев войны и её значением для страны и мира.`,
};

const hall2Info = {
  title: 'Отечественная война 1812 года',
  description: `Зал, посвящённый Отечественной войне 1812 года, знакомит посетителей с историей одного из важнейших событий 19 века. Пространство отражает особенности военного времени, развитие вооружения, элементы армейского быта и символику эпохи. Представленные экспонаты позволяют проследить ход исторических событий, лучше понять устройство русской армии того периода и ощутить атмосферу времени, связанного с борьбой против наполеоновского вторжения.
`,
};

const hall3Info = {
  title: '13-15 века',
  description: `Зал, посвящённый Руси XIII–XV веков, рассказывает о периоде, когда русские земли переживали серьёзные политические и культурные изменения. Экспозиция показывает жизнь после монгольского нашествия, развитие княжеств, укрепление городов, ремёсел и торговли, а также особенности военного дела того времени. Через предметы быта, оружие, элементы одежды, иконы и другие детали эпохи можно представить, как жили люди средневековой Руси, какие традиции сохраняли и с какими вызовами сталкивались. Этот зал позволяет внимательнее рассмотреть особенности эпохи и лучше представить исторический контекст жизни русских земель в XIII–XV веках.
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
          Виртуальный музей
        </h1>

        <div className="flex flex-row items-center justify-center gap-8">
          <HallButton label="ВОВ" onClick={onHall1Click} />
          <HallButton label="1812" onClick={onHall2Click} />
          <HallButton label="13-15" onClick={onHall3Click} />
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
