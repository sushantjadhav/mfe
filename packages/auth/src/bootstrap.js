const mount = (el) => {
  const content = '<h1>Auth Module</h1>';
  el.innerHTML = content;
};

export { mount };

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-auth');
  if (el) {
    mount(el);
  }
}
