
const Video = () => {
  return (
    <iframe
      className="video"
      src="https://www.youtube.com/embed/xNRJwmlRBNU"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
};

export default Video;
