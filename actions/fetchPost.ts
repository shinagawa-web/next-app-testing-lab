export async function fetchPost(postId: number): Promise<string> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

  if (!res.ok) {
    throw new Error('投稿の取得に失敗しました')
  }

  const post = await res.json()
  return post.title
}
