/**
 * 过滤原数组中所有的非假值元素，获取新数组
 * @param array
 */
function compact<T>(array: T[]) {
  if (!Array.isArray(array)) return [];

  return array.filter((e) => Boolean(e));
}

export default compact;
