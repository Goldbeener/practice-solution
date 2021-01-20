// 数字枚举
// 字符串枚举

// 数字枚举
enum Role {
    Reporter = 3,
    Developer = 5,
    Maintainer,
    Owner = 9,
    Guest,
}

// 枚举值 可以接收初始值，但是没有初始值的，是从前一个枚举值默认递增

// 反向映射  数字索引 + 字符串索引
// console.log('>>>>', Role);


// Role.Developer = 0 枚举值不可以被修改

// 字符串枚举
enum Message {
    Success = '成功',
    Fail = '失败',
}
// 字符串枚举会被编译成 纯对象，不会做反向映射
console.log('>>>>', Message);
// Message.Fail = 's'


// 异构枚举
enum Answer {
    N,
    Y = 'yes'
}

console.log('>>>>', Answer);

/**
 * 数字枚举会被做反向映射，key索引 index索引
 * 字符串枚举编译成正常的key-value对
 * */


 // 枚举成员的性质
 enum Char {
    // const memeber 
    a,
    b = a,
    c = 1 + 3,

    // computed member
    d = Math.random(),
    e = Answer.Y.length,
 }

 console.log('>>>>', Char);

 enum Str {
     foo = 'a' + 'b',
    //  bar = 'aasssss'.slice(0, 2),  字符串枚举不能做计算
 }

 /**
  * 枚举成员性质
  *     不可修改
  *     分2类 （数字枚举场景下，字符串枚举直接就编译成对象）
  *         const member  在编译中直接确定值
  *         computed member 在执行中才确定值
  * 
  *     只有数字枚举才有 computed 成员，字符串枚举没有
 */

 // 常量枚举  
 // 只需要对象值

 const enum Month {
    Jan,
    Feb,
    Mar,
 }
// 'const' enums can only be used in property or index access expressions or the right hand side of an import declaration or export assignment or type query
//  console.log('>>>>', Month);  意思是只在寻值的时候使用，在编译阶段会被移除


// 枚举类型
enum E { a, b}
enum F { a = 0, b = 2}
enum G { a = 'foo', b = 'bar'}

let e: E = 3;
let f: F = 3;

// This condition will always return 'false' since the types 'F' and 'E' have no overlap.
console.log('>>>>', f === e);

let e1:E.a = 3;
let e2:E.b = 4;
let e3:E.b = 4;
console.log('>>>>', e3 === e2);

let g1:G = G.a;
let g2:G = G.b;
let g3:G.a = G.a;

/**
 * 纯数字枚举、字符串枚举 的枚举类和枚举成员都可以作为变量类型
 * 数字枚举做类型的时候，允许变量使用不同于枚举成员的值
 * 字符串枚举做类型的时候，只允许变量使用枚举成员的值
 * 并且字符串枚举成员做类型的时候，只允许对应的成员值做值
*/