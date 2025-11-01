const DOM = {
  type: 'body',
  classNames: [],
  id: null,
  children: [
    {
      type: 'div',
      classNames: ['wrapper'],
      id: null,
      children: [
        {
          type: 'header',
          classNames: ['header', 'container', 'mb-8'],
          id: null,
          children: [],
        },
        {
          type: 'div',
          classNames: ['main', 'container', 'mb-8'],
          id: null,
          children: [
            {
              type: 'div',
              classNames: ['products', 'mb-8'],
              id: 'unicalId',
              children: [
                {
                  type: 'div',
                  classNames: ['product'],
                  id: null,
                  children: [],
                },
                {
                  type: 'div',
                  classNames: ['product'],
                  id: null,
                  children: [],
                },
                {
                  type: 'div',
                  classNames: ['product'],
                  id: null,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          type: 'footer',
          classNames: ['footer', 'container'],
          id: null,
          children: [],
        },
      ],
    },
  ],
};

function search(element, selector) {
  if(selector.startsWith('.')) {
    const className = selector.slice(1);
    return element.classNames && element.classNames.includes(className);
  }

  if(selector.startsWith('#')) {
    const id = selector.slice(1);
    return element.id === id;
  }
  return element.type === selector;
};

function querySelector(selector) {
  const arr = [DOM];
  for (let i = 0; i < arr.length; i++) {
    const part = arr[i];
    if(search(part, selector)) {
      return part;
    }

    if(part.children) {
      arr.push(...part.children);
    }
  }
  return null;
};

function querySelectorAll(selector) {
  const results = [];
  const arr = [DOM];
  for (let i = 0; i < arr.length; i++) {
    const part = arr[i];
    if(search(part, selector)) {
      results.push(part);
    }

    if(part.children) {
      arr.push(...part.children);
    }
  }
  return results;
};

const firstProduct = querySelector('.product');
console.log(firstProduct);

const id = querySelector('#unicalId');
console.log(id);

const allContainers = querySelectorAll('.container');
console.log(allContainers);