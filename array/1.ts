interface arrMapInfo {
    [key: string]: Array<number>;
}

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const arrMap: arrMapInfo = {};

    for (let i = 0; i < nums.length; i++) {
        if (Array.isArray(arrMap[nums[i]])) {
            arrMap[nums[i]].push(i);
        } else {
            arrMap[nums[i]] = [i];
        }
        const len = arrMap[nums[i]].length;
        if(len > 1 && arrMap[nums[i]][len - 1] - arrMap[nums[i]][len - 2] <= k){
            return true;
        }
    }
    return false;
};

// const result = containsNearbyDuplicate([1,2,3,1,2,3], 2);
// console.log(result);
