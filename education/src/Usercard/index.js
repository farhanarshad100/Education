import React from "react";
import Image from "next/image";
export default function Usercard({ life }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
     <img
  src={life.thumbnailUrl}
  alt={life.title}
  style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
/>
      <h3 style={{ marginBottom: "5px", color: "#333" }}>{life.title}</h3>
      <p style={{ fontSize: "12px", color: "#666" }}>Album ID: {life.albumId}</p>
    </div>
  );
}
