import {
	GET,
	POST,
	DELETE,
	PUT,
	PATCH,
	OPTIONS,
	call,
} from './typefetch';


/** Override individual level settings
 * Sellers can specify global settings for returns in Seller Center, and they can override individual item level settings using this API.
*/
const x0 = call<{
	body: {},
	query: {
		/**
		 * Feed Type
		 */
		'feedType': string,
	},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {},
}>('/v1/auth', POST);


/** Get status of an item feed
 * You can display the status of an item within a feed. Use the feed ID returned from the upload an item API.
*/
const x1 = call<{
	body: {},
	query: {
		/**
		 * Includes details of each entity in the feed. Do not set this parameter to true.
		 */
		'includeDetails'?: string,
		/**
		 * The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true.
		 */
		'offset'?: string,
		/**
		 * The number of entities to be returned. It cannot be more than 50 entities. Use it only when the includeDetails is set to true.
		 */
		'limit'?: string,
	},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {
		/**
		 * The feed ID.
		 */
		'feedId': string,
	},
}>('/v1/auth', GET);


/** Get Inventory
 * You can use this API to get the inventory for a given item.
*/
const x2 = call<{
	body: {},
	query: {
		/**
		 * A seller-provided Product ID
		 */
		'sku': string,
	},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {},
}>('/v1/auth', GET);


/** Update the inventory for a given item.
 * Updates the inventory for a given item.
*/
const x3 = call<{
	body: {
		/**
		 * body
		 */
		'body': undefined,
	},
	query: {
		/**
		 * An arbitrary alphanumeric unique ID, specified by the seller, identifying each item.
		 */
		'sku': string,
	},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {},
}>('/v1/auth', PUT);


/** Get all items
 * Displays a list of all items by using either nextCursor or offset and limit query parameters
*/
const x4 = call<{
	body: {},
	query: {
		/**
		 * Used for pagination when more than 200 items are retrieved.
		 */
		'nextCursor'?: string,
		/**
		 * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item.
		 */
		'sku'?: string,
		/**
		 * The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true.
		 */
		'offset'?: string,
		/**
		 * The number of entities to be returned. It cannot be more than 50 entities. Use it only when the includeDetails is set to true.
		 */
		'limit'?: string,
	},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {},
}>('/v1/auth', GET);


/** Get items number by status
 * Displays a number of all items by Status
*/
const x5 = call<{
	body: {
		/**
		 * status
		 */
		'status'?: undefined,
	},
	query: {},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {},
}>('/v1/auth', GET);


/** Retire an item
 * Completely deactivates and un-publishes an item from the site.
*/
const x6 = call<{
	body: {},
	query: {},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {
		/**
		 * SKU
		 */
		'SKU': string,
	},
}>('/v1/auth', DELETE);


/** Get an item
 * Retrieves an item and displays the item details.
*/
const x7 = call<{
	body: {},
	query: {},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {
		/**
		 * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. 
		 */
		'sku': string,
	},
}>('/v1/auth', GET);


/** Search With Specific Query Parameter
 * Search With Specific Query Parameter
*/
const x8 = call<{
	body: {
		/**
		 * query
		 */
		'query'?: undefined,
		/**
		 * upc
		 */
		'upc'?: undefined,
		/**
		 * gtin
		 */
		'gtin'?: undefined,
	},
	query: {},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {},
}>('/v1/auth', GET);


/** Get Lag Time
 * This API allows the retrieval of Lag Time for an item with a given SKU.
*/
const x9 = call<{
	body: {},
	query: {
		/**
		 * A seller-provided Product ID.
		 */
		'sku': string,
	},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {},
}>('/v1/auth', GET);


