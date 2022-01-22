function plusMinus(arr: number[]): void {
  let sum: number[] = [0, 0, 0];
  let n: number = arr.length
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum[0]++;
    } else if (arr[i] < 0) {
      sum[1]++;
    } else {
      sum[2]++;
    }
  }
  for (let j = 0; j < sum.length; j++) {
    console.log((sum[j] / n).toFixed(6));    
  }
}

plusMinus([-4, 3, -9, 0, 4, 1]);
