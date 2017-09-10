$(document).ready(function() {
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook:"onEnter", duration: "200%"}});
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
							.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
							.addTo(controller);
})