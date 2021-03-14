# 회문 문자열 검사
import sys

sys.stdin = open("input.txt", "rt")
n = int(input())

for i in range(n):
    s = input().upper()
    size = len(s)
    if s == s[::-1]:
        print(f"#{i+1} YES")
    else:
        print(f"#{i+1} NO")
