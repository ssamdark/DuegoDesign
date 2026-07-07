document.querySelectorAll('.dropdown').forEach(function (dropdown) {
  var trigger = dropdown.querySelector('.select-box');
  var label = trigger.firstChild;

  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelectorAll('.dropdown.open').forEach(function (other) {
      if (other !== dropdown) other.classList.remove('open');
    });
    dropdown.classList.toggle('open');
  });

  dropdown.querySelectorAll('.dropdown-menu li').forEach(function (item) {
    item.addEventListener('click', function () {
      dropdown.querySelector('.dropdown-menu li.active')?.classList.remove('active');
      item.classList.add('active');
      label.textContent = item.textContent;
      dropdown.classList.remove('open');
    });
  });
});

document.addEventListener('click', function () {
  document.querySelectorAll('.dropdown.open').forEach(function (d) { d.classList.remove('open'); });
});

document.querySelectorAll('.lnb-has-sub > .lnb-sub-toggle').forEach(function (toggle) {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    toggle.parentElement.classList.toggle('open');
  });
});

var lnb = document.querySelector('.lnb');
var lnbToggle = document.getElementById('lnbToggle');
if (lnb && lnbToggle) {
  var lnbToggleIcon = lnbToggle.querySelector('img');
  lnbToggle.addEventListener('click', function () {
    var collapsed = lnb.classList.toggle('lnb--collapsed');
    lnbToggleIcon.src = collapsed ? 'img/iocn_right.png' : 'img/iocn_left.png';
  });
}
