module.exports = function check(str, bracketsConfig) {
    let substr = []; // массив скобок которые нужно найти
    // заполняем массив скобок подстроками
    for (let i = 0; i < bracketsConfig.length; i++) {
        substr.push(String(bracketsConfig[i][0] + bracketsConfig[i][1]));
    }
    let newStr = str; //строка с которой будем работать
    //Будем искать подстроку в строке пока не пройдём всю начальную строку
    for (let i = 0; i < str.length; i++) {
        // ищем подстроки в строке и заменяем их на пустое место
        for (let i = 0; i < substr.length; i++) {
            newStr = newStr.replace(substr[i], "");
        }
    }
    // если строка пустая то скобки стояли правильно
    if (newStr === "") return true;
    else return false;
};

