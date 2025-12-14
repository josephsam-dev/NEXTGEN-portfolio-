import React, { useState } from 'react';

function VideoModal() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Video</button>
      {open && (
        <div>
          <video width="400" controls>
            <source src="sample-video.mp4" type="video/mp4" />
          </video>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default VideoModal;
