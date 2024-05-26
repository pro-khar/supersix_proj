#!/bin/bash

# Arrays of sample first and last names
first_names=("John" "Jane" "Alice" "Bob" "Charlie" "Daisy" "Edward" "Fiona" "George" "Hannah" 
             "Isabella" "Jack" "Katherine" "Liam" "Mia" "Nathan" "Olivia" "Paul" "Quinn" "Rachel" 
             "Sam" "Tina" "Uma" "Victor" "Wendy" "Xander" "Yvonne" "Zach" "Abigail" "Ben" 
             "Catherine" "David" "Eleanor" "Frank" "Grace" "Henry" "Ivy" "James" "Kara" 
             "Leo" "Madeline" "Nora" "Oscar" "Penelope" "Quincy" "Ruby" "Steven" "Tara" 
             "Ulysses" "Violet" "Walter" "Xenia" "Yara" "Zane" "Aaron" "Bella" "Carter" 
             "Diana" "Evan" "Faith" "Gavin" "Hazel" "Ian" "Julia" "Kyle" "Lucy" "Mason" 
             "Nina" "Owen" "Piper" "Reed" "Sophie" "Trent" "Ursula" "Vince" "Willow" "Xavier" 
             "Zoe" "Amelia" "Elijah" "Sophia" "Michael" "Aiden" "Emily" "Daniel" "Madison" 
             "Matthew" "Emma" "Lucas" "Avery" "Logan" "Sofia" "Caleb" "Harper" "Isaac" "Ella" 
             "Mila" "Evelyn" "Aurora" "Aria" "Stella" "Zoe" "Lily" "Nova" "Layla" "Ellie" 
             "Lillian" "Nora" "Hazel" "Violet" "Aurora" "Savannah" "Audrey" "Bella" "Claire" 
             "Skylar" "Paisley" "Everly" "Anna" "Caroline" "Maya" "Genesis" "Emilia" "Kennedy" 
             "Ruby" "Serenity" "Autumn" "Ariana" "Everleigh" "Kaylee" "Violet" "Naomi" "Luna" 
             "Victoria" "Isla" "Samantha" "Sadie" "Skylar" "Leah" "Lydia" "Elliana" "Adeline" 
             "Brooklyn" "Addison" "Josephine" "Delilah" "Arya" "Raelynn" "Athena" "Juliana" 
             "Eliana" "Ivy" "Natalia" "Quinn" "Nevaeh" "Alice" "Liliana" "Alina" "Valentina" 
             "Kehlani" "Aliyah" "Gabriella" "Cora" "Bailey" "Andrea" "Emerson" "Valeria" 
             "Everly" "Rylee" "Aubrey" "Kayla" "Marley" "Amaya" "Brielle" "Reagan" "Josie" 
             "Jade" "Arianna" "Elena" "Aspen" "Alivia" "Teagan" "Sloane" "Presley" "Logan" 
             "Trinity" "Tessa" "Finley" "Kimberly" "Vivienne" "Faith" "Madilyn" "Ember" 
             "Sabrina" "Aspen" "Phoebe" "Ruth" "Remi" "Peyton" "Amari" "Emory" "Joy" "Hope" 
             "Zariyah" "Armani" "Keira" "Anastasia" "Aspyn" "Angelina" "Michelle" "Zara" 
             "Elise" "Blakely" "Winter" "Wren" "Charleigh" "Fiona" "Aspen" "Aleah" "Annalise")

