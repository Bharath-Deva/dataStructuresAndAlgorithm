arr = [2,4,6,38,23,0,9]
n = len(arr)

def mergesort(arr):
    if(len(arr) == 1):
        return arr
    mid = len(arr)//2
    left = arr[:mid]
    right = arr[mid:]
    return merge(mergesort(left),mergesort(right))

def merge(left,right):
    i = j = 0
    result = []
    while(i<len(left) and j<len(right)):
        if(left[i]<right[j]):
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    if(i == len(left)):
        result += right[j:]
    else:
        result += left[i:]
    return result

print(mergesort(arr))