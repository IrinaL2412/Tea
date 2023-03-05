$(document).ready(function () {
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.card-image').magnificPopup({
        type: 'image'
    });

    $('.slider-tea').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.slick-button.left'),
        nextArrow: $('.slick-button.right'),
    });

    $(function () {
        $("#accordion").accordion({
            heightStyle: 'content',
        });
    });

    let countryCode = $('#validationDefault05');
    let form = $('#form');
    let newForm = $('.newForm');

    countryCode.keydown((event) => {
        if (event.keyCode === 8 || event.keyCode === 46) {
            return true;
        }
        if (isNaN(+event.key) || event.keyCode === 32) {
            return false;
        }
    });

    function isValidForm() {
        return (
            checkFieldsPresence() &&
            checkCountryCodeLength()

        );
    }

    function checkFieldsPresence() {
        let formFields = $('.form-control');
        for (let i = 1; i < formFields.length; i++) {
            if (!formFields.eq(i).val().trim()) {
                alert(`Заполните поле "${formFields.eq(i).prev().text()}"`);
                return false;
            }
        }
        return true;
    }

    function checkCountryCodeLength() {
        countryCode.minLength = 6;
        if (countryCode.val().length < 6) {
            alert("Ваш индекс содержит менее 6 знаков. Попробуйте ещё раз.");
            return false;
        } else {
            return true;
        }
    }

    form.submit((event) => {
        event.preventDefault();
        if (isValidForm()) {
            form.css('display', 'none');
            newForm.css('display', 'block');
        }
    });

    newForm.children('button').click(() => {
        newForm.css('display', 'none');
    });
});