last_names=("Smith" "Johnson" "Williams" "Jones" "Brown" "Davis" "Miller" "Wilson" "Moore" "Taylor" 
            "Anderson" "Thomas" "Jackson" "White" "Harris" "Martin" "Thompson" "Garcia" "Martinez" "Robinson" 
            "Clark" "Rodriguez" "Lewis" "Lee" "Walker" "Hall" "Allen" "Young" "King" "Wright" 
            "Scott" "Green" "Baker" "Adams" "Nelson" "Hill" "Ramirez" "Campbell" "Mitchell" "Roberts" 
            "Carter" "Phillips" "Evans" "Turner" "Torres" "Parker" "Collins" "Edwards" "Stewart" "Flores" 
            "Morris" "Nguyen" "Murphy" "Rivera" "Cook" "Rogers" "Morgan" "Peterson" "Cooper" "Reed" 
            "Bailey" "Bell" "Gomez" "Kelly" "Howard" "Ward" "Cox" "Diaz" "Richardson" "Wood" 
            "Watson" "Brooks" "Bennett" "Gray" "James" "Reyes" "Cruz" "Hughes" "Price" "Myers" 
            "Long" "Foster" "Sanders" "Ross" "Morales" "Powell" "Sullivan" "Russell" "Ortiz" "Jenkins" 
            "Gutierrez" "Perry" "Butler" "Barnes" "Fisher" "Henderson" "Coleman" "Simmons" "Patterson" "Jordan" 
            "Reynolds" "Hamilton" "Graham" "Kim" "Gonzalez" "Alexander" "Ramos" "Wallace" "Griffin" "West" 
            "Cole" "Hayes" "Chavez" "Gibson" "Bryant" "Ellis" "Stevens" "Murray" "Ford" "Marshall" 
            "Owens" "Mcdonald" "Harrison" "Ruiz" "Kennedy" "Wells" "Alvarez" "Woods" "Mendoza" "Castillo" 
            "Olson" "Webb" "Washington" "Tucker" "Freeman" "Burns" "Henry" "Vasquez" "Snyder" "Simpson" 
            "Crawford" "Jimenez" "Porter" "Mason" "Shaw" "Gordon" "Wagner" "Hunter" "Romero" "Hicks" 
            "Dixon" "Hunt" "Palmer" "Robertson" "Black" "Holmes" "Stone" "Meyer" "Boyd" "Mills" 
            "Warren" "Fox" "Rose" "Rice" "Moreno" "Schmidt" "Patel" "Ferguson" "Nichols" "Herrera" 
            "Medina" "Ryan" "Fernandez" "Weaver" "Daniels" "Stephens" "Gardner" "Payne" "Kelley" "Dunn" 
            "Pierce" "Arnold" "Tran" "Spencer" "Peters" "Hawkins" "Grant" "Hansen" "Castro" "Hoffman" 
            "Hart" "Elliott" "Cunningham" "Knight" "Bradley" "Carroll" "Hudson" "Duncan" "Armstrong" "Berry" 
            "Andrews" "Johnston" "Ray" "Lane" "Riley" "Carpenter" "Perkins" "Aguilar" "Silva" "Richards" 
            "Willis" "Matthews" "Chapman" "Lawrence" "Garza" "Vargas" "Watkins" "Wheeler" "Larson" "Carlson" 
            "Harper" "George" "Greene" "Burke" "Guzman" "Morrison" "Munoz" "Jacobs" "Obrien" "Lawson" 
            "Franklin" "Lynch" "Bishop" "Carr" "Salazar" "Austin" "Mendez" "Gilbert" "Jensen" "Williamson" 
            "Montgomery" "Harvey" "Oliver" "Howell" "Dean" "Hanson" "Weber" "Garrett" "Sims" "Burton" 
            "Fuller" "Soto" "Mccoy" "Welch" "Chen" "Schultz" "Walters" "Reid" "Fields" "Walsh" 
            "Little" "Fowler" "Bowman" "Davidson" "May" "Day" "Schneider" "Newman" "Brewer" "Lucas" 
            "Holland" "Wong" "Banks" "Santos" "Curtis" "Pearson" "Delgado" "Valdez" "Pena" "Rios" 
            "Douglas" "Sandoval" "Barrett" "Hopkins" "Keller" "Guerrero" "Stanley" "Bates" "Alvarado" "Beck" 
            "Ortega" "Wade" "Estrada" "Contreras" "Barnett" "Caldwell" "Santiago" "Lambert" "Powers" "Chambers" 
            "Nunez" "Craig" "Leonard" "Lowe" "Rhodes" "Byrd" "Gregory" "Shelton" "Frazier" "Becker" 
            "Maldonado" "Fleming" "Vega" "Sutton" "Cohen" "Jennings" "Parks" "Mcdaniel" "Watts" "Barker" 
            "Norris" "Vaughn" "Vazquez" "Holt" "Schwartz" "Steele" "Benson" "Neal" "Dominguez" "Horton" 
            "Terry" "Wolfe" "Hale" "Lyons" "Graves" "Haynes" "Miles" "Park" "Warner" "Padilla" 
            "Bush" "Thornton" "Mccarthy" "Mann" "Zimmerman" "Erickson" "Fletcher" "Mckinney" "Page" "Dawson" 
            "Joseph" "Marquez" "Reeves" "Klein" "Espinoza" "Baldwin" "Moran" "Love" "Robbins" "Higgins" 
            "Ball" "Cortez" "Le" "Griffith" "Bowen" "Sharp" "Cummings" "Ramsey" "Hardy" "Swanson" 
            "Barber" "Acosta" "Luna" "Chandler" "Blair" "Daniel" "Cross" "Simon" "Dennis" "Oconnor" 
            "Quinn" "Gross" "Navarro" "Moss" "Fitzgerald" "Doyle" "Mclaughlin" "Rojas" "Rodgers" "Stevenson" 
            "Singh" "Yang" "Figueroa" "Harmon" "Newton" "Paul" "Manning" "Garner" "Mcgee" "Reese" 
            "Francis" "Burgess" "Adkins" "Goodman" "Curry" "Brady" "Christensen" "Potter" "Walton" "Goodwin" 
            "Mullins" "Molina" "Webster" "Fischer" "Campos" "Avila" "Sherman" "Todd" "Chang" "Blake" 
            "Malone" "Wolf" "Hodges" "Juarez" "Gill" "Farmer" "Hines" "Gallagher" "Duran" "Hubbard" 
            "Cannon" "Miranda" "Wang" "Saunders" "Tate" "Mack" "Hammond" "Carrillo" "Townsend" "Wise" 
            "Ingram" "Barton" "Mejia" "Ayala" "Schroeder" "Hampton" "Rowe" "Parsons" "Frank" "Waters" 
            "Strickland" "Osborne" "Maxwell" "Chan" "Deleon" "Norman" "Harrington" "Casey" "Patton" "Logan" 
            "Bowers" "Mueller" "Glover" "Floyd" "Hartman" "Buchanan" "Cobb" "French" "Kramer" "Mccormick" 
            "Clarke" "Tyler" "Gibbs" "Moody" "Conner" "Sparks" "Mcguire" "Leon" "Bauer" "Norton" 
            "Pope" "Flynn" "Hogan" "Robles" "Salinas" "Yates" "Lindsey" "Lloyd" "Marsh" "Mcbride" 
            "Owen" "Solis" "Pham" "Lang" "Pratt" "Lara" "Brock" "Ballard" "Trujillo" "Shaffer" 
            "Drake" "Roman" "Aguirre" "Morton" "Stokes" "Lamb" "Pacheco" "Patrick" "Cochran" "Shepherd" 
            "Cain" "Burnett" "Hess" "Li" "Cervantes" "Olsen" "Briggs" "Ochoa" "Cabrera" "Velasquez" 
            "Montoya" "Roth" "Meyers" "Cardenas" "Fuentes" "Weiss" "Hoover" "Wilkins" "Nicholson" "Underwood" 
            "Short" "Carson" "Morrow" "Colon" "Holloway" "Summers" "Bryan" "Petersen" "Mckenzie" "Serrano" 
            "Wilcox" "Carey" "Clayton" "Poole" "Calderon" "Gallegos" "Greer" "Rivas" "Guerra" "Decker" 
            "Collier" "Wall" "Whitaker" "Bass" "Flowers" "Davenport" "Conley" "Houston" "Huff" "Copeland" 
            "Hood" "Monroe" "Massey" "Roberson" "Combs" "Franco" "Larsen" "Pittman" "Randall" "Skinner" 
            "Wilkinson" "Kirby" "Cameron" "Bridges" "Anthony" "Richard" "Kirk" "Bruce" "Singleton" "Mathis" 
            "Bradford" "Boone" "Abbott" "Charles" "Allison" "Sweeney" "Atkinson" "Horn" "Jefferson" "Rosales" 
            "York" "Christian" "Phelps" "Farrell" "Castaneda" "Nash" "Dickerson" "Bond" "Wyatt" "Foley" 
            "Chase" "Gates" "Vincent" "Mathews" "Hodge" "Garrison" "Trevino" "Villarreal" "Heath" "Dalton" 
            "Valencia" "Callahan" "Hensley" "Atkins" "Huffman" "Roy" "Boyer" "Shields" "Lin" "Hancock" 
            "Grimes" "Glenn" "Cline" "Delacruz" "Camacho" "Dillon" "Parrish" "Oneill" "Melton" "Booth" 
            "Kane" "Berg" "Harrell" "Pitts" "Savage" "Wiggins" "Brennan" "Salas" "Marks" "Russo" 
            "Sawyer" "Baxter" "Golden" "Hutchinson" "Liu" "Walter" "Mcdowell" "Wiley" "Rich" "Humphrey" 
            "Johns" "Koch" "Suarez" "Hobbs" "Beard" "Gilmore" "Ibarra" "Keith" "Macias" "Khan" 
            "Andrade" "Ware" "Stephenson" "Henson" "Wilkerson" "Dyer" "Mcclure" "Blackwell" "Mercado" "Tanner" 
            "Eaton" "Clay" "Barron" "Beasley" "Oneal" "Preston" "Small" "Wu" "Zamora" "Macdonald" 
            "Vance" "Snow" "Mcclain" "Stafford" "Orozco" "Barry" "English" "Shannon" "Kline" "Jacobson" 
            "Woodard" "Huang" "Kemp" "Mosley" "Prince" "Merritt" "Hurst" "Villanueva" "Roach" "Nolan" 
            "Lam" "Yoder" "Mccullough" "Lester" "Santana" "Valenzuela" "Winters" "Barrera" "Leach" "Orr" 
            "Berger" "Mckee" "Strong" "Conway" "Stein" "Whitehead" "Bullock" "Escobar" "Knox" "Meadows" 
            "Solomon" "Velez" "Odonnell" "Kerr" "Stout" "Blankenship" "Browning" "Kent" "Lozano" "Bartlett" 
            "Pruitt" "Buck" "Barr" "Gaines" "Durham" "Gentry" "Mcintyre" "Sloan" "Rocha" "Melendez" 
            "Herman" "Sexton" "Moon" "Hendricks" "Rangel" "Stark" "Lowery" "Hardin" "Hull" "Sellers" 
            "Ellison" "Calhoun" "Gillespie" "Mora" "Knapp" "Mccall" "Morse" "Dorsey" "Weeks" "Nielsen" 
            "Livingston" "Leblanc" "Mclean" "Bradshaw" "Glass" "Middleton" "Buckley" "Schaefer" "Frost" "Howe" 
            "House" "Mcintosh" "Ho" "Pennington" "Reilly" "Hebert" "Mcfarland" "Hickman" "Noble" "Spears" 
            "Conrad" "Arias" "Galvan" "Velazquez" "Huynh" "Frederick" "Randolph" "Cantu" "Fitzpatrick" "Mahoney" 
            "Peck" "Villa" "Michael" "Donovan" "Mcconnell" "Walls" "Boyle" "Mayer" "Zuniga" "Giles" 
            "Pineda" "Pace" "Hurley" "Mays" "Mcmillan" "Crosby" "Ayers" "Case" "Bentley" "Shepard" 
            "Everett" "Pugh" "David" "Mcmahon" "Dunlap" "Bender" "Hahn" "Harding" "Acevedo" "Raymond" 
            "Blackburn" "Duffy" "Landry" "Dougherty" "Bautista" "Shah" "Potts" "Arroyo" "Valentine" "Meza" 
            "Gould" "Vaughan" "Fry" "Rush" "Avery" "Herring" "Dodson" "Clements" "Sampson" "Tapia" 
            "Bean")


