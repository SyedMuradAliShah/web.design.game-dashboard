 document.addEventListener("DOMContentLoaded", function () {
    const alertModal = new bootstrap.Modal(document.getElementById('alertModal'));
    alertModal.show();
  });//  ============================ image-preview
// script.js
var btnUpload = $("#upload_file"),
		btnOuter = $(".button_outer");
	btnUpload.on("change", function(e){
		var ext = btnUpload.val().split('.').pop().toLowerCase();
		if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
			$(".error_msg").text("Not an Image...");
		} else {
			$(".error_msg").text("");
			btnOuter.addClass("file_uploading");
			setTimeout(function(){
				btnOuter.addClass("file_uploaded");
			},3000);
			var uploadedFile = URL.createObjectURL(e.target.files[0]);
			setTimeout(function(){
				$("#uploaded_view").append('<img src="'+uploadedFile+'" />').addClass("show");
			},3500);
		}
	});
	$(".file_remove").on("click", function(e){
		$("#uploaded_view").removeClass("show");
		$("#uploaded_view").find("img").remove();
		btnOuter.removeClass("file_uploading");
		btnOuter.removeClass("file_uploaded");
	});




  const videoContainers = document.querySelectorAll('.video-iframe');
  const skipButton = document.getElementById('skip-button');
  const videoNumber = document.getElementById('video-number');
  let currentVideoIndex = 0;
  let timer;

  function playCurrentVideo() {
      videoContainers[currentVideoIndex].style.display = 'block';
      updateVideoNumber();
      startSkipTimer(5); // Start the timer with 5 seconds
  }

  function hideAllVideos() {
      videoContainers.forEach(video => {
          video.style.display = 'none';
      });
  }

  function skipToNextVideo() {
      hideAllVideos();
      currentVideoIndex = (currentVideoIndex + 1) % videoContainers.length;
      playCurrentVideo();
  }

  function updateVideoNumber() {
      videoNumber.textContent = `${currentVideoIndex + 1}`;
  }

  function startSkipTimer(seconds) {
      let remainingTime = seconds;
      skipButton.disabled = true;
      skipButton.style.cursor = 'not-allowed';

      function updateButtonLabel() {
          if (remainingTime === 0) {
              clearInterval(timer);
              skipButton.textContent = 'Watch Next';
              skipButton.disabled = false;
              skipButton.style.cursor = 'pointer';
          } else {
              skipButton.textContent = `Skip (${remainingTime})`;
          }
          remainingTime--;
      }

      updateButtonLabel();
      timer = setInterval(updateButtonLabel, 1000); // Update every second (1000 milliseconds)
  }

  // Play the first video
  playCurrentVideo();

  // Add a click event listener to the skip button
  skipButton.addEventListener('click', skipToNextVideo);




