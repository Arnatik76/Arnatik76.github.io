var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

(function(window) {
  var HelloSpeaker = {};
  HelloSpeaker.speak = function(name) {
    document.getElementById('output').innerHTML += `<p class="hello">Hello ${name}</p>`;
  };
  window.HelloSpeaker = HelloSpeaker;
})(window);

(function(window) {
  var ByeSpeaker = {};
  ByeSpeaker.speak = function(name) {
    document.getElementById('output').innerHTML += `<p class="goodbye">Goodbye ${name}</p>`;
  };
  window.ByeSpeaker = ByeSpeaker;
})(window);

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    ByeSpeaker.speak(names[i]);
  } else {
    HelloSpeaker.speak(names[i]);
  }
}