# Function to generate a random name
generate_name() {
    first_name=${first_names[$RANDOM % ${#first_names[@]}]}
    last_name=${last_names[$RANDOM % ${#last_names[@]}]}
    echo "$first_name $last_name"
}

# Function to generate masked phone numbers
mask_phone_number() {
    phone_number=$1
    masked_number="***-***-${phone_number: -4}"
    echo "$masked_number"
}

# Generate CSV file with user data
csv_file="user_data.csv"
echo "Email,Name,CreditScore,CreditLines,MaskedPhoneNumber" > "$csv_file"

# Use an array to hold all the data
declare -a data_array

for (( i=1; i<=200000; i++ )); do
    email="user${i}@example.com"
    name=$(generate_name)
    credit_score=$((500 + RANDOM % 351)) # Random credit score between 500 and 850
    credit_lines=$((1 + RANDOM % 5))     # Random credit lines between 1 and 5
    phone_number=$(printf "%09d" $((100000000 + RANDOM % 900000000))) # Random 9-digit phone number

    masked_phone=$(mask_phone_number "$phone_number")

    data_array+=("$email,$name,$credit_score,$credit_lines,$masked_phone")
done

# Join the array into a single string with newlines
data=$(printf "%s\n" "${data_array[@]}")

# Write all data to the CSV file at once
echo "$data" >> "$csv_file"

echo "CSV file generated successfully."