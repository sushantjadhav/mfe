const mount = (el) => {
  const content = '<h1>Dashboard Module</h1>';
  el.innerHTML = content;
};

export { mount };

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-dashboard');
  if (el) {
    mount(el);
  }
}
