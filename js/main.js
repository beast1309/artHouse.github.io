const questions = document.querySelectorAll('.help__questions-list__item')
questions.forEach((question) => {
    $(question).on('click', function () {
        $(question).toggleClass('--active')
    })
})