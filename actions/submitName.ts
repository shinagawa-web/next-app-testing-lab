export async function submitName(name: string): Promise<string> {
  if (!name.trim()) {
    throw new Error('名前が空です')
  }

  return `こんにちは、${name}さん！`
}
