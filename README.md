# Covid19-Geospatial-Data-Mapping
Curated by Caden Henson

This Lab Assignment had us create two different maps in order to visualize Covid-19 cases counts and rates within the United States. One map was a proportional symbols map which plotted out the count of cases and the other was a choropleth map that plotted out the rate of Covid-19 per county. 

The COVID-19 case/death data that was used was gathered from The New York Times. The data includes all the cases in 2020. The population data used for calculating the case rates are from the 2018 ACS 5 year estimates. Both data are at the county level. The U.S. county boundary shapefile was downloaded from the U.S. Census Bureau. The case rate is calculated as cases per thousand residents. 

Both linked maps are interactive which allows for user exploration. For the Choropleth map, you can hover over a county to see the name of the county and when you click on it with your cursor, data for the county pops up. It shows the rate of Covid-19 cases per thousand people within the county. The other map with proportional symbols showcases Covid-19 case counts throughout the US, and clicking on a point gives you information on the state and county name as well as the number of cases reported.

Geojson data was also preprocessed, meaning unncessary columns from each set of data have been removed leaving just the ones being measured and that are needed for mapping.

The first map: Choropleth Map for Covid Rates [Map 1 Link](https://cadenty.github.io/Covid-19-Case-Mapping/map1.html)


<img width="1439" alt="Screenshot 2024-02-04 at 2 02 11 PM" src="https://github.com/CadenTY/Covid-19-Case-Mapping/assets/97286724/2b324090-c337-42ec-8cc5-b51bd17ab133">

The Second map: Proportional Symbol Map for Covid Counts [Map 2 Link](https://cadenty.github.io/Covid-19-Case-Mapping/map2.html)
<img width="1353" alt="Screenshot 2024-02-04 at 2 01 23 PM" src="https://github.com/CadenTY/Covid-19-Case-Mapping/assets/97286724/c184a594-d643-4cf8-9a64-181eef623b58">

# Acknowledgement 
The information/data used for this lab was shared and processed to us by Steven Bao. Lab instructions were provided by Professor Bo Zhao. TA Liz Peng provided assistance during the labs completion, answering questions and helping with problem solving and troubleshooting. 


