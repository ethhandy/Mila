interface Section {
  universal_level_id: number;
  title: string;
  goal: string;
  words_to_practice: string[];
  language: string;
  section_number: number;
  conversation_length: number;
  id: number;
}

interface PronunciationBack {
  feedback_text: string;
  feedback_json: string;
}

interface ChatThreadProps {
  personType: string;
  message?: string;
  audio1?: string;
  audio2?: string;
  audioUser?: HTMLAudioElement;
  pronunciation?: PronunciationBack;
  grammar?: GrammarBack;
}

interface GrammarBack {
  corrected_text: string;
}

export type { Section, PronunciationBack, ChatThreadProps, GrammarBack };
