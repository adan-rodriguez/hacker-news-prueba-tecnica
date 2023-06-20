export const getTopStories = async (page, limit) => {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const json = await response.json();
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const ids = json.slice(startIndex, endIndex);
  return ids;
};

export const getItemInfo = async (id) => {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  const data = await response.json();
  return data;
};
