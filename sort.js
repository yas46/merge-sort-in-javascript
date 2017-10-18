function sorter(str) {

    if (str.length <= 1) {
        return str;
    }

    let mid = Math.floor(str.length/2);
    let left = sorter(str.slice(0,mid));
    let right = sorter(str.slice(mid));
    
    let newString = []
    let indexOfLeft = 0;
    let indexOfRigth = 0;

    while(indexOfLeft < left.length && indexOfRigth < right.length) {
        console.log(`left:${left} %s, right:${right} %s`);
        let elementRight = right[indexOfRigth];
        let elementLeft = left[indexOfLeft];
        
        if (elementRight.charCodeAt(0) < elementLeft.charCodeAt(0)) {
            newString.push(elementRight);
            indexOfRigth++;
        } else {
            newString.push(elementLeft);
            indexOfLeft++;
        }
        console.log(newString);
    }
    
    while (indexOfLeft < left.length) {
        newString.push(left[indexOfLeft]);
        indexOfLeft++;
    }

    while (indexOfRigth < right.length) {
        newString.push(right[indexOfRigth]);
        indexOfRigth++;
    }

    return newString.join("");
}

sorter("egfabclmpx");
