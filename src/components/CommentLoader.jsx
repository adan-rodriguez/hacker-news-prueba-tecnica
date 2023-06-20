import ContentLoader from "react-content-loader";

const CommentLoader = () => (
  <ContentLoader
    speed={2}
    width={1000}
    style={{ width: "100%" }}
    height={80}
    viewBox="0 0 1000 80"
    backgroundColor="#9c9c9c"
    foregroundColor="#ecebeb"
  >
    <circle cx="3" cy="10" r="3" />
    <rect x="10" y="5" rx="3" ry="3" width="50" height="10" />
    <rect x="64" y="5" rx="3" ry="3" width="50" height="10" />
    <rect x="0" y="25" rx="3" ry="3" width="100%" height="50" />
  </ContentLoader>
);

export default CommentLoader;
