var clicks = 0;
var message1 = `
	We want to ensure you are not reviewing the driver based on factors that might 
	be external to the driver. Remember that the traffic, the GPS route, and the 
	rates are not under the driver's control, so please try to rewrite your review 
	taking in account these considerations.
`;
var message2 = `
	Thank you for your review.
`;

$(".stars5").on('click', function(){
	$(this).css('fill', '#000000');
	let index = parseInt(this.id.split('_')[1]);
	for (let i = 0; i < index; i++)
		$(`#star_${i}`).css('fill', '#000000');
	for (let i = index + 1; i < 5; i++)
		$(`#star_${i}`).css('fill', '#F7F7F7');
});

$("#button1").on('click', function(){
	$(".popup1").show();
	if (clicks % 2 == 0) {
		$("#popupMessage").text(message1);
	} else {
		$("#popupMessage").text(message2);
	}
	clicks++;
});

$("#popupButton").on('click', function(){
	if (clicks % 2 == 0) {
		$("#review").val("");
		for (let i = 0; i < 5; i++)
			$(`#star_${i}`).css('fill', '#F7F7F7');
	}
	$(".popup1").hide();
});