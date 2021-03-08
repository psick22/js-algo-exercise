# K 번째 수
# s~e 번째 까지 수를 오름차순 정렬했을 때 k번째 수
import sys

sys.stdin = open("input.txt", "rt")

T = int(input())

for test in range(T):
    n, s, e, k = map(int, input().split())
    a = list(map(int, input().split()))
    b = a[(s - 1) : e]
    b.sort()
    print(f"#{test+1} {b[k-1]}")
