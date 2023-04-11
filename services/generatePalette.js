import { randomColor } from './colorRandom'

export const generatePalette = ({ empty = true, number = 5 }) => {
  const modelColor = () => {
    return {
      color: empty ? '#ffffff' : randomColor(),
      id: Math.random()
    }
  }
  return new Array(number).fill(null).map(e => modelColor())
}
