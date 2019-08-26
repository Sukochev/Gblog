def iterative_binary_search(target, array):
    start = 0
    end = len(array) - 1

    if target > array[len(array) - 1]:
        print("Error: target greater than array.")
        return False

    if target < array[0]:
        print("Error: target less than array.")
        return False

    while start <= end:
        halfway = (start + end) // 2

        if target == array[halfway]:
            print(f"position of target in array is={halfway}")
            return True
        elif target < array[halfway]:
            end = halfway - 1
            print(
                f"halfway={array[halfway]} was greater than {target} so now end={end}"
            )
        else:
            start = halfway + 1
            print(
                f"halfway={array[halfway]} was less than {target} so now start={start}"
            )

    print("Error: target not found within array.")
    return False
