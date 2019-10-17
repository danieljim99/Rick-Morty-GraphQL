import {fetchData} from "./fetchdata";
import {GraphQLServer} from "graphql-yoga";

const url = "https://rickandmortyapi.com/api/character/";



const runApp = data => {
    const typeDefs = 
    `type Query {
        character(id: Int!): Character!
        characters(page: Int, pageSize: Int, name: String, status: String, planet: String): [Character!]!
        planets: [String!]!
    }

    type Character {
        id: Int!
        name: String!
        status: String!
        planet: String!
    }`

    const resolvers = {
        Query: {
            character(parent, args, cts, info){
                const result = data.find(obj => obj.id === args.id);
                return{
                    id: result.id,
                    name: result.name,
                    status: result.status,
                    planet: result.location.name
                }
            },
            characters(parent, args, cts, info){
                let result = [];
                let array = data.slice();
                let i
                let page = args.page || 1;
                let pageSize = args.pageSize || 20;

                if(args.name){
                    array = array.filter(obj => obj.name.includes(args.name));
                }
                
                if(args.status){
                    array = array.filter(obj => obj.status.includes(args.status));
                }
                
                if(args.planet){
                    array = array.filter(obj => obj.location.name.includes(args.planet));
                }
                
                for(i = (page-1)*pageSize; i < pageSize*page; i++){
                    if(i < array.length){
                        result.push({
                            id: array[i].id,
                            name: array[i].name,
                            status: array[i].status,
                            planet: array[i].location.name
                        });
                    }
                }
                return result;
            },
            planets(){
                let array = [];
                data.forEach((elem) => {
                    array.push(elem.location.name);
                })
                return([...new Set(array)]);
            }
        }
    }

    const server = new GraphQLServer({typeDefs, resolvers});
    server.start();
}
fetchData(runApp, url);