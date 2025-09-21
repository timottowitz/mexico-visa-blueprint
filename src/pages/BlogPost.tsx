import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

interface BlogPostMeta {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

const blogPostsData: Record<string, BlogPostMeta> = {
  "temporary-vs-permanent-residency-mexico": {
    title: "Temporary vs Permanent Residency in Mexico: Which Path is Right for You?",
    excerpt: "Understanding the key differences between temporary and permanent residency options in Mexico, including financial requirements, benefits, and application processes.",
    date: "2024-09-15",
    readTime: "8 min read",
    category: "Residency",
    author: "Mexico Immigration Lawyer"
  },
  "mexican-citizenship-requirements-2024": {
    title: "Complete Guide to Mexican Citizenship Requirements in 2024",
    excerpt: "Everything you need to know about obtaining Mexican citizenship, from eligibility requirements to the application process and benefits.",
    date: "2024-09-12",
    readTime: "15 min read",
    category: "Citizenship",
    author: "Mexico Immigration Lawyer"
  },
  "work-visa-guide-mexico": {
    title: "Complete Guide to Work Visas in Mexico: Types, Requirements, and Process",
    excerpt: "Comprehensive guide to obtaining work authorization in Mexico, including visa types, requirements, and step-by-step process.",
    date: "2024-09-08",
    readTime: "12 min read",
    category: "Work Visas",
    author: "Mexico Immigration Lawyer"
  },
  "family-immigration-reunification-mexico": {
    title: "Family Immigration and Reunification in Mexico: A Complete Guide",
    excerpt: "Learn about family-based immigration options and how to reunite with family members in Mexico through various visa pathways.",
    date: "2024-09-05",
    readTime: "13 min read",
    category: "Family Immigration",
    author: "Mexico Immigration Lawyer"
  },
  "mexico-visa-requirements-2024": {
    title: "Mexico Visa Requirements 2024: Complete Guide for US and Canadian Citizens",
    excerpt: "Updated requirements and processes for obtaining various types of Mexican visas, including recent policy changes and financial thresholds.",
    date: "2024-09-10",
    readTime: "12 min read",
    category: "Visas",
    author: "Mexico Immigration Lawyer"
  },
  "mexican-citizenship-naturalization-process": {
    title: "Mexican Citizenship Through Naturalization: Step-by-Step Process",
    excerpt: "Everything you need to know about becoming a Mexican citizen, from residency requirements to the citizenship exam and oath ceremony.",
    date: "2024-09-05",
    readTime: "10 min read",
    category: "Citizenship",
    author: "Mexico Immigration Lawyer"
  }
};

// Sample markdown content for the first blog post
const sampleMarkdownContent = `
# Temporary vs Permanent Residency in Mexico: Which Path is Right for You?

When planning your move to Mexico, one of the most important decisions you'll make is choosing between **temporary residency** and **permanent residency**. Each option offers distinct advantages and requirements, and the right choice depends on your individual circumstances, financial situation, and long-term goals.

## Understanding Temporary Residency (Residente Temporal)

Temporary residency allows you to live in Mexico for **up to four years total**, typically issued initially for one year and renewable annually. This status is ideal for those who want to establish roots in Mexico while maintaining flexibility.

### Key Benefits of Temporary Residency:
- Legal residence for 1-4 years
- Ability to open Mexican bank accounts
- Access to healthcare services
- Option to add work permission
- Path to permanent residency after completion

### Financial Requirements:
The financial requirements for temporary residency are measured in **UMAs (Unidades de Medida y Actualización)** and vary by consulate. As of 2024, most consulates require:

- **Monthly income**: Equivalent to 300-400 UMAs per month
- **Bank balance**: Equivalent to 5,000-6,000 UMAs
- **Investment accounts**: Securities and investments may count toward financial solvency

> **Important Note**: UMA values are updated annually, and each Mexican consulate may have slightly different requirements. Always verify current thresholds with your chosen consulate.

## Understanding Permanent Residency (Residente Permanente)

Permanent residency grants **indefinite stay in Mexico** with no renewal requirements. This status provides maximum stability and freedom for long-term residents.

### Key Benefits of Permanent Residency:
- No expiration date or renewals required
- Automatic work authorization for any employer
- Greater property ownership options
- Simplified travel in and out of Mexico
- Pathway to Mexican citizenship after residency requirements

### How to Qualify:
1. **Direct application**: Higher financial thresholds (typically 500+ UMAs monthly income or 20,000+ UMAs in savings)
2. **Transition from temporary**: After 4 years as a temporary resident
3. **Family relationships**: Spouse of Mexican citizen (after 2 years temporary residency) or parent of Mexican child

## Comparing the Two Options

| Aspect | Temporary Residency | Permanent Residency |
|--------|-------------------|-------------------|
| **Duration** | 1-4 years total | Indefinite |
| **Renewals** | Required annually | None |
| **Work Authorization** | Must be added separately | Automatic |
| **Financial Requirements** | Lower thresholds | Higher thresholds |
| **Flexibility** | Good for testing Mexico life | Best for committed residents |

## Which Option Should You Choose?

### Choose Temporary Residency If:
- You're unsure about long-term commitment to Mexico
- You meet the lower financial requirements but not the higher permanent residency thresholds
- You want to "test the waters" before making a permanent commitment
- You're planning to work in Mexico and need time to establish income

### Choose Permanent Residency If:
- You're certain about making Mexico your long-term home
- You meet the higher financial requirements
- You want maximum stability and don't want to deal with renewals
- You plan to travel frequently between Mexico and other countries

## The Application Process

Both types of residency follow a similar process:

1. **Consular Stage**: Apply at a Mexican consulate in your home country
2. **Documentation**: Gather required financial proofs, background checks, and photos
3. **Interview**: Attend your consular appointment
4. **Entry to Mexico**: Enter Mexico with your visa within 180 days
5. **INM Processing**: Exchange your visa for a resident card within 30 days

### Timeline Expectations:
- **Consular processing**: 1-4 weeks depending on the consulate
- **INM card processing**: 2-4 weeks after your Mexico appointment
- **Total timeline**: 1-2 months from application to resident card

## Common Mistakes to Avoid

1. **Insufficient financial documentation**: Ensure your bank statements clearly show the required amounts for the specified period
2. **Wrong consulate choice**: Some consulates have different requirements or processing times
3. **Incomplete translations**: All foreign documents must be properly translated and, in some cases, apostilled
4. **Missing the INM deadline**: You must complete your INM processing within 30 days of entering Mexico

## Planning Your Immigration Strategy

### For First-Time Applicants:
Most people start with temporary residency because:
- Lower financial barriers to entry
- Opportunity to establish Mexican financial history
- Time to understand the system before committing permanently

### For Families:
Consider your entire family's situation:
- Spouses and minor children can be included as dependents
- Family-based applications may have different requirements
- Plan for everyone's timelines and renewals

## Getting Professional Help

While it's possible to navigate the residency process independently, working with an experienced immigration attorney can:
- Ensure you choose the right residency type for your situation
- Help optimize your financial documentation
- Navigate consulate-specific requirements
- Provide representation during the INM process
- Plan for future upgrades or changes

## Conclusion

The choice between temporary and permanent residency depends on your personal circumstances, financial situation, and long-term plans. Temporary residency offers a lower-commitment entry point with the flexibility to upgrade later, while permanent residency provides maximum stability for those ready to make Mexico their long-term home.

Remember that immigration laws and requirements can change, and each case is unique. Consider consulting with a qualified immigration attorney to evaluate your specific situation and ensure you choose the path that best serves your goals.

---

*Ready to start your Mexico residency journey? [Contact our experienced immigration team](/contact) for a personalized consultation and guidance tailored to your specific situation.*
`;

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>("");
  const [postMeta, setPostMeta] = useState<BlogPostMeta | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogPost = async () => {
      if (!slug || !blogPostsData[slug]) {
        setLoading(false);
        return;
      }

      setPostMeta(blogPostsData[slug]);
      
      // In a real implementation, you would fetch the markdown file from your server
      // For now, we'll use sample content for the first post
      if (slug === "temporary-vs-permanent-residency-mexico") {
        setContent(sampleMarkdownContent);
      } else {
        // Placeholder content for other posts
        setContent(`
# ${blogPostsData[slug].title}

This article is coming soon. Please check back later for the complete guide.

In the meantime, feel free to [contact us](/contact) for personalized guidance on this topic.
        `);
      }
      
      setLoading(false);
    };

    loadBlogPost();
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
              <Link to="/blog/mexico-visa-requirements-2024" className="block group">
                <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <Badge variant="outline" className="mb-3">Visas</Badge>
                  <h4 className="font-semibold group-hover:text-primary transition-colors mb-2">
                    Mexico Visa Requirements 2024: Complete Guide for US and Canadian Citizens
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