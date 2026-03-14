export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  highlights: string[];
};

export type Industry = {
  id: string;
  title: string;
  description: string;
  painPoint: string;
  solution: string;
};

export type UseCase = {
  id: string;
  title: string;
  summary: string;
  challenge: string;
  impact: string[];
  stack: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type BrandItem = {
  name: string;
  category: string;
};

export type MetricItem = {
  label: string;
  value: string;
  detail: string;
  counterTo?: number;
  prefix?: string;
  suffix?: string;
};
