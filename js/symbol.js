export const Symbols = {
  // Function to create the cross SVG
  createCross: function () {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('class', 'symbol cross');
    svg.setAttribute('width', '80%');
    svg.setAttribute('height', '80%');
    svg.setAttribute('fill', 'none');

    // Create group element
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('id', 'frame');

    // Create cross group
    const crossGroup = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'g'
    );
    crossGroup.setAttribute('id', 'cross');

    // Function to create path elements
    function createPath(id, d, stroke, strokeWidth, strokeLinecap) {
      const path = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      );
      path.setAttribute('id', id);
      path.setAttribute('d', d);
      path.setAttribute('stroke', stroke);
      path.setAttribute('stroke-width', strokeWidth);
      path.setAttribute('stroke-linecap', strokeLinecap);
      return path;
    }

    // Create all the paths
    const paths = [
      createPath('Line 5', 'M32 32L44.0208 44.0208', 'black', '3', 'round'),
      createPath('Line 13', 'M17 17L29.0208 29.0208', 'black', '3', 'round'),
      createPath('Line 10', 'M56 56L68.0208 68.0208', 'black', '3', 'round'),
      createPath('Line 11', 'M71 71L83.0208 83.0208', 'black', '3', 'round'),
      createPath(
        'Line 3',
        'M32 68.0209L44.0208 56.0001',
        'black',
        '3',
        'round'
      ),
      createPath(
        'Line 14',
        'M17 83.0208L29.0208 70.9999',
        'black',
        '3',
        'round'
      ),
      createPath(
        'Line 7',
        'M56 44.0209L68.0208 32.0001',
        'black',
        '3',
        'round'
      ),
      createPath(
        'Line 12',
        'M71 29.0209L83.0208 17.0001',
        'black',
        '3',
        'round'
      ),
    ];

    // Create the subtract path
    const subtractPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    subtractPath.setAttribute('id', 'Subtract');
    subtractPath.setAttribute('fill-rule', 'evenodd');
    subtractPath.setAttribute('clip-rule', 'evenodd');
    subtractPath.setAttribute(
      'd',
      'M50 55C52.7614 55 55 52.7614 55 50C55 47.2386 52.7614 45 50 45C47.2386 45 45 47.2386 45 50C45 52.7614 47.2386 55 50 55ZM50 53C51.6569 53 53 51.6569 53 50C53 48.3431 51.6569 47 50 47C48.3431 47 47 48.3431 47 50C47 51.6569 48.3431 53 50 53Z'
    );
    subtractPath.setAttribute('fill', 'black');

    // Create the circle
    const circle = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    );
    circle.setAttribute('id', 'Ellipse 18');
    circle.setAttribute('cx', '50');
    circle.setAttribute('cy', '50');
    circle.setAttribute('r', '2');
    circle.setAttribute('fill', 'black');

    // Append all paths to the cross group
    paths.forEach((path) => crossGroup.appendChild(path));
    crossGroup.appendChild(subtractPath);
    crossGroup.appendChild(circle);

    // Append cross group to main group
    group.appendChild(crossGroup);

    // Append group to SVG
    svg.appendChild(group);

    return svg;
  },

  // Function to create the circle SVG
  createCircle: function () {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('class', 'symbol circle');
    svg.setAttribute('width', '80%');
    svg.setAttribute('height', '80%');
    svg.setAttribute('fill', 'none');

    // Create group element
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('id', 'frame');

    // Create the path for the circle
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('id', 'Subtract');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('clip-rule', 'evenodd');
    path.setAttribute(
      'd',
      'M78.1428 74.0215C83.6654 67.5576 87 59.1682 87 50C87 40.8371 83.6693 32.4521 78.1525 25.9897L80.2799 23.8623C86.3367 30.8727 90 40.0085 90 50C90 59.9968 86.3328 69.1371 80.2702 76.1489L78.1428 74.0215ZM78.234 21.6655C70.9994 14.4565 61.0201 10 50 10C40.0032 10 30.8629 13.6672 23.8511 19.7298L25.9785 21.8572C32.4424 16.3346 40.8318 13 50 13C60.1917 13 69.421 17.1207 76.1127 23.7869L78.234 21.6655ZM76.1022 76.2235C69.4114 82.8836 60.1864 87 50 87C40.8371 87 32.452 83.6692 25.9897 78.1524L23.8622 80.2798C30.8726 86.3367 40.0085 90 50 90C61.0148 90 70.9898 85.5478 78.2235 78.3449L76.1022 76.2235ZM13 50C13 60.1917 17.1207 69.4209 23.7868 76.1126L21.6655 78.2339C14.4564 70.9994 10 61.0201 10 50C10 38.9852 14.4522 29.0102 21.6551 21.7765L23.7765 23.8978C17.1164 30.5886 13 39.8136 13 50Z'
    );
    path.setAttribute('fill', 'black');

    // Append path to group
    group.appendChild(path);

    // Append group to SVG
    svg.appendChild(group);

    return svg;
  },
};
