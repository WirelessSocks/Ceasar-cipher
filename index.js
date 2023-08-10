


document.querySelector('button').onclick = myClick;

document.querySelector('#btnDcr').onclick = myClickDecrypt;

function myClickDecrypt() {
    console.log('нажата кнопка дешифровки');
    
    // Получаем значение ключа
    let a = document.querySelector('.i-1').value;
    let key = Number(a);

    if(isNaN(key)) {
        output = "Ошибка ввода данных";
        document.querySelector('.out').innerHTML = output;
        return;
    }

    console.log(`Ключ от плюзователя - ${key}`);

    // Переменная userStr - строка, введенная пользователем.
    let userStr = document.querySelector('.user_text').value.toLowerCase();
   
    let lang = 0;
    // Русский - 1
    // Английский - 2

    if(document.querySelector('.lang_rus').checked) {

        lang = document.querySelector('.lang_rus').value;
            
        console.log( `lang = ${Number(lang)}`);
    }
    else if(document.querySelector('.lang_eng').checked) {

        lang = document.querySelector('.lang_eng').value;
            
        console.log( `lang = ${Number(lang)}`);
    }

    let output = "";

    let shift;

    
    // Если выбран русский язык, начинается работа с кириллицей

    if(lang == 1) {

        if (key >= 33 ) {
            shift = -1 * (key % 33);
        }
        else if(key <= -33) {
            shift = -1 * (key % 33);
        }
        else {
            shift = -1 * key;
        }

        console.log('Обработанный Ключ - ', shift);

        let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

        let otherSymbols = "\ \"\'\\/0123456789!?@#$%^&*`~.,-=+_";

        let firstPartOfStr = alphabet.slice(0, shift);
        console.log(firstPartOfStr);

        let secondPartOfStr = alphabet.slice(shift);
        console.log(secondPartOfStr);
        let shiftedAlphabet = secondPartOfStr + firstPartOfStr;
        console.log(shiftedAlphabet);

        // Смещенный алфавит со всеми допустимыми символами
        shiftedAlphabet += otherSymbols;

        // Алфавит со всеми допустимыми символами
        alphabet += otherSymbols;

        // Проверка на соответствие  выбранному языку введеной пользователем строки


        // Счетчик, который будет сравнивать символы на соответствие языку
        let counter = 0;

        // Условие: Если язык == Русский, то проводится проверка
        for (let i = 0; i < userStr.length; i++) {
            for(let j = 0; j < alphabet.length; j++) {
                if(userStr[i] == alphabet[j]) {
                    counter += 1;
                }
            }
        }

        console.log(`Кол-во символов в строке - ${userStr.length}, счетчик: ${counter}`);

        // Преобразование зашифрованной строки с кирилицей
        
        if (counter == userStr.length) {
            for(let i = 0; i < userStr.length; i++) {
                for(let j = 0; j < alphabet.length; j++) {
                    if(userStr[i] == alphabet[j]) {
                        output += shiftedAlphabet[j];
                    }
                }
            }
        } else {
            output = "Ошибка ввода даных";
            document.querySelector('.out').innerHTML = output;
        }

    }
    
    if(lang == 2) {
        
        if (key >= 26 ) {
            shift = -1 * (key % 26);
        }
        else if(key <= -26) {
            shift = -1 * (key % 26);
        }
        else {
            shift = -1 * key;
        }

        console.log(`Обработанный Ключ - ${shift}`);

        let alphabet = "abcdefghijklmnopqrstuvwxyz";

        let otherSymbols = "\ \"\'\\/0123456789!?@#$%^&*`~.,-=+_";

        let firstPartOfStr = alphabet.slice(0, shift);
        console.log(firstPartOfStr);

        let secondPartOfStr = alphabet.slice(shift);
        console.log(secondPartOfStr);
        let shiftedAlphabet = secondPartOfStr + firstPartOfStr;
        console.log(shiftedAlphabet);

        // Смещенный алфавит со всеми допустимыми символами
        shiftedAlphabet += otherSymbols;

        // Алфавит со всеми допустимыми символами
        alphabet += otherSymbols;


        // Проверка на соответствие  выбранному языку введеной пользователем строки

        // Счетчик, который будет сравнивать символы на соответствие языку
        let counter = 0;

        for (let i = 0; i < userStr.length; i++) {
            for(let j = 0; j < alphabet.length; j++) {
                if(userStr[i] == alphabet[j]) {
                    counter += 1;
                }
            }
        }


        console.log(`Кол-во символов в строке - ${userStr.length}, счетчик: ${counter}`);



        // Преобразование зашифрованной строки с латинницей
        
        if (counter == userStr.length) {
            for(let i = 0; i < userStr.length; i++) {
                for(let j = 0; j < alphabet.length; j++) {
                    if(userStr[i] == alphabet[j]) {
                        output += shiftedAlphabet[j];
                    }
                }
            }
        } else {

            output = "Error in text"
        }
    }

    console.log(output);

    document.querySelector('.out').innerHTML = output;
}


