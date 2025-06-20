// pages/api/blogs.js

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      id: 1,
      title: "Understanding JavaScript Closures",
      author: {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        bio: "JavaScript developer and blogger",
        social: {
          twitter: "https://fantv.world/",
          linkedin: "https://linkedin.com/in/johndoe"
        }
      },
      publishedAt: "2025-05-10T08:30:00Z",
      readTime: 5,
      tags: ["JavaScript", "Closures", "Programming"],
      content: `
        Closures are a fundamental concept in JavaScript...
        They allow functions to access variables from an enclosing scope...
      `,
      comments: [
        {
          id: 101,
          user: "Alice",
          comment: "Great explanation! Helped me understand closures.",
          date: "2025-05-11T10:15:00Z",
          replies: [
            {
              id: 102,
              user: "John Doe",
              comment: "Glad it helped you, Alice!",
              date: "2025-05-11T12:00:00Z"
            }
          ]
        }
      ],
      relatedPosts: [2, 3]
    },
    {
      id: 2,
      title: "Getting Started with Next.js 14",
      author: {
        name: "Jane Smith",
        avatar: "/images/jane.jpg",
        bio: "Frontend engineer and React enthusiast",
        social: {
          twitter: "https://twitter.com/janesmith"
        }
      },
      publishedAt: "2025-04-25T09:00:00Z",
      readTime: 7,
      tags: ["Next.js", "React", "Web Development"],
      content: `
        Next.js 14 introduces powerful new features like App Router, improved routing, and enhanced caching mechanisms...
        Explore how to use these new features in your project today.
      `,
      comments: [],
      relatedPosts: [1]
    },
    {
      id: 3,
      title: "Why Tailwind CSS is a Game Changer",
      author: {
        name: "Ali Khan",
        avatar: "/images/ali.jpg",
        bio: "UI/UX designer and frontend developer",
        social: {
          twitter: "https://twitter.com/alikhan",
          linkedin: "https://linkedin.com/in/alikhan"
        }
      },
      publishedAt: "2025-03-15T11:45:00Z",
      readTime: 6,
      tags: ["CSS", "Tailwind", "Design"],
      content: `
        Tailwind CSS helps you build custom designs faster...
        Its utility-first approach offers great flexibility and consistency.
      `,
      comments: [
        {
          id: 201,
          user: "Mike",
          comment: "Tailwind has really changed my workflow!",
          date: "2025-03-16T14:20:00Z",
          replies: []
        }
      ],
      relatedPosts: [1, 2]
    }
  ]);
}
