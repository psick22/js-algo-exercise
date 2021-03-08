# 최소값 구하기

arr = [5, 3, 7, 9, 2, 5, 2, 6]
arrMin = arr[0]
for i in range(1, len(arr)):
    if arr[i] < arrMin:
        arrMin = arr[i]

arrMin2 = float("inf")  # 파이썬에서 가장 큰 값
for x in arr:
    if x < arrMin2:
        arrMin2 = x


print(arrMin)
print(arrMin2)
