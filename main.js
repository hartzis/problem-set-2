var firstReverse = function(string) {
    var newString = '';
    var arr = [];
    string.split('').map(function(a) {
        arr.unshift(a)
    });
    newString = arr.join('');
    return newString;
}

var swapCase = function(string) {
    // var arr = string.split(' ');
    // var arr2 = arr.map(function(a) {
    //     return a.split('').map(function(a, i) {
    //         return i === 0 ? a.toLowerCase() : a.toUpperCase()
    //     }).join('');
    // }).join(' ');

    // return arr2;

    return string.split(' ').map(function(a) {
        return a.split('').map(function(a, i) {
            return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()
        }).join('')
    }).join(' ')
}

var letterCount = function(string) {
    var arr = string.split(' ');
    var doubles = [];
    arr.map(function(a, i) {
        var obj = {};
        a.split('').map(function(a) {
            obj[a] === 1 ? doubles.push(i) : obj[a] = 1;
        })
    })
    return doubles[0] === undefined ? -1 : arr[doubles[0]];
}