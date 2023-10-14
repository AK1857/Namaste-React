
import RestaurantCard from "./RestaurentCard";
import {useState,useEffect} from "react"

console.log("useStte",useState)

const Body=()=>{

  const [restaurantList,setRestaurantList]=useState([{
    "info": {
    "id": "369924",
    "name": "Bakingo",
    "cloudinaryImageId": "qisezw7xtzxb9t6mgzz3",
    "locality": "Sector 86",
    "areaName": "Manesar",
    "costForTwo": "₹299 for two",
    "cuisines": [
    "Bakery",
    "Desserts",
    "Beverages",
    "Snacks"
    ],
    "avgRating": 4.3,
    "feeDetails": {
    "restaurantId": "369924",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 9700
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 9700
    },
    "parentId": "3818",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 9.8,
    "serviceability": "SERVICEABLE",
    "slaString": "29 mins",
    "lastMileTravelString": "9.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-09 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/bakingo-sector-86-manesar-gurgaon-369924",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "125878",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Old Railway Road",
    "areaName": "Sector 4",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "125878",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 6200
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 6200
    },
    "parentId": "166",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 6.9,
    "serviceability": "SERVICEABLE",
    "slaString": "33 mins",
    "lastMileTravelString": "6.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-09 03:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-old-railway-road-sector-4-gurgaon-125878",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "411518",
    "name": "McDonald's",
    "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
    "locality": "Sector 48",
    "areaName": "Sohna Road",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "American"
    ],
    "avgRating": 4.3,
    "feeDetails": {
    "restaurantId": "411518",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5400
    },
    "parentId": "630",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "24 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-09 02:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-sector-48-sohna-road-gurgaon-411518",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "39243",
    "name": "KFC",
    "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
    "locality": "ILD Mall",
    "areaName": "Sohna Road",
    "costForTwo": "₹450 for two",
    "cuisines": [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "39243",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 7700
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 7700
    },
    "parentId": "547",
    "avgRatingString": "4.0",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 7.7,
    "serviceability": "SERVICEABLE",
    "slaString": "28 mins",
    "lastMileTravelString": "7.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-09 04:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-ild-mall-sohna-road-gurgaon-39243",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "35192",
    "name": "Om Sweets & Snacks (Sector 10)",
    "cloudinaryImageId": "lber2sijjy4vxl1pevul",
    "locality": "Huda Market",
    "areaName": "Sector 37",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Sweets",
    "North Indian",
    "South Indian",
    "Chinese",
    "Snacks",
    "Desserts",
    "Bakery"
    ],
    "avgRating": 4.4,
    "veg": true,
    "feeDetails": {
    "restaurantId": "35192",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4300
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4300
    },
    "parentId": "676",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 2.6,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "lastMileTravelString": "2.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-08 22:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/om-sweets-and-snacks-sector-10-huda-market-sector-37-gurgaon-35192",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "443494",
    "name": "EatFit",
    "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
    "locality": "ISLAMPUR",
    "areaName": "Sohna Road",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Chinese",
    "Healthy Food",
    "Tandoor",
    "Pizzas",
    "North Indian",
    "Thalis",
    "Biryani"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "443494",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 6200
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 6200
    },
    "parentId": "76139",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 6.2,
    "serviceability": "SERVICEABLE",
    "slaString": "28 mins",
    "lastMileTravelString": "6.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-08 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "brand",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "brand"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "EVERY ITEM",
    "subHeader": "@ ₹159"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/eatfit-islampur-sohna-road-gurgaon-443494",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "289293",
    "name": "BOX8 - Desi Meals",
    "cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
    "locality": "Meditree market",
    "areaName": "Sohna Road",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "North Indian",
    "Biryani",
    "Thalis",
    "Home Food"
    ],
    "avgRating": 4.3,
    "feeDetails": {
    "restaurantId": "289293",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5400
    },
    "parentId": "10655",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 17,
    "lastMileTravel": 5.7,
    "serviceability": "SERVICEABLE",
    "slaString": "12-22 mins",
    "lastMileTravelString": "5.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-09 02:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/box8-desi-meals-meditree-market-sohna-road-gurgaon-289293",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "22353",
    "name": "Subway",
    "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
    "locality": "Welldone Tech Park",
    "areaName": "Sector 48",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Salads",
    "Snacks",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "feeDetails": {
    "restaurantId": "22353",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5400
    },
    "parentId": "2",
    "avgRatingString": "4.2",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "27 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-08 22:55:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/subway-welldone-tech-park-sector-48-gurgaon-22353",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "53777",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Urban Estate",
    "areaName": "Sector 37",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Fast Food",
    "Pizzas"
    ],
    "avgRating": 3.9,
    "feeDetails": {
    "restaurantId": "53777",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4500
    },
    "parentId": "721",
    "avgRatingString": "3.9",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 2.6,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "2.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-09 01:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-hut-urban-estate-sector-37-gurgaon-53777",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "233067",
    "name": "La Pino'z Pizza",
    "cloudinaryImageId": "obtyqt35sq55t0owwixq",
    "locality": "Sapphire Mall",
    "areaName": "Sector 83",
    "costForTwo": "₹450 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 3.8,
    "feeDetails": {
    "restaurantId": "233067",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 9700
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 9700
    },
    "parentId": "4961",
    "avgRatingString": "3.8",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 36,
    "lastMileTravel": 9.3,
    "serviceability": "SERVICEABLE",
    "slaString": "36 mins",
    "lastMileTravelString": "9.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-08 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹399",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-sapphire-mall-sector-83-gurgaon-233067",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "181982",
    "name": "Faasos - Wraps & Rolls",
    "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
    "locality": "Huda Market",
    "areaName": "Sector 37",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Kebabs",
    "Fast Food",
    "Snacks",
    "North Indian",
    "American",
    "Healthy Food",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "feeDetails": {
    "restaurantId": "181982",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3800
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3800
    },
    "parentId": "21809",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 2.6,
    "serviceability": "SERVICEABLE",
    "slaString": "32 mins",
    "lastMileTravelString": "2.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-08 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-huda-market-sector-37-gurgaon-181982",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "259714",
    "name": "NIC Ice Creams",
    "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
    "locality": "Mata Road",
    "areaName": "Sector 14",
    "costForTwo": "₹120 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts"
    ],
    "avgRating": 4.5,
    "veg": true,
    "feeDetails": {
    "restaurantId": "259714",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 7000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 7000
    },
    "parentId": "6249",
    "avgRatingString": "4.5",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 7.3,
    "serviceability": "SERVICEABLE",
    "slaString": "32 mins",
    "lastMileTravelString": "7.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-09 00:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "EVERY ITEM",
    "subHeader": "@ ₹169"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/nic-ice-creams-mata-road-sector-14-gurgaon-259714",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "93954",
    "name": "California Burrito",
    "cloudinaryImageId": "y5w5l4clcmjsspuoxdz9",
    "locality": "Sector 49",
    "areaName": "Sector 49",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Mexican",
    "American",
    "Salads",
    "Continental",
    "Keto",
    "Healthy Food"
    ],
    "avgRating": 4.4,
    "feeDetails": {
    "restaurantId": "93954",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 7500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 7500
    },
    "parentId": "1252",
    "avgRatingString": "4.4",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 7.6,
    "serviceability": "SERVICEABLE",
    "slaString": "32 mins",
    "lastMileTravelString": "7.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-09 02:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/california-burrito-sector-49-gurgaon-93954",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "17572",
    "name": "Bikanervala",
    "cloudinaryImageId": "e5gsrcscg9nefepiwitx",
    "locality": "Ild Trade Centre",
    "areaName": "Sohna Road",
    "costForTwo": "₹450 for two",
    "cuisines": [
    "North Indian",
    "Chinese",
    "Desserts",
    "South Indian",
    "Sweets"
    ],
    "avgRating": 4.2,
    "veg": true,
    "feeDetails": {
    "restaurantId": "17572",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 7500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 7500
    },
    "parentId": "45936",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 7.7,
    "serviceability": "SERVICEABLE",
    "slaString": "32 mins",
    "lastMileTravelString": "7.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-09 01:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/bikanervala-ild-trade-centre-sohna-road-gurgaon-17572",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "69467",
    "name": "Starbucks Coffee",
    "cloudinaryImageId": "4df3497f1460dfd1ecd8125222f6d362",
    "locality": "Vatika Bussiness Park",
    "areaName": "Sector 49",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Beverages",
    "Cafe",
    "Snacks",
    "Desserts",
    "Bakery",
    "Ice Cream"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "69467",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 7700
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 7700
    },
    "parentId": "195515",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 7.6,
    "serviceability": "SERVICEABLE",
    "slaString": "31 mins",
    "lastMileTravelString": "7.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-08 23:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/starbucks-coffee-vatika-bussiness-park-sector-49-gurgaon-69467",
    "type": "WEBLINK"
    }
    },]);

 useEffect(()=>{


  getData()
 

 },[])

const getData= async()=>{
  let response=  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4222734&lng=76.99992979999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

  let json= await response.json()


  //setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);





}

    return(<div className="body-container">
  
  {console.log("Rlist",restaurantList)}
      <div className="search"> search</div>
  
      <div className="restaurant-container">

        {restaurantList.map((restaurant,i)=>{
         return <RestaurantCard restaurant={restaurant} key={i} />
        })}
    
      </div>
  
  
    </div>)
  }

  export default Body;