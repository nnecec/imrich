function fib (n: number): number {
  if (n === 0) {
    return 0
  }
  const memo: { [key: string]: number } = {}
  function dp (n: number) {
    if (n === 1 || n === 2) return 1
    if (memo[n]) return memo[n]

    memo[n] = dp(n - 1) + dp(n - 2)
    return memo[n]
  }

  return dp(n)
};
