function lengthOfLastWord(s: string): number {
	console.log(s.split('\s'));
	
	const sArr = s.split('\s+');
	while(true){
		const len = sArr[sArr.length - 1].length;
		if(len !== 0) return len;
		sArr.pop();
	}
};

// const result = lengthOfLastWord('  Hello qw qw f    fsfadf  ');
// console.log(result);
