$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("boxesdisplay.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#**************************************************************************"
    },
    {
      "line": 2,
      "value": "#Author: Jorge Quiros"
    },
    {
      "line": 3,
      "value": "#Last updated: 01/19/20"
    },
    {
      "line": 4,
      "value": "#Description: Feature file for boxes display user story"
    },
    {
      "line": 5,
      "value": "#**************************************************************************"
    }
  ],
  "line": 7,
  "name": "Smartbox Boxes Display",
  "description": "As a customer I want to view a list of products so I can select some to purchase",
  "id": "smartbox-boxes-display",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5869998199,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 11,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MainPage.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 8847352900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "As a Customer I search in the main field",
  "description": "",
  "id": "smartbox-boxes-display;as-a-customer-i-search-in-the-main-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I look for specific product \"bistrots\" in search box",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see suggestion for my search",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "bistrots",
      "offset": 29
    }
  ],
  "location": "MainPage.iLookForSpecificProductInSearchBox(String)"
});
formatter.result({
  "duration": 639492900,
  "status": "passed"
});
formatter.match({
  "location": "MainPage.iShouldSeeSuggestionForMySearch()"
});
formatter.result({
  "duration": 522753699,
  "status": "passed"
});
formatter.after({
  "duration": 259700,
  "status": "passed"
});
formatter.before({
  "duration": 504100,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 11,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MainPage.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 8341793900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "As a Customer I can search in the filter box of sub category page",
  "description": "",
  "id": "smartbox-boxes-display;as-a-customer-i-can-search-in-the-filter-box-of-sub-category-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I look for an specific product in the menu",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Subcategory page product page appears",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should see the filter options",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I search on the box filter for Title \"3 jours de\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on any Box",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "A link for review section should appear",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPage.iLookForAnSpecificProductInTheMenu()"
});
formatter.result({
  "duration": 2810140099,
  "status": "passed"
});
formatter.match({
  "location": "SubCategoryPage.subcategoryPageProductPageAppears()"
});
formatter.result({
  "duration": 129198099,
  "status": "passed"
});
formatter.match({
  "location": "SubCategoryPage.iShouldSeeTheFilterOptions()"
});
formatter.result({
  "duration": 148486401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 jours de",
      "offset": 38
    }
  ],
  "location": "SubCategoryPage.iSearchOnTheBoxFilterForTitle(String)"
});
formatter.result({
  "duration": 828464501,
  "status": "passed"
});
formatter.match({
  "location": "SubCategoryPage.clickOnAnyBoxProduct()"
});
formatter.result({
  "duration": 3689124700,
  "status": "passed"
});
formatter.match({
  "location": "ProductPage.aLinkForReviewSectionShouldAppear()"
});
formatter.result({
  "duration": 98810700,
  "status": "passed"
});
formatter.after({
  "duration": 92500,
  "status": "passed"
});
formatter.uri("shoppingcart.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#**************************************************************************"
    },
    {
      "line": 2,
      "value": "#Author: Jorge Quiros"
    },
    {
      "line": 3,
      "value": "#Last updated:"
    },
    {
      "line": 4,
      "value": "#Description: Feature file for add to shopping cart display user story"
    },
    {
      "line": 5,
      "value": "#**************************************************************************"
    }
  ],
  "line": 7,
  "name": "Smartbox Shopping cart",
  "description": "As a Customer I want to find a desired box and add it to the cart so I can make adjustments prior to checkout",
  "id": "smartbox-shopping-cart",
  "keyword": "Feature"
});
formatter.before({
  "duration": 156599,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 11,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MainPage.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 9088527300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "As a Customer I want a desired box and add a title to the cart so I can make adjustments",
  "description": "",
  "id": "smartbox-shopping-cart;as-a-customer-i-want-a-desired-box-and-add-a-title-to-the-cart-so-i-can-make-adjustments",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I look for an specific product in the menu",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Subcategory page product page appears",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Click on any Box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Ajouter au panier",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "options Continuer mes Achats, Voir le Panier and Vider le Panier appears on the add to cart overlay",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on voir le panier button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should see the item on the shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPage.iLookForAnSpecificProductInTheMenu()"
});
formatter.result({
  "duration": 3159433500,
  "status": "passed"
});
formatter.match({
  "location": "SubCategoryPage.subcategoryPageProductPageAppears()"
});
formatter.result({
  "duration": 139720401,
  "status": "passed"
});
formatter.match({
  "location": "SubCategoryPage.clickOnAnyBoxProduct()"
});
formatter.result({
  "duration": 3165115499,
  "status": "passed"
});
formatter.match({
  "location": "ProductPage.iClickOnAjouterAuPanier()"
});
formatter.result({
  "duration": 431474600,
  "status": "passed"
});
formatter.match({
  "location": "ProductPage.optionsContinuerMesAchatsVoirLePanierAndViderLePanierAppearsOnTheAddToCartOverlay()"
});
formatter.result({
  "duration": 4917184000,
  "status": "passed"
});
formatter.match({
  "location": "ProductPage.iClickOnVoirLePanierButton()"
});
formatter.result({
  "duration": 7745368201,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartPage.iShouldSeeTheItemOnTheShoppingCart()"
});
formatter.result({
  "duration": 74545299,
  "status": "passed"
});
formatter.after({
  "duration": 55100,
  "status": "passed"
});
formatter.before({
  "duration": 207000,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 11,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MainPage.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 9593820999,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "As a Customer I can remove a product from shopping cart",
  "description": "",
  "id": "smartbox-shopping-cart;as-a-customer-i-can-remove-a-product-from-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I click on add to cart icon",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I can remove an item from the shopping cart",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the product should not appear in the shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingCartPage.iClickOnAddToCartIcon()"
});
formatter.result({
  "duration": 5937919900,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartPage.iCanRemoveAnItemFromTheShoppingCart()"
});
formatter.result({
  "duration": 426111701,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartPage.theProductShouldNotAppearInTheShoppingCart()"
});
formatter.result({
  "duration": 562708801,
  "status": "passed"
});
formatter.after({
  "duration": 42201,
  "status": "passed"
});
});