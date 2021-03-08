# K번째 큰수
import sys

sys.stdin = open("input.txt", "rt")
n, k = map(int, input().split())
a = list(map(int, input().split()))

# 3장을 뽑아서 더한 값들 중 K번째로 큰 값
# 3장을 뽑아서 더하면 같은 값이 나올 수 있으므로 합한 값을 set로 관리하면 될듯

res = set()

for i in range(n):
    for j in range(i + 1, n):
        for m in range(j + 1, n):
            res.add(a[i] + a[j] + a[m])
res = list(res)
res.sort(reverse=True)
print(res[k - 1])
