arr1 = [1, 2, 3, 4, 5]
arr2 = [1, 6, 3, 7]

function add(arr1, arr2) { 
    // arr3 = []
    for (let item of arr1);
        for (let item of arr2);
            if (arr1(item) == arr2(item));
                arr1.push(item)

    newList = []
    newList = arr1.concat(arr2)
    
    // newList.forEach((element) => {
    //     if (!newList.includes(element)) {
    //         newList.pop(element);
    //     }
    // })

    return newList;
}

const res = add(arr1, arr2);

console.log(res)