"use client";
import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
const ReadmeViewer = () => {
  const [readmeContent, setReadmeContent] = useState("");

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/madabhi/portfolio-nextjs/readme"
        );
        const data = await response.json();

        // GitHub API provides content in base64 encoding, so decode it
        const decodedContent = atob(data.content);

        setReadmeContent(decodedContent);
      } catch (error) {
        console.error("Error fetching README:", error);
      }
    };

    fetchReadme();
  }, []);

  return (
    <div>
      <Markdown remarkPlugins={[remarkGfm]} className="prose mb-8 ">
        {readmeContent}
      </Markdown>
    </div>
  );
};

export default ReadmeViewer;
