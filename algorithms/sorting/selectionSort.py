arr = [2,4,6,38,23,0,9]
n = len(arr)

for i in range(n):
    small = i
    for j in range(i,n):
            if(arr[small]>arr[j]):
                small = j
    arr[small],arr[i] = arr[i],arr[small]

print(arr)