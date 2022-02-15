const arrayList = ['Lenovo', 'Dell', 'Apple', 'Toshiba', 'Samsung'];

Array.prototype.includesCi = function(value) {
    return this.some(function(element) {
        return element.toUpperCase() === value.toUpperCase();
    });
};


console.log(arrayList.includesCi('aPPLe'));
console.log(arrayList.includesCi('Apple'));
console.log(arrayList.includesCi('apple'));
console.log(arrayList.includesCi('TOSHiBA'));
