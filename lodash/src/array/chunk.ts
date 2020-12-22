/**
 * 数组拆分
 * @param array 要处理的数组
 * @param size 拆分长度，default = 1
 */
function chunk<T>(array: T[], size = 1): T[][] {
  if (!Array.isArray(array)) return [];

  const { length } = array;
  if (length < 1) return [];

  let index = 0;
  let chunkIndex = 0;
  const result = Array(Math.ceil(length / size));
  while (index < length) {
    result[chunkIndex++] = array.slice(index, (index += size));
  }
  return result;
}

export default chunk