/** Get all orders
 * Retrieves the details of all the orders for specified search criteria.
*/
const x10 = call<{
	body: {},
	query: {
		/**
		 * A seller-provided Product ID
		 */
		'sku'?: string,
		/**
		 * The customer order ID
		 */
		'customerOrderId'?: string,
		/**
		 * The purchase order ID. One customer may have multiple purchase orders.
		 */
		'purchaseOrderId'?: string,
		/**
		 * Status may be specified to return orders of that type. Valid statuses are: Created, Acknowledged, Shipped, and Cancelled.
		 */
		'status'?: string,
		/**
		 * Start Date for querying all purchase orders after that date. Use one of the following formats, based on UTC, ISO 8601
		 */
		'createdStartDate': string,
		/**
		 * Limits orders returned to those created before this createdEndDate.
		 */
		'createdEndDate'?: string,
		/**
		 * Limits orders returned to those that have orderLines with an expected ship date after this fromExpectedShipDate.
		 */
		'fromExpectedShipDate'?: string,
		/**
		 * Limits orders returned to those that have orderLines with an expected ship date before this toExpectedShipDate
		 */
		'toExpectedShipDate'?: string,
		/**
		 * The number of orders to be returned.
		 */
		'limit'?: string,
	},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {},
}>('/v1/auth', GET);


/** Get all released orders
 * Retrieves all the orders with line items that are in the "created" status, that is, these orders have been released from the Walmart Order Management System to the seller for processing.
*/
const x11 = call<{
	body: {},
	query: {
		/**
		 * Start Date for querying all purchase orders after that date. Use one of the following formats, based on UTC, ISO 8601.
		 */
		'createdStartDate': string,
		/**
		 * End date for querying all purchase orders prior to the date. Use one of the following formats, based on UTC, ISO 8601.
		 */
		'createdEndDate': string,
		/**
		 * The number of orders to be returned. Cannot be larger than 200.
		 */
		'limit'?: string,
	},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {},
}>('/v1/auth', GET);


/** Retrieves order detail for a specific purchaseOrderId
 * Retrieves an order detail for a specific purchaseOrderId
*/
const x12 = call<{
	body: {},
	query: {},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {
		/**
		 * purchaseOrderId
		 */
		'purchaseOrderId': string,
	},
}>('/v1/auth', GET);


/** Acknowledge Orders
 * You can use this API to acknowledge an entire order, including all of its order lines. The response to a successful call contains the acknowledged order.
*/
const x13 = call<{
	body: {},
	query: {},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {
		/**
		 * purchaseOrderId
		 */
		'purchaseOrderId': string,
	},
}>('/v1/auth', POST);


/** Cancel Order Lines
 * You can cancel one or more order lines. You must include a purchaseOrderId when cancelling an order line. The response to a successful call contains the order with the cancelled line item
*/
const x14 = call<{
	body: {
		/**
		 * body
		 */
		'body': undefined,
	},
	query: {},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {
		/**
		 * purchaseOrderId
		 */
		'purchaseOrderId': string,
	},
}>('/v1/auth', POST);


/** Refund Order Lines
 * Refunds one or more order lines that have been shipped. The response to a successful call contains the order with the refunded line item
*/
const x15 = call<{
	body: {
		/**
		 * body
		 */
		'body': undefined,
	},
	query: {},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {
		/**
		 * purchaseOrderId
		 */
		'purchaseOrderId': string,
	},
}>('/v1/auth', POST);


/** Shipping Updates
 * Updates the status of order lines to Shipped and trigger the charge to the customer. The response to a successful call contains the order with the shipped line item.
*/
const x16 = call<{
	body: {
		/**
		 * body
		 */
		'body': undefined,
	},
	query: {},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {
		/**
		 * purchaseOrderId
		 */
		'purchaseOrderId': string,
	},
}>('/v1/auth', POST);


/** Updates the promotional price
 * Sellers can update or delete an existing promotion price as well as set up a new promotional price.
*/
const x17 = call<{
	body: {
		/**
		 * requestBody
		 */
		'requestBody': undefined,
	},
	query: {
		/**
		 * The promotional price. Set to 'true' in order to retrieve promotional prices
		 */
		'promo': string,
	},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {},
}>('/v1/auth', PUT);


/** Get list of promotional prices for a SKU
 *  Retrieves a list of promotional prices for a single SKU.
*/
const x18 = call<{
	body: {},
	query: {},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {
		/**
		 * sku
		 */
		'sku': string,
	},
}>('/v1/auth', GET);


