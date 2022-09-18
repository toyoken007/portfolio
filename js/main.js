const lefts = document.querySelector('.exp_wrap_links_left')
const rights = document.querySelector('.exp_wrap_links_right')

lefts.addEventListener('mouseover', function(){
    const lefts_img = document.querySelector('.left_fil')
    lefts_img.style.filter = 'none'
})

lefts.addEventListener('mouseleave', function(){
    const lefts_img = document.querySelector('.left_fil')
    lefts_img.style.filter = 'brightness(0.8)'
})

rights.addEventListener('mouseover', function(){
    const rights_img = document.querySelector('.right_fil')
    rights_img.style.filter = 'none'
})

rights.addEventListener('mouseleave', function(){
    const rights_img = document.querySelector('.right_fil')
    rights_img.style.filter = 'brightness(0.8)'
})