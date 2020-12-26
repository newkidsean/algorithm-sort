function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // i 의 구간 : 선택정렬 때와 마찬가지로 제일 마지막 인덱스는 굳이 살펴볼 필요 없음
    for (let j = 0; j < array.length - 1 - i; j++) {
      // i 가 커질 수록 i 의 수만큼 [] 안에 뒷자리들은 이미 정렬이 끝난거임
      // [3, 7, 2, 1]
      // [3, 2, 1, 7]
      // [2, 1, 3, 7]
      // [1, 2, 3, 7]
      // 이런 식이기 때문에 j 의 구간은
      // 마지막 인덱스 비교 필요 없어서 -1 & i 의 수만큼은 정렬이 끝나서 결국
      // array.length - 1 - i 가 된다.
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        // 선택정렬과 마찬가지로 스와프
        [array[j], array[j+1]] = [array[j+1], array[j]];
        // 마찬가지로 위 3줄은 이렇게 1줄로 줄여줄 수 있다.
      }
    }
  }
  return array;
}
// 마찬가지로 위와 같이 하면 원래 array 가 변형되므로 이를 막기위해 아래와 같이 배열을 복사해서 정렬
function bubbleSort(array) {
    const arr = array.slice();
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
      }
    }
    return arr;
  }
