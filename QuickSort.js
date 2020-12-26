function quickSort(array) {
  if (array.length === 1) {
    return array;
  }
  // 여기서는 피봇을 가장 끝의 인덱스로 설정
  const pivot = array[array.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    // i 구간 : array.length - 1 인 이유는 제일 마지막 인덱스를 피봇으로 설정했기 때문에
    // 굳이 살펴볼 필요가 없어서
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), pivot];
  } else {
    return [pivot, ...quickSort(rightArr)];
  }
}
// 위 코드를 조금 간결하게 만들면 아래와 같다
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (const el of array.slice(0, array.length - 1)) {
    if (el < pivot) {
      leftArr.push(el);
    } else {
      rightArr.push(el);
    }
    // if 문을 4줄을 아래와 같이 1 줄로 줄일 수도 있다
    el < pivot ? leftArr.push(el) : rightArr.push(el);
  }
  // 최초 if 의 조건을 <= 1 로 바꿔주면 빈 배열 & edge case 가 모두 카바되기 때문에
  // 조건별로 리턴물을 나눠줄 필요 없이 아래 한 줄이면 된다
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
