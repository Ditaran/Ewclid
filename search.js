document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header__search').addEventListener('click', function() {
        document.querySelector('.search-form').classList.toggle('search-form__hidden')
    })
})