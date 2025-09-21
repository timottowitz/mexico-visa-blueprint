import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { loadBlogPost } from "@/utils/blogUtils";

interface BlogPostMeta {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

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

  return (
    <>
      <Helmet>
        <title>{postMeta.title} — Mexico Immigration Lawyer</title>
        <meta name="description" content={postMeta.excerpt} />
        <meta property="og:title" content={postMeta.title} />
        <meta property="og:description" content={postMeta.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={postMeta.date} />
        <meta property="article:author" content={postMeta.author} />
        <link rel="canonical" href={`https://mexicoimmigrationlawyer.com/blog/${slug}`} />
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
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
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
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {postMeta.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {postMeta.excerpt}
              </p>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-table:text-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          </article>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary-accent/10 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Need Help With Your Immigration Case?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our experienced immigration attorneys are ready to help you navigate the Mexico residency process. Schedule a consultation to discuss your specific situation.
            </p>
            <Button 
              size="lg" 
              className="mr-4"
              onClick={() => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())}
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/blog/mexico-visa-requirements-2025" className="block group">
                <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <Badge variant="outline" className="mb-3">Visas</Badge>
                  <h4 className="font-semibold group-hover:text-primary transition-colors mb-2">
                    Mexico Visa Requirements 2025: Complete Guide for US and Canadian Citizens
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Updated requirements and processes for obtaining various types of Mexican visas...
                  </p>
                </div>
              </Link>
              <Link to="/blog/mexican-citizenship-naturalization-process" className="block group">
                <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <Badge variant="outline" className="mb-3">Citizenship</Badge>
                  <h4 className="font-semibold group-hover:text-primary transition-colors mb-2">
                    Mexican Citizenship Through Naturalization: Step-by-Step Process
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Everything you need to know about becoming a Mexican citizen...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;