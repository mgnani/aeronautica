
const Video = () => {
  return (
    <iframe
      className="video"
      src="https://www.youtube.com/embed/KOPk2wH_rO0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
