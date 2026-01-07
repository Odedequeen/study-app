import React from "react";
import "./MostPopular.css";
import thumb1 from "../../assets/Images/Gallary/Gallary1.svg";
import thumb2 from "../../assets/Images/Gallary/Gallary2.svg";
import thumb3 from "../../assets/Images/Gallary/Gallary3.svg";

function PostCard({ img, title, excerpt }) {
  return (
    <article className="mp-card">
      <div className="mp-media">
        <img src={img} alt={title} />
      </div>
      <div className="mp-body">
        <div className="mp-meta">By Admin • 12 Jan</div>
        <h4 className="mp-title">{title}</h4>
        <p className="mp-excerpt">{excerpt}</p>
        <button className="mp-btn">Read More</button>
      </div>
    </article>
  );
}

export default function MostPopular() {
  const posts = [
    {
      img: thumb1,
      title: "Understanding Modern Education",
      excerpt:
        "A brief look into modern teaching methods and classroom dynamics.",
    },
    {
      img: thumb2,
      title: "Top Study Techniques",
      excerpt:
        "Proven study techniques to improve retention and exam performance.",
    },
    {
      img: thumb3,
      title: "Career Guidance Tips",
      excerpt: "How to choose the right path after finishing your course.",
    },
  ];

  return (
    <section className="most-popular">
      <div className="mp-inner">
        <div className="mp-header">
          <div className="eyebrow">OUR BLOG</div>
          <h2 className="mp-title-main">Most Popular Post.</h2>
        </div>

        <div className="mp-grid">
          {posts.map((p, i) => (
            <PostCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
