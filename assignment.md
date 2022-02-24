Tehtävä tulee tässä:

Coding assignment

    Using Node.js, implement a backend REST API which:
    1) Takes multiple integers as input, calculates the sum, and returns the sum including information whether the sum is a prime number or not.
    2) Takes one integer as input, and returns information whether the sum is a prime number or not.

    Using React implement also a frontend UI page to test the API. User should be able to enter 1-n integers that are sent to API endpoint 1, and single integer that is sent to API endpoint 2.

    Endpoint 1 could for example (but not necessarily) look like this:
    GET http://localhost/myapi/?action=sumandcheck&numbers=1,2,3
    -> {"result": 6, "isPrime": false}

    Endpoint 2 could for example (but not necessarily) look like this:
    GET http://localhost/myapi/?action=checkprime&number=89
    -> {"isPrime": true}

    Clear and compact code is appreciated.



Ja siitä vain tekemään! Muutama asia, jota on hyvä myös pitää mielessä: 

    Testausta arvostetaan
    README:ssä on hyvä olla ohjeet, miten ratkaisun saa pyörimään kenen tahansa koneella
    Jos päädyt tekemään jotain omasta mielestäsi siistiä/erikoista, tai koodiin jää jotain puutteita, jotka itse tiedostat, niistä on täysin ok ilmaista README:ssä, jotta arvioinnissa voidaan ottaa nämä asiat huomioon.