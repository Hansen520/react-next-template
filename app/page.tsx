/*
 * @Date: 2023-08-28 17:11:09
 * @Description: description
 */
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className={'text-4xl text-orange-600'}>Page Home!</h1>
      <Link href={"/dashboard"}>Dashboard</Link>
    </main>
  )
}
