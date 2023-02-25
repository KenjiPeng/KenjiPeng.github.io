---
layout:     post
title:      LeetCode 283
subtitle:   [数组&矩阵]重塑矩阵
date:       2023-02-25
author:     Kenji
header-img: img/post-bg-algorithm.jpg
catalog: true
tags:
    - Java
    - 算法
    - Leetcode
---
## [数组与矩阵] LeetCode566
### 566. Reshape the Matrix (Easy)
#### 重塑矩阵
In MATLAB, there is a handy function called `reshape` which can reshape an `m x n` matrix into a new one with a different size `r x c` keeping its original data.

You are given an `m x n` matrix `mat` and two integers `r` and `c` representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the `reshape` operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

**Example 1:**

![img](https://assets.leetcode.com/uploads/2021/04/24/reshape1-grid.jpg)

```
Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
```

**Example 2:**

![img](https://assets.leetcode.com/uploads/2021/04/24/reshape2-grid.jpg)

```
Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]
```

#### My Answer:

```Java
public int[][] matrixReshape(int[][] mat, int r, int c) {
        if (mat.length * mat[0].length != r * c) {
            return mat;
        }
        int[] matNum = new int[r*c];
        int index=0;
        for (int m=0;m<mat.length;m++){
            for (int n =0;n<mat[0].length;n++){
                matNum[index]=mat[m][n];
                index++;
            }
        }
        index=0;
        int[][] result = new int[r][c];
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                result[i][j] = matNum[index];
                index++;
            }
        }
        return result;
    }
```

#### Formal Answer:

```Java
public int[][] matrixReshape(int[][] nums, int r, int c) {
    int m = nums.length, n = nums[0].length;
    if (m * n != r * c) {
        return nums;
    }
    int[][] reshapedNums = new int[r][c];
    int index = 0;
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            reshapedNums[i][j] = nums[index / n][index % n];
            index++;
        }
    }
    return reshapedNums;
}
```