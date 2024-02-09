export const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await res.json();
  return posts;
};

export const fetchDemoData = async () => {
  const res = await fetch(
    "https://infoconfig-dev.infoimageinc.com/api/v1/configurations?appId=infotrac&cids=acbk&limit=10&offset=0&instanceName=ca-infotrac-dv-01",
    {
      cache: "no-store",
    }
  );
  const demoData = await res.json();
  return demoData;
};
