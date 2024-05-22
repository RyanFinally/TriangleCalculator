function calculateArea() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);
  
    var area = 0.5 * base * height;
  
    document.getElementById('areaResult').innerHTML = `
      <p>Luas Segitiga: ${area.toFixed(2)}</p>
    `;
  }
  
  function calculatePerimeter() {
    var side1 = parseFloat(document.getElementById('side1').value);
    var side2 = parseFloat(document.getElementById('side2').value);
    var side3 = parseFloat(document.getElementById('side3').value);
  
    var perimeter = side1 + side2 + side3;
  
    document.getElementById('perimeterResult').innerHTML = `
      <p>Keliling Segitiga: ${perimeter.toFixed(2)}</p>
    `;
  }
  