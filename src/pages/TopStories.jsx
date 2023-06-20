// import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { getTopStories } from "../services/hacker-news";
import Story from "../components/Story";
import { useRef } from "react";
import { useEffect } from "react";

export default function TopStories() {
  // const { data } = useSWR("stories", () => getTopStories(1, 10));
  const { data, isLoading, size, setSize } = useSWRInfinite(
    (index) => `stories/${index + 1}`,
    (key) => {
      const [, page] = key.split("/");
      return getTopStories(page, 10);
    }
  );

  const chivatoEl = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setSize((prevSize) => prevSize + 1);
        }
      },
      {
        rootMargin: "100px",
      }
    );

    if (chivatoEl.current == null) {
      return;
    }

    observer.observe(chivatoEl.current);

    return () => {
      observer.disconnect();
    };
  }, [isLoading, setSize]);

  return (
    <>
      <ul>
        {data?.flat()?.map((id, index) => (
          <li key={id}>
            <Story id={id} index={index} />
          </li>
        ))}
      </ul>
      {!isLoading && <span ref={chivatoEl}>.</span>}
      {/* <button onClick={() => setSize(size + 1)}>Load more</button> */}
    </>
  );
}
