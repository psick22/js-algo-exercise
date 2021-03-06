num = int(input("숫자를 입력해주세요 : "))


for i in range(num + 1):
    print(" " + " " * (num - i) + "*" * (2 * i - 1))
