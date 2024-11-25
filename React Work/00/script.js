let h1 = React.createElement('h1',null,'Hello from react');

let root = document.querySelector('#root');

// console.log(root);

let parent = ReactDOM.createRoot(root);

parent.render(h1);