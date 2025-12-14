import React from 'react';

function Storyboard() {
  const frames = Array.from({ length: 9 }, (_, i) => i + 1);
  return (
    <section>
      {frames.map(frame => (
        <div key={frame}>
          <p>Video {frame}</p>
        </div>
      ))}
    </section>
  );
}

export default Storyboard;
