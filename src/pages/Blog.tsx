import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    slug: "temporary-vs-permanent-residency-mexico",
    title: "Temporary vs Permanent Residency in Mexico: Which Path is Right for You?",
    excerpt: "Understanding the key differences between temporary and permanent residency options in Mexico, including financial requirements, benefits, and application processes.",
    date: "2024-09-15",
    readTime: "8 min read",
    category: "Residency",
    featured: true
  },
  {
    slug: "mexico-visa-requirements-2024",
    title: "Mexico Visa Requirements 2024: Complete Guide for US and Canadian Citizens",
    excerpt: "Updated requirements and processes for obtaining various types of Mexican visas, including recent policy changes and financial thresholds.",
    date: "2024-09-10",
    readTime: "12 min read",
    category: "Visas"
  },
  {
    slug: "mexican-citizenship-naturalization-process",
    title: "Mexican Citizenship Through Naturalization: Step-by-Step Process",
    excerpt: "Everything you need to know about becoming a Mexican citizen, from residency requirements to the citizenship exam and oath ceremony.",
    date: "2024-09-05",
    readTime: "10 min read",
    category: "Citizenship"
  },
  {
    slug: "family-based-immigration-mexico",
    title: "Family-Based Immigration to Mexico: Spouse and Family Visas Explained",
    excerpt: "How to obtain Mexican residency through family connections, including marriage-based visas and requirements for family members.",
    date: "2024-08-28",
    readTime: "7 min read",
    category: "Family Immigration"
  },
  {
    slug: "working-mexico-visa-requirements",
    title: "Working in Mexico: Visa Requirements and Work Permits for Foreign Employees",
    excerpt: "Comprehensive guide to Mexican work visas, employer sponsorship requirements, and the process for obtaining work authorization.",
    date: "2024-08-20",
    readTime: "9 min read",
    category: "Work Visas"
  },
  {
    slug: "mexico-immigration-common-mistakes",
    title: "5 Common Mistakes to Avoid in Your Mexico Immigration Application",
    excerpt: "Learn from the most frequent errors we see in immigration applications and how to avoid costly delays or rejections.",
    date: "2024-08-15",
    readTime: "6 min read",
    category: "Tips & Advice"
  }
];

const categories = Array.from(new Set(blogPosts.map(post => post.category)));

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Mexico Immigration Blog — Expert Guides & Updates</title>
        <meta 
          name="description" 
          content="Stay updated with the latest Mexico immigration news, visa guides, and expert insights. Comprehensive resources for temporary residency, permanent residency, and citizenship." 
        />
        <meta property="og:title" content="Mexico Immigration Blog — Expert Guides & Updates" />
        <meta property="og:description" content="Stay updated with the latest Mexico immigration news, visa guides, and expert insights." />
        <link rel="canonical" href="https://mexicoimmigrationlawyer.com/blog" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Immigration Blog & Resources
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

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-primary-accent/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Stay Updated on Mexico Immigration
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest immigration updates, policy changes, and expert insights delivered to your inbox.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Contact Us for Updates
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blog;