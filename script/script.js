$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  //   side up script

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // toggle menu/navbar script

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing script

  var typed1 = new Typed(".typing", {
    strings: [
      "Web Designer",
      "Backend Developer",
      "Freelancer",
      "Frontend Developer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed2 = new Typed(".typing-2", {
    strings: [
      "Web Designer",
      "Backend Developer",
      "Freelancer",
      "Frontend Developer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // var typed = new Typed(".typing",{
  //     strings: ["Web Designer", "Backend Developer", "Freelancer", "Frontend Developer"],
  //     typeSpeed: 100,
  //     backSpeed: 60,
  //     loop: true
  // })

  // var typed = new Typed(".typing-2",{
  //     strings: ["Web Designer", "Backend Developer", "Freelancer", "Frontend Developer"],
  //     typeSpeed: 100,
  //     backSpeed: 60,
  //     loop: true
  // })

  // owl carousel script

  //     $('.carouse').owlCarousel({
  //         margin: 20,
  //         loop: true,
  //         autoplayTimeOut: 2000,
  //         autoplayHoverPause: true,
  //         responsive: {
  //             0:{
  //                 items:1,
  //                 nav:false
  //             },
  //             600:{
  //                 items:2,
  //                 nav:false
  //             },
  //             1000:{
  //                 items:3,
  //                 nav:false
  //             }

  //         }
  //     })
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("request_form");

  const fullnameInput = document.getElementById("name");
  const subject = document.getElementById("subject");
  const emailInput = document.getElementById("email");
  const aboutMeTextarea = document.getElementById("description");

  const sucMessage = document.querySelector(".success_message");

  const inputs = [fullnameInput, subject, emailInput, aboutMeTextarea];

  function clearForm() {
    inputs.forEach((input) => {
      input.value = "";
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const bot_token = "7733897917:AAFrUEhrHoiydBa5GPi2Q9T41e_CGRf0nIo";
    const chat_id = "-4745270224";
    const text = `<strong>Full Name:</strong> ${fullnameInput.value}\n<strong>Email:</strong> ${emailInput.value}\n<strong>Subject:</strong> ${subject.value}\n<strong>Desccription:</strong> ${aboutMeTextarea.value}`;

    const data = {
      chat_id: chat_id,
      text: text,
      parse_mode: "HTML",
    };

    const url = `https://api.telegram.org/bot${bot_token}/sendMessage`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.ok === true) {
          clearForm();
          sucMessage.classList.add("success_message_active");
          setTimeout(() => {
            sucMessage.classList.remove("success_message_active");
          }, 3000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
