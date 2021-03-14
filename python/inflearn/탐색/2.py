import sys


sys.stdin = open("input.txt", "rt")

# input : kdk1k0kdjfkj0kkdjkfj0fkd


s = input()
res = 0
for x in s:
    if x.isdecimal():
        res = res * 10 + int(x)

print(res)


# 문자와 숫자가 섞여있는 문자열 (<50) 에서 숫자만 추출하여 그 순서대로 자연수를 만듬 (<100,000,000)
# 다음줄에 해당 자연수의 약수의 갯수 출력
