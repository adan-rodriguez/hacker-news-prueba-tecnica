import useSWR from "swr";
import { getItemInfo } from "../services/hacker-news";
import CommentLoader from "./CommentLoader";
import { getRelativeTime } from "../utils/getRelativeTime";

function Comment({ id }) {
  const { data, isLoading } = useSWR(`comment/${id}`, () => getItemInfo(id));

  if (isLoading) {
    return <CommentLoader />;
  }

  const { by, text, time, kids } = data;

  const relativeTime = getRelativeTime(time);

  return (
    <>
      {text && (
        <details className="py-2" open>
          <summary className="text-xs text-[#828282] mb-1">
            <span className="mr-1">{by}</span>
            <span>{relativeTime}</span>
          </summary>
          <p className="text-sm break-words">{text}</p>
        </details>
      )}
      {kids?.length > 0 && <ListOfComments ids={data.kids.slice(0, 10)} />}
    </>
  );
}

export default function ListOfComments({ ids }) {
  return (
    <ul className="pl-8 first:pl-0">
      {ids?.map((id) => (
        <li key={id}>
          <Comment id={id} />
        </li>
      ))}
    </ul>
  );
}
