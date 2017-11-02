import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
	getUsers() {
		const AWS = require('aws-sdk');

		AWS.config.update({
			region: 'us-west-2',
			endpoint: 'http://localhost:8000'
		});

		const docClient = new AWS.DynamoDB.DocumentClient();

		const params = {
			TableName: 'Movies',
			KeyConditionExpression: '#yr = :yyyy',
			ExpressionAttributeNames: {
				'#yr': 'year'
			},
			ExpressionAttributeValues: {
				':yyyy': 1985
			}
		};

		docClient.query(params, function (err, data) {
			if (err) {
				console.error('Unable to query. Error:', JSON.stringify(err, null, 2));
			} else {
				console.log('Query succeeded.');
				data.Items.forEach(function (item) {
					return item;
				});
			}
		});
	}
}