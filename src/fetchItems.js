"use strict"

const AWS  = require("aws-sdk");

const fetchItems = async(event) => {

    const dynamodb = new Aws.DynamoDB.DocumentClie();

    let items;

    try{
        
        const results = await dynamoDB.scan({
            TableName: "ItemTableNew"
        }).promise();

        items = results.items

    } catch (error) {

        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(items),
    };

}

moule.exports = {
    handler: fetchItems,
};