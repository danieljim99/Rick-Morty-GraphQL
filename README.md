# Rick-Morty-GraphQL

## Install
 `npm install`

 ## Run
 `npm start`

 ### Examples

 **Search a character by its id**
 
 `query{
    character(id:<Int>){
      <attribute1>
      <attribute2>
      ...
    }
  }`

 **List all existing characters**
 
 `query{
    characters(){
      <attribute1>
      <attribute2>
      ...
    }
  }`
 
 **List all existing characters by name**
 
   `query{
    characters(name:<String>){
      <attribute1>
      <attribute2>
      ...
    }
  }`
 
 **List all existing characters by name and status**
 
  `query{
    characters(name:<String>, status:<String>){
      <attribute1>
      <attribute2>
      ...
    }
  }`
  
 **Configure the page number and the page size using characters**
 
  `query{
      characters(page:<Int>, pageSize:<Int>...){
        <atributte1>
        <atributte2>
        ...
      }
    }`
 
 **Show all existing planets**
 
 `query{
    planets
  }`
