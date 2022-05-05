function collapseNav(){
    navb = document.getElementById("navBox");
    if(navb.classList.contains('hidden')){
        navb.classList.add('block');
        navb.classList.remove('hidden');
    }else{
        navb.classList.remove('block');
        navb.classList.add('hidden');
    }
}