function myClick() {

    let output = "";

    // Получаем значение ключа
    let a = document.querySelector('.i-1').value;
    let key = Number(a);
    console.log(typeof(key));

    if(isNaN(key)) {
        output = "Ошибка ввода данных";
        document.querySelector('.out').innerHTML = output;
        return;
    }

    // Переменная userStr - строка, введенная пользователем.
    let userStr = document.querySelector('.user_text').value.toLowerCase();

 

    let lang = 0;
    // Русский - 1
    // Английский - 2

    if(document.querySelector('.lang_rus').checked) {

        lang = document.querySelector('.lang_rus').value;
            
        console.log( `lang = ${Number(lang)}`);
    }

    if(document.querySelector('.lang_eng').checked) {

        lang = document.querySelector('.lang_eng').value;
            
        console.log( `lang = ${Number(lang)}`);
    }

    if(lang == 0) {
        output = "Не выбран язык ввода!";
            document.querySelector('.out').innerHTML = output;
    }

    // Переменная key - ключ, который пользователь должен ввести.

    console.log(`Ключ от плюзователя - ${key}`);
    console.log(-222 % 33);
    

    let shift;

    
    // Если выбран русский язык, начинается работа с кириллицей

    if(lang == 1) {

        if (key >= 33 ) {
            shift = key % 33;
        }
        else if(key <= -33) {
            shift = key % 33;
        }
        else {
            shift = key;
        }

        console.log("Обработанный Ключ - ", shift);


        let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

        let upperAlphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

        let otherSymbols = "\ \"\'\\/0123456789!?@#$%^&*`~.,-=+_";

        let firstPartOfStr = alphabet.slice(0, shift);

        let secondPartOfStr = alphabet.slice(shift);

        let shiftedAlphabet = secondPartOfStr + firstPartOfStr;

        firstPartOfStr = upperAlphabet.slice(0, shift);

        secondPartOfStr = upperAlphabet.slice(shift);

        // Смещенный алфавит со всеми допустимыми символами
        shiftedAlphabet += secondPartOfStr + firstPartOfStr + otherSymbols;

        // Алфавит со всеми допустимыми символами
        alphabet += upperAlphabet + otherSymbols;


        // Проверка на соответствие  выбранному языку введеной пользователем строки

        // Счетчик, который будет сравнивать символы на соответствие языку
        let counter = 0;

        // Условие: Если язык == Русский, то проводится проверка
        for (let i = 0; i < userStr.length; i++) {
            for(let j = 0; j < alphabet.length; j++) {
                if(userStr[i] == alphabet[j]) {
                    counter += 1;
                }
            }
        }


        console.log(`Кол-во символов в строке - ${userStr.length}, счетчик: ${counter}`);



        // Преобразование зашифрованной строки с кирилицей
        
        if (counter == userStr.length) {
            for(let i = 0; i < userStr.length; i++) {
                for(let j = 0; j < alphabet.length; j++) {
                    if(userStr[i] == alphabet[j]) {
                        output += shiftedAlphabet[j];
                    }
                }
            }
        } else {
            output = "Ошибка ввода даных";
            document.querySelector('.out').innerHTML = output;
        }

    }

    if(lang == 2) {

        if (key >= 26 ) {
            shift = key % 26;
        }
        else if(key <= -26) {
            shift = key % 26;
        }
        else {
            shift = key;
        }

        console.log(`Обработанный Ключ - ${shift}`);

        let alphabet = "abcdefghijklmnopqrstuvwxyz";

        let upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let otherSymbols = "\ \"\'\\/0123456789!?@#$%^&*`~.,-=+_";

        let firstPartOfStr = alphabet.slice(0, shift);

        let secondPartOfStr = alphabet.slice(shift);

        let shiftedAlphabet = secondPartOfStr + firstPartOfStr;

        firstPartOfStr = upperAlphabet.slice(0, shift);

        secondPartOfStr = upperAlphabet.slice(shift);

        // Смещенный алфавит со всеми допустимыми символами
        shiftedAlphabet += secondPartOfStr + firstPartOfStr + otherSymbols;

        // Алфавит со всеми допустимыми символами
        alphabet += upperAlphabet + otherSymbols;


        // Проверка на соответствие  выбранному языку введеной пользователем строки

        // Счетчик, который будет сравнивать символы на соответствие языку
        let counter = 0;

        for (let i = 0; i < userStr.length; i++) {
            for(let j = 0; j < alphabet.length; j++) {
                if(userStr[i] == alphabet[j]) {
                    counter += 1;
                }
            }
        }


        console.log(`Кол-во символов в строке - ${userStr.length}, счетчик: ${counter}`);



        // Преобразование зашифрованной строки с латинницей
        
        if (counter == userStr.length) {
            for(let i = 0; i < userStr.length; i++) {
                for(let j = 0; j < alphabet.length; j++) {
                    if(userStr[i] == alphabet[j]) {
                        output += shiftedAlphabet[j];
                    }
                }
            }
        } else {

            output = "Error in text"
        }
    }

    console.log(output);

    document.querySelector('.out').innerHTML = output;
}