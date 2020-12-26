function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        // i 의 시작점이 1인 이유는 i = 0 이면 가장 앞의 인덱스이기 때문에 비교할 께 없다.
        // 따라서 1부터 시작해서 0번 인덱스와 크기 비교
        for(let j = i; j > 0; j--) {
        // j 의 구간
        // j = i : j는 새로 정렬되어야 하는 인덱스 이고 j 앞까지는 이미 정렬되어 있다고 보기 때문
        // j > 0 : 0번 인덱스가 제일 앞이기 때문에 굳이 그 앞까지 비교할 필요가 없다.
        // 그냥 1번 인덱스까지 가서 0번 인덱스 값이랑 비요하면 됨
        // j-- : 삽입정렬은 j 앞까지는 정렬되어 있다고 보기 때문에
        // j 는 뒤에서 부터 시작해서 비교해 들어가기 때문에 1씩 줄어들도록 설계
            if(array[j] < array[j-1]) {
                const temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
                // 크기 비교해서 바꿔주는 구간
                [array[j], array[j-1]] = [array[j-1], array[j]];
            } else {
                break;
                // 비교할 게 없다면 멈춰라 => 즉 정렬이 모두 되어 있다면
            }
        }
    }
    return array;
}

function insertionSort(array) {
    const arr = array.slice();

    for(let i = 1; i < arr.length; i++) {
        for(let j = i; j > 0; j--) {
            if(arr[j] < arr[j-1]) {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            } else {
                break;
            }
        }
    }
    return arr;
}