import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
	private dynamodb;
	private docClient;
	private params = {
		TableName: 'contestants'
	};
	public init() {
		// const AWS = require('aws-sdk');
		AWS.config.update({
			region: 'us-west-2',
			// endpoint: 'http://localhost:8000'
		});
		const docClient = new AWS.DynamoDB.DocumentClient();
		const table = 'Movies';

		const year = 2015;
		const title = 'The Big New Movie';

		const params = {
			TableName: table,
			Item: {
				'year': year,
				'title': title,
				'info': {
					'plot': 'Nothing happens at all.',
					'rating': 0
				}
			}
		};


	}
}
