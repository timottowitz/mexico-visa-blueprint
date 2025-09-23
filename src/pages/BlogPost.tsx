import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Phone, MessageCircle } from "lucide-react";
import { loadBlogPost } from "@/utils/blogUtils";
import lawyerProfile from "@/assets/lawyer-profile.png";
import CTASection from "@/components/ui/cta-section";

interface BlogPostMeta {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  featured?: boolean;
}

// Author information for schema and display
const AUTHOR_INFO = {
  name: "Mexico Immigration Lawyer",
  bio: "Experienced immigration attorney specializing in Mexico residency, work visas, and citizenship applications. Over 15 years helping US and Canadian citizens navigate Mexican immigration law.",
  image: lawyerProfile,
  url: "https://mexicoimmigrationlawyer.com/about"
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>("");
  const [postMeta, setPostMeta] = useState<BlogPostMeta | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        const result = await loadBlogPost(slug);
        if (result) {
          setContent(result.content);
          setPostMeta(result.metadata);
        }
      } catch (error) {
        console.error('Failed to load blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!postMeta) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const articleUrl = `https://mexicoimmigrationlawyer.com/blog/${slug}`;

  // Structured data for article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postMeta.title,
    "description": postMeta.excerpt,
    "image": `${lawyerProfile}`,
    "datePublished": postMeta.date,
    "dateModified": postMeta.date,
    "author": {
      "@type": "Person",
      "name": AUTHOR_INFO.name,
      "description": AUTHOR_INFO.bio,
      "image": AUTHOR_INFO.image,
      "url": AUTHOR_INFO.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mexico Immigration Lawyer",
      "url": "https://mexicoimmigrationlawyer.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "articleSection": postMeta.category,
    "wordCount": content.split(' ').length
  };

  return (
    <>
      <Helmet>
        <title>{postMeta.title} | Mexico Immigration Lawyer 2025</title>
        <meta name="description" content={`${postMeta.excerpt} Expert legal guidance from licensed Mexico immigration attorneys in Mexico City.`} />
        <meta name="keywords" content={`${postMeta.category.toLowerCase()}, Mexico immigration lawyer, ${postMeta.title.toLowerCase().replace(/[^\w\s]/gi, '')}, immigration attorney Mexico, Mexico visa process, residency Mexico legal help`} />
        <meta property="og:title" content={`${postMeta.title} | Mexico Immigration Lawyer`} />
        <meta property="og:description" content={postMeta.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={lawyerProfile} />
        <meta property="article:published_time" content={postMeta.date} />
        <meta property="article:modified_time" content={postMeta.date} />
        <meta property="article:author" content={postMeta.author} />
        <meta property="article:section" content={postMeta.category} />
        <meta property="article:tag" content={`Mexico immigration, ${postMeta.category}, visa process, residency Mexico`} />
        <meta name="author" content={AUTHOR_INFO.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={postMeta.title} />
        <meta name="twitter:description" content={postMeta.excerpt} />
        <meta name="twitter:image" content={lawyerProfile} />
        <link rel="canonical" href={articleUrl} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-hover mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <Badge variant="secondary">{postMeta.category}</Badge>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(postMeta.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{postMeta.readTime}</span>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-foreground mb-6">
                {postMeta.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                {postMeta.excerpt}
              </p>

              {/* Author Byline - Forbes Style */}
              <div className="flex items-center gap-4 py-6 border-y border-border">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={AUTHOR_INFO.image} alt={AUTHOR_INFO.name} />
                  <AvatarFallback>
                    <User className="h-8 w-8" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-foreground">{AUTHOR_INFO.name}</p>
                    <span className="text-sm text-muted-foreground">•</span>
                    <Link to="/about" className="text-sm text-primary hover:text-primary-hover">
                      View Profile
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {AUTHOR_INFO.bio}
                  </p>
                </div>
              </div>
            </header>

            {/* Article Content with Strategic CTAs */}
            <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-table:text-sm">
              <ArticleContentWithCTAs content={content} />
            </div>
          </article>

          {/* Enhanced CTA Section */}
          <CTASection />

          {/* Related Articles with Enhanced SEO Linking */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Related Mexico Immigration Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/blog/mexico-residency-visa-requirements-2025" className="block group">
                <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <Badge variant="outline" className="mb-3">Visa Requirements</Badge>
                  <h4 className="font-semibold group-hover:text-primary transition-colors mb-2">
                    Mexico Residency Visa Requirements 2025: Complete Legal Guide for Americans & Canadians
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Updated Mexico residency visa requirements for 2025 including temporary and permanent residency financial thresholds, document requirements, and application processes...
                  </p>
                </div>
              </Link>
              <Link to="/blog/hire-mexico-immigration-lawyer-guide" className="block group">
                <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <Badge variant="outline" className="mb-3">Legal Guidance</Badge>
                  <h4 className="font-semibold group-hover:text-primary transition-colors mb-2">
                    Should You Hire a Mexico Immigration Lawyer? Complete Guide to Legal Assistance
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Expert analysis of when you need professional legal help for Mexico immigration, what attorneys provide, and how to choose the right immigration lawyer...
                  </p>
                </div>
              </Link>
              <Link to="/blog/mexican-citizenship-requirements-2025" className="block group">
                <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <Badge variant="outline" className="mb-3">Citizenship</Badge>
                  <h4 className="font-semibold group-hover:text-primary transition-colors mb-2">
                    Mexican Citizenship Requirements 2025: Complete Naturalization Process Guide
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive guide to obtaining Mexican citizenship through naturalization including residency requirements, Spanish language tests, and legal procedures...
                  </p>
                </div>
              </Link>
              <Link to="/blog/residency-mexico-economic-solvency-requirements-2025" className="block group">
                <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <Badge variant="outline" className="mb-3">Financial Requirements</Badge>
                  <h4 className="font-semibold group-hover:text-primary transition-colors mb-2">
                    Mexico Residency Economic Solvency Requirements 2025: Updated Financial Thresholds
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Current financial requirements for Mexico residency visas including income, savings, and investment thresholds for temporary and permanent residency...
                  </p>
                </div>
              </Link>
            </div>
            
            {/* Additional SEO-focused internal links */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-foreground mb-4">Explore Our Mexico Immigration Services:</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Residency Services:</strong>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>• <Link to="/services/temporary-residency" className="text-primary hover:text-primary-hover underline">Temporary Residency Mexico</Link></li>
                    <li>• <Link to="/services/permanent-residency" className="text-primary hover:text-primary-hover underline">Permanent Residency Mexico</Link></li>
                    <li>• <Link to="/services/family-based-immigration" className="text-primary hover:text-primary-hover underline">Family Immigration Mexico</Link></li>
                  </ul>
                </div>
                <div>
                  <strong>Work & Business:</strong>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>• <Link to="/services/work-visas" className="text-primary hover:text-primary-hover underline">Mexico Work Visas</Link></li>
                    <li>• <Link to="/services/corporate-immigration" className="text-primary hover:text-primary-hover underline">Corporate Immigration Mexico</Link></li>
                  </ul>
                </div>
                <div>
                  <strong>Citizenship & Legal Help:</strong>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>• <Link to="/services/mexican-citizenship" className="text-primary hover:text-primary-hover underline">Mexican Citizenship Services</Link></li>
                    <li>• <Link to="/about" className="text-primary hover:text-primary-hover underline">Meet Our Immigration Attorneys</Link></li>
                    <li>• <Link to="/contact" className="text-primary hover:text-primary-hover underline">Free Immigration Consultation</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Component to inject CTAs strategically within article content
const ArticleContentWithCTAs = ({ content }: { content: string }) => {
  const sections = content.split(/\n## /); // Split by main headings
  
  return (
    <>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {sections[0]}
      </ReactMarkdown>

      {sections.slice(1).map((section, index) => {
        const shouldShowCTA = index === Math.floor((sections.length - 1) * 0.3) || 
                             index === Math.floor((sections.length - 1) * 0.7);
        
        return (
          <div key={index}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {'## ' + section}
            </ReactMarkdown>
            
            {shouldShowCTA && (
              <div className="not-prose">
                <CTASection 
                  variant="compact"
                  title="Questions About This Process?"
                  description="Our immigration attorneys can help clarify requirements and guide you through each step. Get personalized advice for your situation."
                />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default BlogPost;