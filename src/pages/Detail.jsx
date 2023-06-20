import useSWR from "swr";
import { getItemInfo } from "../services/hacker-news";
import ListOfComments from "../components/ListOfComments";

export default function Detail({ params }) {
  const { id } = params;

  const { data } = useSWR(`story/${id}`, () => getItemInfo(id));

  return <ListOfComments ids={data?.kids?.slice(0, 10)} />;
}
