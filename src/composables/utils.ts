export function useUtils () {
  function generateRandomHexColor () {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
  }

  function generateRandomString () {
    const arr = ['Galaxy', 'Whisper', 'Echo', 'Nebula', 'Quantum', 'Harmony', 'Pixel', 'Journey', 'Cascade', 'Mystic', 'Vortex', 'Serenity', 'Phoenix', 'Alchemy', 'Odyssey', 'Chroma', 'Zenith', 'Eclipse', 'Nimbus', 'Solstice']
    const index = Math.floor(Math.random() * 20)

    return arr[index]
  }

  function generateRandomBoolean () {
    const index = Math.floor(Math.random() * 100)

    return index > 50
  }

  return {
    generateRandomHexColor,
    generateRandomString,
    generateRandomBoolean
  }
}
