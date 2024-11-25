import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Personal Site</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-600">
              I&apos;m a passionate developer who loves creating modern web applications.
              This site showcases my skills and projects using Next.js, React, and Tailwind CSS.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Latest Projects</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Personal Website</li>
              <li>Blog Platform</li>
              <li>AI Chat Integration</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <Image
            src="/profile-picture.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-4"
          />
          <p className="text-xl font-semibold">John Doe</p>
          <p className="text-gray-600">Full Stack Developer</p>
        </div>
      </div>
    </Layout>
  );
}
