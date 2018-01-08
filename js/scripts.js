/* Codingk8 - Wild circus 🎪 project - The project that got me into my coding bootcamp */

$(".imagecentre1").on("mouseenter", function() {
		$(this).css("opacity", 0.5);
});

$(".imagecentre1").on("mouseleave", function() {
		$(this).css("opacity", 1);
});

$(".imagecentre").on("mouseenter", function() {
	$(this).css("opacity", 0.5);
});

$(".imagecentre").on("mouseleave", function() {
	$(this).css("opacity", 1);
});

$(".footer").on("mouseenter", function() {
	$(this).css("background-color", "#66cccc");
})

$(".footer").on("mouseleave", function() {
	$(this).css("background-color", "#336666");
})

$(".aside").on("mouseenter", function() {
	$(this).css("border-color", "#cc3333");
})

$(".aside").on("mouseleave", function() {
	$(this).css("border-color", "#ffcc00");
})

$(".joke").on("mouseenter", function() {
	$(this).html("This is a joke :-) But they really are wonderful!");
	$(this).css("background-color", "#66cccc");
})

$(".joke").on("mouseleave", function() {
	$(this).html("Learn more about our wonderful attractions!");
	$(this).css("background-color", "#cc3333");
})