function isSubsequence(s: string, t: string): boolean {
    if(s.length > t.length) return false;
    let sIndex = 0;
    for(let i = 0; i < t.length; i++){
        if(s[sIndex] === undefined) break;
        if(s[sIndex] === t[i]) sIndex++;
    }
    return sIndex === s.length ? true : false;
};

// const result = isSubsequence( "axc", "ahbxgcdx");
// console.log(result);