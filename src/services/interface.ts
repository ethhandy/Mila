interface User {
  username: string;
  password: string;
}

interface LoginBack {
  message: string;
  access_token: string;
}

interface StartChat {
  difficulty_level: number;
}

interface MessageBack {
  user_message: string;
  text_response: string;
  audio_response: Audio;
  slow_response: Audio;
}

interface Audio {
  path: string;
  status_code: number;
  filename: string;
  send_header_only: boolean;
  media_type: string;
  backgroud: string;
  raw_headers: [string[]];
  stat_result: string;
}

interface Message {
  text: string;
}

interface PronunciationBack {
  feedback_text: string;
  feedback_json: string;
}

interface PronunciationAssessment {
  AccuracyScore: number;
  ErrorType: string;
  FluencyScore?: number;
  CompletenessScore?: number;
  PronScore?: number;
}

interface Word {
  Word: string;
  Offset: number;
  Duration: number;
  PronunciationAssessment: PronunciationAssessment;
}

interface NBest {
  Confidence: number;
  Lexical: string;
  ITN: string;
  MaskedITN: string;
  Display: string;
  PronunciationAssessment: PronunciationAssessment;
  Words: Word[];
}

interface FeedbackJson {
  Id: string;
  RecognitionStatus: string;
  Offset: number;
  Duration: number;
  Channel: number;
  DisplayText: string;
  SNR: number;
  NBest: NBest[];
}

interface GrammarBack {
  corrected_text: string;
}

interface TranslateBack {
  translated_text: string;
}

interface Hint {
  simulated_response: string;
  translation: string;
  audio_response: Audio;
}

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

export type {
  User,
  Message,
  GrammarBack,
  PronunciationBack,
  LoginBack,
  MessageBack,
  TranslateBack,
  StartChat,
  PronunciationAssessment,
  Word,
  FeedbackJson,
  NBest,
  Section,
  Hint,
  Audio
};
