import React from "react";
import UserCard from "../../src/Usercard";


export default function Users({ photos }) {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🧠 Server-Side Rendering (SSR) Example</h1>
      <p>This page fetches data on the server for every request.</p>

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        {photos.map((life) => (
          <UserCard key={life.id} life={life} />
        ))}
      </div>
    </div>
  );
}

// ✅ This function runs ONLY on the server
export async function getServerSideProps() {
  // Fetch data from an external API
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await res.json();

  // Pass data to the page component via props
  return {
    props: { photos },
  };
}
