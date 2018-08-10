module.exports.openInNewTab = (url, options) => {
  let timeout = 20;
  if (options && options.timeout) timeout = options.timeout;
  const win = window.open(window.location.href, "_blank");
  setTimeout(() => (win.location.href = url), timeout);
};
