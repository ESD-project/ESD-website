const Express = require("express");
// const ExpressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const expressGraphQL = require('express-graphql').graphqlHTTP;
const {
	GraphQLID,
	GraphQLString,
	GraphQLList,
	GraphQLType,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLObjectType
} = require("graphql");
var app = Express();
var cors = require("cors");

app.use(cors());

mongoose
	.connect("mongodb+srv://gela1:gela@cluster0.9tfyjhl.mongodb.net/?retryWrites=true&w=majority")
	.then(() => console.log("Connected to database..."))
	.catch(err => console.error(err));

    const CarModel = mongoose.model("car", {
        Name: String,
        Brand: String
    });
    
    const CarType = new GraphQLObjectType({
        name: "Car",
        fields: {
            id: { type: GraphQLID },
            Name: { type: GraphQLString },
            Brand: { type: GraphQLString }
        }
    });
    
    const schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: "Query",
            fields: {
                // Query 1
    
                // name of the query, people
                cars: {
                     // the type of response this query will return, here PersonType
                    type: GraphQLList(CarType),
                    // resolver is required
                    resolve: (root, args, context, info) => {
                        // we are returning all persons available in the table in mongodb
                        return CarModel.find().exec();
                    }
                },
                // Query 2
                carsByID: {
                    // name of the query is people by id
                    type: CarType,
                    args: {
                        // strong validation for graphqlid, which is mendatory for running this query
                        id: { type: GraphQLNonNull(GraphQLID) }
                    },
                    resolve: (root, args, context, info) => {
                        return CarModel.findById(args.id).exec();
                    }
                },
                // Query 3
                carsByName: {
                    type: GraphQLList(CarType),
                    args: { 
                        Name: { type: GraphQLString } 
                    },
                    resolve: (root, args, context, info) => {
                        return CarModel.find({'Name':args.Name}).exec();
                    }
                }
            }
        }),
    

    mutation: new GraphQLObjectType({
		name: "Create",
		fields: {
			cars: {
				type: CarType,
				args: {
					Name: { type: GraphQLString },
					Brand: { type: GraphQLString }
				},
				resolve: (root, args, context, info) => {
					var cars = new CarModel(args);
					return cars.save();
				}
			}
		}
	})
 });
    app.use("/car",	expressGraphQL({schema, graphiql: true}));

app.listen(3001, () => {
	console.log("server running at 3001");
});