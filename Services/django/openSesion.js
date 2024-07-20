function openSession (){    
    if(localStorage.getItem("open") == null){
        localStorage.setItem('open', null);
        return false;
    }
    return true;
}