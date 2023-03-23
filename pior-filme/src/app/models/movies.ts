
export interface MoviesModel {
  content: [movies];
  pageable: pageable;
  totalElements: number;
  last: boolean;
  totalPages: number;
  first: boolean;
  sort: sort;
  number: number,
  numberOfElements: number,
  size: number,

}

export interface movies {
  id: number;
  year: number;
  title: string;
  studios: [any];
  producers: [any];
  winner: boolean;


}

export interface pageable {
  sort: {
    sorted: boolean;
    unsorted: boolean;
  }
  pagesize: number;
  pagenumber: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface sort {
  sort: boolean;
  unsorted: boolean;
}



/* {
content:[
{
id:999,
year:1900,
tle:"Movie Title",
studios:["Studio Name"],
producers:["Producer Name"],
winner:true
},
{
id:999,
year:1900,
tle:"Movie Title",
studios:["Studio Name","Studio Name"],
producers:["Producer Name"],
winner:false
}
],
pageable:
{
sort:
{
sorted:false,
unsorted:true
},
pageSize:00,
pageNumber:0,
offset:0,
paged:true,
unpaged:false
},
totalElements:999,
last:false,
totalPages:99,
first:true,
sort:
{
sorted:false,
unsorted:true
},
number:0,
numberOfElements:99,
size:99
} */
