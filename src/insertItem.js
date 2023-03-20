"use strict"

const {v4} = require("uuid")

const Aws = require("aws-sdk")

const insertItem = async (event) => {

    const item = JSON.parse(event.body);
    const createdAt = new Date().toString();
    const id = v4()

    const dynamoDB = new Aws.DynamoDB.DocumentCliente();

    const newItem = {
        id,
        item,
        createdAt,
        itemStatus: false

    }

    await dynamoDB.put (
        {
            TableName: "ItemTableNew",
            item: newItem

        }
    )

    return {
        statusCode: 200,
        body: JSON.stringify(newItem)
    };

}

module.exports = {

    handler:insertItem
}