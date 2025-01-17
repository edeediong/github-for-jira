const params = new URLSearchParams(window.location.search.substring(1));
const jiraHost = params.get("xdm_e");

function openChildWindow(url) {
  const child = window.open(url);
  const interval = setInterval(function () {
    if (child.closed) {
      clearInterval(interval);
      AP.navigator.reload();
    }
  }, 1000);

  return child;
}

$('.select-server').click(function (event) {
  event.preventDefault();
  const uuid = $(this).data("identifier");
  window.AP.context.getToken(function(token) {
    const child = openChildWindow(`/session/github/${uuid}/configuration?ghRedirect=to`);
    child.window.jiraHost = jiraHost;
    child.window.jwt = token;
  });
});
