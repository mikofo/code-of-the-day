# Original Solution
def addBinary(self, a: str, b: str) -> str:
  out = ''
  carry = 0
  longest_length = max(len(a), len(b))
  a = a.zfill(longest_length)
  b = b.zfill(longest_length)
  for i in range(longest_length - 1, -1, -1):
      sum = carry + int(a[i]) + int(b[i])
      out = str(sum % 2) + out
      carry = sum // 2
  if carry:
      out = "1" + out
  return out

# Refactored Bitwise Solution after doing research
# Runtime is optimized, but memory usage is hurt
def addBinary(self, a: str, b: str) -> str:
  out = []
  carry = 0
  longest_length = max(len(a), len(b))
  a = a.zfill(longest_length)
  b = b.zfill(longest_length)
  for i in range(longest_length - 1, -1, -1):
      current_sum = carry + int(a[i]) + int(b[i])
      out.append(str(current_sum & 1))
      carry = current_sum >> 1
  if carry:
      out.append('1')
  return ''.join(out[::-1]) 
