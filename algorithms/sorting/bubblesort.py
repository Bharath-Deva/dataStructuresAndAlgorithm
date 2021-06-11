arr = [2,4,6,38,23,0,9]
n = len(arr)

for i in range(n):
    for j in range(n):
        if(arr[i]<arr[j]):
            arr[i],arr[j] = arr[j],arr[i]

print(arr)