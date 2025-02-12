function attach(content){
    const element = document.createElement('li');
    element.innerHTML = content;

    const parent = document.querySelector('ul');
    parent.append(element);

}

attach("TS");