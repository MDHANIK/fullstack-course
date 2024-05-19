(function () {
	var names = [
		"Yaakov",
		"John",
		"Jen",
		"Jason",
		"Paul",
		"Frank",
		"Larry",
		"Paula",
		"Laura",
		"Jim",
	];
	var byeSpeaker = {};
	var helloSpeaker = {};

	byeSpeaker.speak = function (name) {
		console.log("Good Bye " + name);
	};

	helloSpeaker.speak = function (name) {
		console.log("Hello " + name);
	};
	for (var i = 0; i < names.length; i++) {
		var firstLetter = names[i].charAt(0).toLowerCase();

		if (firstLetter === "j") {
			byeSpeaker.speak(names[i]);
		} else {
			helloSpeaker.speak(names[i]);
		}
	}
})();
