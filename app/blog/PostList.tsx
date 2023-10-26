/*
 * @Date: 2023-10-26 17:45:55
 * @Description: description
 */
import Link from "next/link";

export default function PostLink({ posts }: { posts: any }) {
  return (
    <ul>
      {posts.map((item: any) => (
        <li key={item.id}>
          <Link href={`/blog/${item.slug}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
