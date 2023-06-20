import useSWR from "swr";
import { getItemInfo } from "../services/hacker-news";
import { Link } from "wouter";
import StoryLoader from "./StoryLoader";
import { getRelativeTime } from "../utils/getRelativeTime";

export default function Story({ id, index }) {
  const { data, isLoading } = useSWR(`story/${id}`, () => getItemInfo(id));

  if (isLoading) {
    return <StoryLoader />;
  }

  const { by, kids, score, title, url, time } = data;

  let domain = "";

  try {
    domain = new URL(url).hostname.replace("www", "");
  } catch (error) {
    console.log(error);
  }

  const relativeTime = getRelativeTime(time);

  return (
    <article className="text-[#828282] mb-2">
      <header className="flex gap-2 items-baseline">
        <small>{index + 1}.</small>
        <a
          className="text-black text-sm"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <a
          className="text-xs hover:underline"
          href={domain}
          target="_blank"
          rel="noopener noreferrer"
        >
          &#40;{domain}&#41;
        </a>
      </header>
      <footer className="ml-4 text-[10px] flex gap-2 items-baseline">
        <span>{score} points</span>
        <span>
          by&nbsp;
          <Link className="text-xs hover:underline" to={`/article/${id}`}>
            {by}
          </Link>
        </span>
        <Link className="text-xs hover:underline" to={`/article/${id}`}>
          {relativeTime}
        </Link>
        <Link className="text-xs hover:underline" to={`/article/${id}`}>
          {kids?.length ?? 0} comments
        </Link>
      </footer>
    </article>
  );
}
