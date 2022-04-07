# Test 1

## Cerinte

1. Listeaza toate produsele returnate de acest API - http://private-32dcc-products72.apiary-mock.com/product, ordonate dupa pret, descrescator.  
    - Fiecare produs trebuie sa aiba un buton de `Add to cart`  
    - `USD` este currency-ul default  

2. Produsul adaugat in cart este sters din lista de la punctul 1 si are urmatoarele elemente:
    - Cantitate editabila
    - Descriere in pop-up, asa cum este afisat in [mockup](mockups/test-interview-3.jpg)
    - Pretul este cel total per produs (pretul returnat de `API * cantitate`)
    - Buton de remove sterge produsul din cart si il re-adauga in lista
        - Atunci cand un produs este re-adaugat in lista, ordonarea de la punctul 1 trebuie sa se pastreze
3. Daca utilizatorul schimba currency-ul, preturile trebuie sa fie convertite in currency-ul selectat
    - Poti folosi pentru asta
        - o librarie pentru currency conversion (https://github.com/openexchangerates/money.js/) sau
        - un api:
            - URL: http://data.fixer.io/api/latest?access_key=bb540433bf623720dfb8ba40dd366e0b
            - Documentatie: https://fixer.io/documentation
    - Pagina trebuie sa contina si un selector de currency (nu este vizibil in mockup). Poti sa il adaugi oriunde crezi ca e ok in pagina
        - Poti limita acest select la 3-4 currency-uri, le poti alege pe cele mai des folosite(`USD`, `EUR`, `GBP`)
4. Currency-ul poate fi schimbat si cu ajutorul unui parametru URL, care, atunci cand este prezent, seteaza currency-ul aferent in pagina si afiseaza preturile corecte.
 
Stack-ul folosit este la alegerea ta. Poti folosi orice librarie / framework de CSS si JS.
