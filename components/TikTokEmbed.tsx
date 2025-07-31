"use client"

export default function TikTokVideo() {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <iframe
        src="https://www.tiktok.com/embed/v2/7531174155933306120"
        width="325"
        height="575"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: '8px' }}
      ></iframe>
    </div>
  );
}