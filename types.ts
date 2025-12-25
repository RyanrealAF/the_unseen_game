export interface Citation {
  text: string;
  link: string;
}

export interface ContentPart {
  type: 'paragraph' | 'list' | 'heading';
  text?: string;
  items?: string[]; // For lists
  level?: 2 | 3 | 4; // For headings
}

export interface Section {
  id: string;
  title: string;
  content: ContentPart[];
}

export interface Module {
  id: string;
  title: string;
  sections: Section[];
}