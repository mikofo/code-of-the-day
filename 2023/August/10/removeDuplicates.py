from typing import List

def removeDuplicates(self, nums: List[int]) -> int:
  cur, pointer = 0, 1
  while pointer < len(nums):
    if nums[cur] != nums[pointer]:
      cur += 1
      nums[cur] = nums[pointer]
    pointer += 1
        
  return cur + 1
