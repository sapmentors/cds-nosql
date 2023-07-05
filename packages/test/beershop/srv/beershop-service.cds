using {nosql} from '../db/schema';

service BeershopService {

  entity Beers     as projection on nosql.Beers;
  entity Breweries as projection on nosql.Brewery;
}

extend service BeershopService with {
  action reset();
  action createBeer();
}
