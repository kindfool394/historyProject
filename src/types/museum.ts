export interface Exhibit {
  /** Уникальный идентификатор, например 'exhibit-1' */
  id: string;
  /** Короткое название для списка на экране */
  shortName: string;
  /** Полное название для плашки и журнала */
  fullName: string;
  /** Описание экспоната */
  description: string;
  /** Путь к изображению экспоната */
  image: string;
  /** Позиция в % относительно контейнера фона */
  position: {
    x: number; // % от ширины контейнера (0–100)
    y: number; // % от высоты контейнера (0–100)
  };
  /** Ширина кликабельной области в % */
  width: number;
  /** Высота кликабельной области в % */
  height: number;
}

export interface HallData {
  /** Идентификатор зала, например 'hall1' */
  id: string;
  /** Отображаемое название зала, например 'Зал 1' */
  name: string;
  /** Путь к фоновому изображению */
  backgroundImage: string;
  /** Список экспонатов зала */
  exhibits: Exhibit[];
}

export interface GameState {
  /** Идентификаторы найденных экспонатов (Set гарантирует отсутствие дублей) */
  foundExhibitIds: Set<string>;
}
