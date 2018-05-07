const sum = (num1, num2) => {
  if (isNaN(Number(num1)) || isNaN(Number(num2))) {
    return 0;
  }
  if (
    isFinite(Number(num1)) &&
    isFinite(Number(num2)) &&
    isFinite(Number(num1) + Number(num2))
  ) {
    return Number(num1) + Number(num2);
  } else {
    // 删除开头的一系列0
    const reg = /^0+/;
    const result = [];
    const arr1 = String(num1).replace(reg, '').trim().split('').reverse();
    const arr2 = String(num2).replace(reg, '').trim().split('').reverse();
    const len = Math.max(arr1.length, arr2.length);
    // 存储每次两个数相加后的进位
    let carry = 0;
    for (let i = 0; i < len; i++) {
      const sumNum = (Number(arr1[i]) || 0) + (Number(arr2[i]) || 0) + carry;
      result.push(sumNum % 10);
      carry = parseInt(sumNum / 10, 10);
    }
    if (carry) {
      result.push(carry);
    }
    return Number(result.reverse().join(''));
  }
}