import ContentLoader from "react-content-loader";

const StoryLoader = () => (
  <ContentLoader
    speed={2}
    width={550}
    height={37}
    viewBox="0 0 550 37"
    backgroundColor="#9c9c9c"
    foregroundColor="#ecebeb"
  >
    <circle cx="24" cy="11" r="6" />
    <rect x="37" y="5" rx="3" ry="3" width="400" height="10" />
    <rect x="457" y="5" rx="3" ry="3" width="80" height="9" />
    <rect x="37" y="25" rx="3" ry="3" width="50" height="8" />
    <rect x="102" y="25" rx="3" ry="3" width="50" height="8" />
    <rect x="167" y="25" rx="3" ry="3" width="50" height="8" />
    <rect x="232" y="25" rx="3" ry="3" width="50" height="8" />
  </ContentLoader>
);

export default StoryLoader;
