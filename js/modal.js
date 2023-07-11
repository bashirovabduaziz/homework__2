const modal = document.querySelector("#modal");
const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');

btnOpen.addEventListener('click', function(e){
    modal.classList.add('active')
})
btnClose.addEventListener('click', function(e){
    modal.classList.remove('active')
});

