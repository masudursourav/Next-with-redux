import { fetchPosts } from "@/app/data";
import "@/app/global.css";
import { Providers } from "@/redux/providers";
export default async function RootLayout(props: React.PropsWithChildren) {
  const posts = await fetchPosts();
  //const demo = await fetchDemoData();
  return (
    <Providers post={posts}>
      <html lang="en">
        <body>{props.children}</body>
      </html>
    </Providers>
  );
}
