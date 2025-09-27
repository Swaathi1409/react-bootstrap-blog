// App component that renders the blog dashboard with navbar, header, and a grid of posts

import React from "react";
import BlogNavbar from "./components/NavigationBar";
import Header from "./components/Header";
import PostGrid from "./components/Posts";

// Example blog data
const posts = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Learn the basics of React, including components, props, and hooks."
  },
  {
    id: 2,
    title: "Bootstrap Your App",
    description: "Style your React application easily using React Bootstrap components."
  },
  {
    id: 3,
    title: "Advanced Patterns",
    description: "Dive into more advanced React concepts and architectural patterns."
  },
  {
    id: 4,
    title: "Deploy Your Blog",
    description: "See how to take your React app live to the web."
  }
];

function App() {
  return (
    <>
      <BlogNavbar brand="My Blog Dashboard" />
      <div className="container mt-4">
        <Header heading="Dashboard" />
        <PostGrid posts={posts} />
      </div>
    </>
  );
}

export default App;
