/// this function (IIFE) taking name arg
(function (window) {
	var speakWord = "Hello";
	var byeSpeaker = {};
	byeSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	};
	window.byeSpeaker = byeSpeaker;
})(window);
