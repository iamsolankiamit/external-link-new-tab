module.exports.default = (url, options) => {
  let timeout = 20;
  if (options && options.timeout) timeout = options.timeout;
  const win = window.open(window.location.host, "_blank");
  setTimeout(() => (win.location.href = url), timeout);
};
