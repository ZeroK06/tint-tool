'use client'
export const randomColor = () => {
  return '#' + Math.random().toString(16).substring(2, 8)
}
