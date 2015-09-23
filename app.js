[
  "./modules/BadgePage",
  "./modules/DialogPage"
].forEach(function(page) {
  require(page).create();
});

tabris.create("Drawer").append(tabris.create("PageSelector"));
tabris.ui.children("Page")[0].open();