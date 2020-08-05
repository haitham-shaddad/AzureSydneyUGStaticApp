import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
   

    const data = [
        {
          plot:
            'A group of bandits stage a brazen train hold-up, only to find a determined posse hot on their heels.',
          genres: ['Short', 'Western'],
          runtime: 11,
          cast: [
            'A.C. Abadie',
            'Gilbert M. \'Broncho Billy\' Anderson',
            'George Barnes',
            'Justus D. Barnes',
          ],
          poster:
            // tslint:disable-next-line:max-line-length
            'https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg',
          title: 'The Great Train Robbery',
          fullplot:
            // tslint:disable-next-line:max-line-length
            'Among the earliest existing films in American cinema - notable as the first film that presented a narrative story to tell - it depicts a group of cowboy outlaws who hold up a train and rob the passengers. They are then pursued by a Sheriff\'s posse. Several scenes have color included - all hand tinted.',
          released: {
            $date: {
              $numberLong: '-2085523200000',
            },
          },
          directors: ['Edwin S. Porter'],
          rated: 'TV-G',
          year: 1903,
          imdb: {
            rating: 7.4,
            votes: 9847,
            id: 439,
          },
          countries: ['USA'],
          type: 'movie',
        },
        {
          plot:
            // tslint:disable-next-line:max-line-length
            'A young boy, opressed by his mother, goes on an outing in the country with a social welfare group where he dares to dream of a land where the cares of his ordinary life fade.',
          genres: ['Short', 'Drama', 'Fantasy'],
          runtime: 14,
          rated: 'UNRATED',
          cast: [
            'Martin Fuller',
            'Mrs. William Bechtel',
            'Walter Edwin',
            'Ethel Jewett',
          ],
          num_mflix_comments: 2,
          poster:
            'https://m.media-amazon.com/images/M/MV5BMTMzMDcxMjgyNl5BMl5BanBnXkFtZTcwOTgxNjg4Mg@@._V1_SY1000_SX677_AL_.jpg',
          title: 'The Land Beyond the Sunset',
          fullplot:
            // tslint:disable-next-line:max-line-length
            'Thanks to the Fresh Air Fund, a slum child escapes his drunken mother for a day\'s outing in the country. Upon arriving, he and the other children are told a story about a mythical land of no pain. Rather then return to the slum at day\'s end, the lad seeks to journey to that beautiful land beyond the sunset.',
          directors: ['Harold M. Shaw'],
          awards: {
            wins: 1,
            nominations: 0,
            text: '1 win.',
          },
          lastupdated: '2015-08-29 00:27:45.437000000',
          year: 1912,
          imdb: {
            rating: 7.1,
            votes: 448,
            id: 488,
          },
          countries: ['USA'],
          type: 'movie',
        },
      ];

    
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: data
        };
    
     
};

export default httpTrigger;
