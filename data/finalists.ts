import { svgAvatar } from "@/lib/avatars";
import type { Candidate, Position } from "@/types";

// Re-export types for backwards compatibility
export type { RiskLevel, Tone, CandidateHighlight, Candidate, Position } from "@/types";

export const position: Position = {
  role: "Англоговорящяя гувернантка со знанием русского языка для трех девочек 5, 8 и 8 лет в Московской области",
  location: "Дубай ⇄ Белград",
  finalists: 3,
  total: 42,
  preparedBy: "Ассистент",
  updatedAt: "сегодня 13:40",
};

export const candidates: Candidate[] = [
  {
    id: "c1",
    name: "А.К.",
    fullName: "Анна Кузнецова",
    title: "Гувернантка / English-only",
    location: "Белград (готова к релокации)",
    categoryLabel: "Няня / Гувернантка",
    locationLabel: "Ницца, Франция",
    compMonthlyEUR: 5200,
    availability: "Старт через 10 дней",
    risk: "low",
    assistantRecommended: true,
    decisionReadyBadges: [
      "ID подтверждён",
      "Дипломы проверены",
      "Рекомендации созвонены",
    ],
    why: [
      "8 лет в UHNW-семьях + 2 года гувернанткой",
      "Режим и границы: спокойно, без давления",
      "Сильные долгие рекомендации",
    ],
    riskNotes: ["Рисков не выявлено", "Стабильные долгие контракты"],
    highlights: [
      { k: "Английский", v: "C2 (IELTS 8.0)", tone: "pos" },
      { k: "Ротации", v: "ОК", tone: "pos" },
      { k: "Опыт", v: "8 лет UHNW", tone: "pos" },
      { k: "Животные", v: "аллергий нет", tone: "pos" },
    ],
    introSeconds: 22,
    photoDataUri: svgAvatar("a", "A K"),
  },
  {
    id: "c2",
    name: "М.С.",
    fullName: "Мария Смирнова",
    title: "Няня (Montessori)",
    location: "Алматы",
    categoryLabel: "Няня / Гувернантка",
    locationLabel: "Ницца, Франция",
    compMonthlyEUR: 4600,
    availability: "Старт через 3–4 недели",
    risk: "med",
    decisionReadyBadges: [
      "ID подтверждён",
      "First-aid сертификат",
      "Рекомендации созвонены",
    ],
    why: [
      "Montessori (3–7 лет) + раннее развитие",
      "Тёплая коммуникация с родителями",
      "Хорошо в семьях с несколькими детьми",
    ],
    riskNotes: ["Нужны чёткие границы графика", "Не водит авто"],
    highlights: [
      { k: "Английский", v: "B2+", tone: "mid" },
      { k: "First aid", v: "есть", tone: "pos" },
      { k: "Ротации", v: "ограниченно", tone: "mid" },
      { k: "Вождение", v: "нет", tone: "neg" },
    ],
    introSeconds: 28,
    hideIntro: true,
    photoDataUri: svgAvatar("b", "M S"),
  },
  {
    id: "c3",
    name: "Е.П.",
    fullName: "Елена Петрова",
    title: "Няня + репетитор (англ/мат)",
    location: "Киев (сейчас в ЕС)",
    categoryLabel: "Няня / Гувернантка",
    locationLabel: "Ницца, Франция",
    compMonthlyEUR: 5900,
    availability: "Старт на следующей неделе",
    risk: "med",
    decisionReadyBadges: [
      "ID подтверждён",
      "Дипломы проверены",
      "Рекомендации созвонены",
    ],
    why: [
      "Плюс репетиторство: английский + математика",
      "Энергия: спорт, прогулки, режим",
      "Готов(а) закрывать вечера при необходимости",
    ],
    riskNotes: ["Высокий уровень компенсации", "Стиль может быть слишком энергичным"],
    highlights: [
      { k: "Английский", v: "C1", tone: "pos" },
      { k: "Репетитор", v: "да", tone: "pos" },
      { k: "Вечера", v: "да", tone: "pos" },
      { k: "Компенсация", v: "высокая", tone: "neg" },
    ],
    introSeconds: 18,
    photoDataUri: svgAvatar("c", "E P"),
  },
];
