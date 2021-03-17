/**
 * Common Function
 * @author Money Jain
 * @flow
 */

export function duration(millis) {
  let minutes = Math.floor(millis / 60000);
  let seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}m : ${(seconds < 10 ? '0' : '') + seconds}s`;
}
