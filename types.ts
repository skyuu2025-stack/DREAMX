
export interface FortuneResult {
  title: string;
  summary: string;
  score: number;
  tags: string[];
  detailedAnalysis: string;
}

export interface UserProfile {
  name: string;
  birthDate: string;
  location: string;
  gender: 'male' | 'female' | 'other';
}

export enum DivinationType {
  BAZI = '八字命理',
  TAROT = '星语塔罗',
  ICHING = '周易占卜'
}

export interface PRDSection {
  title: string;
  content: string;
}
