// STEP 1: Создаем массив имен
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// STEP 2: Исправляем объекты для вывода сообщений
(function(window) {
  var HelloSpeaker = {};
  HelloSpeaker.speak = function(name) {
    console.log("Hello " + name);
  };
  window.HelloSpeaker = HelloSpeaker;
})(window);

(function(window) {
  var ByeSpeaker = {};
  ByeSpeaker.speak = function(name) {
    console.log("Goodbye " + name);
  };
  window.ByeSpeaker = ByeSpeaker;
})(window);

// STEP 3: Проходим по массиву и вызываем правильную функцию
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    ByeSpeaker.speak(names[i]);
  } else {
    HelloSpeaker.speak(names[i]);
  }
}
