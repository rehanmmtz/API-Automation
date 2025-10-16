# API-Automation 
# API Automation testing dengan website dummy ( https://reqres.in/ )

**Instalasi**
1. langsung download file *API Automation.zip*
2. Extract folder tersebut
3. open folder yang sudah di extract pada code editor
4. jika ingin menjalankan spesifik test pada file gunakan code: ```npx mocha testing/getUser.js```
5. jalankan seluruh file dengan code: ```npm run testing```
6. kemudian untuk membuka report gunakan code: ```start mochawesome-report/mochawesome.html```

**CATATAN**
- pastikan mocha sudah terinstall, jika belum silahkan install pada terminal ketik= ```npm install mocha --save-dev```
- pastikan chai sudah terinstall, jika belum silahkan install pada terminal ketik= ```npm install chai --save-dev```
- pastikan mochawesome sudah terinstall, jika belum silahkan install pada terminal ketik= ```npm install mochawesome --save-dev```
- dan tambahkan Konfigurasi Script di package.json = ```"scripts": {
                                                       "test": "mocha tests --reporter mochawesome"
                                                      }```
