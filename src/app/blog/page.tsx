import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    date: '2023-11-25',
    excerpt: 'Learn how to set up a new Next.js project and create your first pages.'
  },
  {
    id: 2,
    title: 'The Power of Tailwind CSS',
    date: '2023-11-24',
    excerpt: 'Discover how Tailwind CSS can streamline your styling workflow and improve productivity.'
  },
  {
    id: 3,
    title: 'Integrating AI Chat in Your Website',
    date: '2023-11-23',
    excerpt: 'Explore the process of adding an AI-powered chat feature to your web application.'
  },
];

export default function Blog() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
