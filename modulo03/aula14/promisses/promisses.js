let promessa = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve('Promessa bem sucedida!')
    }, 2000)
  } catch {
    setTimeout(() => {
      reject(e)
    }, 3000)
  }
})