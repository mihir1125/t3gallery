import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://j5aiazu0wt.ufs.sh/f/kgZEcy0TDlHAvbIDATsRVGEpcl7ymbzrUdNM8wn6Hgv35LkP",
  "https://j5aiazu0wt.ufs.sh/f/kgZEcy0TDlHA2A85OlVhnBkWFZ5iGK3NAjdwt0So8grepmsH",
  "https://j5aiazu0wt.ufs.sh/f/kgZEcy0TDlHAA42yQzGPsWrGXH5lC4nZ8bF9JiUhVDuR3IBp",
  "https://j5aiazu0wt.ufs.sh/f/kgZEcy0TDlHApVHP4okQ60MHQGaOPJd2ALTW7ulYb4KxEcZI",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          posts.map((post) => (
            <div key={post.id}>{post.name}</div>
          ))
        }
        {
          [...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, idx) => (
            <div key={image.id + "-" + idx} className="w-48">
              <img src={image.url}/>
            </div>
          ))
        }
      </div>
    </main>
  );
}
