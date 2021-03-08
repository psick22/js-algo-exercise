# 대표값

import sys

sys.stdin = open("input.txt", "rt")

n = int(input())
a = list(map(int, input().split()))

# a 리스트의 평균을 구해서 첫째자리 반올림
# 평균에 가장 가까운 숫자의 인덱스 리턴
# 가장 가까운 숫자가 여러 개일 경우 높은 것이 우선
# 높은 숫자가 여러개 일경우 빠른 인덱스를 우선

# 평균 구하기

avg = round(sum(a) / n)

min = float("inf")
res = 0

for idx, x in enumerate(a):
    tmp = abs(x - avg)
    if tmp < min:
        min = tmp
        score = x
        res = idx + 1
    elif tmp == min:
        if x > score:
            score = x
            res = idx + 1

print(avg, res)
