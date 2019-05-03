import React, { Component } from 'react';
//import soap from 'soap';

var soap = require('soap');

var apiWSDL = 'http://brickset.com/api/v2.asmx?WSDL';



export default class Brickset extends Component {

    constructor(props) {
        super(props);
		
		this.getRandomSet = this.getRandomSet.bind(this);
		this.getRandomInt = this.getRandomInt.bind(this);
		this.setKey = this.setKey.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onChangeResponse = this.onChangeResponse.bind(this);
		this.state = {
			key: 1,
			minYear:1955,
			response:'None yet'
        }
	}

	getRandomInt (min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	setKey(k) {
        this.setState({
            key: k
        });
	}
	getRandomSet(){

	//first, determine the year
//	var year = this.getRandomInt(this.state.minYear, (new Date()).getFullYear());
	//console.log('chosen year', year);
		console.log('made it');
		
	soap.createClient(apiWSDL, function(err, client) {
		console.log('done soap');
	});

	let promise = new Promise(function(resolve, reject) {

		
		setTimeout(() => resolve("done"), 1000);
  // executor (the producing code, "singer")
	});	
	return promise;
		/*
	var p = new Promise(function(resolve, reject) {
		
		soap.createClient(apiWSDL, function(err, client) {
			if(err) throw new Error(err);

			var args = {
				apiKey:this.state.key,
				userHash:'',
				query:'',
				theme:'',
				subtheme:'',
				setNumber:'',
				year:year,
				owned:'',
				wanted:'',
				orderBy:'',
				pageSize:'2000',
				pageNumber:'1',
				userName:''
			}

			client.getSets(args, function(err, result) {
				if(err) reject(err);
				if(!result) {
					return this.getRandomSet();
				}

				var sets = result.getSetsResult.sets;
				console.log('i found '+sets.length+' results');
				if(sets.length) {
					var chosen = this.getRandomInt(0, sets.length-1);
					var set = sets[chosen];
					// now that we have a set, try to get more images
					if(set.additionalImageCount > 0) {
						client.getAdditionalImages({apiKey:this.state.key, setID:set.setID}, function(err, result) {
							if(err) reject(err);
							console.log('i got more images', result);
							set.additionalImages = result;
							resolve(set);
						});
					} else {
						resolve(set);
					}
				}
			});
		});
		
		
	});

	return p;
*/
}

    onChangeResponse(e) {
        this.setState({
            response: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
		var promise =	this.getRandomSet();
		
		promise.then(
		  res => this.setState({response:res}),
//		  script => console.log('done'),
		  error => console.log('Error')
		);
        console.log("Test");
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Todo</h3>
			
                <form onSubmit={this.onSubmit}>
   
                   <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.response}
								onChange={this.onChangeResponse}
                                />
                    </div>
					<br />

                    <div className="form-group">
                        <input type="submit" value="Call Brickset" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
