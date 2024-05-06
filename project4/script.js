$(document).ready(function() {
    // Handle hover effect on #overlay
    $("#overlay").hover(
        function() {
            $(this).addClass("hovered");
        },
        function() {
            $(this).removeClass("hovered");
        }
    );

    // Function to handle slideshow
    function handleSlideshow(slideshow) {
        var slides = slideshow.find(".slide");
        var currentSlideIndex = 0;

        function showSlide(index) {
            slides.hide();
            slides.eq(index).show();
        }

        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        }

        showSlide(currentSlideIndex);
        setInterval(nextSlide, 170);
    }

    // Handle slideshows for each container
    $(".slideshow-container").each(function() {
        handleSlideshow($(this));
    });

    // Handle slideshows for page 6
    handleSlideshow($(".slideshow-container-2"));

    // Handle hover effect on #nav-img
    $("#nav-img").hover(
        function() {
            $(this).attr("src", "hover.png");
        },
        function() {
            $(this).attr("src", "next2.png");
        }
    );
});

$(document).ready(function() {
    // Handle hover effect on overlay-image-6
    $(".overlay-image-6").hover(
        function() {
            $(this).attr("src", "images/your-hover-image.png");
            // Additional actions when hovered
        },
        function() {
            $(this).attr("src", "images/your-original-image.png");
            // Additional actions when not hovered
        }
    );
});