export const createPagesPool = (start: number, finish: number) => {
  const pagesPool = []

  for (let i = start; i <= finish; i++) {
    pagesPool.push(i)
  }

  return pagesPool
}
