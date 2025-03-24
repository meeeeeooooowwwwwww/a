export interface WarroomArticle {
  title: string;
  link: string;
  thumbnail: string;
  uploader: string;
}

export interface WarroomFeed {
  articles: WarroomArticle[];
}

const WORKER_URL = 'https://my-video-worker.generalflynn17.workers.dev';

export async function getWarroomFeed(): Promise<WarroomArticle[]> {
  const response = await fetch(`${WORKER_URL}/videos/warroom?page=1&limit=12`);
  if (!response.ok) {
    throw new Error(`Failed to fetch War Room feed: ${response.status}`);
  }
  const data = await response.json();
  return data.videos; // Return array of videos
}

export async function getLatestArticles(count: number = 5): Promise<WarroomArticle[]> {
  const feed = await getWarroomFeed();
  return feed.slice(0, count); // Keep existing logic
}

export async function getWarroomArticle(id: string): Promise<WarroomArticle | null> {
  try {
    const feed = await getWarroomFeed();
    const article = feed.find((article) => {
      const urlParts = article.link.split('/');
      const slug = urlParts[urlParts.length - 2];
      return slug === id;
    });
    return article || null;
  } catch (error) {
    console.error(`Error fetching War Room article ${id}:`, error);
    return null;
  }
}

export async function getWarroomArticles(): Promise<WarroomArticle[]> {
  return getWarroomFeed();
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function getArticleSlug(url: string): string {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 2]; // Get the second to last part (before trailing slash)
}

export function sanitizeHtml(html: string): string {
  // Basic HTML sanitization
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
    .replace(/onclick|onload|onerror|onmouseover|onmouseout/gi, 'on-blocked-') // Remove event handlers
    .replace(/(href=["']javascript:)/gi, 'href="#"'); // Remove javascript: URLs
} 