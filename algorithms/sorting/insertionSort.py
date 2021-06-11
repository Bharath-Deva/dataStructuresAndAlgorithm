arr = [2,4,6,38,23,0,9]
n = len(arr)

for i in range(1,n):
    pole = arr[i]
    j = i-1
    while(j>=0 and arr[j]>pole):
        arr[j+1] = arr[j]
        j -= 1
    arr[j+1] = pole

print(arr)