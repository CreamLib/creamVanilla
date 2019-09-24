let itemMenuOpen;

function indexInParent(node) {
  var children = node.parentNode.childNodes;
  var num = 0;
  for (var i = 0; i < children.length; i++) {
    if (children[i] == node) return num;
    if (children[i].nodeType == 1) num++;
  }
  return -1;
}

function init_menu() {
  let menuPrimary = document.getElementsByClassName('primary-nav')[0];
  let menuPrimaryBtns = menuPrimary.getElementsByTagName('button');
  for (let i = 0; i < menuPrimaryBtns.length; i++) {
    menuPrimaryBtns[i].addEventListener('click', function (event) {
      let btnClicked = event.target;
      let ssMenuBtn = btnClicked.nextElementSibling;
      let containerMenuBtn = btnClicked.parentNode;
      let containerMenu = containerMenuBtn.parentNode;

      if (containerMenuBtn.classList.contains('closed')) {
        // Close open item
        if (itemMenuOpen != 0) {
          let contentOpened = containerMenu.childNodes[itemMenuOpen - 1];
          contentOpened.setAttribute('aria-hidden', 'true');
          contentOpened.classList.add('closed');
        }
        ssMenuBtn.setAttribute('aria-hidden', 'false');
        containerMenuBtn.classList.remove('closed');
        itemMenuOpen = (indexInParent(containerMenuBtn) + 1);
      } else {
        ssMenuBtn.setAttribute('aria-hidden', 'true');
        containerMenuBtn.classList.add('closed');
      }

    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  /* Menu */
  itemMenuOpen = 0;
  if (document.getElementsByClassName('primary-nav').length != 0) {
    init_menu();
  }


});