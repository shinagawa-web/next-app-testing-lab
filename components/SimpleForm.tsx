'use client'

import { useState } from 'react'

export const SimpleForm = () => {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">名前：</label>
      <input
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">送信</button>

      {submitted && <p>こんにちは、{name}さん！</p>}
    </form>
  )
}