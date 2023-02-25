---
layout:     post
title:      LeetCode 283
subtitle:   [数组&矩阵]把数组中的 0 移到末尾
date:       2023-02-22
author:     Kenji
header-img: img/post-bg-algorithm.jpg
catalog: true
tags:
    - Java
    - 算法
    - Leetcode
---
## [数组与矩阵] LeetCode 283

### 283. Move Zeroes (Easy) 
#### 把数组中的 0 移到末尾

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

**Example 1:**
```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```
**Example 2:**
```
Input: nums = [0]
Output: [0]
```

#### My Answer:

```
public void moveZeros(int[] nums){
        for (int i = 0;i<nums.length;i++){
            if (nums[i]==0){
                for (int j=i+1;j<nums.length;j++){
                    if (nums[j]!=0){
                        nums[i]=nums[j];
                        nums[j]=0;
                        break;
                    }
                }
            }
        }
}
```

