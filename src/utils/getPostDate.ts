const getPostDate = (post: string) => {
  let date = post.split(/-/);
  let postDate = new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2]));
  return postDate;
};

export default getPostDate;