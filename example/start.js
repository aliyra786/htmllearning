let string = '';
for(let i = 0; i <= 5; i++){
	for(let j = 1; j <= i; j++){
		string += '*'
	}
    string+= '/n'
}
console.log(string.split("/n").forEach(item => item && console.log(item)))