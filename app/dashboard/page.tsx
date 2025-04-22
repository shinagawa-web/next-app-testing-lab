'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const TabContent = ({ tab }: { tab: string }) => {
  switch (tab) {
    case 'home':
      return <p>ホームタブの内容</p>
    case 'settings':
      return <p>設定タブの内容</p>
    default:
      return <p>不明なタブです</p>
  }
}

export default function DashboardPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tab = searchParams.get('tab') || 'home'

  const goToSettings = () => {
    router.push('/dashboard?tab=settings')
  }

  return (
    <main>
      <h1>ダッシュボード</h1>
      <button onClick={goToSettings} className='cursor-pointer'>設定タブへ</button>

      <Suspense fallback={<p>読み込み中...</p>}>
        <TabContent tab={tab} />
      </Suspense>
    </main>
  )
}
