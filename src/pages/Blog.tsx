import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { loadAllBlogPosts, getUniqueCategories } from "@/utils/blogUtils";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await loadAllBlogPosts();
        setBlogPosts(posts);
        setCategories(getUniqueCategories(posts));
      } catch (error) {
        console.error('Failed to load blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Loading Blog Posts...
          </h1>
        </div>
      </div>
    );
  }

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Mexico Immigration Blog 2025 — Visa Requirements, Residency Process & Legal Updates</title>
        <meta 
          name="description" 
          content="🔥 Latest Mexico immigration guides 2025: temporary/permanent residency requirements, work visa process, citizenship steps & INM updates. Written by licensed attorneys in Mexico City." 
        />
        <meta name="keywords" content="Mexico immigration blog, Mexico visa requirements 2025, temporary residency Mexico, permanent residency Mexico, Mexico work visa process, Mexican citizenship requirements, INM Mexico updates, immigration attorney blog Mexico" />
        <meta property="og:title" content="Mexico Immigration Blog 2025 — Expert Legal Guides & Updates" />
        <meta property="og:description" content="Comprehensive Mexico immigration guides, visa requirements, and legal updates from experienced attorneys in Mexico City." />
        <meta property="og:type" content="blog" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Mexico Immigration Blog — Expert Visa & Residency Guides" />
        <meta name="twitter:description" content="Latest Mexico immigration guides, visa requirements, and legal updates from licensed attorneys." />
        <link rel="canonical" href="https://mexico-visa-blueprint.lovable.app/blog" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Mexico Immigration Blog — Expert Guides & News
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest Mexico immigration updates, expert guides, and practical advice from our experienced legal team.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge variant="secondary" className="text-sm">All Posts</Badge>
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="text-sm">
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Featured Article</h2>
            <Card className="card-hover group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  <Link to={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  {featuredPost.excerpt}
                </CardDescription>
                <Link 
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary-hover font-semibold group"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.slug} className="card-hover group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="mb-4 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-primary hover:text-primary-hover font-semibold text-sm group"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3 inline group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter CTA with Enhanced SEO Links */}
        <div className="bg-gradient-to-r from-primary/10 to-primary-accent/10 rounded-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Stay Updated on Mexico Immigration Law & Process Changes
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest Mexico immigration updates, visa requirement changes, and expert legal insights from our experienced immigration attorneys in Mexico City.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Contact Our Immigration Attorneys
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Comprehensive Mexico Immigration Resources */}
        <div className="bg-white rounded-lg p-8 border border-gray-200 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">
            Complete Mexico Immigration Resources by Our Legal Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4 text-foreground">Mexico Residency Services</h4>
              <ul className="space-y-2 text-sm">
                <li>• <Link to="/services/temporary-residency" className="text-primary hover:text-primary-hover underline">Temporary Residency Mexico (Residente Temporal)</Link></li>
                <li>• <Link to="/services/permanent-residency" className="text-primary hover:text-primary-hover underline">Permanent Residency Mexico (Residente Permanente)</Link></li>
                <li>• <Link to="/services/family-based-immigration" className="text-primary hover:text-primary-hover underline">Family Immigration & Marriage Visas Mexico</Link></li>
                <li>• <Link to="/blog/temporary-vs-permanent-residency-mexico" className="text-primary hover:text-primary-hover underline">Temporary vs Permanent Residency Comparison</Link></li>
                <li>• <Link to="/blog/residency-mexico-economic-solvency-requirements-2025" className="text-primary hover:text-primary-hover underline">Mexico Residency Financial Requirements 2025</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 text-foreground">Work Visas & Business Immigration</h4>
              <ul className="space-y-2 text-sm">
                <li>• <Link to="/services/work-visas" className="text-primary hover:text-primary-hover underline">Mexico Work Visas & Employment Authorization</Link></li>
                <li>• <Link to="/services/corporate-immigration" className="text-primary hover:text-primary-hover underline">Corporate Immigration Mexico</Link></li>
                <li>• <Link to="/blog/work-visa-guide-mexico" className="text-primary hover:text-primary-hover underline">Complete Mexico Work Visa Guide</Link></li>
                <li>• <Link to="/blog/work-permit-mexico-americans-canadians" className="text-primary hover:text-primary-hover underline">Work Permits for Americans & Canadians</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 text-foreground">Citizenship & Legal Help</h4>
              <ul className="space-y-2 text-sm">
                <li>• <Link to="/services/mexican-citizenship" className="text-primary hover:text-primary-hover underline">Mexican Citizenship by Naturalization</Link></li>
                <li>• <Link to="/blog/mexican-citizenship-requirements-2025" className="text-primary hover:text-primary-hover underline">Mexican Citizenship Requirements 2025</Link></li>
                <li>• <Link to="/blog/hire-mexico-immigration-lawyer-guide" className="text-primary hover:text-primary-hover underline">When to Hire a Mexico Immigration Lawyer</Link></li>
                <li>• <Link to="/about" className="text-primary hover:text-primary-hover underline">About Our Immigration Attorneys</Link></li>
                <li>• <Link to="/faqs" className="text-primary hover:text-primary-hover underline">Mexico Immigration FAQs</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Free Consultation:</strong> Discuss your Mexico immigration goals with our experienced legal team
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center text-primary hover:text-primary-hover font-semibold"
            >
              Schedule Your Free Immigration Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;