import React from 'react';
import { Prism as SyntaxHighlighter } from 'prism-react-renderer';


const RawResponseViewer = ({ content }) => {
  return (
    <div className="mt-8 bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
      <div className="p-4 bg-gray-900 border-b border-gray-700 flex justify-between items-center">
        <h3 className="text-lg font-bold text-blue-400">Raw API Response</h3>
        <button 
          onClick={() => navigator.clipboard.writeText(content)}
          className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg text-gray-300"
        >
          Copy Raw JSON
        </button>
      </div>
      
      <SyntaxHighlighter
        language="markdown"
        theme={undefined}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          background: 'rgb(42, 42, 46)',
          borderRadius: '0 0 0.75rem 0.75rem',
          fontSize: '0.9rem'
        }}
        codeTagProps={{ style: { fontFamily: 'Fira Code, monospace' } }}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
};

export default RawResponseViewer;