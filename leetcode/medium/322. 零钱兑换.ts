/**
 * https://leetcode-cn.com/problems/coin-change/
 *
 * coins = [1, 2, 5], amount = 11
 *
 * 将求 amount 的情况 拆分为，用 coin 依次减掉 amount ，再对剩余的 amount - coin 求值，直到无法求值，输出最小的
 *
 * 11-5
 * 6-5
 * 1-1
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange (coins: number[], amount: number): number {

}

console.log(coinChange([7, 6, 2], 17))