/** Get item report
 * Returns all the information associated with Seller's items that are set up on Walmart’s platform.
*/
const x19 = call<{
	body: {},
	query: {
		/**
		 * type can be item, buybox or cpa
		 */
		'type': string,
	},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {},
}>('/v1/auth', GET);


/** Get Returns
 * Retrieves the details of return orders for the specified filter criteria.
*/
const x20 = call<{
	body: {},
	query: {
		/**
		 * Used for pagination when more than 200 return orders are retrieved.
		 */
		'nextCursor'?: string,
		/**
		 * Return order identifier of the return order object as part of array. This is the same as RMA number..
		 */
		'returnOrderId'?: string,
		/**
		 * A unique ID associated with the sales order for specified customer
		 */
		'customerOrderId'?: string,
		/**
		 * Status may be specified to query the returns with specific status. .
		 */
		'status'?: string,
		/**
		 * Start Date for querying all return orders that were created after that date.
		 */
		'returnCreationStartDate'?: string,
		/**
		 * Limits the query to the return orders that were created before this returnCreationEndDate.
		 */
		'returnCreationEndDate'?: string,
		/**
		 * The number of orders to be returned.
		 */
		'limit'?: string,
	},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {},
}>('/v1/auth', GET);


/** Issue refund against a return order
 * This API allows sellers to issue refund against a return order. Shipping and restocking fees can be specified as part of this API.
*/
const x21 = call<{
	body: {
		/**
		 * body
		 */
		'body': undefined,
	},
	query: {},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * Acces token generated from the GET Token API call
		 */
		'WM_SEC.ACCESS_TOKEN': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {
		/**
		 * returnOrderId
		 */
		'returnOrderId': string,
	},
}>('/v1/auth', POST);


/** Get access token by providing Client ID and Secret
 * Partners should retrieve Client Id/Client Secret from the API keys page. Solution Providers must contact Sellers to get corresponding Client ID/Secret. 
*/
const x22 = call<{
	body: {},
	query: {},
	header: {
		/**
		 * Basic Auth header BaseEncode64(clientId:clientSecret)
		 */
		'Authorization': string,
		/**
		 * The Service name
		 */
		'WM_SVC.NAME': string,
		/**
		 * A Transaction ID
		 */
		'WM_QOS.CORRELATION_ID': string,
	},
	path: {},
}>('/v1/auth', POST);

{
	"children": {
		"v3": {
			"children": {
				"feeds": {
					"children": {
						"{feedId}": {
							"children": {},
							"call": "x1"
						}
					},
					"call": "x0"
				},
				"inventory": {
					"children": {},
					"call": "x3"
				},
				"items": {
					"children": {
						"count": {
							"children": {},
							"call": "x5"
						},
						"{SKU}": {
							"children": {},
							"call": "x6"
						},
						"{sku}": {
							"children": {},
							"call": "x7"
						}
					},
					"call": "x4"
				},
				"search": {
					"children": {},
					"call": "x8"
				},
				"lagtime": {
					"children": {},
					"call": "x9"
				},
				"orders": {
					"children": {
						"released": {
							"children": {},
							"call": "x11"
						},
						"{purchaseOrderId}": {
							"children": {
								"acknowledge": {
									"children": {},
									"call": "x13"
								},
								"cancel": {
									"children": {},
									"call": "x14"
								},
								"refund": {
									"children": {},
									"call": "x15"
								},
								"shipping": {
									"children": {},
									"call": "x16"
								}
							},
							"call": "x12"
						}
					},
					"call": "x10"
				},
				"price": {
					"children": {},
					"call": "x17"
				},
				"promo": {
					"children": {
						"sku": {
							"children": {
								"{sku}": {
									"children": {},
									"call": "x18"
								}
							}
						}
					}
				},
				"getReport": {
					"children": {},
					"call": "x19"
				},
				"returns": {
					"children": {
						"{returnOrderId}": {
							"children": {
								"refund": {
									"children": {},
									"call": "x21"
								}
							}
						}
					},
					"call": "x20"
				},
				"token": {
					"children": {},
					"call": "x22"
				}
			}
		}
	}
}
