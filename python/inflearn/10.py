num = int(input("숫자를 입력해주세요 : "))


for i in range(num + 1):
    print(" " + " " * (num - i) + "*" * (2 * i - 1))

list = [1, 2, 3, 4, 5]
list.count()