'use strict'

/*Используйте метод reduce в сочетании с методом concat для свертки массива,
состоящего из нескольких массивов, в один массив, у которого есть
все элементы входных массивов.*/

/*let array1 = ['a', 'b', 'c'],
	array2 = ['d', 'e', 'f'],
	array3 = ['h', 'j', 'k'],
	reducer = (accumulator, currentValue) => accumulator + currentValue;

const array4 = array1.concat(array2.concat(array3));
console.log(array4.reduce(reducer));*/



/*Напишите функцию высшего порядка loop, которая представляет собой аналог
оператора цикла for. Она принимает значение, функцию условия, функцию
обновления и функцию тела. 

На каждой итерации сначала выполняется
функция условия для текущего значения цикла. Если эта функция возвращает
false, то выполнение цикла прекращается. 

Затем вызывается функция тела,
которой передается текущее значение цикла. 

Наконец, вызывается функция
обновления для создания нового значения, и цикл запускается сначала.
При определении функции вы можете использовать обычный цикл для
перебора значений.*/

/*function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);*/




/*Реализуйте метод every, принимающий в качестве параметров массив и предикативную
функцию. Напишите две версии: одну с использованием цикла,
а вторую - с применением метода some.*/



/*function every(array, predicate) {
	for (let element of array) {
		if (!predicate(element)) return false;
	}
	return true;
}

function every(array, predicate) {
	return !array.some(element => !predicate(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

Напишите функцию, которая вычисляет доминирующее направление письма
в строке текста. Помните, что у каждого объекта шрифта есть свойство
direction, принимающее значения "1 tr" (left to right, ~слева направо•), "rtl"
(right to left, ~справа налево•) или "ttb" (top to bottom, ~сверху вниз•).
Доминирующее направление - это направление большинства символов,
которые принадлежат какому-либо шрифту. Вероятно, вам пригодятся
описанные в этой главе функции characterScript и countBy.*/

/*function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));*/
// → rtl

let text = {
	aboba: 'gfgfgdfg'
}

console.log(text.direction);