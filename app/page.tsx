/*
 * @Date: 2023-08-28 17:11:09
 * @Description: description
 */
'use client'
import Link from "next/link";
import PostList from './blog/PostList'
import { useRouter } from "next/navigation";

export default function Home() {
  const postData = [
    {
      id: 1,
      slug: "aaa",
      title: "aaa",
    },
    {
      id: 2,
      slug: "bbb",
      title: "bbb",
    },
    {
      id: 3,
      slug: "ccc",
      title: "ccc",
    },
  ];

  const router = useRouter();
  return (
    <main>
      <h1 className={"text-4xl text-orange-600"}>Page Home!</h1>
      <br />
      <Link href={"/dashboard"}>Dashboard</Link>
      <br />
      <PostList posts={postData} />
      <button type={"button"} onClick={() => router.push('/dashboard')}>Dashboard</button>
    </main>
  );
}
