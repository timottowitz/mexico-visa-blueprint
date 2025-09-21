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

// Static blog metadata - no need to load full files for listing
const BLOG_POSTS_METADATA: BlogPostMeta[] = [
  {
    slug: 'hire-mexico-immigration-lawyer-guide',
    title: 'Should You Hire a Mexico Immigration Lawyer? Complete Guide 2025',
    excerpt: 'Expert guide on when to hire a Mexico immigration attorney, costs, benefits, and how to choose the right lawyer for your residency, work visa, or citizenship case.',
    date: '2025-01-15',
    readTime: '12 min read',
    category: 'Legal Services',
    author: 'Mexico Immigration Lawyer',
    featured: true
  },
  {
    slug: 'mexico-residency-visa-requirements-2025',
    title: 'Mexico Residency Visa Requirements 2025: Complete Guide for US & Canadian Citizens',
    excerpt: 'Comprehensive guide to Mexico residency visa requirements including financial thresholds, application process, and documentation for temporary and permanent residency.',
    date: '2025-01-12',
    readTime: '16 min read',
    category: 'Residency Requirements',
    author: 'Mexico Immigration Lawyer'
  },
  {
    slug: 'retiring-in-mexico-visa-guide',
    title: 'Retiring in Mexico Visa Guide: Complete 2025 Retirement Immigration Process',
    excerpt: 'Everything retirees need to know about moving to Mexico, including visa requirements, costs, healthcare, and best retirement destinations.',
    date: '2025-09-22',
    readTime: '18 min read',
    category: 'Retirement',
    author: 'Mexico Immigration Lawyer'
  },
  {
    slug: 'work-permit-mexico-americans-canadians',
    title: 'Work Permit Mexico for Americans and Canadians: Complete 2025 Guide',
    excerpt: 'Comprehensive guide for US and Canadian citizens seeking work authorization in Mexico, including visa types, requirements, and application processes.',
    date: '2025-09-20',
    readTime: '16 min read',
    category: 'Work Visas',
    author: 'Mexico Immigration Lawyer'
  },
  {
    slug: 'inm-appointment-mexico-guide',
    title: 'INM Appointment Mexico: Complete Guide to Immigration Appointments',
    excerpt: 'Master the INM appointment system in Mexico with our comprehensive guide covering booking, preparation, and what to expect during your immigration appointment.',
    date: '2025-09-18',
    readTime: '14 min read',
    category: 'Immigration Process',
    author: 'Mexico Immigration Lawyer'
  },
  {
    slug: 'temporary-vs-permanent-residency-mexico',
    title: 'Temporary vs Permanent Residency in Mexico: Which Path is Right for You?',
    excerpt: 'Understanding the key differences between temporary and permanent residency options in Mexico, including financial requirements, benefits, and application processes.',
    date: '2025-09-15',
    readTime: '8 min read',
    category: 'Residency',
    author: 'Mexico Immigration Lawyer'
  },
  {
    slug: 'mexican-citizenship-requirements-2025',
    title: 'Complete Guide to Mexican Citizenship Requirements in 2025',
    excerpt: 'Everything you need to know about obtaining Mexican citizenship, from eligibility requirements to the application process and benefits.',
    date: '2025-09-12',
    readTime: '15 min read',
    category: 'Citizenship',
    author: 'Mexico Immigration Lawyer'
  },
  {
    slug: 'work-visa-guide-mexico',
    title: 'Complete Guide to Work Visas in Mexico: Types, Requirements, and Process',
    excerpt: 'Comprehensive guide to obtaining work authorization in Mexico, including visa types, requirements, and step-by-step process.',
    date: '2025-09-08',
    readTime: '12 min read',
    category: 'Work Visas',
    author: 'Mexico Immigration Lawyer'
  },
  {
    slug: 'family-immigration-reunification-mexico',
    title: 'Family Immigration and Reunification in Mexico: A Complete Guide',
    excerpt: 'Learn about family-based immigration options and how to reunite with family members in Mexico through various visa pathways.',
    date: '2025-09-05',
    readTime: '13 min read',
    category: 'Family Immigration',
    author: 'Mexico Immigration Lawyer'
  }
];

// Fast blog listing - uses static metadata
export async function loadAllBlogPosts(): Promise<BlogPostMeta[]> {
  // Sort by date (newest first) and return immediately
  return BLOG_POSTS_METADATA.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Load a single blog post content (only when viewing individual posts)
export async function loadBlogPost(slug: string): Promise<{ content: string; metadata: BlogPostMeta } | null> {
  try {
    const response = await fetch(`/blog/${slug}.md`);
    if (!response.ok) {
      return null;
    }
    
    const content = await response.text();
    // Get metadata from static data, not by parsing content
    const metadata = BLOG_POSTS_METADATA.find(post => post.slug === slug);
    
    if (!metadata) {
      return null;
    }
    
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