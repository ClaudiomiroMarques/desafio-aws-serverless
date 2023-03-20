"use strict"

const AWS  = require("aws-sdk");

const updateItem = async(event) => {

    const {itemStatus} = JSON.parse(event.body);
    const {id} = event.pathParameters

    const dynamoDB = new AWS.DynamoDB.DocumenteClient();

    await dynamoDB.upadate({

        TableName: "ItemTableNew",
        key: {id},
        UpadateExpression: 'set itemStatus  = :itemStatus',
        ExpressionAttributeValues: {

            ':itemStatus': itemStatus
        },

        ReturnValues: "ALL_NEW"
    }).promise()

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                msg: 'Item update'
            }
        ),
    };

}

module.exports = {
    handler:updateItem,
};

