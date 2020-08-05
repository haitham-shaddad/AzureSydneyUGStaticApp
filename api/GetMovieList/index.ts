import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const CosmosClient = require('@azure/cosmos').CosmosClient;

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
   
    let cosmosClient = new CosmosClient(process.env['CosmosConnectionString']);
    let database = cosmosClient.database('movies');
    let container = database.container('movies');
    let count = process.env['MoviesCount'] ?? 50;
    let {resources} = (await container.items.query(`SELECT top ${count} * FROM c where c.poster <> null order by c.year desc ,c.imdb.rating desc`).fetchAll());
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: resources
    };
    
     
};

export default httpTrigger;
