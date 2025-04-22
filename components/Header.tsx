import Link from 'next/link'

export function Header() {
  return (
    <header role="banner" className="bg-gray-800 text-white px-4 py-2">
      <h1 className="text-xl font-bold">My App</h1>
      <nav>
        <ul className="flex gap-4 mt-2">
          <li><Link href="/">ホーム</Link></li>
          <li><Link href="/dashboard">ダッシュボード</Link></li>
        </ul>
      </nav>
    </header>
  )
}
