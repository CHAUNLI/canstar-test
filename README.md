# canstar-test
Built a web-page in Angular that has all of these elements (Table, Widget,
data population, cool CSS element)

Table: this project can read data from local json file(src/assets/tables-data) and display 
Widget: widgets included
Router: router bewtween AppComponent, DataCompanyComponent and InsuranceCompanyComponent
Data population: 1.Read data from json file(src/assets/tables-data) 
                 2.Write data to json file(CanstarTest/company-info.json)
                   test writing data must firstly run "json-server --watch company-info.json" in terminal, 
                   and the json file will be hosted in localhost:3000/info
Css element: w3c, material angular.


Problem Found: Angular 4 seems could not write data in local json file if that file not be hosted

