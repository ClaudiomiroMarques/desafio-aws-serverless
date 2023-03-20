"use strict"

const AWS  = require("aws-sdk");

const fetchItem = async(event) => {

    const dynamodb = new Aws.DynamoDB.DocumentClie();
    const {id} = event.pathParameters

    let item;

    try{
        const result = await dynamodb.get({
            TableName: "ItemTableNew",
            key: {id}

        }).promise();

        item = result.item;

    }catch (error) {
        console.log(error)      
    }

    return {
        statusCode: 200,
        body: JSON.stringify(item)
    };

}

module.exports = {
    handler: fetchItem,
};

