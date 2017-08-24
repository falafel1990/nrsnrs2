$(document).ready(function () {
	$('#checkbox').on('change', function () {
		if ($('#checkbox').prop('checked')) {
			$('#submit').attr('disabled', false);
		} else {
			$('#submit').attr('disabled', true);
		}
	});
	$("#form").submit(function () {
		$.ajax({
			type: "POST",
			url: "/php/form.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
});
