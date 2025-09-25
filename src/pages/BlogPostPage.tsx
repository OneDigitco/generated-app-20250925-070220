import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/content';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return <Navigate to="/404" replace />;
  }
  return (
    <div className="bg-background text-foreground">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
        <article className="prose dark:prose-invert prose-lg max-w-none">
          <header className="mb-8 border-b pb-6">
            <h1 className="text-4xl font-display font-bold text-foreground">{post.title}</h1>
            <p className="text-muted-foreground">
              By {post.author} on {post.date}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </header>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </motion.div>
    </div>
  );
}