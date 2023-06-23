namespace nosql;

using {
  cuid,
  managed
} from '@sap/cds/common';

entity Beers : cuid, managed {
  name    : String(100);
  abv     : Decimal(3, 1);
  ibu     : Integer;
  brewery : String(255)
}

entity Brewery : cuid, managed {
  name  : String(150);
  beers : String(255);
}

