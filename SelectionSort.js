function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // array.length -1 까지 살펴보는 이유는
    // 제일 마지막 -1 인덱스가 min 인지 아닌지만 확인하면 되기 때문에
    // 굳이 제일 마지막 인덱스의 값을 살펴볼 필요가 없기 때문에
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      // 첫 번째 for 는 array 에서 아직 정렬되지 않은 인덱스 중에서 제일 앞자리를 선택하기 위함이고
      // 두번째 for loop 의 용도는 i 이후의 인덱스 중에서
      // 제일 작은 수를 찾기 위한 위한 용도이다.
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // 위 if 문을 통해 더 작은 수를 찾았다면 일단 minIndex에 j 를 지정해 두고
    const temp = array[i];
    // 원래 i 는 temp 에 잠깐 맡겨두고
    array[i] = array[minIndex];
    // i 자리에 제일 작은 수를 넣어준다음
    array[minIndex] = temp;
    // 예전 minIndex 에 잠깐 맡겨줬던 temp 를 넣어주면서 스와프가 이루어 진다.

    [array[i], array[minIndex]] = [array[minIndex], array[i]];
    // 3줄의 스와프를 위 한줄로 줄여줄 수도 있다.
  }
  return array;
}

// 다만 위와 같은 방법으로 정렬할 경우 array 자체를 바꿔버린다.
// 즉, 콘솔로 array 를 찍어보면 정렬된 어레이가 되고, 원래 무작위 어레이는 사라짐
// 따라서
function selectionSort(array) {
  const arr = array.slice();
  // arr 라고 하는 복제 배열을 만들어 주면
  // 원본 array 는 계속 남아있게 된다.
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
