export interface WarroomMetadata {
  last_update: string;
  total_articles: number;
  last_processed_url: string;
  load_more_clicks: number;
  is_final: boolean;
}

export interface ContentBlock {
  type: 'heading' | 'paragraph';
  html: string;
  text: string;
  level?: string;
}

export interface WarroomArticle {
  url: string;
  timestamp: string;
  title: string;
  title_html: string;
  author: string;
  author_html: string;
  published_date: string;
  published_date_html: string;
  categories: string[];
  categories_html: string[];
  ordered_content: ContentBlock[];
  full_article_html: string;
}

export interface WarroomFeed {
  metadata: WarroomMetadata;
  articles: WarroomArticle[];
} 