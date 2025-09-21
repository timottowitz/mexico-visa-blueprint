interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  featured?: boolean;
}

// List of all available blog posts (in production, this could be generated at build time)
const AVAILABLE_BLOG_POSTS = [
  'family-immigration-reunification-mexico',
  'hire-mexico-immigration-lawyer-guide',
  'inm-appointment-mexico-guide',
  'mexican-citizenship-requirements-2025',
  'mexico-residency-visa-requirements-2025',
  'retiring-in-mexico-visa-guide',
  'temporary-vs-permanent-residency-mexico',
  'work-permit-mexico-americans-canadians',
  'work-visa-guide-mexico'
];

// Extract metadata from markdown content
function extractMetadataFromMarkdown(content: string, slug: string): BlogPostMeta {
  const lines = content.split('\n');
  const titleMatch = lines.find(line => line.startsWith('# '))?.replace('# ', '') || 'Untitled';
  
  // Extract first paragraph as excerpt (skip the title and any metadata lines)
  let excerpt = '';
  let foundFirstParagraph = false;
  for (const line of lines) {
    if (line.trim() && 
        !line.startsWith('#') && 
        !line.startsWith('*Published:') && 
        !line.startsWith('*Reading time:') &&
        !line.startsWith('---') &&
        !foundFirstParagraph) {
      excerpt = line.trim();
      foundFirstParagraph = true;
      break;
    }
  }
  
  // If no paragraph found, create excerpt from title
  if (!excerpt) {
    excerpt = `Expert guide covering ${titleMatch.toLowerCase()}.`;
  }
  
  // Extract published date if available
  const publishedMatch = content.match(/\*Published: ([^|]+)/);
  const readTimeMatch = content.match(/Reading time: ([^*]+)/);
  
  // Generate category from slug
  const categoryMap: Record<string, string> = {
    'family': 'Family Immigration',
    'citizenship': 'Citizenship',
    'residency': 'Residency',
    'work': 'Work Visas',
    'visa': 'Visas',
    'inm': 'Immigration Process',
    'lawyer': 'Legal Services',
    'retire': 'Retirement'
  };
  
  let category = 'Immigration';
  for (const [key, value] of Object.entries(categoryMap)) {
    if (slug.includes(key)) {
      category = value;
      break;
    }
  }
  
  // Estimate read time from content length
  const wordCount = content.split(/\s+/).length;
  const estimatedReadTime = Math.max(5, Math.ceil(wordCount / 200));
  
  return {
    slug,
    title: titleMatch,
    excerpt: excerpt.length > 160 ? excerpt.substring(0, 157) + '...' : excerpt,
    date: publishedMatch ? new Date(publishedMatch[1].trim()).toISOString().split('T')[0] : '2025-09-21',
    readTime: readTimeMatch ? readTimeMatch[1].trim() : `${estimatedReadTime} min read`,
    category,
    author: 'Mexico Immigration Lawyer',
    featured: slug === 'hire-mexico-immigration-lawyer-guide' // Make lawyer guide featured
  };
}

// Load and parse all blog posts
export async function loadAllBlogPosts(): Promise<BlogPostMeta[]> {
  const blogPosts: BlogPostMeta[] = [];
  
  for (const slug of AVAILABLE_BLOG_POSTS) {
    try {
      const response = await fetch(`/blog/${slug}.md`);
      if (response.ok) {
        const content = await response.text();
        const metadata = extractMetadataFromMarkdown(content, slug);
        blogPosts.push(metadata);
      }
    } catch (error) {
      console.warn(`Failed to load blog post: ${slug}`, error);
    }
  }
  
  // Sort by date (newest first)
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Load a single blog post content
export async function loadBlogPost(slug: string): Promise<{ content: string; metadata: BlogPostMeta } | null> {
  try {
    const response = await fetch(`/blog/${slug}.md`);
    if (!response.ok) {
      return null;
    }
    
    const content = await response.text();
    const metadata = extractMetadataFromMarkdown(content, slug);
    
    return { content, metadata };
  } catch (error) {
    console.error(`Failed to load blog post: ${slug}`, error);
    return null;
  }
}

// Get unique categories from all blog posts
export function getUniqueCategories(posts: BlogPostMeta[]): string[] {
  const categories = Array.from(new Set(posts.map(post => post.category)));
  return categories.sort();
}