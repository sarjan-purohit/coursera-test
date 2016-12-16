(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//ToBuyController
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.toBuyItems=ShoppingListCheckOffService.getToBuyItems();
  toBuyList.funBuyItem = function (itemIndex) {
      ShoppingListCheckOffService.funBuyItem(itemIndex);
  };
}

//AlreadyBoughtController
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.boughtItems=ShoppingListCheckOffService.getBoughtItems();
}

//Service
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems =  [
    {
      name: "Banana",
      quantity: "3"
    },
    {
      name: "Donuts",
      quantity: "10"
    },
    {
      name: "Milk Packets",
      quantity: "1"
    },
    {
      name: "Oranges",
      quantity: "5"
    },
    {
      name: "Wafers",
      quantity: "5"
    }
  ];

  var boughtItems=[];

  service.funBuyItem = function (itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
      return boughtItems;
  };
}
})();
