function AreaOfCircle(radius) {
    return 3.14*radius*radius;
}
    
    const radius = prompt('Enter radius of circle: ');
    const value = AreaOfCircle(radius);

window.onload = function(){
    document.getElementById('output').innerHTML = value;
};