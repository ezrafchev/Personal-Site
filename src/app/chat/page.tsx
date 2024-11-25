import React from 'react';
import Layout from '../../components/Layout';

export default function Chat() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">AI Chat</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-xl mb-4">
            Welcome to the AI Chat! This feature is coming soon.
          </p>
          <p className="text-gray-600 mb-4">
            Here, you&apos;ll be able to interact with an AI powered by LLaMA. Stay tuned for updates!
          </p>
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <p className="font-semibold mb-2">Placeholder Chat Interface:</p>
            <div className="space-y-2">
              <div className="bg-blue-100 p-2 rounded-lg">User: Hello, AI!</div>
              <div className="bg-green-100 p-2 rounded-lg">AI: Hello! I&apos;m not fully functional yet, but I&apos;m looking forward to chatting with you soon!</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
